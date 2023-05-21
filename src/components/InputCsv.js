import React from "react";
import Papa from "papaparse";

const InputCsv = ({ setData }) => {
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    Papa.parse(file, {
      header: true,
      complete: (results) => {
        const parsedData = results.data;
        setData(parsedData);
      },
      error: (err) => {
        console.log(err);
      },
    });
  };

  return <input type="file" accept=".csv" onChange={handleFileChange} />;
};

export default InputCsv;
