# Gerador-de-senhas

O **Gerador de Senhas** é um projeto com uma API backend em Python (Flask) para criar senhas personalizáveis e um frontend em React (Vite) que consome essa API. A API gera senhas seguras com base em 5 parâmetros: comprimento, maiúsculas, minúsculas, números e caracteres especiais. O frontend oferece uma interface simples para ajustar esses parâmetros e visualizar as senhas geradas.

## Tecnologias Utilizadas

- **Backend**: Desenvolvido com Python e Flask para criar uma API simples e eficiente.
- **Frontend**: Construído com React e Vite, garantindo uma experiência de usuário moderna e responsiva.
  
## Pre-Requisitos
- Python 3.0.9 + : python.org 
- Node.js v23.5.0 + :nodejs.org

## Passos para Executar o Projeto

1. **Clonar o repositório:**:

   ```bash
   git clone https://github.com/Vitor-Gabriel-KR/Gerador-de-senhas.git

2. **Navegue até a pasta do backend:**:

   ```bash
   cd Gerador-de-senhas/src/backend

3. **Instalar as dependências:**:

   ```bash
   pip install -r requirements.txt

4. **Inicie o servidor da API:**:

   ```bash
   python app.py

A API estará rodando em http://localhost:5000. Você pode testar os endpoints diretamente usando ferramentas como o Postman ou Insomnia.

1. **Navegue até a pasta do frontend:**:

   ```bash
   cd ../frontend

2. **Instale as dependências necessárias:**:

   ```bash
   npm install

3. **Inicie o servidor de desenvolvimento do frontend:**:

   ```bash
   npm run dev

O frontend estará disponível em http://localhost:5173 (ou outra porta, caso a 5173 já esteja em uso).

## Utilizar o Gerador de Senhas
- Acesse o frontend no navegador (http://localhost:5173).
- Ajuste os parâmetros desejados (comprimento da senha, uso de maiúsculas, minúsculas, números e caracteres especiais).
- Clique em "Gerar Senha" para criar uma nova senha com base nas configurações selecionadas.
- Use o botão "Copiar" para copiar a senha gerada para a área de transferência.

## Funcionalidades
- Geração de Senhas Personalizáveis: Crie senhas com base em 5 parâmetros configuráveis.
