import { useNavigate } from "react-router-dom";
import { FormEvent, useState } from "react";

function Form() {
  const navigate = useNavigate();
  const [symbol, setSymbol] = useState("");

  const openStockInfoPage = () => symbol && navigate("/stock-info/" + symbol);

  const handleKeyDown = (e: React.KeyboardEvent) =>
    e.key === "Enter" && openStockInfoPage();

  return (
    <div className="mx-auto max-w-5xl">
      <h1 className="text-center text-4xl">Enter Market Symbol</h1>
      <div>
        <label htmlFor="symbol" className="mb-2 block text-sm font-medium">
          Symbol
          <input
            type="text"
            id="symbol"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900"
            placeholder="AAPL"
            required
            value={symbol}
            onChange={(e: FormEvent<HTMLInputElement>) =>
              setSymbol(e.currentTarget.value.toUpperCase())
            }
            onKeyDown={handleKeyDown}
          />
        </label>
      </div>
      <button
        type="submit"
        onClick={openStockInfoPage}
        className="rounded-lg px-5 py-2.5 text-center text-sm font-medium text-slate-800 hover:bg-slate-200"
      >
        Submit &rarr;
      </button>
    </div>
  );
}

export default Form;
