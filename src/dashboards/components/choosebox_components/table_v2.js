import {
    DataTable,
    Table,
    TableHead,
    TableRow,
    TableHeader,
    TableBody,
    TableCell,
  } from '@carbon/react';
import makeTableV2Values from "../functions/makeTableV2Values"

export default function Groupwise_DOJ_DOL_Table(data){
    var newdata=makeTableV2Values(data,2002,1)
    return(
        <>
            <div className="boxheader">Leave rate V join rate</div>
            <div className="boxarea">
                <div style={{height:"100%",width:"100%",overflow:"scroll",borderRadius:"10px",display:"flex",justifyContent:"center",alignItems:"center"}}>
                    <DataTable headers={newdata.headers} rows={newdata.rows}>
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
                </div>
            </div>
        
        </>
    )
}