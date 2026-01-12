const qrcode = require("qrcode-terminal");
const { Client, LocalAuth } = require("whatsapp-web.js");

const client = new Client({
  authStrategy: new LocalAuth(),
  puppeteer: {
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  },
});

// QR CODE
client.on("qr", (qr) => {
  console.log("📲 Escaneie o QR Code abaixo:");
  qrcode.generate(qr, { small: true });
});

// CONECTADO
client.on("ready", () => {
  console.log("✅ WhatsApp conectado com sucesso!");
});

// INICIA
client.initialize();

// FUNÇÃO DELAY
const delay = (ms) => new Promise((res) => setTimeout(res, ms));

// CONTROLE DE ETAPAS DO USUÁRIO
const estados = {};

// CHAT
client.on("message", async (msg) => {
  if (msg.from.endsWith("@g.us")) return;

  const texto = msg.body.toLowerCase();
  const chat = await msg.getChat();

  if (!estados[msg.from]) estados[msg.from] = { etapa: 0, respostas: [] };

  const estado = estados[msg.from];

  // INÍCIO
  if (estado.etapa === 0) {
    await chat.sendStateTyping();
    await delay(1500);

    await client.sendMessage(
      msg.from,
      "Olá! 😊 Obrigado por comprar nosso produto de cabelo.\n\n" +
      "Gostaríamos de saber sua opinião. Posso te fazer algumas perguntas? É bem rápido"
    );

    estado.etapa = 1;
    return;
  }

  // ENTREGA
  if (estado.etapa === 1) {
    estado.respostas.push(texto);

    await delay(1500);
    await client.sendMessage(
      msg.from,
      "📦 Como foi sua experiência com a entrega do produto?\n\n1️⃣ Rápida\n2️⃣ Dentro do prazo\n3️⃣ Atrasada"
    );

    estado.etapa = 2;
    return;
  }

  // EMBALAGEM
  if (estado.etapa === 2) {
    estado.respostas.push(texto);

    await delay(1500);
    await client.sendMessage(
      msg.from,
      "🎁 O que achou da embalagem?\n\n1️⃣ Excelente\n2️⃣ Boa\n3️⃣ Ruim"
    );

    estado.etapa = 3;
    return;
  }

  // PRODUTO
  if (estado.etapa === 3) {
    estado.respostas.push(texto);

    await delay(1500);
    await client.sendMessage(
      msg.from,
      "💆‍♀️ Qual sua avaliação do produto?\n\n1️⃣ Excelente\n2️⃣ Bom\n3️⃣ Regular\n4️⃣ Ruim"
    );

    estado.etapa = 4;
    return;
  }

  // FINAL
  if (estado.etapa === 4) {
    estado.respostas.push(texto);

    await delay(1500);
    await client.sendMessage(
      msg.from,
      "✅ Obrigado pela sua avaliação!\n\n" +
      "Sua opinião é muito importante para nós!!💜"
    );

    console.log("📊 Avaliação recebida:", estados[msg.from]);
    delete estados[msg.from];
  }
});