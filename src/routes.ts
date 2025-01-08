import { Router } from "express";
import StoryGeneratorController from "./controller/StoryGeneratorController";
import ScenarioGeneratorController from "./controller/ScenarioGeneratorController";

const router = Router();

router.get("/", (_req, res) => {
    res.send("API para criar historias, personagens e contextos!");
});

router.post("/generate-story", StoryGeneratorController.generateStory);
router.post("/generate-character", StoryGeneratorController.generateCharacter);
router.post("/generate-dialogue", StoryGeneratorController.generateDialogue);
router.post("/generate-plot-twist", StoryGeneratorController.generatePlotTwist);
router.post("/generate-scenario", ScenarioGeneratorController.generateScenario);

export default router;
