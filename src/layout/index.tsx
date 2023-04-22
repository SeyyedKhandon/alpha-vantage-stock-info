import Router from "@/router";
import { Outlet } from "react-router-dom";
function Layout() {
  return (
    <main className="mx-auto min-h-screen max-w-7xl p-10">
      <Outlet />
    </main>
  );
}

export default Layout;
