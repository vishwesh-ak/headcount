import axios from "axios";
import { useEffect,useState } from "react";
      

/*These are the variables for storing data obtained from database!! */
import DOJdata from "./DOJdata";
import DOLdata from "./DOLdata";
import EMPTYPEdata from "./EMPTYPEdata";
import DIVERSITYdata from "./DIVERSITYdata";
import LOCATIONdata from "./LOCATIONdata";
import fulldata from "./fulldata";

//this is where i send the data to the files that request them

export default function getData(choice){
    if(choice==="fulldata"){
        return fulldata.rows;
    }
    if(choice==="DOJ"){
        return DOJdata.rows;
    }
    if(choice==="DOL"){
        return DOLdata.rows;
    }
    if(choice==="Emp_Type"){
        return EMPTYPEdata.rows;
    }
    if(choice==="Diversity"){
        return DIVERSITYdata.rows;
    }
    if(choice==="Location")
        return LOCATIONdata.rows;
    return LOCATIONdata.rows;
}
