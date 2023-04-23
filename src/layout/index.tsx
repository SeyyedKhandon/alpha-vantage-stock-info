import { Outlet } from "react-router-dom";
function Layout() {
  return (
    <div className="mx-auto max-w-7xl">
      <Outlet />
    </div>
  );
}

export default Layout;
