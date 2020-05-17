(function Main(){
    "use strict";

    document.addEventListener("DOMContentLoaded",ready,false);
    var averageInput;
    var averageButton;
    var myTable;
	// **********************************

	function ready() {
        console.log("My script is ready to perform")
        averageInput = document.getElementById("average-input");
        averageButton = document.getElementById("average-button");

		myTable = document.getElementById("average-results");

		averageButton.addEventListener("click",calculatAverage,false);
    }
    
    function addRowToTable(query,result,time){
        var p = document.createElement("tr");
		p.innerHTML = `<td>${query}</td><td>${result}</td><td>${time}</td>`;
        myTable.appendChild(p);
    }

    function doAlert(){
        alert("Sample alert to show blocking!!");
    }

    function calculatAverage(){
        var numbers= averageInput.value
        if(!numbers){
            console.log("Please give me something to work with");
            return
        }
        let startTime = new Date().getTime();
        let len = numbers,
            sum = 0,
            i;
    
        if (len === 0) {
            return 0;
        }
    
        for (i = 0; i < len; i++) {
            console.log('i :: ', i)
            sum += i;
        }
    
        let endTime = new Date().getTime();
        addRowToTable(numbers,sum/len,endTime-startTime)
        averageInput.value=null
        doAlert();
    }
})()