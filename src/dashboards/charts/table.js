//table plotter function

import TableData from "./data/maindata";
import "../index.css";

export function TableLeader(data,leader){
    var count=0;
    return(
        <div style={{width:"100%",height:"100%"}}>
            <table className="table" style={{margin:"auto"}}>
                <tr className="oddrow">
                    <th>Column1</th>
                    <th>Column2</th>
                    <th>Column3</th>
                    <th>Column4</th>
                    <th>Column5</th>
                    <th>Column6</th>
                    <th>Column7</th>
                    <th>Column8</th>
                </tr>
                {
                    data.root.map((val, key) => {
                        if(val.Leader_Name===leader){
                            count=count+1;
                        return (
                            <tr className={count%2==1?"evenrow":"oddrow"} key={key} onClick={()=>{console.log("Key is "+key)}}>
                                <td>{val.Emp_No}</td>
                                <td>{val.Emp_Name}</td>
                                <td>{val.Dept_Code}</td>
                                <td>{val.Dept_Name}</td>
                                <td>{val.Leader_Name}</td>
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

function onlyCurrentEmployees(data,month,year){
    var a={}
    var keys=[]
    for(var i=0;i<data.root.length;i++){
        if(data.root[i].key[0]==year && data.root[i].key[1]>month){
            continue;
        }
        if(data.root[i].key[0]>year){
            continue
        }
        
        if(data.root[i].key[2]==null && data.root[i].key[3]==null){
            if(a[data.root[i].key[5]]) {
                a[data.root[i].key[5]]+=data.root[i].value;
              } else {
                a[data.root[i].key[5]] = data.root[i].value;
                keys.push(data.root[i].key[5])
              }
            console.log("1\n")
            console.log(a)
            console.log(month)
            console.log(year)
        }
        if(data.root[i].key[2]==year && data.root[i].key[3]>=month){
            if(a[data.root[i].key[5]]) {
                a[data.root[i].key[5]]++;
              } else {
                a[data.root[i].key[5]] = data.root[i].value;
                keys.push(data.root[i].key[5])
              }
            console.log("2\n")
            console.log(a)
            continue;
        }
        if(data.root[i].key[2]>year){
            if(a[data.root[i].key[5]]) {
                a[data.root[i].key[5]]++;
              } else {
                a[data.root[i].key[5]] = data.root[i].value;
                keys.push(data.root[i].key[5])
              }
            console.log("3\n")
            console.log(a)
            }
    }
    console.log("A IS: ")
    console.log(a)
    var b=[]
    for(i=0;i<keys.length;i++){
        b.push({key:keys[i],value:a[keys[i]]})
    }
    console.log("B IS ")
    console.log(b)
    return {"root":b}
}

/*
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
}*/