//dashboard for work location

import "../../index.css"
import onlyCurrentEmployees from "../functions/onlyCurrentEmployees";
import { useState } from "react";
import ChooseBox from "../../choosebox";
import Month_Dropdown from "../miscellaneous/month_dropdown";
import Year_Dropdown from "../miscellaneous/year_dropdown";

import { GroupedBarChart } from "@carbon/charts-react";
import '@carbon/charts-react/styles.css'
import baroptions from "../miscellaneous/barchart_options";

export default function Dash3(data_location){
    
    const [month3,setMonth3]=useState(1);
    const [year3,setYear3]=useState(2000);
    return(
        <div style={{border:"4px solid black",borderRadius:"10px",padding:"10px"}}>
            <div className="subdashheader">Location</div>
                <div className="gridbg">
                    <div className='box box1'>
                        <a href={"/dashnew?a=barchart&b=location&c="+month3+"&d="+year3} target="_blank">
                            <div style={{position:"absolute",margin:"5px",width:"20px",height:"20px",borderRadius:"50%",backgroundColor:"#77777777"}}>
                                
                            </div>
                        </a>
                        <div className="boxheader">Number of employees under each leader</div>
                        <div className="boxarea">
                            <div style={{display:"flex",alignItems:"center",width:"calc(100% - 20px)",justifyContent:"center",padding:"10px"}}>
                                {Month_Dropdown(setMonth3)}
                                {Year_Dropdown(setYear3)}
                            </div>
                            <GroupedBarChart data={onlyCurrentEmployees(data_location,month3,year3)}
                                options={baroptions}/>
                           
                    </div>
                    </div>
                    <div className="box box2">
                        <a href={"/dashnew?a=tablechart&b=location&c="+month3+"&d="+year3} target="_blank">
                            <div style={{position:"absolute",margin:"5px",width:"20px",height:"20px",borderRadius:"50%",backgroundColor:"#77777777"}}>
                                </div>
                        </a>
                            {ChooseBox("tablechart","location")}
                    </div>
                    <div className="box box3">
                        <a href={"/dashnew?a=piechart&b=location&c="+month3+"&d="+year3} target="_blank">
                            <div style={{position:"absolute",margin:"5px",width:"20px",height:"20px",borderRadius:"50%",backgroundColor:"#77777777"}}>
                    
                            </div>
                        </a>
                        {ChooseBox("piechart","location")}
                    </div>
                    </div>
                </div>
    )
}