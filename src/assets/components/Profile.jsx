import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import RenderCount from "./RenderCount";

function Profile() {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      style={{
        background: theme === "dark" ? "#1e293b" : "#e2e8f0",
        color: theme === "dark" ? "#f8fafc" : "#0f172a",
        padding: "0.8rem",
        borderRadius: "10px",
      }}
    >
      <h3>User Profile</h3>
      <p>Current Theme: {theme}</p>
      <RenderCount name="Profile (Theme consumer)" />
    </div>
  );
}

export default Profile;
