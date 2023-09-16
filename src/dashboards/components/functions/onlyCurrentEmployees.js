
export default function onlyCurrentEmployees(data,month,year){
    var a=new Map(),mapkey;
    var keys=[]
    for(var i=0;i<data.length;i++){
        if(data[i].key[0]==year && data[i].key[1]>month){
            continue;
        }
        if(data[i].key[0]>year){
            continue
        }
        
        if(data[i].key[2]==null && data[i].key[3]==null){
          mapkey=[data[i].key[5],data[i].key[4]]
            if(a.get(mapkey)) {
                a.set(mapkey,a.get(mapkey)+data[i].value);
                continue;
                }
            a.set(mapkey,data[i].value)
            keys.push(mapkey)
        }
        if(data[i].key[2]==year && data[i].key[3]>=month){
          mapkey=[data[i].key[5],data[i].key[4]]
          if(a.get(mapkey)) {
              a.set(mapkey,a.get(mapkey)+data[i].value);
              continue;
              }
          a.set(mapkey,data[i].value)
          keys.push(mapkey)
        }
        if(data[i].key[2]>year){
          mapkey=[data[i].key[5],data[i].key[4]]
          if(a.get(mapkey)) {
              a.set(mapkey,a.get(mapkey)+data[i].value);
              continue;
              }
          a.set(mapkey,data[i].value)
          keys.push(mapkey)
        }
    }
    var b=[]
    for(i=0;i<Array.from(a.keys()).length;i++){
      mapkey=Array.from(a.keys())[i];
      b.push({group:mapkey[1],key:mapkey[0],value:a.get(mapkey)})
    }
    return b
}
