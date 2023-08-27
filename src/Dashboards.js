import React from 'react';
import Dashboard from "./dashboards/dashboard";
function Dashboards(){
    return(
        <div>
            <button className='exportButton'>Export</button>
            <Dashboard/>
        </div>
        
    )
}
export default Dashboards;
