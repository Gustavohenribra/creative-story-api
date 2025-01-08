import OpenAI from "openai";

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

interface ScenarioParams {
    type: string;
    elements: string[];
    time: string;
    emotion: string;
}

class ScenarioGeneratorService {
    static async generateScenario(params: ScenarioParams) {
        const { type, elements, time, emotion } = params;
        const prompt = `Você é um escritor criativo especializado em criar cenários vívidos. 
Descreva o seguinte cenário:
- Tipo: ${type}
- Elementos: ${elements.join(", ")}
- Período do dia: ${time}
- Emoção a ser transmitida: ${emotion}

A descrição deve ser rica em detalhes e criar uma atmosfera imersiva.`;

        const response = await openai.chat.completions.create({
            model: "gpt-3.5-turbo-0125",
            messages: [{ role: "user", content: prompt }],
        });

        return response.choices[0]?.message?.content?.trim();
    }
}

export default ScenarioGeneratorService;
