import { Router } from "express";
import { generateMockUsers, generateMockPets } from "../utils/mocking.js";
import { UserModel } from "../dao/models/user.model.js";
import { PetModel } from "../dao/models/pet.model.js";

const router = Router();

router.get("/mockingusers", async (req, res) => {
  try {
    const users = await generateMockUsers(50);
    res.json({ status: "success", payload: users });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: "error", message: "Error generating users" });
  }
});

router.get("/mockingpets", (req, res) => {
  const pets = generateMockPets(50);
  res.json({ status: "success", payload: pets });
});

router.post("/generateData", async (req, res) => {
  const { users = 0, pets = 0 } = req.body;

  try {
    const mockUsers = await generateMockUsers(users);
    const mockPets = generateMockPets(pets);

    await UserModel.insertMany(mockUsers);
    await PetModel.insertMany(mockPets);

    res.json({
      status: "success",
      message: `Inserted ${users} users and ${pets} pets`
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: "error", message: "Error generating data" });
  }
});

export default router;
