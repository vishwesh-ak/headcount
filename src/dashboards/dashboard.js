//dashboard

import "./index.css"
import PieChartExample from "./charts/piechart";
import BarChartExample from "./charts/barchart";
import LineChartExample from "./charts/linechart";
import AreaChartExample from "./charts/areachart";
import { Table } from "./charts/table";
import { useState } from "react";
import getData from "./charts/data/datas";
export default function Dashboard(){
    const data_doj=getData("DOJ");
    const data_dol=getData("DOL");
    const data_emptype=getData("Emp_Type");
    const data_diversity=getData("Diversity");
    const data_location=getData("Location")

    var new_data_dol={"root":[]};
    var [piemonth1,setPieMonth1]=useState(1);
    var [pieyear1,setPieYear1]=useState(2000);
    var [piemonth2,setPieMonth2]=useState(1);
    var [pieyear2,setPieYear2]=useState(2000);
    var [piemonth3,setPieMonth3]=useState(1);
    var [pieyear3,setPieYear3]=useState(2000);
    for(let i=1;i<data_dol.root.length;i++)
        new_data_dol.root.push(data_dol.root[i])
    return(
        <div className="dashgrid">
            <div>
                <div className="subdashheader">Employee Type</div>
                <div className="gridbg">
                    <div className='box box2'>
                        <div className="boxheader">Box 2</div>
                        <div className="boxarea">{BarChartExample(data_emptype)}</div>
                        {/* this function plots bargraph for the data_emptype as data */}
                    </div>
                    <div className="box box4">
                        <div className="boxheader">Employee type vs time</div>
                        <div className="boxarea">{LineChartExample(data_emptype)}</div>
                    </div>
                    <div className="box box5">
                        <div className="boxheader">Percentage</div>
                        <div className="boxarea">
                        <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
                            <select name="piemonth1" id="piemonth1" style={{height:"2em"}}>
                                <option value={1}>Jan</option><option value={2}>Feb</option><option value={3}>Mar</option>
                                <option value={4}>Apr</option><option value={5}>May</option><option value={6}>Jun</option>
                                <option value={7}>Jul</option><option value={8}>Aug</option><option value={9}>Sep</option>
                                <option value={10}>Oct</option><option value={11}>Nov</option><option value={12}>Dec</option>
                            </select>
                            <select name="pieyear1" id="pieyear1" style={{height:"2em"}}>
                                <option value={2000}>2000</option><option value={2001}>2001</option>
                                <option value={2002}>2002</option><option value={2003}>2003</option>
                            </select>
                        <button type="submit" style={{width:"30%",height:"2em"}} onClick={()=>{
                            setPieMonth1(document.getElementById("piemonth1").value);
                            setPieYear1(document.getElementById("pieyear1").value);
                            PieChartExample(data_location,piemonth1,pieyear1)
                            }}>Submit</button>
                        </div>
                            {
                            PieChartExample(data_emptype,piemonth1,pieyear1)
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="subdashheader">Diversity</div>
                <div className="gridbg">
                    <div className='box box2'>
                        <div className="boxheader">Box 2</div>
                            <div className="boxarea">{BarChartExample(data_diversity)}</div>
                    </div>
                    <div className="box box4">
                        <div className="boxheader">Diversity vs time</div>
                        <div className="boxarea">{LineChartExample(data_diversity)}</div>
                    </div>
                    <div className="box box5">
                        <div className="boxheader">Percentage</div>
                        <div className="boxarea">
                        <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
                            <select name="piemonth2" id="piemonth2" style={{height:"2em"}}>
                                <option value={1}>Jan</option><option value={2}>Feb</option><option value={3}>Mar</option>
                                <option value={4}>Apr</option><option value={5}>May</option><option value={6}>Jun</option>
                                <option value={7}>Jul</option><option value={8}>Aug</option><option value={9}>Sep</option>
                                <option value={10}>Oct</option><option value={11}>Nov</option><option value={12}>Dec</option>
                            </select>
                            <select name="pieyear2" id="pieyear2" style={{height:"2em"}}>
                                <option value={2000}>2000</option><option value={2001}>2001</option>
                                <option value={2002}>2002</option><option value={2003}>2003</option>
                            </select>
                        <button type="submit" style={{width:"30%",height:"2em"}} onClick={()=>{
                            setPieMonth2(document.getElementById("piemonth2").value);
                            setPieYear2(document.getElementById("pieyear2").value);
                            PieChartExample(data_location,piemonth2,pieyear2)
                            }}>Submit</button>
                        </div>
                            {
                            PieChartExample(data_diversity,piemonth2,pieyear2)
                            }
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                <div className="subdashheader">Location</div>
                <div className="gridbg">
                    <div className='box box2'>
                        <div className="boxheader">Box 2</div>
                            <div className="boxarea">{BarChartExample(data_location)}</div>
                    </div>
                    <div className="box box4">
                        <div className="boxheader">Location vs time</div>
                        <div className="boxarea">{LineChartExample(data_location)}</div>
                    </div>
                    <div className="box box5">
                        <div className="boxheader">Percentage</div>
                        <div className="boxarea">
                        <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
                            <select name="piemonth3" id="piemonth3" style={{height:"2em"}}>
                                <option value={1}>Jan</option><option value={2}>Feb</option><option value={3}>Mar</option>
                                <option value={4}>Apr</option><option value={5}>May</option><option value={6}>Jun</option>
                                <option value={7}>Jul</option><option value={8}>Aug</option><option value={9}>Sep</option>
                                <option value={10}>Oct</option><option value={11}>Nov</option><option value={12}>Dec</option>
                            </select>
                            <select name="pieyear3" id="pieyear3" style={{height:"2em"}}>
                                <option value={2000}>2000</option><option value={2001}>2001</option>
                                <option value={2002}>2002</option><option value={2003}>2003</option>
                            </select>
                        <button type="submit" style={{width:"30%",height:"2em"}} onClick={()=>{
                            setPieMonth3(document.getElementById("piemonth3").value);
                            setPieYear3(document.getElementById("pieyear3").value);
                            
                            PieChartExample(data_location,piemonth3,pieyear3)
                            }}>Submit</button>
                        </div>
                            {
                            PieChartExample(data_location,piemonth3,pieyear3)
                            }
                            </div>
                        </div>
                    </div>
                </div>
                
                <div>
                <div className="subdashheader">Onboarding / Separation</div>
                <div className="gridbg">
                    <div className='box box2' style={{gridColumn:"span 9"}}>
                        <div className="boxheader">Box 2</div>
                            <div className="boxarea">{AreaChartExample(data_doj)}</div>
                    </div>
                    <div className="box box3" style={{gridColumn:"span 9"}}>
                        <div className="boxheader">Box 3</div>
                        <div className="boxarea">
                            {
                            AreaChartExample(new_data_dol)
                            }
                            <p style={{textAlign:"center"}}>Number of employees currently in the company: {data_dol.root[0].value}
                            </p>
                        </div>
                    </div>
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