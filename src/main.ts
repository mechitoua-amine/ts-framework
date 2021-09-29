import { User } from "./models/User";
import "./style.css";
import { UserForm } from "./views/UserForm";

const user = User.buildUser({ name: "Name", age: 20 });
const root = document.getElementById("root");
if (root) {
  const userFrom = new UserForm(root, user);
  userFrom.render();
} else {
  throw new Error("Root Element Not Found!");
}
