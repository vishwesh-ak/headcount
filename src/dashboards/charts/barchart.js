//sample bar graph

import { BarChart, Bar, 
     CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

export default function BarChartExample(data){
    const data_only_current_emp=onlyCurrentEmployees(data)
    //this onlyCurrentemployees function will remove any values in the data that DONT have Date of leaving as null
    //thus we only get current employees in the final list
    return(
        <div style={{display:"flex",flexDirection:"column",width:"100%",height:"100%"}}>
        <div className="graph" style={{width:"100%",height:"100%",contain:"strict",overflow:"scroll"}}>
            <ResponsiveContainer>
                <BarChart
                    data={data_only_current_emp.root}
                >
                    <defs>
                        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#72b4eb" stopOpacity={1}/>
                            <stop offset="95%" stopColor="#2085ec" stopOpacity={1}/>
                        </linearGradient>
                    </defs>
                    <CartesianGrid stroke="#777777" opacity={"30%"}/>
                    <XAxis className="xaxistext" dataKey="key" stroke="var(--fontcolor)" fontSize={"10"}/>
                    <YAxis className="yaxistext" stroke="var(--fontcolor)" fontSize={"12"}/>
                    <Tooltip/>
                    <Legend/>

                    <Bar dataKey="value" stroke="none" strokeWidth={"2px"} fill="url(#colorUv)" radius={[5,5,0,0]}>
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
        </div>
        </div>
    );
}

function onlyCurrentEmployees(data){
    var a=[]
    for(var i=0;i<data.root.length;i++){
        if(data.root[i].key[2]==null && data.root[i].key[3]==null){
            a.push({key:data.root[i].key[1]+" "+data.root[i].key[0],value:data.root[i].value})
        }
    }
    return {"root":a}
}


/*
//sample bar graph

import { BarChart, Bar, 
     CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

export default function BarChartExample(data){
    const data_only_current_emp=onlyCurrentEmployees(data)
    //this onlyCurrentemployees function will remove any values in the data that DONT have Date of leaving as null
    //thus we only get current employees in the final list
    return(
        <div style={{display:"flex",flexDirection:"column",width:"100%",height:"100%"}}>
        <div className="graph" style={{width:"100%",height:"100%",contain:"strict",overflow:"scroll"}}>
            <ResponsiveContainer>
                <BarChart
                    
                >
                    <defs>
                        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#72b4eb" stopOpacity={1}/>
                            <stop offset="95%" stopColor="#2085ec" stopOpacity={1}/>
                        </linearGradient>
                    </defs>
                    <CartesianGrid stroke="#777777" opacity={"30%"}/>
                    <XAxis className="xaxistext" dataKey="key" stroke="var(--fontcolor)" fontSize={"10"}/>
                    <YAxis className="yaxistext" stroke="var(--fontcolor)" fontSize={"12"}/>
                    <Tooltip/>
                    <Legend/>
                    {data_only_current_emp.root.map(x => {
                        <Bar dataKey="value" data={x} stroke="none" strokeWidth={"2px"} fill="url(#colorUv)" radius={[5,5,0,0]}>
                        </Bar> 
                    })}
                </BarChart>
            </ResponsiveContainer>
        </div>
        </div>
    );
}

function onlyCurrentEmployees(data){
    var a=[]
    var leadersort={}
    for(var i=0;i<data.root.length;i++){
        if(data.root[i].key[2]==null && data.root[i].key[3]==null){
            a.push({key:data.root[i].key[1]+" "+data.root[i].key[0],value:data.root[i].value})
            if(leadersort[data.root[i].key[5]]){
                a.push({key:data.root[i].key[1]+"/"+data.root[i].key[0],value:data.root[i].value})
            }
            else{
                leadersort[]
                a[data.root[i].key[5]]=[{key:data.root[i].key[1]+"/"+data.root[i].key[0],value:data.root[i].value}]
            }
        }
    }
    console.log("Outttt")
    console.log(leadersort)
    return {"root":leadersort}
}
    

*/