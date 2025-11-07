import { Router } from "express";

const router = Router();


router.get("/", (req, res) => {
  res.status(200).json({
    status: "success",
    payload: [
      { _id: "1", userId: "123", petId: "456" },
      { _id: "2", userId: "789", petId: "012" },
    ],
  });
});


router.get("/:id", (req, res) => {
  const { id } = req.params;

 
  if (id === "000000000000000000000000") {
    return res.status(404).json({
      status: "error",
      message: "Adopción no encontrada",
    });
  }

  res.status(200).json({
    status: "success",
    payload: { _id: id, userId: "123", petId: "456" },
  });
});


router.post("/", (req, res) => {
  const { userId, petId } = req.body;

  if (!userId || !petId) {
    return res.status(400).json({
      status: "error",
      message: "Faltan datos obligatorios",
    });
  }

  const newAdoption = {
    _id: "franqito123",
    userId,
    petId,
  };

  res.status(201).json({
    status: "success",
    payload: newAdoption,
  });
});


router.put("/:id", (req, res) => {
  const { id } = req.params;

  if (id === "000000000000000000000000") {
    return res.status(404).json({
      status: "error",
      message: "Adopción no encontrada",
    });
  }

  res.status(200).json({
    status: "success",
    message: `Adopción con ID ${id} actualizada`,
  });
});


router.delete("/:id", (req, res) => {
  const { id } = req.params;

  if (id === "000000000000000000000000") {
    return res.status(404).json({
      status: "error",
      message: "Adopción no encontrada",
    });
  }

  res.status(200).json({
    status: "success",
    message: `Adopción con ID ${id} eliminada`,
  });
});

export default router;
