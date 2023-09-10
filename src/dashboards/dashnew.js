import ChooseBox from "./choosebox";

export default function DashNew(){
const params = new URLSearchParams(document.location.search);
const a = params.get("a");
const b = params.get("b");
const c = params.get("c");
const d = parseInt(params.get("d"));
console.log("C: "+c+"   D: "+d)
document.getElementsByTagName("body")[0].style.padding="0px";

    return(
        <div style={{height:"100vh",backgroundColor:"yellow",display:"flex",flexDirection:"column",alignItems:"center",justifyItems:"center"}}>
            {ChooseBox(a,b,c,d)}
        </div>
    )
}