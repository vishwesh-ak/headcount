import ChooseBox from "./choosebox";

export default function DashNew(){
const params = new URLSearchParams(document.location.search);
const a = params.get("a");
const b = params.get("b");
console.log("A: ")
console.log(a)
document.getElementsByTagName("body")[0].style.padding="0px";

    return(
        <div style={{height:"100vh",backgroundColor:"yellow",display:"flex",flexDirection:"column",alignItems:"center",justifyItems:"center"}}>
            {ChooseBox(a,b)}
        </div>
    )
}