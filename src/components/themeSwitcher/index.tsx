import { SunIcon, MoonIcon } from "@/components/icons";
import useThemeSwitcher from "./useThemeSwitcher";

function ThemeSwitcher({ className = "" }: { className?: string }) {
  const [mode, setMode] = useThemeSwitcher();

  return (
    <button
      aria-label="theme-switcher"
      className={`${
        mode === "light"
          ? "bg-slate-900 text-light"
          : "bg-slate-100 text-slate-900"
      } ml-3 flex items-center justify-center rounded-full p-1 ${className}`}
      onClick={() => setMode(mode === "dark" ? "light" : "dark")}
    >
      {mode === "dark" ? (
        <SunIcon className="fill-dark" />
      ) : (
        <MoonIcon className="fill-dark" />
      )}
    </button>
  );
}

export default ThemeSwitcher;
