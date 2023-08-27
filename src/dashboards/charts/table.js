//table plotter function

import TableData from "./data/maindata";
import "../index.css";

export function Table(criteria,expectedval="all"){
    const data=TableData("tabledata","");
    var count=0;
    var copy;
    return(
        <div style={{marginBottom:"auto",marginTop:"0px",width:"100%"}}>
            <table className="table">
                <tr className="oddrow">
                    <th>Column1</th>
                    <th>Column2</th>
                    <th>Column3</th>
                    <th>Column4</th>
                    <th>Column5</th>
                    <th>Column6</th>
                    <th>Column7</th>
                    <th>Column8</th>
                    <th>Column9</th>
                    <th>Column10</th>
                    <th>Column11</th>
                    <th>Column12</th>
                </tr>
                {
                    data.map((val, key) => {
                        if(criteria==="diversity")
                            copy=val.k;
                        else if(criteria==="emptype")
                            copy=val.l;
                        else
                            copy=val.m;
                        if(copy===expectedval || expectedval==="all"){
                            count=count+1;
                        return (
                            <tr className={count%2==1?"evenrow":"oddrow"} key={key} onClick={()=>{console.log("Key is "+key)}}>
                                <td>{val.Emp_No}</td>
                                <td>{val.Emp_Name}</td>
                                <td>{val.Dept_Code}</td>
                                <td>{val.Dept_Name}</td>
                                <td>{val.isManager}</td>
                                <td>{val.Location}</td>
                                <td>{val.Mgr_Name}</td>
                                <td>{val.Leader_Name}</td>
                                <td>{val.Emp_mail}</td>
                                <td>{val.Diversity}</td>
                                <td>{val.Emp_Type}</td>
                                <td>{val.Work_Location}</td>
                            </tr>
                        )
                        }}
                    )
                }
            </table>
        </div>
    )
}