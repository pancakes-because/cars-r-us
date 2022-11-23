import { getInteriors, setInterior } from "./database.js"

const interiors = getInteriors()

/* start of change event listener */ 
document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "resource") {
            const chosenOption = changeEvent.target.value
            console.log(chosenOption)  // "1" or "2"
            setInterior(parseInt(clickEvent.target.value))
        }
    }
)
/* end of change event listener */ 

export const Interiors = () => {
    let html = "<h2>Interiors</h2>"

    html += '<select id="interior">'
    html += '<option value="0">Choose an interior fabric</option>'

    const listItems = interiors.map( (interior) => {
            return `<option value="${interior.id}">${interior.fabric}</option>`
        }
    )

    html += listItems.join("")
    html += "</select>"
    return html
}

