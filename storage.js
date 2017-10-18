// list of things
    const cactus = {
        "name": "Succulent",
        "type": "plant",
        "location": "everywhere",
        "description": "I got only one of these for my wife for Valentine's day and now they're everywhere."}
    
    const squiggle = {
        "name": "Squiggly Succulent",
        "type": "plant",
        "location": "Window sill",
        "description": "How are these things still alive?"}

    const donkeyTail = {
        "name": "Donkey Tail",
        "type": "plant",
        "location": "Side table",
        "description": "Don't look at it or it will fall apart."}

    const table = {
        "name": "Dinner Table",
        "type": "dining",
        "location": "Kitchen",
        "description": "It's probably not mahogany."}

    const bar = {
        "name": "Cocktail Bar",
        "type": "dining",
        "location": "Kitchen",
        "description": "The most important focal point of any household."}
    
    const hugeMirror = {
        "name": "Huge Mirror",
        "type": "dining",
        "location": "Kitchen",
        "description": "This gigantic mirror is how I make sure I look good before going out."}

    const bed = {
        "name": "King Size Bed",
        "type": "bedroom",
        "location": "The Master Suite",
        "description": "This is the best bed."}
        
    const dresser = {
        "name": "That Big Dresser",
        "type": "bedroom",
        "location": "The Master Suite",
        "description": "Lily has the biggest dresser."}
    
    const sideTable = {
        "name": "Bedside Table",
        "type": "bedroom",
        "location": "The Master Suite",
        "description": "Two matching side tables that we got at different flea markets. Crazy!"}

    const dogBed = {
        "name": "Dog Bed",
        "type": "bedroom",
        "location": "The Master Suite",
        "description": "Neither dog actually sleep on this."}

    const vanity = {
        "name": "Makeup Vanity",
        "type": "bedroom",
        "location": "The Master Suite",
        "description": "This holds Lily's piles of stuff."}
    
    // these arrays need to be empty so things can be pushed to them
    let plant = [];
    let dining = [];
    let bedroom = [];

    plant.push(cactus, squiggle, donkeyTail);
    dining.push(table, bar, hugeMirror);
    bedroom.push(bed, dresser, sideTable, vanity);


    // the homeInventory database includes the variables
    let homeInventory = {
        "plant": plant,
        "dining": dining,
        "bedroom": bedroom
    }

    // save inventory in local storage
    const homeInventoryString = JSON.stringify(homeInventory)
    localStorage.setItem("homeInventory", homeInventoryString)

    // get that shit out of local storage
    // const storedInventory = localStorage.getItem("homeInventory")
    // let homeInventory = JSON.parse(storedInventory)