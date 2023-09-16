import { Dropdown } from "@carbon/react"
export default function Month_Dropdown(setPieMonth){
    console.log("hmm")
    return(
        <>
        <Dropdown label="Month" items={[
            {id:1,label:"Jan"},{id:2,label:"Feb"},{id:3,label:"Mar"},{id:4,label:"Apr"},
            {id:5,label:"May"},{id:6,label:"Jun"},{id:7,label:"Jul"},{id:8,label:"Aug"},
            {id:9,label:"Sep"},{id:10,label:"Oct"},{id:11,label:"Nov"},{id:12,label:"Dec"}
        ]}
        initialSelectedItem={{id:1,label:"Jan"}}
        onChange={(event)=>{setPieMonth(event.selectedItem.id)}}
        />
        {console.log("hmm over")}
        </>
    )
}