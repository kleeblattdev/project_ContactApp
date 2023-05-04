import express from "express";
import cors from "cors";
import morgan from "morgan";
import multer from "multer";
import "./config/config.js";
import { getContacts } from "./controller/contactController.js";

const app = express();
const PORT = process.env.PORT || 9000;
const API_VERSION = "/api/v1";
const upload = multer();

app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

app.get(API_VERSION + "/contacts", getContacts);
app.post(API_VERSION + "/contacts");

app.listen(PORT, () => console.log("Server listening on port", PORT));
