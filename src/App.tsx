import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import API from "./pages/API";
import ApiIcon from '@mui/icons-material/Api';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="container">
        <h3 className="my-5 text-center">API Handling <ApiIcon color="secondary" fontSize="large"></ApiIcon> </h3>

        <div className="row justify-content-center">
          <div className="col-lg-10 text-center ">
            <API />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
