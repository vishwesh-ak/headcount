//dashboard for employee type

import "../../index.css"
import { useState } from "react";
import onlyCurrentEmployees from "../functions/onlyCurrentEmployees";
import ChooseBox from "../../choosebox";
import Month_Dropdown from "../miscellaneous/month_dropdown";
import Year_Dropdown from "../miscellaneous/year_dropdown";
import { GroupedBarChart } from "@carbon/charts-react";
import '@carbon/charts-react/styles.css'
import baroptions from "../miscellaneous/barchart_options";

export default function Dash1(data_emptype){
    const [month1,setMonth1]=useState(1);
    const [year1,setYear1]=useState(2000);
    return(

        <div style={{border:"4px solid black",borderRadius:"10px",padding:"10px"}}>
            <div className="subdashheader">Employee Type</div>
            <div className="gridbg">
                <div className='box box1'>
                    <a href={"/dashnew?a=barchart&b=emptype&c="+month1+"&d="+year1} target="_blank">
                        <div style={{position:"absolute",margin:"5px",width:"20px",height:"20px",borderRadius:"50%",backgroundColor:"#77777777"}}/>
                    </a>
                    <div className="boxheader">Number of employees under each leader</div>
                    <div className="boxarea">
                        <div style={{display:"flex",alignItems:"center",width:"calc(100% - 20px)",justifyContent:"center",padding:"10px"}}>
                            {Month_Dropdown(setMonth1)}
                            {Year_Dropdown(setYear1)}
                        </div>
                        <GroupedBarChart data={onlyCurrentEmployees(data_emptype,month1,year1)} 
                                options={baroptions}
                                />
                    </div>
                </div>  
                <div className="box box2">
                    <div className="boxheader">Employee type vs time</div>
                    {/* <div className="boxarea">{LineChartExample(data_emptype)}</div> */}
                </div>
                <div className="box box3">
                    <a href={"/dashnew?a=piechart&b=emptype&c="+month1+"&d="+year1} target="_blank">
                        <div style={{position:"absolute",margin:"5px",width:"20px",height:"20px",borderRadius:"50%",backgroundColor:"#77777777"}}>
                            
                        </div>
                    </a>
                    {ChooseBox("piechart","emptype",month1,year1)}
                </div>
            </div>
        </div>
    )
}