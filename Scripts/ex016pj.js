var Generate = document.querySelector("input#Generate")

Generate.addEventListener("mouseenter", MouseEnter)
Generate.addEventListener("mouseout", MouseOut)

function MouseEnter() {
    Generate.style.borderColor = "#727272"
    Generate.style.color = "#ffffff"
    Generate.style.backgroundColor = "#61c279"
}

function MouseOut() {
    Generate.style.borderColor = "#61c279"
    Generate.style.color = "#61c279"
    Generate.style.backgroundColor = "#ffffff"
}