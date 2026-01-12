const fs = require("fs");
const path = require("path");

// Caminho do arquivo JSON
const FILE_PATH = path.join(__dirname, "sentiment-data.json");

/**
 * Salva um registro de sentimento no arquivo JSON
 * @param {Object} record - Objeto contendo:
 *  usuario, etapa, mensagem, sentimento, comparativo, palavras, data
 */
function saveSentimentRecord(record) {
    let data = [];

    // Verifica se o arquivo já existe
    if (fs.existsSync(FILE_PATH)) {
        try {
            const fileContent = fs.readFileSync(FILE_PATH, "utf8");
            data = JSON.parse(fileContent);
        } catch (err) {
            console.error("❌ Erro ao ler o arquivo JSON:", err);
            data = [];
        }
    }

    // Adiciona o novo registro
    data.push(record);

    // Salva o JSON atualizado
    try {
        fs.writeFileSync(FILE_PATH, JSON.stringify(data, null, 2), "utf8");
        console.log("✅ Registro de sentimento salvo com sucesso!");
    } catch (err) {
        console.error("❌ Erro ao salvar o registro de sentimento:", err);
    }
}

module.exports = { saveSentimentRecord };
