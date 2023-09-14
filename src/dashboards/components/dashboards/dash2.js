//dashboard for diversity

import "../../index.css"
import { useState } from "react";
import onlyCurrentEmployees from "../functions/onlyCurrentEmployees";

import ChooseBox from "../../choosebox";
import Month_Dropdown from "../miscellaneous/month_dropdown";
import Year_Dropdown from "../miscellaneous/year_dropdown";
import { GroupedBarChart } from "@carbon/charts-react";
import '@carbon/charts-react/styles.css'
import baroptions from "../miscellaneous/barchart_options";

export default function Dash2(data_diversity){
    
    const [month2,setMonth2]=useState(1);
    const [year2,setYear2]=useState(2000);

        return(
            <div style={{border:"4px solid black",borderRadius:"10px",padding:"10px"}}>
            <div className="subdashheader">Diversity</div>
            <div className="gridbg">
                <div className='box box1'>
                <a href={"/dashnew?a=barchart&b=diversitye&c="+month2+"&d="+year2} target="_blank">
                        <div style={{position:"absolute",margin:"5px",width:"20px",height:"20px",borderRadius:"50%",backgroundColor:"#77777777"}}>
                            
                        </div>
                    </a>
                    <div className="boxheader">Number of employees under each leader</div>
                    <div className="boxarea"    >
                        <div style={{display:"flex",alignItems:"center",justifyContent:"center",padding:"10px"}}>
                            {Month_Dropdown(setMonth2)}
                            {Year_Dropdown(setYear2)}
                        </div>
                        <GroupedBarChart data={onlyCurrentEmployees(data_diversity,month2,year2)}
                            options={baroptions}/>
                    </div>
                </div>  
                <div className="box box2">
                    <div className="boxheader">Diversity vs time</div>
                    <div className="boxarea">{/*LineChartExample(data_diversity)*/}</div>
                </div>
                
                <div className="box box3">
                    
                <a href={"/dashnew?a=piechart&b=diversity&c="+month2+"&d="+year2} target="_blank">
                        <div style={{position:"absolute",margin:"5px",width:"20px",height:"20px",borderRadius:"50%",backgroundColor:"#77777777"}}>
                            
                        </div>
                    </a>
                    {ChooseBox("piechart","diversity")}
                 </div>
                </div>
            </div>
            )
}