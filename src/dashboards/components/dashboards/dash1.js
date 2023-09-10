//dashboard for employee type

import "../../index.css"
import PieChartExample from "../../charts/piechart";
import BarChartExample from "../../charts/barchart";
import LineChartExample from "../../charts/linechart";
import { useState } from "react";
import onlyCurrentEmployees from "../functions/onlyCurrentEmployees";
import ChooseBox from "../../choosebox";

export default function Dash1(data_emptype){
    const [month1,setMonth1]=useState(1);
    const [year1,setYear1]=useState(2000);
    return(

        <div style={{border:"4px solid black",borderRadius:"10px",padding:"10px"}}>
            <div className="subdashheader">Employee Type</div>
            <div style={{display:"flex",alignItems:"center",justifyContent:"center",padding:"10px"}}>
                <select name="barmonth1" id="barmonth1" style={{width:"20%",height:"2em"}}>
                    <option value={1}>Jan</option><option value={2}>Feb</option><option value={3}>Mar</option>
                    <option value={4}>Apr</option><option value={5}>May</option><option value={6}>Jun</option>
                    <option value={7}>Jul</option><option value={8}>Aug</option><option value={9}>Sep</option>
                    <option value={10}>Oct</option><option value={11}>Nov</option><option value={12}>Dec</option>
                </select>
                <select name="baryear1" id="baryear1" style={{width:"20%",height:"2em"}}>
                    <option value={2000}>2000</option><option value={2001}>2001</option>
                    <option value={2002}>2002</option><option value={2003}>2003</option>
                </select>
                <button type="submit" style={{width:"10%",height:"2em"}} onClick={()=>{
                    setMonth1(document.getElementById("barmonth1").value);
                    setYear1(document.getElementById("baryear1").value);
                    }}>Submit
                </button>
            </div>
            <div className="gridbg">
                <div className='box box1'>
                    <a href={"/dashnew?a=barchart&b=emptype&c="+month1+"&d="+year1} target="_blank" style={{position:"absolute"}}>
                        Expand
                    </a>
                    <div className="boxheader">Number of employees under each leader</div>
                    <div className="boxarea" style={{height:"100%", width:"100%"}}>
                        {
                        BarChartExample(onlyCurrentEmployees(data_emptype,month1,year1))
                        }
                    </div>
                </div>  
                <div className="box box2">
                    <div className="boxheader">Employee type vs time</div>
                    <div className="boxarea">{LineChartExample(data_emptype)}</div>
                </div>
                <div className="box box3">
                    <a href="/dashnew?a=piechart&b=emptype" target="_blank" style={{position:"absolute"}}>
                        Expand
                    </a>
                    {ChooseBox("piechart","emptype",month1,year1)}
                </div>
            </div>
        </div>
    )
}