var increment = document.getElementById("increment");
var save = document.getElementById("save");

var count = document.getElementById("count-el");
var prev = document.getElementById("prev");

var counter = 0;

console.log(increment);
console.log(save);

console.log(prev);

function addPassenger() {
    counter++
    console.log(counter);
    count.innerHTML = counter;
}

function addPrev() {
    console.log(counter);
    prev.append(counter + "  ");
}

increment.onclick = addPassenger;
save.onclick = addPrev;