"use strict";
// Hi this is my worker 

self.onmessage = onMessage;
function onMessage(evt){
    console.log("Recieved a message from Main:",evt.data.message);
    setTimeout(()=>{
        self.postMessage({
            message:"Hey slow Main!!"
        })
    },2000);
}
// **********************************



