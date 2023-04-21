import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Suspense, lazy } from "react";
import Loading from "@/components/loading";
import Layout from "@/layout";

const Form = lazy(() => import("@/pages/form"));
const StockInfo = lazy(() => import("@/pages/stockInfo"));

export default function Router() {
  return (
    <Suspense fallback={<Loading />}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Form />} />
            <Route path="/stock-info/:symbol" element={<StockInfo />} />
            <Route path="*" element={<Navigate to="/" replace={true} />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}
