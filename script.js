let output = document.querySelector(".output");
let button = document.querySelectorAll("button");

for (const element of button) {
element.onclick = function () {
    if (element.value === "=") {
        if (output.textContent !="") {
    output.textContent = eval(output.textContent);
    }
}
    else if (element.value === "<--") {
        output.textContent = output.textContent.substring(0, output.textContent.length-1)
    }
    else if (element.value === "c") {
        output.textContent = "";
    }
    else {
     output.textContent += element.value;
}
}
}

