import { getOrders, getPaints, getInteriors, getTechnologies, getWheels } from "./database.js"

/* Go to the code where you are generating the HTML representation of the orders that customers place */ 
/* *** The code below finds the price of the user's chosen metal, style, and size. ***  */ 

const paints = getPaints()
const interiors = getInteriors()
const technologies = getTechnologies() 
const wheels = getWheels() 

const buildOrderListItem = (order) => {

const foundPaint = paints.find(
    (paint) => {
        return paint.id === order.paintId
    }
)
let totalCost = foundPaint.price

const foundInterior = interiors.find(
    (interior) => {
        return interior.id === order.interiorId
    }
)
totalCost += foundInterior.price 

const foundTechnology = technologies.find(
    (technology) => {
        return technology.id === order.techId
    }
)
totalCost += foundTechnology.price 

const foundWheels = wheels.find(
    (wheel) => {
        return wheel.id === order.wheelId
    }
)
totalCost += foundWheels.price 

/* *** Then, you can interpolate the price in the HTML string. *** */ 
// totalCost = foundMetal.price + foundStyle.price + foundSize.price; 

const costString = totalCost.toLocaleString("en-US", {
    style: "currency",
    currency: "USD"
})
    return `<li>
        Order #${order.id} costs ${costString}
    </li>`
}

/* This is the code that generate the html for the "Orders" section in the browser */ 

export const Orders = () => {
    /*
        Can you explain why the state variable has to be inside
        the component function for Orders, but not the others?
    */
    const orders = getOrders()

    let html = "<ul>"

    const listItems = orders.map(buildOrderListItem)

    html += listItems.join("")
    html += "</ul>"

    return html
}
