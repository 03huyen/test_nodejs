import express from "express";

import { create, getAll, get, update, remove } from "../controlers/product";

const router = express.Router();

router.post("/products", create);
router.get("/products", getAll);
router.get("/products/:id", get);
router.patch("/products/:id", update);
router.delete("/products/:id", remove);

export default router;