import { Paints } from "./Paints.js"
import { Interiors } from "./Interiors.js"
import { Technologies } from "./Technologies.js"
import { Wheels } from "./Wheels.js"
import { Orders } from "./Orders.js"
import { addCustomOrder } from "./database.js"

/* Implement the correct code to check if the order button was clicked. */ 
/* Invoke the addCustomOrder function when it is clicked. */ 

document.addEventListener(
    "click",
    (event) => {
        if (event.target.id === "orderButton") {
            addCustomOrder()
        }
    }
)

export const CarsRUs = () => {
    return `
        <h1>Cars 'R Us: Personal Car Builder</h1>

        <article class="choices">
            <section class="choices__paints options">
                ${Paints()}
            </section>
            <section class="choices__interiors options">
                ${Interiors()}
            </section>
            <section class="choices__technologies options">
                ${Technologies()}
            </section>
            <section class="choices__wheels options">
                ${Wheels()}
            </section>
        </article>

        <article>
            <button id="orderButton">Create Custom Order</button>
        </article>

        <article class="customOrders">
            ${Orders()}
        </article>
    `
}