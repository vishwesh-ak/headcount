//if you want the data as normal variables instead of states
//import the data of all rows into this variable
//replace RHS of the equation as necessary


// if you need the variables as states instead, then uncomment this block of code
/*
import { useState } from "react";
const [fulldata,setFullData]=useState({})
*/

//else, import all values in dataabse into this variable
const fulldata={"rows":[
    {   "key": [913347,"Anna","QWE","Dept 1",
                "YES","P","EGLC|A021|6F","Frank",
                "Erin","anna@gmail.com","N","Bangalore",
                 "2000-01-01",{}],
        "value":1
    },
    {   "key":  [916547,"Billy","QAZ","Dept 2","YES","P","PANV|NA|GF",
                "Frank","Georgia","billy@gmail.com","Y","Bangalore",
                "2002-01-01",{}],
        "value":1},
    
    {   "key":  [919299,"Cecilia","QDE","Dept 3", "NO","T", "CECI|CONT|9P",
                "Erin","Danny","cecilia@gmail.com","Y","Bangalore",
                "2000-07-09","2000-10-10"],
        "value":1
    },
    {   "key": [924344,"Danny","QQU","Dept 3","YES","P","RR|P0|2F",
                "Frank","Erin","danny@gmail.com","N","Bangalore",
                "2003-01-05",{}],
        "value":1
    },
    {   "key": [916547,"Erin","QBA","Dept 2","YES","P","PANW|6RT|G",
                "Frank","Georgia","erin@gmail.com","Y", "Bangalore",
                "2002-05-01", {}],
        "value":1
    }
    ]
}
export default fulldata;