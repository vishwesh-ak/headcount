/*These are the variables for storing data obtained from database!! */


const DOJdata={"root":[
    {key:[2000,1],value:1},
    {key:[2000,2],value:2},
    {key:[2000,3],value:1},
    {key:[2000,4],value:2}
]}

const DOLdata={"root":[
    {key:[null,null],value:4},
    {key:[2001,2],value:1},
    {key:[2002,1],value:2},
    {key:[2002,5],value:0}
]}

const EMPTYPEdata={"root":[
    {key:[2000,1,null,null,"P","Joseph"],value:1},
    {key:[2000,2,2001,2,"T","Karla"],value:2},
    {key:[2000,3,null,null,"P","Karla"],value:2},
    {key:[2000,4,2002,1,"P","Joseph"],value:1}
]}

const DIVERSITYdata={"root":[
    {key:[2000,1,null,null,"Y","Mindy"],value:1},
    {key:[2000,2,2001,2,"Y","Nathan"],value:3},
    {key:[2000,3,null,null,"N","Oscar"],value:5},
    {key:[2000,4,2002,1,"N","Paul"],value:1}
]}

const LOCATIONdata={"root":[
    {key:[2000,1,null,null,"Bangalore"],value:1},
    {key:[2000,1,null,null,"Chennai"],value:1},
    {key:[2000,2,2001,2,"Chennai"],value:1},
    {key:[2000,3,null,null,"Bangalore"],value:1},
    {key:[2000,4,2002,1,"Bangalore"],value:3}
]}

export default function getData(choice){
    if(choice==="DOJ"){
        return DOJdata;
    }
    if(choice==="DOL"){
        return DOLdata;
    }
    if(choice==="Emp_Type"){
        return EMPTYPEdata;
    }
    if(choice==="Diversity"){
        return DIVERSITYdata;
    }
    return LOCATIONdata;
}
