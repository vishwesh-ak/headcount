//returns the  hardcoded table data

const tabledata=[
        {
            Emp_No:"9112",Emp_Name:"Alice",Dept_Code:"QWE",Dept_Name:"HR",isManager:"YES",
            Location:"PANB|GF|NA",Mgr_Name:"Bob",Leader_Name:"Christine",
            Emp_mail:"alice@gmail.com",Diversity:"N",Emp_Type:"P",Work_Location:"Mumbai",DOJ:[2002,1],DOL:[]
        },
        {
            Emp_No:"4612",Emp_Name:"Bob",Dept_Code:"QWS",Dept_Name:"Customer Service",isManager:"YES",
            Location:"EGLC|A021|6F",Mgr_Name:"Damian",Leader_Name:"Christine",
            Emp_mail:"bob@gmail.com", Diversity:"Y",Emp_Type:"P",Work_Location:"Bangalore",DOJ:[2002,2],DOL:[]
        },
        {
            Emp_No:"7787",Emp_Name:"Christine",Dept_Code:"QVD",Dept_Name:"Management",isManager:"YES",
            Location:"EQVC|Z56",Mgr_Name:"Frank",Leader_Name:"Ellen",Emp_mail:"christine@gmail.com",
            Diversity:"Y", Emp_Type:"T",Work_Location:"Kolkata",DOJ:[2002,1],DOJ:[2002,5]
        },
        {
            Emp_No:"9212",Emp_Name:"Damian",Dept_Code:"ABT",Dept_Name:"Management",isManager:"YES",
            Location:"EGLC|A021|6F",Mgr_Name:"Ellen",Leader_Name:"Frank",
            Emp_mail:"damian@gmail.com", Diversity:"Y",Emp_Type:"P",Work_Location:"Bangalore",DOJ:[2002,1],DOL:[]
        },
        
        {
            Emp_No:"2233",Emp_Name:"Ellen",Dept_Code:"PPF",Dept_Name:"Cryptography",isManager:"YES",
            Location:"CRYP|7D",Mgr_Name:"George",Leader_Name:"Hannah",
            Emp_mail:"ellen@gmail.com", Diversity:"Y",Emp_Type:"T",Work_Location:"Kolkata",DOJ:[2002,1],DOL:[2005,3]
        },
        {
            Emp_No:"5673",Emp_Name:"Frank",Dept_Code:"AAF",Dept_Name:"Network Security",isManager:"YES",
            Location:"NS|55R",Mgr_Name:"George",Leader_Name:"Hannah",
            Emp_mail:"frank@gmail.com", Diversity:"N",Emp_Type:"P",Work_Location:"Mumbai",DOJ:[2002,1],DOL:[]
        },
        {
            Emp_No:"3956",Emp_Name:"George",Dept_Code:"PPF",Dept_Name:"Management",isManager:"YES",
            Location:"PTU|XR",Mgr_Name:"Irene",Leader_Name:"Jane",
            Emp_mail:"george@gmail.com", Diversity:"Y",Emp_Type:"P",Work_Location:"Delhi",DOJ:[2002,1],DOL:[]
        },
        {
            Emp_No:"9090",Emp_Name:"Hannah",Dept_Code:"PPF",Dept_Name:"Management",isManager:"YES",
            Location:"PTU|XR",Mgr_Name:"Irene",Leader_Name:"Jane",
            Emp_mail:"hannah@gmail.com", Diversity:"N",Emp_Type:"P",Work_Location:"Chennai",DOJ:[2002,1],DOL:[]
        },
    ];
const piechartdataemptype=[{key:"P",value:6},{key:"T",value:2}]

const piechartdiversity=[{key:"Y",value:5},{key:"N",value:3}]

const piechartlocation=[{key:"Mumbai",value:2},
                {key:"Bangalore",value:2},
                {key:"Kolkata",value:2},
                {key:"Delhi",value:1},
                {key:"Chennai",value:1}]

var linegraphdata=[
    {key:"2000-01-01",value:1},
    {key:"2000-02-01",value:1},
    {key:"2000-02-03",value:1},
    {key:"2000-02-06",value:1}
]

export default function TableData(i){
    if(i==="tabledata")
    {return tabledata;}
    else{
        if(i=="piechart"){
            return i=="piechartemptype"?piechartdataemptype:i=="piechartdiversity"?piechartdiversity:piechartlocation;
        }
        else{
            if(i==="linechart"){
                return linegraphdata;
            }
        }
    }
}

function getDatesInRange(startDate, endDate) {
    const dates = [];
    let currentDate = new Date(startDate);
  
    while (currentDate <= new Date(endDate)) {
      const year = currentDate.getFullYear();
      const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
      const day = currentDate.getDate().toString().padStart(2, '0');
  
      const formattedDate = `${year}-${month}-${day}`;
      dates.push(formattedDate);
  
      currentDate.setDate(currentDate.getDate() + 1);
    }
  
    return dates;
  }
  
function padMonths(data){
    var v=data[0].value; 
    var i,j,a=[];
    var len=data.length;
    var newdat=[{key:data[0].key,value:v}]
    for(i=1;i<len;i++){
        var datesInRange = getDatesInRange(data[i-1].key, data[i].key);
        console.log("A")
        console.log(datesInRange)
        for(j=1;j<datesInRange.length;j++)
            newdat.push({key:datesInRange[j],val:2});
        newdat.push({key:data[i].key,value:data[i].value})
    }
    for(i=0;i<newdat.length;){
        if(newdat[i].value==undefined){
            newdat.splice(i,1);
            i--;
        }
        i++;
    }
    return newdat
}