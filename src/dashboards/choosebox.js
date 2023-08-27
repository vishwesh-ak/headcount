import AreaChartExample from "./charts/areachart";
import "./index.css"
import getData from "./charts/data/datas";

var data_doj=getData("DOJ")
var data_dol=getData("DOL")

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
}