import "./Home.css";
import { useState } from "react";
import TableVirtualiz from "../TableVirtualiz";
import InputCsv from "../InputCsv";
const Home = () => {
  const [data, setData] = useState([]);

  return (
    <div className="Home">
      <div className="Home-header">
        <h1>Virtualiz File Viewer</h1>
        <InputCsv setData={setData} />
      </div>
      <div className="Home-body">
        <TableVirtualiz data={data} />
      </div>
    </div>
  );
};

export default Home;
