/* Once your ERD is complete, then go to the database module and start setting up your data structures for each resource. */

const database = {
    paints: [
        { id: 1, color: "Silver", price: 100 },
        { id: 2, color: "Midnight Blue", price: 255 },
        { id: 3, color: "Firebrick Red", price: 370 },
        { id: 4, paint: "Spring Green", price: 490 }
    ],
    interiors: [
        { id: 1, fabric: "Beige Fabric", price: 1250.55 },
        { id: 2, fabric: "Charcoal Fabric", price: 2040.40 },
        { id: 3, fabric: "White Leather", price: 3000 },
        { id: 4, fabric: "Black Leather", price: 4620.79 }
    ],
    technologies: [
        { id: 1, package: "Basic Package (basic sound system)", price: 2000 },
        { id: 2, package: "Navigation Package (includes integrated navigation controls)", price: 4000 },
        { id: 3, package: "Visibility Package (includes side and reat cameras)", price: 6000 },
        { id: 4, package: "Ultra Package (includes navigation and visibility packages)", price: 10000 }
    ],
    wheels: [
        { id: 1, wheel: "17-inch Pair Radial", price: 15000 },
        { id: 2, wheel: "17-inch Pair Radial Black", price: 1700 },
        { id: 3, wheel: "18-inch Pair Spoke Silver", price: 15000 },
        { id: 4, wheel: "18-inch Pair Spoke Blacks", price: 1700 }
    ],
    customOrders: [
        {
            id: 1, 
            paintId: 1,
            interiorId: 2,
            techId: 4,
            wheelId: 2, 
            timestamp: 1614659931693 
        }
    ],
    orderBuilder: {}
}

/* Also set up the get*()functions for each collection of customizations so that other modules can import the data and convert it to HTML. */

export const getPaints = () => {
    return database.paints.map(paint => ({ ...paint }))
}

export const getInteriors = () => {
    return database.interiors.map(interior => ({ ...interior }))
}

export const getTechnologies = () => {
    return database.technologies.map(technology => ({ ...technology }))
}

export const getWheels = () => {
    return database.wheels.map(wheel => ({ ...wheel }))
}

export const getOrders = () => {
    return database.customOrders.map(customOrder => ({ ...customOrder }))
}


export const setPaint = (id) => {
    database.orderBuilder.paintId = id
}

export const setInterior = (id) => {
    database.orderBuilder.interiorId = id
}

export const setTechnology = (id) => {
    database.orderBuilder.technologyId = id
}

export const setWheel = (id) => {
    database.orderBuilder.wheelId = id
}


export const addCustomOrder = () => {
    // Copy the current state of user choices
    const newOrder = { ...database.orderBuilder }

    // Add a new primary key to the object
    const lastIndex = database.customOrders.length - 1
    newOrder.id = database.customOrders[lastIndex].id + 1

    // Add a timestamp to the order
    newOrder.timestamp = Date.now()

    // Add the new order object to custom orders state
    database.customOrders.push(newOrder)

    // Reset the temporary state for user choices
    database.orderBuilder = {}

    // *** Broadcast a notification that permanent state has changed *** 
    document.dispatchEvent(new CustomEvent("stateChanged"))
}