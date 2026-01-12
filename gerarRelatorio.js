// gerarRelatorio.js
const fs = require("fs");

const data = JSON.parse(fs.readFileSync("./sentiment-data.json", "utf8"));

// Estatísticas
const total = data.length;
const media = data.reduce((acc, r) => acc + r.sentimento, 0) / total;

// Contagem por tipo
let pos = 0, neg = 0, neu = 0;
data.forEach(r => {
    if (r.sentimento > 0) pos++;
    else if (r.sentimento < 0) neg++;
    else neu++;
});

// Exportar CSV
let csv = "usuario,mensagem,sentimento,data\n";
data.forEach(r => {
    csv += `"${r.usuario}","${r.mensagem.replace(/"/g,'')}",${r.sentimento},${r.data}\n`;
});

fs.writeFileSync("relatorio.csv", csv);
console.log("Relatório CSV gerado: relatorio.csv");

console.log(`
===== RESUMO DO RELATÓRIO =====
Total de mensagens: ${total}
Média do sentimento: ${media.toFixed(2)}
Positivas: ${pos}
Neutras:   ${neu}
Negativas: ${neg}
===============================
`);

