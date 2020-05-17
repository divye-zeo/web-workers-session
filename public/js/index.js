(function Main(){
    "use strict";

    document.addEventListener("DOMContentLoaded",ready,false);
    var averageInput;
    var averageButton;
    var stopButton;
    var myTable;
    var worker;
	// **********************************

	function ready() {
        console.log("My script is ready to perform")
        averageInput = document.getElementById("average-input");
        averageButton = document.getElementById("average-button");
        stopButton = document.getElementById("stop-button");
		myTable = document.getElementById("average-results");

        averageButton.addEventListener("click",calculateAverage,false);
        stopButton.addEventListener("click",stopCalc,false);
        stopButton.style.visibility="hidden";
        
    }

    function onMessage(evt){
        stopButton.style.visibility="hidden";
        addRowToTable(evt.data.numbers,evt.data.average,evt.data.time)
    }
    
    function addRowToTable(query,result,time){
        var p = document.createElement("tr");
		p.innerHTML = `<td>${query}</td><td>${result}</td><td>${time}</td>`;
        myTable.appendChild(p);
    }

    function doAlert(){
        alert("Sample alert to show blocking!!");
    }

    function calculateAverage(){
        var numbers= averageInput.value
        if(!numbers  || numbers === 0) return 0;
        worker = new Worker('/js/worker.js'); // lets just first write a basic worker that kind of just exchanges some greeting  
        stopButton.style.visibility="visible";
        worker.addEventListener("message",onMessage);
        worker.postMessage({numbers:numbers});
    }
    function stopCalc(){
        worker.terminate();
        stopButton.style.visibility="hidden";
    }
})()