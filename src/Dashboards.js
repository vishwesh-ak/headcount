import React from 'react';
import Dashboard from "./dashboards/dashboard";
import { Button, } from '@carbon/react';

function exportData(){

}

function Dashboards(){
    return(
        <div className='dashboards'>
            <Dashboard/>
            <Button kind="tertiary" className='exportButton' style={{margin:"10px 5px 5px 5px"}} onClick={exportData}>Export</Button>
        </div>
        
    )
}
export default Dashboards;
