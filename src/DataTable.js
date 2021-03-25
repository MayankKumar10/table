import React from 'react'
import './Table.css'

function DataTable({ data }) {
    const columns = data[0] && Object.keys(data[0]);
        
        return (
        
        <table cellPadding={0} cellSpacing={0}>
            <thead>
                <tr>{data[0] && columns.map((heading)=> <th>{heading.toUpperCase()}</th>)}</tr>

                </thead>
            <tbody>
                {data.map(row=>
                <tr key={row.id}>
                     
                    {
                        columns.map(column =><td>{row[column]}</td>)
                        
                    }
                </tr>)


                }
            </tbody>
        </table>
            
        
    )
}

export default DataTable
