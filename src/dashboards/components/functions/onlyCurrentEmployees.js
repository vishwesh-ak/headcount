
export default function onlyCurrentEmployees(data,month,year){
    var a={}
    var keys=[]
    for(var i=0;i<data.root.length;i++){
        if(data.root[i].key[0]==year && data.root[i].key[1]>month){
            continue;
        }
        if(data.root[i].key[0]>year){
            continue
        }
        
        if(data.root[i].key[2]==null && data.root[i].key[3]==null){
            if(a[data.root[i].key[5]]) {
                a[data.root[i].key[5]]+=data.root[i].value;
              } else {
                a[data.root[i].key[5]] = data.root[i].value;
                keys.push(data.root[i].key[5])
              }
        }
        if(data.root[i].key[2]==year && data.root[i].key[3]>=month){
            if(a[data.root[i].key[5]]) {
                a[data.root[i].key[5]]++;
              } else {
                a[data.root[i].key[5]] = data.root[i].value;
                keys.push(data.root[i].key[5])
              }
            continue;
        }
        if(data.root[i].key[2]>year){
            if(a[data.root[i].key[5]]) {
                a[data.root[i].key[5]]++;
              } else {
                a[data.root[i].key[5]] = data.root[i].value;
                keys.push(data.root[i].key[5])
              }
            }
    }
    var b=[]
    for(i=0;i<keys.length;i++){
        b.push({key:keys[i],value:a[keys[i]]})
    }
    return {"root":b}
}
