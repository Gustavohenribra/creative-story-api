import OpenAI from "openai";

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

interface StoryParams {
    genre: string;
    theme: string;
    setting: string;
    length: string;
}

interface CharacterParams {
    name: string;
    role: string;
    traits: string[];
}

interface DialogueParams {
    characters: string[];
    context: string;
}

class StoryGeneratorService {
    static async generateStory(params: StoryParams) {
        const { genre, theme, setting, length } = params;
        const prompt = `Você é um autor criativo especializado em escrever histórias no gênero ${genre}.
        Detalhes da história:
        - Gênero: ${genre}
        - Tema central: ${theme}
        - Cenário: ${setting}
        - Comprimento desejado: ${length}

        Por favor, crie uma história bem estruturada com:
        1. Uma introdução que define o cenário e os personagens principais.
        2. Um conflito interessante relacionado ao tema.
        3. Um clímax envolvente.
        4. Uma conclusão satisfatória.

        Certifique-se de incluir descrições ricas e personagens cativantes. Comece agora:`;

        const response = await openai.chat.completions.create({
            model: "gpt-3.5-turbo-0125",
            messages: [{ role: "user", content: prompt }],
        });

        return response.choices[0]?.message?.content?.trim();
    }

    static async generateCharacter(params: CharacterParams) {
        const { name, role, traits } = params;
        const prompt = `Você é um criador de personagens fictícios. Com base nas informações abaixo, crie uma descrição rica e detalhada do personagem:
        - Nome: ${name}
        - Papel na história: ${role}
        - Traços de personalidade: ${traits.join(", ")}

        Inclua na descrição:
        1. Aparência física.
        2. Personalidade detalhada com exemplos de comportamento.
        3. Motivação e objetivos principais.
        4. Um detalhe único ou peculiar que os torna memoráveis.

        Elabore para que o personagem seja cativante e convincente.`;

        const response = await openai.chat.completions.create({
            model: "gpt-3.5-turbo-0125",
            messages: [{ role: "user", content: prompt }],
        });

        return response.choices[0]?.message?.content?.trim();
    }

    static async generateDialogue(params: DialogueParams) {
        const { characters, context } = params;
        const prompt = `Você é um roteirista de diálogos. Crie um diálogo natural e envolvente entre os seguintes personagens:
        - Personagens: ${characters.join(", ")}
        - Contexto: ${context}

        Certifique-se de:
        1. Refletir as personalidades únicas dos personagens no diálogo.
        2. Conectar o diálogo com o contexto fornecido.
        3. Tornar o diálogo dinâmico, com emoção e propósito narrativo.

        Exemplo de diálogo:
        [Personagem 1]: ...
        [Personagem 2]: ...
        Continue a partir daqui.`;

        const response = await openai.chat.completions.create({
            model: "gpt-3.5-turbo-0125",
            messages: [{ role: "user", content: prompt }],
        });

        return response.choices[0]?.message?.content?.trim();
    }

    static async generatePlotTwist(storySummary: string) {
        const prompt = `Você é um especialista em criar reviravoltas inesperadas na trama de histórias.
        Resumo da história:
        ${storySummary}

        Por favor, crie uma reviravolta impactante que:
        1. Surpreenda o leitor sem parecer forçada.
        2. Altere significativamente o curso da história.
        3. Seja coerente com o resumo fornecido.

        Inclua detalhes sobre como a reviravolta afeta os personagens e o desenrolar da trama.`;

        const response = await openai.chat.completions.create({
            model: "gpt-3.5-turbo-0125",
            messages: [{ role: "user", content: prompt }],
        });

        return response.choices[0]?.message?.content?.trim();
    }
}

export default StoryGeneratorService;
