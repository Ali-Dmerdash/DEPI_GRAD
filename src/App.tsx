import "./App.css";
import "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import Dashboard from "./Component/AdminDashboard/Dashboard";

function App() {
  return <>
      <Dashboard/>
  </>;
}

export default App;
library.add(fab, fas, far);
