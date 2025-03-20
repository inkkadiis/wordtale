import "./App.css";
import AppRoutes from "./routes";
import Splash from "./pages/Splash";

function App() {
  return (
    <div className="max-w-md mx-auto h-safe flex flex-col sm:justify-start md:justify-center   bg-main sm:pt-10 md:pt-0">
      <AppRoutes />
    </div>
  );
}
export default App;
