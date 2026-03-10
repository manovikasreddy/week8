import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import RenderCount from "./RenderCount";

function Navbar() {
  const { isLoggedIn, login, logout } = useContext(AuthContext);

  return (
    <section className="panel">
      <h2>Navbar</h2>
      <p>Status: {isLoggedIn ? "Logged In" : "Logged Out"}</p>
      <RenderCount name="Navbar (Auth consumer)" />
      <button onClick={isLoggedIn ? logout : login}>
        {isLoggedIn ? "Logout" : "Login"}
      </button>
    </section>
  );
}

export default Navbar;
