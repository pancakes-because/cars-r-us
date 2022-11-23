import { getTechnologies, setTechnology } from "./database.js"

const technologies = getTechnologies()

/* start of change event listener */ 
document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "resource") {
            const chosenOption = changeEvent.target.value
            console.log(chosenOption)  // "1" or "2"
            setTechnology(parseInt(clickEvent.target.value))
        }
    }
)
/* end of change event listener */ 

export const Technologies = () => {
    let html = "<h2>Technologies</h2>"

    html += '<select id="technologies">'
    html += '<option value="0">Choose a technology package</option>'

    const listItems = technologies.map( (technology) => {
            return `<option value="${technology.id}">${technology.package}</option>`
        }
    )

    html += listItems.join("")
    html += "</select>"
    return html
}
