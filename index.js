const inquirer = require("inquirer");
const { Square, Circle, Triangle } = require("./lib/shapes");
const Svg = require("./lib/svg");
const fs = require("fs")
async function start() {
    const {shape, shapeColor, text, textColor} = await inquirer.prompt([
        {
            name: "shape",
            message: "What shape would you like your SVG to have?",
            type: "list",
            choices: ["Square", "Circle", "Triangle"]
        },
        {
            name: "shapeColor",
            message: "What color would you like your shape to be?",
            type: "input",
        },
        {
            name: "text",
            message: "What text would you like your SVG to have?",
            type: "input",
            validate: answer => answer.length < 4
        },
        {
            name: "textColor",
            message: "What color would you like your text to be?",
            type: "input",
        },
    ])
    let chosenShape;
    switch(shape) {
        case "Square": 
        chosenShape = new Square(shapeColor)
        break
        case "Circle":
            chosenShape = new Circle(shapeColor)
            break  
        case "Triangle":
            chosenShape = new Triangle(shapeColor)
            break 
    }
    const svg = new Svg(text, textColor, chosenShape)
    console.log(svg.render())
    fs.writeFileSync("./output/logo.svg", svg.render())
}
start()