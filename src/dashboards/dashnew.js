import ChooseBox from "./choosebox";
import Header from "../header";
import "./index.css"
export default function DashNew(){
const params = new URLSearchParams(document.location.search);
const a = params.get("a");
const b = params.get("b");
const c = params.get("c");
const d = parseInt(params.get("d"));
console.log("C: "+c+"   D: "+d)

    return(
        <div className="newpagemaindiv">
            <Header/>
            {ChooseBox(a,b,c,d)}
        </div>
    )
}