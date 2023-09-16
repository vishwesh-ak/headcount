//changed


import "./index.css"
import getData from "./charts/data/datas";
import "../App.scss"

import AreaGraph from "./components/choosebox_components/area"
import PieGraph from "./components/choosebox_components/pie"
import BarGraph from "./components/choosebox_components/bar"
import Groupwise_DOJ_DOL_Table from "./components/choosebox_components/table_v2";


var data_emptype=getData("Emp_Type")
var data_diversity=getData("Diversity")
var data_location=getData("Location")
var data_doj=getData("DOJ")
var data_dol=getData("DOL")
/*
const BarEmpType=(data_emptype,barmonth1,baryear1) =>{
    var fulldata=getData("fulldata");
    const [leadername,setLeaderName]=useState("");
    var newpagedata_emptype=makeBarGraphValues(fulldata,leadername)
    return(
        <>
            <div className="boxheader">Leader statistics</div>
            <div className="boxarea" style={{height:"100%", width:"100%",padding:"10px", alignItems:"center",justifyItems:"center"}}>
                <FormGroup style={{display:"flex",padding:"0"}}>
                <TextInput id="leadernameinput" style={{height:"48px",fontSize:"12px",margin:"0",boxShadow:"0px 0px 3px 3px #bbbbbb"}}></TextInput>
                <Button type="submit" className="submitbutton" style={{paddingRight:"5px",paddingLeft:"5px",fontSize:"10px",margin:"0",boxShadow:"0px 0px 3px 3px #bbbbbb"}}
                onClick={()=>{setLeaderName(document.getElementById("leadernameinput").value);console.log(leadername)}}>Submit</Button>
                </FormGroup>
                <br/>
                <div style={{display:"flex",width:"100%",height:"100%"}}>
                       <div style={{height:"100%",width:"100%"}}>{ BarChartExample(newpagedata_emptype,"samecolor")}brrrr</div>
                       <div style={{height:"100%",width:"100%",overflow:"scroll",border:"5px solid #000000aa",borderRadius:"10px"}}>{TableLeader(fulldata,leadername)}</div>
                </div>
            </div>
        </>
    )
}

const BarDiversity=(data_diversity) =>{
    var fulldata=getData("fulldata");
    const [leadername,setLeaderName]=useState("");
    var newpagedata_diversity=makeBarGraphValues(fulldata,leadername)
    return(
        <>
            <div className="boxheader">Leader statistics</div>
            <div className="boxarea" style={{height:"100%", width:"100%",padding:"10px", alignItems:"center",justifyItems:"center"}}>
                <FormGroup style={{display:"flex",padding:"0"}}>
                <TextInput placeholder="Enter leader name" id="leadernameinput" style={{height:"48px",fontSize:"12px",margin:"0",boxShadow:"0px 0px 3px 3px #bbbbbb"}}></TextInput>
                <Button type="submit" className="submitbutton" style={{paddingRight:"5px",paddingLeft:"5px",fontSize:"10px",margin:"0",boxShadow:"0px 0px 3px 3px #bbbbbb"}}
                onClick={()=>{setLeaderName(document.getElementById("leadernameinput").value);console.log(leadername)}}>Submit</Button>
                </FormGroup>
                <br/>
                <div style={{display:"flex",width:"100%",height:"100%"}}>
                       <div style={{height:"100%",width:"100%"}}>{ DoubleBarChartExample(newpagedata_diversity,"samecolor")}brrrr</div>
                       <div style={{height:"100%",width:"100%",overflow:"scroll",border:"5px solid #000000aa",borderRadius:"10px"}}>{TableLeader(fulldata,leadername)}</div>
                </div>
            </div>
        </>
    )
}

const BarLocation=(data_location) =>{
    var [barmonth3,setBarMonth3]=useState(1);
    var [baryear3,setBarYear3]=useState(2000);
    return(
        <>
            <div className="boxheader">Leader statistics</div>
            <div className="boxarea" style={{height:"100%", width:"100%"}}>
                <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
                    <select name="barmonth3" id="barmonth3" style={{height:"2em"}}>
                        <option value={1}>Jan</option><option value={2}>Feb</option><option value={3}>Mar</option>
                        <option value={4}>Apr</option><option value={5}>May</option><option value={6}>Jun</option>
                        <option value={7}>Jul</option><option value={8}>Aug</option><option value={9}>Sep</option>
                        <option value={10}>Oct</option><option value={11}>Nov</option><option value={12}>Dec</option>
                    </select>
                    <select name="baryear3" id="baryear3" style={{height:"2em"}}>
                        <option value={2000}>2000</option><option value={2001}>2001</option>
                        <option value={2002}>2002</option><option value={2003}>2003</option>
                    </select>
                    <button type="submit" style={{width:"30%",height:"2em"}} onClick={()=>{
                        setBarMonth3(document.getElementById("barmonth3").value);
                        setBarYear3(document.getElementById("baryear3").value);
                        BarChartExample(data_location,barmonth3,baryear3)
                        }}>Submit
                    </button>
                </div>
                {
                BarChartExample(data_location,barmonth3,baryear3)
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
    var new_data_dol=[]
    for(let i=1;i<data_dol.length;i++)
        new_data_dol.push(data_dol[i])
    return(
        <>
            <div className="boxheader" style={{width:"100%"}}>
                Box 3
            </div>
            <div className="boxarea" style={{width:"100%"}}>
                {AreaChartExample(new_data_dol)}
                <p style={{textAlign:"center"}}>Number of employees currently in the company: {data_dol[0].value}</p>
            </div>
        </>
    )
}
*/

export default function ChooseBox(a,b,c,d){
    if(a==="areachart"){
        if(b==="doj")
            return AreaGraph(data_doj,"Employee join count per month");
        else
            return AreaGraph(data_dol,"Employee leave count per month");
    }
    if(a==="piechart"){
        if(b==="emptype")
            return PieGraph(data_emptype,c,d);
        if(b==="diversity")
            return PieGraph(data_diversity,c,d);
        else    
            return PieGraph(data_location);
    }
    if(a==="barchart"){
        if(b==="emptype")
            return BarGraph(data_emptype);
        if(b==="diversity")
            return BarGraph(data_diversity);
        else    
            return BarGraph(data_location);
    }
    if(a==="tablechart"){
        if(b==="emptype")
            return Groupwise_DOJ_DOL_Table(data_emptype)
        if(b==="diversity")
            return Groupwise_DOJ_DOL_Table(data_diversity)
        if(b==="location")
            return Groupwise_DOJ_DOL_Table(data_location);
        
    }
}


