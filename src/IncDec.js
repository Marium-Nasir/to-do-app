import { useState } from "react";

const IncDec = () => {
    let val = 0;
    const [cval,updVal] = useState(val);

    const incFun = ()=>{
       updVal(cval+1);
    }
    
    const decFun = () => {
        if(cval > 0){
            updVal(cval-1);
        }else{
            alert("Not Allowed")
        }
    }

    return(
        <>
          <div className="maincont">
            <div className="container">{cval}</div>
            <div className="btns">
                <button onClick={incFun}>Increment</button>
                <button onClick={decFun}>Decrement</button>
            </div>
          </div>
        </>
    )
}

export default IncDec;