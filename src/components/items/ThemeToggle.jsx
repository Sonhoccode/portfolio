import { useTheme } from "@/hooks/useTheme";
import "./ThemeToggle.css";

export default function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <div className="toggleWrapper">
      <input 
        className="input" 
        id="theme-toggle" 
        type="checkbox" 
        checked={isDark}
        onChange={toggleTheme}
      />
      <label className="toggle" htmlFor="theme-toggle">
        <span className="toggle__handler">
          <span className="crater crater--1"></span>
          <span className="crater crater--2"></span>
          <span className="crater crater--3"></span>
        </span>
        <span className="star star--1"></span>
        <span className="star star--2"></span>
        <span className="star star--3"></span>
        <span className="star star--4"></span>
        <span className="star star--5"></span>
        <span className="star star--6"></span>
      </label>
    </div>
  );
}
