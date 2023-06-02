class Shape {
    constructor(color) {
        this.color = color;
    }
}

class Triangle extends Shape {
    constructor(color) {
        super(color)
    }
    render() {
        return`<polygon points="150, 43.75 206.25, 156.15 93.75, 156.15" fill="${this.color}" />`
    }
}

class Circle extends Shape {
    constructor(color) {
        super(color)
    }
    render() {
        return`<circle cx="50%" cy="50%" r="80" fill="${this.color}"></circle>`
    }
}

class Square extends Shape {
    constructor(color) {
        super(color)
    }
    render() {
        return`<rect x="93.75" y="43.75" width="112.5" height="112.5" fill="${this.color}" />`
    }
}

module.exports = {Triangle, Circle, Square}