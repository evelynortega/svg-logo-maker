class Svg {
    constructor(text, color, shape) {
        this.text = text;
        this.color = color;
        this.shape = shape;
    }
    render() {
        return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        ${this.shape.render()}
        <text x="150" y="135" font-size="55" text-anchor="middle" fill="${this.color}">
        ${this.text}
        </text>
  </svg>`
    }
}

module.exports = Svg
