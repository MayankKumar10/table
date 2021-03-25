import React,{useState, useEffect} from 'react';
import Walkwel from './walkwel.json';
import DataTable from './DataTable';
import './Table.css'




function App1() {
  const[data, setData] = useState([]);
  const[q, setQ] = useState("");
  const[searchColumns, setSearchColumns] = useState(['firstName','lastName','email']);

  
useEffect(() => {
  
  setData(Walkwel)
  
},[]);

function search(rows){
  return rows.filter((row)=>
  searchColumns.some( 
   (column)=> row[column].toString().toLowerCase().indexOf(q.toLowerCase())> -1 
   ) 
 );
}

const columns = data[0] && Object.keys(data[0]);

  return (
    <div className="Container">

        <div className="innerContainer">
        
        <div class="ui search">
          <div class="ui icon input">
            <input class="prompt" type="text" placeholder="Search..." value={q} onChange={(e) => setQ(e.target.value)} />
            <i class="search icon"></i>
          </div>
          <div className="outerContainer">
            {columns && 
            columns.map((column)=> (         
                
                <label className="checkboxContainer">
                <input 
                type='checkbox' 
                checked={searchColumns.includes(column)}
                onChange={(e)=>{
                  const checked = searchColumns.includes(column);
                  setSearchColumns((prev)=>
                  checked
                  ? prev.filter((sc)=> sc !== column)
                  : [...prev, column]
                  );
                }}
                />
                <span class="checkmark"></span> 
                {column.toUpperCase()} 
                </label>
              
              ))}

            </div>
        </div>
            
        </div> 

        <div> <DataTable data = {search(data)} /> </div>     
    </div>
  );
}

export default App1;
