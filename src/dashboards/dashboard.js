//dashboard

import "./index.css"
import PieChartExample from "./charts/piechart";
import BarChartExample from "./charts/barchart";
import LineChartExample from "./charts/linechart";
import AreaChartExample from "./charts/areachart";
import DashNew from "./dashnew";
import { useState } from "react";
import getData from "./charts/data/datas";
import ChooseBox from "./choosebox";
export default function Dashboard(){
    const data_doj=getData("DOJ");
    const data_dol=getData("DOL");
    const data_emptype=getData("Emp_Type");
    const data_diversity=getData("Diversity");
    const data_location=getData("Location")

   
    var [piemonth1,setPieMonth1]=useState(1);
    var [pieyear1,setPieYear1]=useState(2000);
    var [piemonth2,setPieMonth2]=useState(1);
    var [pieyear2,setPieYear2]=useState(2000);
    var [piemonth3,setPieMonth3]=useState(1);
    var [pieyear3,setPieYear3]=useState(2000);

    var new_data_dol={"root":[]};
    for(let i=1;i<data_dol.root.length;i++)
        new_data_dol.root.push(data_dol.root[i])
    return(
        <div className="dashgrid">
            <div>
                <div className="subdashheader">Employee Type</div>
                <div className="gridbg">
                    <a href="/dashnew?a=barchart&b=emptype" target="_blank" style={{gridColumn:"span 7"}}>
                    <div className='box box2'>
                        {ChooseBox("barchart","emptype")}
                    </div>  
                    </a>
                    <div className="box box4">
                        <div className="boxheader">Employee type vs time</div>
                        <div className="boxarea">{LineChartExample(data_emptype)}</div>
                    </div>
                    <a href="/dashnew?a=piechart&b=emptype" style={{gridColumn:"span 3"}} target="_blank">
                    <div className="box box5">
                        {ChooseBox("piechart","emptype")}
                    </div>
                    </a>
                </div>
            </div>
            <div>
                <div className="subdashheader">Diversity</div>
                <div className="gridbg">
                    <a href="/dashnew?a=barchart&b=diversity" target="_blank" style={{gridColumn:"span 7"}}>
                    <div className='box box2'>
                        {ChooseBox("barchart","diversity")}
                    </div>  
                    </a>
                    <div className="box box4">
                        <div className="boxheader">Diversity vs time</div>
                        <div className="boxarea">{LineChartExample(data_diversity)}</div>
                    </div>
                    <a href="/dashnew?a=piechart&b=diversity" style={{gridColumn:"span 3"}} target="_blank">
                    <div className="box box5">
                        {ChooseBox("piechart","diversity")}
                     </div>
                    </a>
                    </div>
                </div>
                <div>
                <div className="subdashheader">Location</div>
                <div className="gridbg">
                    <a href="/dashnew?a=barchart&b=location" target="_blank" style={{gridColumn:"span 7"}}>
                    <div className='box box2'>
                        {ChooseBox("barchart","location")}
                    </div>
                    </a>
                    <div className="box box4">
                        <div className="boxheader">Location vs time</div>
                        <div className="boxarea">{LineChartExample(data_location)}</div>
                    </div>
                    <a href="/dashnew?a=piechart&b=location" target="_blank" style={{gridColumn:"span 3"}}>
                    <div className="box box5">
                        {ChooseBox("piechart","location")}
                    </div>
                    </a>
                    </div>
                </div>
                
                <div>
                <div className="subdashheader">Onboarding / Separation</div>
                <div className="gridbg onboard">
                    <a href="/dashnew?a=areachart&b=doj" style={{gridColumn:"span 9"}} target="_blank">
                    <div className='box box2' style={{gridColumn:"span 9"}}>
                            {ChooseBox("areachart","doj")}
                    </div>
                    </a>
                <a href="/dashnew?a=areachart&b=dol" style={{gridColumn:"span 9"}} target="_blank">
                    <div className="box box3" style={{gridColumn:"span 9"}}>
                        {ChooseBox("areachart","dol")}
                    </div>
                </a>
                </div>
            </div>
        </div>
    );

    /*
<div className="row1to1">
                        <div className="box box3">
                            <div className="boxheader">Box 3</div>
                            <div className="boxarea"><Chart1/></div>
                        </div>
                        <div className="box box4">
                            <div className="boxheader">Box 4</div>
                            <div className="boxarea"><Chart3/></div>
                        </div>
                        <div className="box box5">
                            <div className="boxheader">Box 5</div>
                            <div className="boxarea"><Chart4/></div>
                        </div>
                        <div className="box box6">
                            <div className="boxheader">Box 6</div>
                            <div className="boxarea"><Chart5/></div>
                        </div>
                    </div>
    */
}