import React from "react";


function TodoClick(){
    let [letState,setLetState]=React.useState(0);
return(
    <>
    <p>
        Diste Click {letState} 
        veces
    </p>
    </>
)

}

export {TodoClick}