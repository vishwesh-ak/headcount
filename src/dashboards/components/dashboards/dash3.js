//dashboard for work location

import "../../index.css"
import PieChartExample from "../../charts/piechart";
import BarChartExample from "../../charts/barchart";
import LineChartExample from "../../charts/linechart";
import PieChartData from "../../charts/data/maindata"
import onlyCurrentEmployees from "../functions/onlyCurrentEmployees";
import { useState } from "react";
import ChooseBox from "../../choosebox";
export default function Dash3(data_location){
    
    const [month3,setMonth3]=useState(1);
    const [year3,setYear3]=useState(2000);
    return(
        <div style={{border:"4px solid black",borderRadius:"10px",padding:"10px"}}>
                <div className="subdashheader">Location</div>
                <div className="gridbg">
                    <div style={{display:"flex",alignItems:"center",justifyContent:"center",padding:"10px"}}>
                        <select name="barmonth3" id="barmonth3" style={{width:"20%",height:"2em"}}>
                            <option value={1}>Jan</option><option value={2}>Feb</option><option value={3}>Mar</option>
                            <option value={4}>Apr</option><option value={5}>May</option><option value={6}>Jun</option>
                            <option value={7}>Jul</option><option value={8}>Aug</option><option value={9}>Sep</option>
                            <option value={10}>Oct</option><option value={11}>Nov</option><option value={12}>Dec</option>
                        </select>
                        <select name="baryear3" id="baryear3" style={{width:"20%",height:"2em"}}>
                            <option value={2000}>2000</option><option value={2001}>2001</option>
                            <option value={2002}>2002</option><option value={2003}>2003</option>
                        </select>
                        <button type="submit" style={{width:"10%",height:"2em"}} onClick={()=>{
                            setMonth3(document.getElementById("barmonth3").value);
                            setYear3(document.getElementById("baryear3").value);
                            }}>Submit
                        </button>
                    </div>
                    <div className='box box1'>
                    <a href="/dashnew?a=barchart&b=location" target="_blank" style={{gridColumn:"span 7"}}>
                    Expand</a>
                        {ChooseBox("barchart","location")}
                    </div>
                    <div className="box box2">
                        <div className="boxheader">Location vs time</div>
                        <div className="boxarea">{LineChartExample(data_location)}</div>
                    </div>
                    <a href="/dashnew?a=piechart&b=location" target="_blank" style={{gridColumn:"span 3"}}>
                    <div className="box box3">
                        {ChooseBox("piechart","location")}
                    </div>
                    </a>
                    </div>
                </div>
    )
}