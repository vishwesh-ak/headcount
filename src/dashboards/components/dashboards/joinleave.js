//placeholder page for onboarding/separation
import "../../index.css";
import ChooseBox from "../../choosebox";

export default function OnboardingSeparation(data_doj,data_dol){
    return(
        <div style={{border:"4px solid black",borderRadius:"10px",padding:"10px"}}>
                <div className="subdashheader">Onboarding / Separation</div>
                <div className="gridbg onboard">
                    <div className='box box2' style={{gridColumn:"span 9"}}>
                    <a href={"/dashnew?a=areachart&b=doj"} target="_blank">
                        <div style={{position:"absolute",margin:"5px",width:"20px",height:"20px",borderRadius:"50%",backgroundColor:"#77777777"}}>
                            
                        </div>
                    </a>
                            {ChooseBox("areachart","doj")}
                    </div>
                    <div className="box box3" style={{gridColumn:"span 9"}}>
                        
                    <a href="/dashnew?a=areachart&b=dol" target="_blank">
                        <div style={{position:"absolute",margin:"5px",width:"20px",height:"20px",borderRadius:"50%",backgroundColor:"#77777777"}}>
                        
                        </div>
                    </a>
                        {ChooseBox("areachart","dol")}
                    </div>
                </div>
            </div>
    )
}
