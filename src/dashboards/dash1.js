//dashboard for employee type

import "./index.css"
import PieChartExample from "./charts/piechart";
import BarChartExample from "./charts/barchart";
import LineChartExample from "./charts/linechart";
import ScatterChartExample from "./charts/scatterchart";
import AreaChartExample from "./charts/areachart";
import { Table } from "./charts/table";
import { useState } from "react";
import TableData from "./charts/data/maindata";
import getData from "./charts/data/datas";

export default function Dash1(whichEmpType,setWhichEmpType){
    const piedata=getData("Emp_Type");
    return(
        <div className="gridbg">
                    <div className='box bigbox box1'>
                        <div className="boxheader">Box 1</div>
                        <div className="boxarea">
                        <div class="filtertable">
                            <div style={{width:"fit-content",alignItems:"center"}}><p style={{fontSize:"14px",margin:"5px 0px 0px 5px",whiteSpace:"nowrap"}}>Choose Employee Type :</p></div>
                            <div onClick={()=>{setWhichEmpType(whichEmpType==="P"?"T":whichEmpType==="T"?"all":"P")}} style={{display:"flex",margin:"5px 0px 0px 5px",borderRadius:"25px",backgroundColor:"#77777717",width:"fit-content",padding:"5px",fontSize:"14px",cursor:"pointer",userSelect:"none"}}>
                                <div style={{color:whichEmpType==="P"?"black":"#bbbbbb",margin:"0px 10px 0px 10px"}}>Permanent</div>/
                                <div style={{color:whichEmpType==="T"?"black":"#bbbbbb",margin:"0px 10px 0px 10px"}}>Temporary</div>/
                                <div style={{color:whichEmpType==="all"?"black":"#bbbbbb",margin:"0px 10px 0px 10px"}}>All</div>
                            </div>
                        </div>
                            {
                            Table("emptype",whichEmpType)
                            }
                        </div>
                    </div>
                    <div className='box bigbox box2'>
                        <div className="boxheader">Box 2</div>
                            <div className="boxarea"><BarChartExample/></div>
                    </div>
                    <div className="box box3">
                        <div className="boxheader">Box 3</div>
                        <div className="boxarea"><AreaChartExample/></div>
                    </div>
                    <div className="box box4">
                        <div className="boxheader">Box 4</div>
                        <div className="boxarea">{LineChartExample()}</div>
                    </div>
                    <div className="box box5">
                        <div className="boxheader">Box 5</div>
                        <div className="boxarea">
                            {
                            PieChartExample(piedata)
                            }
                            </div>
                    </div>
                </div>
    )
}