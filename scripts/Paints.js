import { getPaints, setPaint } from "./database.js"

const paints = getPaints()

/* start of change event listener */ 
document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "resource") {
            const chosenOption = changeEvent.target.value
            console.log(chosenOption)  // "1" or "2"
            setPaint(parseInt(clickEvent.target.value))
        }
    }
)
/* end of change event listener */ 

export const Paints = () => {
    let html = "<h2>Paint Colors</h2>"

    html += '<select id="paints">'
    html += '<option value="0">Choose a paint color</option>'

    const listItems = paints.map( (paint) => {
            return `<option value="${paint.id}">${paint.color}</option>`
        }
    )

    html += listItems.join("")
    html += "</select>"
    return html
}


