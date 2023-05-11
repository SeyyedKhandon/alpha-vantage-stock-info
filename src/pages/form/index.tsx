import { useNavigate } from "react-router-dom";
import { FormEvent, useState } from "react";
import { TextInput, Button, ThemeSwitcher } from "@/components";

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
      <TextInput
        label="Symbol"
        id="symbol"
        placeholder="AAPL"
        required
        value={symbol}
        onChange={(e: FormEvent<HTMLInputElement>) =>
          setSymbol(e.currentTarget.value.toUpperCase())
        }
        onKeyDown={handleKeyDown}
      />

      <Button onClick={openStockInfoPage}>Submit &rarr;</Button>
      <ThemeSwitcher className="absolute right-0 top-1" />
    </div>
  );
}

export default Form;
