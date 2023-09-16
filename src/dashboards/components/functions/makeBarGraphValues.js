import padValues from "./padValues"
export default function makeBarGraphValues(data,leadername){
    var a=[],x1,x2
    for(var i=0;i<data.length;i++){
        if(data[i].key[5]===leadername){
            /*if(data[i].key[2]!=null && data[i].key[3]!=null){
                x1=data[i].key[2]
                x2=data[i].key[3]
            }
            else{
                x1=null
                x2=null
            }*/
            a.push({"group":data[i].key[4],"key":data[i].key.slice(0,4),"value":1})
        }
    }
    a=padValues(a)
    return a
}
