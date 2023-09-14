import { Dropdown } from "@carbon/react"
export default function Year_Dropdown(setPieYear){
    return(
        <Dropdown label="Select"  items={[
            {id:2000,label:"2000"},{id:2001,label:"2001"},
            {id:2002,label:"2002"},{id:2003,label:"2003"},
        ]}
        initialSelectedItem={{id:2000,label:"2000"}}
        onChange={(event)=>{setPieYear(event.selectedItem.id)}}/>
    )
}