//changed


import AreaChartExample from "./charts/areachart";
import "./index.css"
import getData from "./charts/data/datas";
import { useState } from "react";

import PieChartExample from "./charts/piechart";
import BarChartExample from "./charts/barchart";
import LineChartExample from "./charts/linechart";

var data_emptype=getData("Emp_Type")
var data_diversity=getData("Diversity")
var data_location=getData("Location")
var data_doj=getData("DOJ")
var data_dol=getData("DOL")

const BarEmpType=(data_emptype) =>{
    return(
        <>
        <div className="boxheader">Box 2</div>
        <div className="boxarea" style={{width:"100%"}}>{BarChartExample(data_emptype)}</div>
        </>
    )
}

const BarDiversity=(data_diversity) =>{
    return(
        <>
        <div className="boxheader">Box 2</div>
        <div className="boxarea" style={{width:"100%"}}>{BarChartExample(data_diversity)}</div>
        </>
    )
}

const BarLocation=(data_location) =>{
    return(
        <>
        <div className="boxheader">Box 2</div>
        <div className="boxarea" style={{width:"100%",height:"100%"}}>{BarChartExample(data_location)}</div>
        </>
    )
}

const PieEmpType = (data_emptype) =>{
    var [piemonth1,setPieMonth1]=useState(1);
    var [pieyear1,setPieYear1]=useState(2000);
    return(
        <>
            <div className="boxheader">Percentage</div>
            <div className="boxarea" style={{height:"100%", width:"100%"}}>
                <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
                    <select name="piemonth1" id="piemonth1" style={{height:"2em"}}>
                        <option value={1}>Jan</option><option value={2}>Feb</option><option value={3}>Mar</option>
                        <option value={4}>Apr</option><option value={5}>May</option><option value={6}>Jun</option>
                        <option value={7}>Jul</option><option value={8}>Aug</option><option value={9}>Sep</option>
                        <option value={10}>Oct</option><option value={11}>Nov</option><option value={12}>Dec</option>
                    </select>
                    <select name="pieyear1" id="pieyear1" style={{height:"2em"}}>
                        <option value={2000}>2000</option><option value={2001}>2001</option>
                        <option value={2002}>2002</option><option value={2003}>2003</option>
                    </select>
                    <button type="submit" style={{width:"30%",height:"2em"}} onClick={()=>{
                        setPieMonth1(document.getElementById("piemonth1").value);
                        setPieYear1(document.getElementById("pieyear1").value);
                        PieChartExample(data_emptype,piemonth1,pieyear1)
                        }}>Submit
                    </button>
                </div>
                {
                PieChartExample(data_emptype,piemonth1,pieyear1)
                }
            </div>
        </>
    )
}

const PieDiversity=(data_diversity)=>{
    var [piemonth2,setPieMonth2]=useState(1);
    var [pieyear2,setPieYear2]=useState(2000);
    return(
        <>
            <div className="boxheader">Percentage</div>
            <div className="boxarea" style={{width:"100%"}}>
                <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
                    <select name="piemonth2" id="piemonth2" style={{height:"2em"}}>
                        <option value={1}>Jan</option><option value={2}>Feb</option><option value={3}>Mar</option>
                        <option value={4}>Apr</option><option value={5}>May</option><option value={6}>Jun</option>
                        <option value={7}>Jul</option><option value={8}>Aug</option><option value={9}>Sep</option>
                        <option value={10}>Oct</option><option value={11}>Nov</option><option value={12}>Dec</option>
                    </select>
                    <select name="pieyear2" id="pieyear2" style={{height:"2em"}}>
                        <option value={2000}>2000</option><option value={2001}>2001</option>
                        <option value={2002}>2002</option><option value={2003}>2003</option>
                    </select>
                    <button type="submit" style={{width:"30%",height:"2em"}} onClick={()=>{
                        setPieMonth2(document.getElementById("piemonth2").value);
                        setPieYear2(document.getElementById("pieyear2").value);
                        PieChartExample(data_diversity,piemonth2,pieyear2)
                        }}>Submit</button>
                </div>
                {
                    PieChartExample(data_diversity,piemonth2,pieyear2)
                }
            </div>  
        </>

    )
}

const PieLocation=(data_location)=>{
    var [piemonth3,setPieMonth3]=useState(1);
    var [pieyear3,setPieYear3]=useState(2000);
    return(
        <>
            <div className="boxheader">Percentage</div>
            <div className="boxarea" style={{width:"100%"}}>
                <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
                    <select name="piemonth3" id="piemonth3" style={{height:"2em"}}>
                        <option value={1}>Jan</option><option value={2}>Feb</option><option value={3}>Mar</option>
                        <option value={4}>Apr</option><option value={5}>May</option><option value={6}>Jun</option>
                        <option value={7}>Jul</option><option value={8}>Aug</option><option value={9}>Sep</option>
                        <option value={10}>Oct</option><option value={11}>Nov</option><option value={12}>Dec</option>
                    </select>
                    <select name="pieyear3" id="pieyear3" style={{height:"2em"}}>
                        <option value={2000}>2000</option><option value={2001}>2001</option>
                        <option value={2002}>2002</option><option value={2003}>2003</option>
                    </select>
                    <button type="submit" style={{width:"30%",height:"2em"}} onClick={()=>{
                        setPieMonth3(document.getElementById("piemonth3").value);
                        setPieYear3(document.getElementById("pieyear3").value);
                        PieChartExample(data_location,piemonth3,pieyear3)
                        }}>Submit
                    </button>
                </div>
                {
                    PieChartExample(data_location,piemonth3,pieyear3)
                }
            </div>
        </>
                        
    )
}

function AreaDOJ(data_doj){
    return(
        <>
            <div className="boxheader" style={{width:"100%"}}>
                Box 2
            </div>
            <div className="boxarea" style={{height:"100%",width:"100%"}}>
                {AreaChartExample(data_doj)}
            </div>
        </>
    )
}

function AreaDOL(data_dol){
    var new_data_dol={"root":[]};
    for(let i=1;i<data_dol.root.length;i++)
        new_data_dol.root.push(data_dol.root[i])
    return(
        <>
            <div className="boxheader" style={{width:"100%"}}>
                Box 3
            </div>
            <div className="boxarea" style={{width:"100%"}}>
                {AreaChartExample(new_data_dol)}
                <p style={{textAlign:"center"}}>Number of employees currently in the company: {data_dol.root[0].value}</p>
            </div>
        </>
    )
}


export default function ChooseBox(a,b){
    if(a==="areachart"){
        if(b==="doj")
            return AreaDOJ(data_doj);
        else
            return AreaDOL(data_dol);
    }
    if(a==="piechart"){
        if(b==="emptype")
            return PieEmpType(data_emptype);
        if(b=="diversity")
            return PieDiversity(data_diversity);
        else    
            return PieLocation(data_location);
    }
    if(a==="barchart"){
        if(b==="emptype")
            return BarEmpType(data_emptype);
        if(b=="diversity")
            return BarDiversity(data_diversity);
        else    
            return BarLocation(data_location);
    }
}