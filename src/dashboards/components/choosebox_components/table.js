import {
    DataTable,
    Table,
    TableHead,
    TableRow,
    TableHeader,
    TableBody,
    TableCell,
  } from '@carbon/react';

export function TableLeader(data,leader){
    data=checkleader(data,leader)
    return(
        <DataTable headers={data.headers} rows={data.rows}>
            {({ rows, headers, getTableProps, getHeaderProps, getRowProps }) => (
                <Table {...getTableProps()}>
                <TableHead>
                    <TableRow>
                    {headers.map((header) => (
                        <TableHeader {...getHeaderProps({ header })}>
                        {header.value}
                        </TableHeader>
                    ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                    <TableRow {...getRowProps({ row })}>
                        {row.cells.map((cell) => (
                        <TableCell key={cell.id}>{cell.value}</TableCell>
                        ))}
                    </TableRow>
                    ))}
                </TableBody>
                </Table>
            )}
        </DataTable>
    )
}

function checkleader(data,leader){
    var a={"headers":[
        {key:"empid",value:"Employee ID"},
        {key:"empname",value:"Employee Name"},
        {key:"deptcode",value:"Department Code"},
        {key:"deptname",value:"Department Name"},
        {key:"ismanager",value:"Is Manager?"},
        {key:"emptype_pt",value:"Employee Type"},
        {key:"location",value:"Location"},
        {key:"manager_name",value:"Manager Name"},
        {key:"leader_name",value:"Leader Name"},
        {key:"email",value:"Email"},
        {key:"diversity",value:"Diversity"},
        {key:"work_location",value:"Work Location"},
        {key:"doj",value:"Date of Joining"},
        {key:"dol",value:"Date of Leaving"}
    ],
    "rows":[]
    }
    var i=0,j=0,count=0,b;
    for(i=0;i<data.length;i++){
        if(data[i].key[8]==leader){
            count+=1
            b={id:count}
            for(j=0;j<13;j++)
                b[a.headers[j].key]=data[i].key[j]
            if(Array.from(data[i].key[13]).length==0)
                b[a.headers[13].key]="NA"
            else
                b[a.headers[13].key]=data[i].key[13]
            a.rows.push(b)
        }
    }
    return a
}