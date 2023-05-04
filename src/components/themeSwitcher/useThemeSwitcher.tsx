import { useEffect, useState } from "react";

const useThemeSwitcher = () => {
  const preferDarkQuery = "(prefers-color-scheme: dark)";
  const [mode, setMode] = useState("");

  useEffect(() => {
    const mediaQuery = matchMedia(preferDarkQuery);
    const userPref = localStorage.getItem("theme");

    const handleChange = () => {
      const check =
        userPref === "dark" || mediaQuery.matches ? "dark" : "light";
      setMode(check);
      localStorage.setItem("theme", check);
    };
    handleChange();
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    switch (mode) {
      case "dark":
        localStorage.setItem("theme", "dark");
        document.documentElement.classList.add("dark");
        break;
      case "light":
        localStorage.setItem("theme", "light");
        document.documentElement.classList.remove("dark");
        break;
      default:
        break;
    }
  }, [mode]);
  return [mode, setMode] as const;
};

export default useThemeSwitcher;
