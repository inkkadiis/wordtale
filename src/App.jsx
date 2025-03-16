import "./App.css";
import AppRoutes from "./routes";
import Splash from "./pages/Splash";

function App() {
  return (
    <div className="max-w-md mx-auto h-safe bg-main p-5">
      <AppRoutes />
    </div>
  );
}
export default App;
