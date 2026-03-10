import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import RenderCount from "./RenderCount";

function ThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="theme-toggle">
      <button onClick={toggleTheme}>
        Theme: {theme === "light" ? "Light" : "Dark"}
      </button>
      <RenderCount name="ThemeToggle (Theme context)" />
    </div>
  );
}

export default ThemeToggle;
