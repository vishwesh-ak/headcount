//dashboard

import "./index.css"
import Dash1 from "./components/dashboards/dash1";
import Dash2 from "./components/dashboards/dash2";
import Dash3 from "./components/dashboards/dash3";
import OnboardingSeparation from "./components/dashboards/joinleave";
import getData from "./data/datas";
export default function Dashboard(){
    const data_doj=getData("DOJ");
    const data_dol=getData("DOL");
    const data_emptype=getData("Emp_Type");
    const data_diversity=getData("Diversity");
    const data_location=getData("Location")

    var new_data_dol=[]
    for(let i=1;i<data_dol.length;i++)
        new_data_dol.push(data_dol[i])

    return(
        <div className="dashgrid">
            {Dash1(data_emptype)}
            {Dash2(data_diversity)}
            {Dash3(data_location)}
            {OnboardingSeparation(data_doj,data_dol)}
        </div>
    );
}

