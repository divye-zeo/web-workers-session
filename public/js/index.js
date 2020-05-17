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

    function calculatAverage(){
        var averageOf= averageInput.value
        addRowToTable(averageOf,20,100)
        averageInput.value=null
    }
})()