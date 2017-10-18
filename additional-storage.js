// get that shit out of local storage
const storedInventory = localStorage.getItem("homeInventory")
let newHomeInventory = JSON.parse(storedInventory)

const aloe  = {
    "name": "Aloe Vera",
    "type": "plant",
    "location": "Living Room",
    "description": "Gotta have that aloe vera for all those sick burns."}

const trash = {
    "name": "Auto Trash Can",
    "type": "dining",
    "location": "Kitchen",
    "description": "Sweet trash can with a divider for trash and recycling with a motion sensor lid I got ON SALE."}

const laundry = {
    "name": "Big Ole Laundry Basket",
    "type": "bedroom",
    "location": "The Master Suite",
    "description": "If the laundry basket never fills up, I don't have to do laundry right?"}

    
    newHomeInventory.plant.push(aloe);
    newHomeInventory.dining.push(trash);
    newHomeInventory.bedroom.push(laundry);

    // save inventory in local storage
const newInventoryString = JSON.stringify(newHomeInventory)
localStorage.setItem("homeInventory", newInventoryString)

// get that shit out of local storage
const newStoredInventory = localStorage.getItem("homeInventory")
let newInventory = JSON.parse(newStoredInventory)


console.log(newInventory);