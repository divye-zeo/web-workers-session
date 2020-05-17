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

		averageButton.addEventListener("click",calculateAverage,false);
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
        if(!numbers){
            console.log("Please give me something to work with");
            return
        }
        let startTime = new Date().getTime();
        var len = numbers,
        sum = 0,
        i;

        if (len === 0) {
            addRowToTable(numbers,0,0);
        }
        let calculateSumAsync = (i) => {
            if (i < numbers) {
                // Put the next function call on the event loop.
                setTimeout(() => {
                    sum += i;
                    calculateSumAsync(i + 1);
                }, 0);
            } else {
                // The end of the array is reached so we're invoking the alert.
                let endTime = new Date().getTime();
                addRowToTable(numbers,sum/len,endTime-startTime)
            }
        };
        calculateSumAsync(0)
        averageInput.value=null
        doAlert();
    }
})()