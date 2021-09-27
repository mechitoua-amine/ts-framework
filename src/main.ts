import { User } from "./models/User";
import "./style.css";
import { UserFrom } from "./views/UserForm";

const user = User.buildUser({ name: "Name", age: 20 });
const userFrom = new UserFrom(document.getElementById("root"), user);
userFrom.render();
