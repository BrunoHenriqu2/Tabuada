var InputNumber = document.querySelector("input#TabNumber")
var Generate = document.querySelector("input#Generate")
var DivArray = document.querySelectorAll("div.Multiply")
Generate.addEventListener("click", MakeTab)

function MakeTab () {
    var ToCalc = Number(InputNumber.value)

    for (let i = 0; i <= DivArray.length; i++) {
        const element = DivArray[i]

        if (typeof element != "undefined") {
            var test = Number(element.id)
            element.innerHTML = ` ${test} X ${ToCalc} = ${ToCalc * test}`
        }

    }

}