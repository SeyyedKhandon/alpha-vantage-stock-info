import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Form from "@/pages/form";
import StockInfo from "@/pages/stockInfo";
function App() {
  return (
    <Router>
      <main className="my-10 px-10">
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/stock-info/:name" element={<StockInfo />} />
          <Route path="*" element={<Navigate to="/" replace={true} />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
