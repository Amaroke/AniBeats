import express, { Request, Response } from "express";

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/nestilpas", (req: Request, res: Response) => {
  res.send("Nestilpas c'est le plus bg des bg");
});

app.get("/fryzent", (req: Request, res: Response) => {
  res.send("Fryzent il est bg mais un peu moins que Nestilpas");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
