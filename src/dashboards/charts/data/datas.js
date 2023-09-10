/*These are the variables for storing data obtained from database!! */
const fulldata={"root":[
    {"Emp_No": 913347,
    "Emp_Name": "Anna",
    "Dept_Code": "QWE",
    "Dept_Name": "Dept 1",
    "isManager": "YES",
    "Emp_Type": "P",
    "Location": "EGLC|A021|6F",
    "Mgr_Name": "Frank",
    "Leader_Name": "Erin",
    "Emp_mail": "anna@gmail.com",
    "Diversity": "N",
    "Work_Location": "Bangalore",
    "DOJ": [2000,1,1],
    "DOL": {}},

    {"Emp_No": 916547,
    "Emp_Name": "Billy",
    "Dept_Code": "QAZ",
    "Dept_Name": "Dept 2",
    "isManager": "YES",
    "Emp_Type": "P",
    "Location": "PANV|NA|GF",
    "Mgr_Name": "Frank",
    "Leader_Name": "Georgia",
    "Emp_mail": "billy@gmail.com",
    "Diversity": "Y",
    "Work_Location": "Bangalore",
    "DOJ": [2002,1,1],
    "DOL": {}},
    
    {
        "Emp_No": 919299,
        "Emp_Name": "Cecilia",
        "Dept_Code": "QDE",
        "Dept_Name": "Dept 3",
        "isManager": "NO",
        "Emp_Type": "T",
        "Location": "CECI|CONT|9P",
        "Mgr_Name": "Erin",
        "Leader_Name": "Danny",
        "Emp_mail": "cecilia@gmail.com",
        "Diversity": "Y",
        "Work_Location": "Bangalore",
        "DOJ": [2000,7,9],
        "DOL": [2000,10,10]
    },
    {
        "Emp_No": 924344,
        "Emp_Name": "Danny",
        "Dept_Code": "QQU",
        "Dept_Name": "Dept 3",
        "isManager": "YES",
        "Emp_Type": "P",
        "Location": "RR|P0|2F",
        "Mgr_Name": "Frank",
        "Leader_Name": "Erin",
        "Emp_mail": "danny@gmail.com",
        "Diversity": "N",
        "Work_Location": "Bangalore",
        "DOJ": [2003,1,5],
        "DOL": {}
    },{
        "Emp_No": 916547,
        "Emp_Name": "Erin",
        "Dept_Code": "QBA",
        "Dept_Name": "Dept 2",
        "isManager": "YES",
        "Emp_Type": "P",
        "Location": "PANW|6RT|G",
        "Mgr_Name": "Frank",
        "Leader_Name": "Georgia",
        "Emp_mail": "erin@gmail.com",
        "Diversity": "Y",
        "Work_Location": "Bangalore",
        "DOJ": [2002,5,1],
        "DOL": {}
    }]
}

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
    {key:[2000,1,null,null,"P","Erin"],value:1},
    {key:[2000,2,2001,2,"T","Danny"],value:2},
    {key:[2000,3,null,null,"P","Georgia"],value:2},
    {key:[2000,4,2002,1,"P","Danny"],value:1}
]}

const DIVERSITYdata={"root":[
    {key:[2000,1,null,null,"Y","Erin"],value:1},
    {key:[2000,2,2001,2,"Y","Georgia"],value:3},
    {key:[2000,3,null,null,"N","Danny"],value:5},
    {key:[2000,4,2002,1,"N","Erin"],value:1}
]}

const LOCATIONdata={"root":[
    {key:[2000,1,null,null,"Bangalore","Erin"],value:1},
    {key:[2000,1,null,null,"Chennai","Danny"],value:1},
    {key:[2000,2,2001,2,"Chennai","Erin"],value:1},
    {key:[2000,3,null,null,"Bangalore","Georgia"],value:1},
    {key:[2000,4,2002,1,"Bangalore","Danny"],value:3}
]}


export default function getData(choice){
    if(choice=="fulldata"){
        return fulldata;
    }
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
    if(choice==="Location")
        return LOCATIONdata;
    return LOCATIONdata;
}
