import "./App.css";
import "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import Appointments from "./Component/Appointments/Appointments";

function App() {
  return <>
     <Appointments/>
  </>;
}

export default App;
library.add(fab, fas, far);
