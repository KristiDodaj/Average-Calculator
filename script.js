/**
 * FUNCTION: find_average()
 * Finds the average of the numbers in the form
 */
function find_average() {

    var accumulator = 0.00;
    var weight = document.getElementById("weight-form").elements;
    var average = document.getElementById("average-form").elements;

    for (var i = 0; i < weight.length; i++) {

        var averages = 0.00;
        var weights = 0.00;
        if (weight[i].type === "text" && weight[i].value === "" && average[i].type === "text" && average[i].value === "") {
            console.log("it's an empty textfield")
        }
        else {
            weights += parseFloat(weight[i].value);
            averages += parseFloat(average[i].value);
            accumulator += ((averages / 100) * weights);
        }
        console.log(weights);
        console.log(averages);
        console.log(accumulator);

    }

    document.getElementById("final_num").innerHTML = accumulator.toFixed(2).toString();
    document.getElementById("final_mobile").innerHTML = accumulator.toFixed(2).toString();
}

document.getElementById("calculate").onclick = find_average;
document.getElementById("calculate2").onclick = find_average;



/**
 * FUNCTION: add_row()
 * Adds a row to the form
 */
var currentLeft = 700;

function add_row() {

    var x = document.createElement("input");
    x.setAttribute("type", "text");
    x.setAttribute("placeholder", "weight");
    x.setAttribute("style", "color: grey; display: block; margin-bottom: 30px;");
    document.getElementById("weight-form").appendChild(x);

    var y = document.createElement("input");
    y.setAttribute("type", "text");
    y.setAttribute("placeholder", "average");
    y.setAttribute("style", "color: grey; display: block; margin-bottom: 30px;");
    document.getElementById("average-form").appendChild(y);

    console.log(currentLeft);

    document.getElementById("add").style.top = currentLeft + 60 + "px";
    currentLeft += 60;
}

document.getElementById("add").onclick = add_row;


