import { Ahmad } from "./Ex";
import { useContext } from "react";

function Shadow() {
  const message = useContext(Ahmad);
  console.log(message);
}
export default Shadow;
