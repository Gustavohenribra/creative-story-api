import ScenarioGeneratorService from "../services/ScenarioGeneratorService";
import { Action } from "../interfaces/BaseController";

class ScenarioGeneratorController {
  generateScenario: Action = async (req, res, next) => {
    try {
      const { type, elements, time, emotion } = req.body;
      if (!type || !elements || !time || !emotion) {
        res.status(400).json({
          success: false,
          message: "Os campos 'type', 'elements', 'time' e 'emotion' são obrigatórios.",
        });
        return;
      }

      const scenario = await ScenarioGeneratorService.generateScenario({
        type,
        elements,
        time,
        emotion,
      });
      res.status(200).json({ success: true, data: scenario });
    } catch (error: any) {
      next(error);
    }
  };
}

export default new ScenarioGeneratorController();
