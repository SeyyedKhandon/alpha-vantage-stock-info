import Router from "@/router";
import { Api } from "@/api";
function App() {
  return (
    <Api>
      <main className="min-h-screen bg-slate-100 p-4 text-slate-900 selection:bg-primaryDark dark:bg-slate-900 dark:text-slate-100 dark:selection:bg-primary/40 sm:p-10">
        <Router />
      </main>
    </Api>
  );
}

export default App;
