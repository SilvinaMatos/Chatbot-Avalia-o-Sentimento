Chatbot de Avaliação de Sentimentos (WhatsApp)




📘 Descrição do Projeto

Este projeto implementa o projeto proposto no Hackathon de Análise de Sentimentos link "https://github.com/Hackathon-ONE-II/SentimentAPI/tree/main" 

A proposta de criação do Chatbot com Inteligencia para WhatsApp é capaz de receber mensagens dos usuários e realizar análise de sentimento automaticamente.
O bot interpreta o conteúdo enviado, classifica como positivo, neutro ou negativo, e registra todas as avaliações em um arquivo JSON para futura análise.

Criado como parte do projeto SentimentAPI, este chatbot funciona como um complemento para automatizar a coleta de opiniões e facilitar processos de feedback.



🤖 Funcionalidades

Conexão direta com o WhatsApp via whatsapp-web.js

Simulação de digitação para experiência mais natural

Pipeline completo de sentimento (Positivo / Neutro / Negativo)

Registro automático de cada avaliação no arquivo
sentiment-data.json

Conversa contínua (mantém o fluxo e responde em tempo real)

Logging de interações do usuário

Chatbot totalmente modular e fácil de adaptar

🧠 Como Funciona a Análise de Sentimento

O bot utiliza um módulo chamado sentimentLogger, que:

Recebe a mensagem do usuário

Analisa o texto

Classifica o sentimento

Salva no arquivo JSON com data/hora

Exemplo de saída salva:

{
  "timestamp": "2026-01-08 23:10:12",
  "user": "5511999999999",
  "message": "Gostei muito do atendimento!",
  "sentiment": "positivo"
}

📂 Estrutura do Projeto
📁 chatbot-sentimento
 ├── chatbot.js
 ├── sentimentLogger.js
 ├── sentiment-data.json
 ├── package.json
 ├── .gitignore
 └── README.md

🚀 Como Rodar o Projeto
1️⃣ Instalar no computador os aplicativos:

Git:  https://git-scm.com/install/

Node: https://nodejs.org/en/download/

Visual Studio Code: https://code.visualstudio.com/download


Salvar os arquivos em uma pasta

Abrir no Visual Studio Code, no terminal  colocar o comando:

node chatbot.js

O terminal mostrará um QR Code.

Escaneie com seu WhatsApp em:

Configurações → Aparelhos Conectados → Conectar aparelho

Após isso, o bot estará ativo!


![1000528158](https://github.com/user-attachments/assets/47d78929-4265-4961-bcc9-7b1497fc3ca8)


![1000528159](https://github.com/user-attachments/assets/6aecc5e1-d1f3-4555-9d2c-a29399909839)








📄 Arquivo .gitignore

Exemplo recomendado:

node_modules/
.wwebjs_auth/
.wwebjs_cache/
.DS_Store


👉 Importante: node_modules NÃO deve ir para o GitHub.

🛠 Tecnologias Utilizadas

Node.js

whatsapp-web.js

JavaScript (ES6)

FS (file system) para salvar logs

JSON para armazenamento local

📊 Objetivo do Projeto

O chatbot foi desenvolvido para:

Automatizar a coleta de avaliações

Reduzir o esforço manual na leitura de feedbacks

Criar uma base de dados útil para análises posteriores

Complementar o projeto de classificação de sentimentos
