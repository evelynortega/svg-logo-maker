const { Square, Circle, Triangle } = require("./shapes");

describe("Square", ()=>{
    test("can create instance of a square", ()=>{
        const square = new Square()
        expect(typeof square) .toBe("object")
    })
    test("can render a square svg element", ()=>{
        const square = new Square("red")
        expect(square.render()) .toBe('<rect x="93.75" y="43.75" width="112.5" height="112.5" fill="red" />')
    })
})

describe("Circle", ()=>{
    test("can create instance of a circle", ()=>{
        const circle = new Circle()
        expect(typeof circle) .toBe("object")
    })
    test("can render a circle svg element", ()=>{
        const circle = new Circle("pink")
        expect(circle.render()) .toBe('<circle cx="50%" cy="50%" r="80" fill="pink"></circle>')
    })
})


describe("Triangle", ()=>{
    test("can create instance of a triangle", ()=>{
        const triangle = new Triangle()
        expect(typeof triangle) .toBe("object")
    })
    test("can render a triangle svg element", ()=>{
        const triangle = new Triangle("green")
        expect(triangle.render()) .toBe('<polygon points="150, 43.75 206.25, 156.15 93.75, 156.15" fill="green" />')
    })
})

