import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import Profile from "./Profile";
import RenderCount from "./RenderCount";

function Dashboard() {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <section className="panel">
      <h2>Dashboard</h2>
      <RenderCount name="Dashboard (Auth consumer)" />
      {isLoggedIn ? <Profile /> : <p>Please log in</p>}
    </section>
  );
}

export default Dashboard;
