import { getWheels, setWheel } from "./database.js"

const wheels = getWheels()

/* start of change event listener */ 
document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "resource") {
            const chosenOption = changeEvent.target.value
            console.log(chosenOption)  // "1" or "2"
            setWheel(parseInt(clickEvent.target.value))
        }
    }
)
/* end of change event listener */ 

export const Wheels = () => {
    let html = "<h2>Wheels</h2>"

    html += '<select id="paints">'
    html += '<option value="0">Choose a set of wheels</option>'

    const listItems = wheels.map( (wheel) => {
            return `<option value="${wheel.id}">${wheel.wheel}</option>`
        }
    )

    html += listItems.join("")
    html += "</select>"
    return html
}

