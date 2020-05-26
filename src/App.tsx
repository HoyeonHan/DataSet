import React from 'react';
import logo from './logo.svg';
import './App.css';
import DataSet from './dataset/DataSet';
import DataTable from './dataset/DataTable';
import States from './dataset/States';
import { STATUS_CODES } from 'http';

function App() {
  
  let ds = new DataSet("dsTest");
  
  let dt = new DataTable("dtTest");

  let dr = dt.NewRow();
  dr["col1"] = "aaa";
  dr["col2"] = "bbb";

  dt.Rows.push(dr);
  
  dr.ItemArray = ["ccc", "ddd"];

  ds.Tables.Add(dt);

  let dt2 = new DataTable("dtTest2");
  ds.Tables.Add(dt2);

  // for(let dt in ds.DataTables) {
  //   console.log("dt", dt);
  // }

  // ds.Tables.forEach( table => {
  //   console.log(table.TableName);
  //   console.log(table.Rows);
  // });

  // console.log("size:" + ds.Tables.size);
  console.log(ds.Tables["dtTest2"]);

  ds.Tables["dtTest2"].TableName = "dtTest3";

  console.log("table 이름 변경 후");

  ds.Tables.forEach( table => {
    console.log(table.TableName);
    console.log(table.Rows);
  });

  console.log(ds.Tables["dtTest3"]);

  // for(let table in ds.Tables) {
  //   console.log(table);
  // }
  

  return (
    <div className="App">      
        ds: {ds.DataSetName}
    </div>
  );
}

export default App;
