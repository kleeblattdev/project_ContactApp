import express from "express";
import cors from "cors";
import morgan from "morgan";

const app = express();
const PORT = process.env.PORT || 9000;

app.use(morgan("dev"));
app.use(cors());

app.listen(PORT, () => console.log("Server listening on port", PORT));
