//sample linechart

import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

export default function LineChartExample(data){
    var data_current=onlyCurrentEmployees(data,"Y");
    var data_old=onlyCurrentEmployees(data,"N")
    console.log("DATS: ")
    console.log(data)
    return(
        <>
            <div className="graph">
                <ResponsiveContainer>
                    <LineChart
                    >
                        <CartesianGrid stroke="#55555555"/>
                        <XAxis className="xaxistext" dataKey="key" stroke="var(--fontcolor)"/>
                        <YAxis className="yaxistext" stroke="var(--fontcolor)"/>
                        <Tooltip itemStyle={{color:"var(--fontcolor"}}/>
                        <Legend 
                            formatter={(value,entry,index)=> 
                            <span style={{color:"var(--fontcolor)"}}>{value}</span>}
                        />

                        <Line dataKey="value" data={data_current.root} stroke="#38bfbc" strokeWidth={"1px"} fill="#766ebc"/>
                        <Line dataKey="value" data={data_old.root} stroke="red" strokeWidth={"1px"} fill="#766ebc"/>
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </>
    );
}

function onlyCurrentEmployees(data,y_or_n){
    var a=[]
    var b=[]
    for(var i=0;i<data.root.length;i++){
        if(data.root[i].key[2]==null && data.root[i].key[3]==null){
            a.push({key:data.root[i].key[1]+"/"+data.root[i].key[0],value:data.root[i].value})
        }
        else{
            b.push({key:data.root[i].key[1]+"/"+data.root[i].key[0],value:data.root[i].value})
        }
    }
    if(y_or_n=="Y")
        return {"root":a}
    return {"root":b}
}
