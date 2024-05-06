document.addEventListener("DOMContentLoaded", function () {
    const setColorBtn = document.getElementById("setcolor");
    const randomColorBtn = document.getElementById("randomcolor");
    const resetBtn = document.getElementById("Reset");
    const div1 = document.querySelector(".display .print:first-child");
    const div2 = document.querySelector(".display .print:last-child");
    const colorInput = document.getElementById("color");

    setColorBtn.addEventListener("click", function () {
        const color = colorInput.value;
        div1.style.backgroundColor = color;
        div1.innerText = color;
    });

    randomColorBtn.addEventListener("click", function () {
        const randomColor = getRandomColor();
        div2.style.backgroundColor = randomColor;
        div2.innerText = randomColor;
    });

    resetBtn.addEventListener("click", function () {
        div1.style.backgroundColor = "";
        div1.innerText = "";
        div2.style.backgroundColor = "";
        div2.innerText = "";
        colorInput.value = "";
    });

    function getRandomColor() {
        const letters = "0123456789ABCDEF";
        let color = "#";
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
});