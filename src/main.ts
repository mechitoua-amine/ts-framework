import { Collection } from "./models/Collection";
import "./style.css";

const collection = new Collection("http://localhost:3000/users");
collection.on("change", () => {
  console.log(collection);
});

collection.fetch();
