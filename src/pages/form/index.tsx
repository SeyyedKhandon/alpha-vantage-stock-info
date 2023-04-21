import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Form() {
  const navigate = useNavigate();
  const [symbol, setSymbol] = useState("");

  return (
    <main className="mx-auto max-w-5xl">
      <h1 className="text-center text-4xl">Enter Market Symbol</h1>
      <div>
        <label
          htmlFor="symbol"
          className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
        >
          Symbol
          <input
            type="text"
            id="symbol"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            placeholder="AAPL"
            required
            value={symbol}
            onChange={(e: any) => setSymbol(e.target.value.toUpperCase())}
          />
        </label>
      </div>
      <button
        type="submit"
        onClick={() => {
          navigate("/stock-info/" + symbol);
        }}
        className="rounded-lg px-5 py-2.5 text-center text-sm font-medium text-slate-800 hover:bg-slate-200 focus:outline-none focus:ring-4 sm:w-auto"
      >
        Submit &rarr;
      </button>
    </main>
  );
}

export default Form;
