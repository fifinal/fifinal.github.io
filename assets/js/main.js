window.addEventListener("DOMContentLoaded", () => {
    // create svg rectangular inside circle
    const svg = document.querySelector(".svg_circle");
    const svgNS = "http://www.w3.org/2000/svg";

    function svgCircle(svg) {
        // for loop 8 x 8
        for (let i = 0; i < 8; i++) {
            for (let j = 0; j < 8; j++) {
                let x = j * 15 + 5;
                let y = i * 15 + 5;
                const circle = document.createElementNS(svgNS, "circle");
                circle.setAttribute("r", "4");
                circle.setAttribute("cx", x);
                circle.setAttribute("cy", y);
                svg.appendChild(circle);
            }
        }
    }
    svgCircle(svg);

    const menu = document.getElementById("menu");
    const toggle = document.getElementById("toggle");

    toggle.addEventListener("click", () => {
        menu.classList.toggle("active");
        if (!menu.classList.contains("active")) {
            toggle.firstElementChild.classList.remove("fa-times");
            toggle.firstElementChild.classList.add("fa-bars");
        } else {
            toggle.firstElementChild.classList.remove("fa-bars");
            toggle.firstElementChild.classList.add("fa-times");
        }
    });

    const filterList = document.querySelector(".filter-list");
    const portfolioItem = document.querySelectorAll(".portfolio-item");

    filterList.addEventListener("click", (event) => {
        const target = event.target
        if (target.classList.contains("filter-item")) {

            portfolioItem.forEach((data) => {
                data.classList.add("hidden");
                if (target.id == data.dataset.kategory || target.id == "all")
                    data.classList.remove("hidden");

            })

        }
    })

})


const name = document.getElementById("name");
let arrName = name.innerText.split("");
let n = arrName.length;

let i = 0;
let str = [];
let increment = true;
setInterval(() => {
    if (str.length == n) increment = false;
    if (str.length == 0) increment = true;

    if (increment) {
        str.push(arrName[i]);
        name.innerHTML = str.join("");
        i++;
    } else {
        str.pop();
        name.innerHTML = str.join("");
        i--;
    }
    // console.log(str.length);
}, 400);