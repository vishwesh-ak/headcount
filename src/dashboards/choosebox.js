//changed
import "./index.css"
import getData from "./data/datas";
import "../App.scss"

import AreaGraph from "./components/choosebox_components/area"
import PieGraph from "./components/choosebox_components/pie"
import BarGraph from "./components/choosebox_components/bar"
import Groupwise_DOJ_DOL_Table from "./components/choosebox_components/table_v2";


var data_emptype=getData("Emp_Type")
var data_diversity=getData("Diversity")
var data_location=getData("Location")
var data_doj=getData("DOJ")
var data_dol=getData("DOL")

export default function ChooseBox(a,b,c,d){
    if(a==="areachart"){
        if(b==="doj")
            return AreaGraph(data_doj,"doj","Employee join count per month");
        else
            return AreaGraph(data_dol,"dol","Employee leave count per month");
    }
    if(a==="piechart"){
        if(b==="emptype")
            return PieGraph(data_emptype,c,d);
        if(b==="diversity")
            return PieGraph(data_diversity,c,d);
        else    
            return PieGraph(data_location);
    }
    if(a==="barchart"){
        if(b==="emptype")
            return BarGraph(data_emptype);
        if(b==="diversity")
            return BarGraph(data_diversity);
        else    
            return BarGraph(data_location);
    }
    if(a==="tablechart"){
        if(b==="emptype")
            return Groupwise_DOJ_DOL_Table(data_emptype)
        if(b==="diversity")
            return Groupwise_DOJ_DOL_Table(data_diversity)
        if(b==="location")
            return Groupwise_DOJ_DOL_Table(data_location);
        
    }
}


