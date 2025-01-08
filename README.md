
# API Criativa de Histórias

A **API Criativa de Histórias** é uma API RESTful que gera conteúdos criativos, como histórias, personagens, diálogos e reviravoltas na trama, utilizando o modelo GPT da OpenAI. A API foi projetada para desenvolvedores que desejam integrar capacidades de escrita criativa em suas aplicações.

## Funcionalidades
- Gerar histórias detalhadas e estruturadas.
- Criar personagens únicos e descritivos.
- Elaborar diálogos envolventes entre personagens.
- Adicionar reviravoltas inesperadas para enriquecer histórias.
- Criar cenários ricos e imersivos.

---

## Começando

### Pré-requisitos
- Node.js (v14 ou superior)
- Uma chave de API da OpenAI

### Instalação
1. Clone o repositório:
   ```bash
   git clone https://github.com/seuusuario/creative-story-api.git
   cd creative-story-api
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Configure seu arquivo `.env` com sua chave de API da OpenAI:
   ```env
   OPENAI_API_KEY=sua_chave_de_api_da_openai
   ```
4. Inicie o servidor:
   ```bash
   npm run dev
   ```

---

## Endpoints da API

### 1. **Gerar História**
- **Endpoint**: `/api/generate-story`
- **Método**: `POST`
- **Corpo da Requisição**:
  ```json
  {
    "genre": "Fantasia",
    "theme": "Amizade",
    "setting": "Floresta Mágica",
    "length": "Curta"
  }
  ```
- **Resposta**:
  ```json
  {
    "success": true,
    "data": "Era uma vez, em uma floresta mágica..."
  }
  ```

---

### 2. **Gerar Personagem**
- **Endpoint**: `/api/generate-character`
- **Método**: `POST`
- **Corpo da Requisição**:
  ```json
  {
    "name": "Eldon",
    "role": "Herói",
    "traits": ["Corajoso", "Curioso", "Determinado"]
  }
  ```
- **Resposta**:
  ```json
  {
    "success": true,
    "data": "Eldon, o herói corajoso, tinha uma natureza curiosa..."
  }
  ```

---

### 3. **Gerar Diálogo**
- **Endpoint**: `/api/generate-dialogue`
- **Método**: `POST`
- **Corpo da Requisição**:
  ```json
  {
    "characters": ["Alice", "Bob"],
    "context": "Discutindo a próxima aventura"
  }
  ```
- **Resposta**:
  ```json
  {
    "success": true,
    "data": "[Alice]: O que faremos a seguir? [Bob]: Vamos explorar a caverna ali perto."
  }
  ```

---

### 4. **Gerar Reviravolta na Trama**
- **Endpoint**: `/api/generate-plot-twist`
- **Método**: `POST`
- **Corpo da Requisição**:
  ```json
  {
    "storySummary": "Um grupo de amigos explorando uma floresta mágica."
  }
  ```
- **Resposta**:
  ```json
  {
    "success": true,
    "data": "O grupo descobre que um deles é, na verdade, uma criatura mágica."
  }
  ```

---

### 5. **Gerar Cenário**
- **Endpoint**: `/api/generate-scenario`
- **Método**: `POST`
- **Corpo da Requisição**:
  ```json
  {
    "type": "Floresta Mágica",
    "elements": ["Árvores brilhantes", "Riacho", "Flores luminosas"],
    "time": "Noite",
    "emotion": "Encantador"
  }
  ```
- **Resposta**:
  ```json
  {
    "success": true,
    "data": "Uma floresta mágica se estende diante de você. Árvores brilhantes emanam uma luz suave, iluminando um riacho que reflete as estrelas. Flores luminosas decoram o chão, criando uma atmosfera encantadora e misteriosa sob a luz da lua."
  }
  ```

---

## Testando a API
Você pode usar ferramentas como **Postman** ou **Insomnia** para testar a API. Certifique-se de que o servidor está rodando localmente em `http://localhost:3000`.

---