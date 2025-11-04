const day_select = document.getElementById("Day");
const month_select = document.getElementById("Month");
const year_select = document.getElementById("Year");
const output = document.getElementById("output");

function show_result() {
    const adjective = day_select.value;
    const color = month_select.value;
    const animal = year_select.value;
    output.value = `${adjective} ${color} ${animal}`;
}

day_select.addEventListener("change",show_result);
month_select.addEventListener("change",show_result);
year_select.addEventListener("change",show_result);
