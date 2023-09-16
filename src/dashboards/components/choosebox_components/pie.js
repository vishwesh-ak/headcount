import { useState } from "react";
import Month_Dropdown from "../miscellaneous/month_dropdown";
import Year_Dropdown from "../miscellaneous/year_dropdown";
import makePieValues from "../functions/makePieValues";
import { DonutChart, PieChart } from "@carbon/charts-react";
import pieoptions from "../miscellaneous/piechart_options";
import "../../index.css"
import { ResponsiveContainer } from "recharts";
export const PieGraph=(data,month,year)=>{
    var [piemonth,setPieMonth]=useState(month);
    var [pieyear,setPieYear]=useState(year);
    return(
        <>
            <div className="boxheader">Percentage</div>
            <div className="boxarea" style={{width:"90%"}}>
                <div className="datemonthflex" style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
                    {Month_Dropdown(setPieMonth)}
                    {Year_Dropdown(setPieYear)}
                </div>
                <DonutChart data={makePieValues(data,piemonth,pieyear)}
                        options={pieoptions}/>
            </div>  
        </>

    )
}
export default PieGraph;