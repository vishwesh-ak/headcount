//sample Area chart

import {  AreaChart, Area, XAxis, YAxis, CartesianGrid, Legend, Tooltip, ResponsiveContainer  } from "recharts";
import React, { PureComponent } from 'react';

export default function AreaChartExample(data){
    const data_current_emps=onlyCurrentEmployees(data);

    return(
      <>
        <div className="graph">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              width={500}
              height={400}
              data={data_current_emps.root}
              margin={{top: 10,right: 30,left: 0,bottom: 0,}}
            >
              <defs>
                        <linearGradient id="colorAv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#72b4eb" stopOpacity={0.3}/>
                            <stop offset="95%" stopColor="#2085ec" stopOpacity={0.8}/>
                        </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#777777"/>
              <XAxis className="xaxistext" dataKey="key" stroke="var(--fontcolor)"/>
              <YAxis className="yaxistext" stroke="var(--fontcolor)" />
              <Tooltip />
              <Legend/>
              <Area type="monotone" dataKey="value" stroke="#8884d8" fillOpacity={1} fill="url(#colorAv)"/>
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </>
    );
}

    //this onlyCurrentemployees function will remove any values in the data that DONT have Date of leaving as null
    //thus we only get current employees in the final list
function onlyCurrentEmployees(data){
  var a=[]
  for(var i=0;i<data.root.length;i++){
      if(data.root[i].key[2]==null && data.root[i].key[3]==null){
          a.push({key:data.root[i].key[1]+"/"+data.root[i].key[0],value:data.root[i].value})
      }
  }
  return {"root":a}
}
