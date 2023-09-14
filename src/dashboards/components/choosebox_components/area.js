import { AreaChart, GroupedBarChart, LineChart, SimpleBarChart } from "@carbon/charts-react"
import areaoptions from "../miscellaneous/areachart_options"
import padValues from "../functions/padValuesAreaChart"

const AreaGraph=(data,groupname)=>{
    var newdata=padDOJDOLValues(data,groupname)
    console.log("This is")
    console.log(newdata)
    
    return(
        <>
        <div className="boxheader" style={{width:"100%"}}>
                Box 3
        </div>
        <div className="boxarea" style={{width:"100%"}}>
            <AreaChart data={newdata} options={areaoptions}/>
            {/* <p style={{textAlign:"center"}}>Number of employees currently in the company: {data_dol[0].value}</p>
        */}</div>
        </>
    )
}
export default AreaGraph;

function padDOJDOLValues(data,groupname){
    var a=[]
    for(var i=0;i<data.length;i++){
        if(data[i].key[2]==null && data[i].key[3]==null){
            console.log("Dat: "+data[i].key)
            if(data[i].key[0]==null && data[i].key[1]==null)
                a.push({group:groupname,key:"Present",value:data[i].value})        
            else
                a.push({group:groupname,key:data[i].key,value:data[i].value})
        }
    }
    if(groupname=="Employee leave count per month"){
        var k=a[0]
        var l=a.length;
        a=a.slice(1,l)
        a=padValues(a,groupname)
        a.push(k)
    }
    else    
        a=padValues(a,groupname)
    return a
}      