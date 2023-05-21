import React from "react";
import { Table, Column, AutoSizer } from "react-virtualized";
import "react-virtualized/styles.css";

function formatTimestamp(timestamp) {
  console.log(timestamp);
  const dateObj = new Date(timestamp);
  const year = dateObj.getFullYear();
  const month = dateObj.toLocaleString("default", { month: "2-digit" });
  const day = dateObj.getDate();
  const time = dateObj.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
  const milliseconds = dateObj.getMilliseconds().toString().padStart(3, "0");

  return `${day}-${month}-${year} , ${time}.${milliseconds}`;
}

function TableVirtualiz({ data }) {
  return (
    <AutoSizer>
      {({ width, height }) => (
        <Table
          width={width}
          height={height}
          headerHeight={20}
          rowHeight={33}
          rowCount={data.length}
          rowGetter={({ index }) => data[index]}
        >
          <Column label="Device ID" dataKey="device_id" width={150} />
          <Column label="Prediction" dataKey="prediction" width={150} />
          <Column label="Level 2" dataKey="level_2" width={150} />
          <Column
            label="Start Timestamp"
            dataKey="start_timestamp"
            width={200}
            cellRenderer={(data) => formatTimestamp(data.cellData)}
          />
          <Column
            label="End Timestamp"
            dataKey="end_timestamp"
            width={200}
            cellRenderer={(data) => formatTimestamp(data.cellData)}
          />
        </Table>
      )}
    </AutoSizer>
  );
}

export default TableVirtualiz;
