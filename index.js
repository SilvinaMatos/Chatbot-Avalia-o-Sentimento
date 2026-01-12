const qrcode = require("qrcode-terminal");
const { Client, LocalAuth } = require("whatsapp-web.js");

const client = new Client({
  authStrategy: new LocalAuth(),
  puppeteer: {
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"]
  }
});

client.on("qr", (qr) => {
  console.log("📲 Escaneie o QR Code:");
  qrcode.generate(qr, { small: true });
});

client.on("ready", () => {
  console.log("✅ WhatsApp conectado com sucesso!");
});

client.on("message", async (msg) => {
  if (msg.from.endsWith("@g.us")) return;

  const texto = msg.body.toLowerCase();

  if (texto === "oi") {
    await msg.reply("Olá! 👋 Seja bem-vindo(a) 😊");
  }
});

client.initialize();
