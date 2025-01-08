import StoryGeneratorService from "../services/StoryGeneratorService";
import { Action } from "../interfaces/BaseController";

class StoryGeneratorController {
    generateStory: Action = async (req, res, next) => {
        try {
            const { genre, theme, setting, length } = req.body;
            if (!genre || !theme || !setting || !length) {
                res.status(400).json({
                    success: false,
                    message:
                        "Os campos 'genre', 'theme', 'setting' e 'length' são obrigatórios.",
                });
                return;
            }

            const story = await StoryGeneratorService.generateStory({
                genre,
                theme,
                setting,
                length,
            });
            res.status(200).json({ success: true, data: story });
        } catch (error: any) {
            next(error);
        }
    };

    generateCharacter: Action = async (req, res, next) => {
        try {
            const { name, role, traits } = req.body;
            if (!name || !role || !traits) {
                res.status(400).json({
                    success: false,
                    message:
                        "Os campos 'name', 'role' e 'traits' são obrigatórios.",
                });
                return;
            }

            const character = await StoryGeneratorService.generateCharacter({
                name,
                role,
                traits,
            });
            res.status(200).json({ success: true, data: character });
        } catch (error: any) {
            next(error);
        }
    };

    generateDialogue: Action = async (req, res, next) => {
        try {
            const { characters, context } = req.body;
            if (!characters || !context) {
                res.status(400).json({
                    success: false,
                    message:
                        "Os campos 'characters' e 'context' são obrigatórios.",
                });
                return;
            }

            const dialogue = await StoryGeneratorService.generateDialogue({
                characters,
                context,
            });
            res.status(200).json({ success: true, data: dialogue });
        } catch (error: any) {
            next(error);
        }
    };

    generatePlotTwist: Action = async (req, res, next) => {
        try {
            const { storySummary } = req.body;
            if (!storySummary) {
                res.status(400).json({
                    success: false,
                    message: "O campo 'storySummary' é obrigatório.",
                });
                return;
            }

            const plotTwist =
                await StoryGeneratorService.generatePlotTwist(storySummary);
            res.status(200).json({ success: true, data: plotTwist });
        } catch (error: any) {
            next(error);
        }
    };
}

export default new StoryGeneratorController();
