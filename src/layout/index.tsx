import { Outlet } from "react-router-dom";
function Layout() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-100 p-4 text-slate-900 selection:bg-primaryDark dark:bg-slate-900 dark:text-slate-100 dark:selection:bg-primary/40 sm:p-10">
      <Outlet />
    </main>
  );
}

export default Layout;
