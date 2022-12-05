import { app } from "./app";

const start = async () => {
  console.log("STARTING....");
  app.listen(3000, () => {
    console.log("Listening on port 3000!!!!!!!!");
  });
};

start();
