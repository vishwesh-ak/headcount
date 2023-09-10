//dashboard for diversity

import "../../index.css"
import PieChartExample from "../../charts/piechart";
import BarChartExample from "../../charts/barchart";
import LineChartExample from "../../charts/linechart";
import { useState } from "react";
import PieChartData from "../../charts/data/maindata"
import onlyCurrentEmployees from "../functions/onlyCurrentEmployees";

import ChooseBox from "../../choosebox";

export default function Dash2(data_diversity){
    
    const [month2,setMonth2]=useState(1);
    const [year2,setYear2]=useState(2000);

        return(
            <div style={{border:"4px solid black",borderRadius:"10px",padding:"10px"}}>
            <div className="subdashheader">Diversity</div>
            <div className="gridbg">
                <div className='box box1'>
                <div style={{display:"flex",alignItems:"center",justifyContent:"center",padding:"10px"}}>
                    <select name="barmonth2" id="barmonth2" style={{width:"20%",height:"2em"}}>
                        <option value={1}>Jan</option><option value={2}>Feb</option><option value={3}>Mar</option>
                        <option value={4}>Apr</option><option value={5}>May</option><option value={6}>Jun</option>
                        <option value={7}>Jul</option><option value={8}>Aug</option><option value={9}>Sep</option>
                        <option value={10}>Oct</option><option value={11}>Nov</option><option value={12}>Dec</option>
                    </select>
                    <select name="baryear2" id="baryear2" style={{width:"20%",height:"2em"}}>
                        <option value={2000}>2000</option><option value={2001}>2001</option>
                        <option value={2002}>2002</option><option value={2003}>2003</option>
                    </select>
                    <button type="submit" style={{width:"10%",height:"2em"}} onClick={()=>{
                        setMonth2(document.getElementById("barmonth2").value);
                        setYear2(document.getElementById("baryear2").value);
                        }}>Submit
                    </button>
                </div>
                <a href={"/dashnew?a=barchart&b=diversity&c="+month2+"&d="+year2} target="_blank" style={{position:"absolute"}}>
                        Expand
                    </a>
                    <div className="boxheader">Number of employees under each leader</div>
                    <div className="boxarea" style={{height:"100%", width:"100%"}}>
                        {
                        BarChartExample(onlyCurrentEmployees(data_diversity,month2,year2))
                        }
                    </div>
                </div>  
                <div className="box box2">
                    <div className="boxheader">Diversity vs time</div>
                    <div className="boxarea">{LineChartExample(data_diversity)}</div>
                </div>
                
                <div className="box box3">
                    
                <a href="/dashnew?a=piechart&b=diversity" style={{gridColumn:"span 3"}} target="_blank">
                    Expand
                </a>
                    {ChooseBox("piechart","diversity")}
                 </div>
                </div>
            </div>
            )
}