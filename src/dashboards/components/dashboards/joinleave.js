//placeholder page for onboarding/separation
import "../../index.css";
import Data from "../../charts/data/joinleavedata";
import ChooseBox from "../../choosebox";

export default function OnboardingSeparation(data_doj,data_dol){
    var formattedDataJoin=Data("join_data")
    var formattedDataLeave=Data("leave_data")
    return(
        <div style={{border:"4px solid black",borderRadius:"10px",padding:"10px"}}>
                <div className="subdashheader">Onboarding / Separation</div>
                <div className="gridbg onboard">
                    <a href="/dashnew?a=areachart&b=doj" style={{gridColumn:"span 9"}} target="_blank">
                    <div className='box box2' style={{gridColumn:"span 9"}}>
                            {ChooseBox("areachart","doj")}
                    </div>
                    </a>
                    <div className="box box3" style={{gridColumn:"span 9"}}>
                        
                <a href="/dashnew?a=areachart&b=dol" style={{gridColumn:"span 9"}} target="_blank">Expand</a>
                        {ChooseBox("areachart","dol")}
                    </div>
                </div>
            </div>
    )
}
