import "./App.css";
import "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import AddDoctors from "./pages/addDoctors/AddDoctors";
import ListDoctors from "./pages/listDoctors/ListDoctors";
import { Box, Container } from "@mui/material";

function App() {
  return (
    <>
      {/* <Navbar />
      <Sidebar /> */}
      <AddDoctors />

      {/* <ListDoctors /> */}
    </>
  );
}

export default App;
library.add(fab, fas, far);
