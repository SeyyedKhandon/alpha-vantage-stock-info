import { useNavigate } from "react-router-dom";
import { FormEvent, useState } from "react";
import ThemeSwitcher from "@/components/themeSwitcher";
import { Button } from "@/components/button";

function Form() {
  const navigate = useNavigate();
  const [symbol, setSymbol] = useState("");

  const openStockInfoPage = () => symbol && navigate("/stock-info/" + symbol);

  const handleKeyDown = (e: React.KeyboardEvent) =>
    e.key === "Enter" && openStockInfoPage();

  return (
    <div className="relative mt-10 max-w-xl flex-grow -translate-y-40 md:-translate-y-20">
      <h1 className="mb-16 text-left text-2xl sm:text-4xl">
        Enter Market Symbol
      </h1>
      <label htmlFor="symbol" className="mb-6 block text-sm font-medium">
        Symbol
        <input
          type="text"
          id="symbol"
          className="mt-4 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900"
          placeholder="AAPL"
          required
          value={symbol}
          onChange={(e: FormEvent<HTMLInputElement>) =>
            setSymbol(e.currentTarget.value.toUpperCase())
          }
          onKeyDown={handleKeyDown}
        />
      </label>

      <Button onClick={openStockInfoPage}>Submit &rarr;</Button>
      <div className="absolute right-0 top-1">
        <ThemeSwitcher />
      </div>
    </div>
  );
}

export default Form;
