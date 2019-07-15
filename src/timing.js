import React from "react"

function timing() {

   const mil_second=688000;
    var second=mil_second/1000;
    var min=Math.floor(second/60);
    var hr=Math.floor(min/60);
    second=second%60;
    min=min%60;
    hr=String(hr).padStart(2,'0');
    return(<div className="second"><div className="hours">{hr}:</div>
    <div className="minute">{String(min).padStart(2, '0')} :</div>
   <div className="secd"> {String(second).padStart(2,'0')} </div>
      

    </div>


    )
    


  
}

export default timing;