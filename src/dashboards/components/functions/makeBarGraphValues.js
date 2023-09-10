import padValues from "./padValues"
export default function makeBarGraphValues(data,leadername){
    var a=[],x1,x2
    for(var i=0;i<data.root.length;i++){
        console.log(data.root[i])
        if(data.root[i].Leader_Name===leadername){
            if(data.root[i].DOL.length==0){
                x1=data.root[i].DOL[0]
                x2=data.root[i].DOL[1]
            }
            else{
                x1=null
                x2=null
            }
            a.push({"key":[data.root[i].DOJ[0],data.root[i].DOJ[1],x1,x2],"value":1})
        }
    }
    a=padValues(a)
    return a
}
