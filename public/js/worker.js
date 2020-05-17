"use strict";
// Hi this is my worker 

self.onmessage = onMessage;

function onMessage(evt){
    let numbers = evt.data.numbers;
    //  similar to our initial code ,just ran in the worker 
    let startTime = new Date().getTime();
    console.log("startTime",startTime);
    let len = numbers,
        sum = 0,
        i;
    if (len === 0) {
        return 0;
    }
    for (i = 0; i < len; i++) {
        sum += i;
    }
    let endTime = new Date().getTime();
    console.log("endTime",endTime)
    self.postMessage({numbers:numbers,average: sum / len, time: endTime - startTime })
}




