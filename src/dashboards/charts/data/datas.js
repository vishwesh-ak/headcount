/*These are the variables for storing data obtained from database!! */
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

const DOJdata={"rows":[
    {key:[2000,1],value:1},
    {key:[2000,2],value:2},
    {key:[2000,3],value:1},
    {key:[2000,8],value:2}
]}

const DOLdata={"rows":[
    {key:[null,null],value:4},
    {key:[2001,2],value:1},
    {key:[2002,1],value:2},
    {key:[2002,5],value:0}
]}

const EMPTYPEdata={"rows":[
    {key:[2000,1,null,null,"P","Danny"],value:1},
    {key:[2000,2,2001,2,"T","Georgia"],value:2},
    {key:[2000,3,null,null,"P","Erin"],value:2},
    {key:[2000,4,2002,1,"P","Georgia"],value:1}
]}

const DIVERSITYdata={"rows":[
    {key:[2000,1,null,null,"Y","Erin"],value:1},
    {key:[2000,2,2001,2,"Y","Georgia"],value:3},
    {key:[2000,3,null,null,"N","Danny"],value:5},
    {key:[2000,4,2002,1,"N","Erin"],value:1}
]}

const LOCATIONdata={"rows":[
    {key:[2000,1,null,null,"Bangalore","Erin"],value:1},
    {key:[2000,1,null,null,"Chennai","Danny"],value:1},
    {key:[2000,2,2001,2,"Chennai","Erin"],value:1},
    {key:[2000,3,null,null,"Bangalore","Georgia"],value:1},
    {key:[2000,4,2002,1,"Trivandrum","Danny"],value:3}
]}


export default function getData(choice){
    if(choice=="fulldata"){
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
