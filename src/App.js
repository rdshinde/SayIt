import { AuthFormModal } from "./components";
import { Routers } from "./services";
import "./stylesheets/App.css";

function App() {
  return (
    <div className="App">
      <Routers />
      <AuthFormModal />
    </div>
  );
}

export default App;
