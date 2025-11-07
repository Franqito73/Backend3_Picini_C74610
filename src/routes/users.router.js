import { Router } from "express";
import { UserModel } from "../dao/models/user.model.js";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const users = await UserModel.find();
    res.json({ status: "success", payload: users });
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
});


router.post("/", async (req, res) => {
  try {
    const user = await UserModel.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ status: "error", message: error.message });
  }
});


router.put("/:id", async (req, res) => {
  try {
    const updatedUser = await UserModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedUser) return res.status(404).json({ status: "error", message: "Usuario no encontrado" });
    res.json({ status: "success", payload: updatedUser });
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
});


router.delete("/:id", async (req, res) => {
  try {
    const deleted = await UserModel.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ status: "error", message: "Usuario no encontrado" });
    res.json({ status: "success", message: "Usuario eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
});

export default router;
