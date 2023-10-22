import BasicModal from "./Components/Modal/Modal";
import PersonsLIst from "./Components/PersonsLIst";
import "../src/App.css";
import { Container } from "@mui/material";
import PersonsData from "./Components/PersonData";
import { useState } from "react";
const App = function () {
  const [state, setState] = useState(PersonsData);
  
  return (
    <Container maxWidth="lg">
      <div className="header">
        <h1>User List</h1>
        <BasicModal data={state} setData={setState} />
      </div>
      <PersonsLIst data={state} setData={setState}/>
    </Container>
  );
};

export default App;
