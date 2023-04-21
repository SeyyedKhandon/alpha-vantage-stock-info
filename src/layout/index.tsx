import Router from "@/router";
import { Outlet } from "react-router-dom";
function Layout() {
  return (
    <main className="min-h-screen p-10">
      <Outlet />
    </main>
  );
}

export default Layout;
