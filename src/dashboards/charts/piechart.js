//sample pie chart

import TrialData from "./data/trialdata";
import {PieChart,Pie, ResponsiveContainer, Tooltip,Cell, Legend, ZAxis} from "recharts";


var COLOR=["#2085ec","#72b4eb","#0a417a","#8464a0","#cea9bc","#323232"]

function PieChartExample(data,month,year){
    
    console.log("HERE: "+month)
    console.log(year)
    data=onlyCurrentEmployees(data,month ,year)
    return(
        <>
            <div className="graph" style={{width:"100%",height:"100%"}}>
                <ResponsiveContainer width={"100%"} height={"100%"}>
                    <PieChart>
                        <Pie data={data.root} innerRadius={"50%"} dataKey="value" nameKey="key" stroke='var(--boxfill)' strokeWidth={"6px"} >
                        {
                            data.root.map((entry, index) => <Cell key={'cell-${index}'} fill={COLOR[index%COLOR.length]}/>)
                        }            
                        </Pie> 
                    <Tooltip/>
                    <Legend
                        formatter={(value, entry, index) => 
                            <span className="xaxistext" style={{color:"var(--fontcolor)"}}>{value}</span>}/>
                    </PieChart>
                </ResponsiveContainer>
            </div>
        </>
    )
}
export default PieChartExample;

function onlyCurrentEmployees(data,month,year){
    var a={}
    var keys=[]
    for(var i=0;i<data.root.length;i++){
        if(data.root[i].key[0]==year && data.root[i].key[1]>month){
            continue;
        }
        if(data.root[i].key[0]>year){
            continue
        }
        
        if(data.root[i].key[2]==null && data.root[i].key[3]==null){
            if(a[data.root[i].key[4]]) {
                a[data.root[i].key[4]]+=data.root[i].value;
              } else {
                a[data.root[i].key[4]] = data.root[i].value;
                keys.push(data.root[i].key[4])
              }
            console.log("1\n")
            console.log(a)
            console.log(month)
            console.log(year)
        }
        if(data.root[i].key[2]==year && data.root[i].key[3]>=month){
            if(a[data.root[i].key[4]]) {
                a[data.root[i].key[4]]++;
              } else {
                a[data.root[i].key[4]] = 1;
                keys.push(data.root[i].key[4])
              }
            console.log("2\n")
            console.log(a)
            continue;
        }
        if(data.root[i].key[2]>year){
            if(a[data.root[i].key[4]]) {
                a[data.root[i].key[4]]++;
              } else {
                a[data.root[i].key[4]] = 1;
                keys.push(data.root[i].key[4])
              }
            console.log("3\n")
            console.log(a)
            }
    }
    console.log("A IS: ")
    console.log(a)
    var b=[]
    for(i=0;i<keys.length;i++){
        b.push({key:keys[i],value:a[keys[i]]})
    }
    console.log("B IS ")
    console.log(b)
    return {"root":b}
}
