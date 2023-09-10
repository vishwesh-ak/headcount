//sample pie chart

import TrialData from "./data/trialdata";
import {PieChart,Pie, ResponsiveContainer, Tooltip,Cell, Legend, ZAxis} from "recharts";


var COLOR=["#2085ec","#72b4eb","#0a417a","#8464a0","#cea9bc","#323232"]

function PieChartExample(data){
    
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

