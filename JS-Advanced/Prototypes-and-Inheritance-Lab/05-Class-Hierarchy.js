function classWork() {
    class Figure {
        constructor(units = 'cm') {
            this.units = units;
        }

        conversion(number) {
            if (this.units == 'm') {
                return number /= 10;
            } else if (this.units == 'mm') {
                return number *= 10;
            }
            return number;
        }

        changeUnits(value) {
            this.units = value;
        }

        toString() {
            if (this.hasOwnProperty('radius')) {
                return `Figures units: ${this.units} Area: ${this.area} - radius: ${this.radius}`
            } else if (this.hasOwnProperty('width')) {
                return `Figures units: ${this.units} Area: ${this.area} - width: ${this.width}, height: ${this.height}`
            }
        }
    }

    class Circle extends Figure {
        constructor(radius, units) {
            super(units);
            this._radius = radius;
        }

        get area() {
            this.radius = super.conversion(this._radius);
            return this.radius ** 2 * Math.PI;
        }
    }

    class Rectangle extends Figure {
        constructor(width, height, units) {
            super(units);
            this._width = width;
            this._height = height
        }

        get area() {
            this.height = super.conversion(this._height);
            this.width = super.conversion(this._width);
            return this.width * this.height;

        }
    }

    return {
        Figure,
        Circle,
        Rectangle,
    }
}

let smt = classWork();

// let c = new smt.Circle(5);
// console.log(c.area); // 78.53981633974483
// console.log(c.toString()); // Figures units: cm Area: 78.53981633974483 - radius: 5
// console.log(c.units)

// c.changeUnits('mm');
// console.log(c.units)

// console.log(c.area); // 7853.981633974483
// console.log(c.toString()) // Figures units: mm Area: 7853.981633974483 - radius: 50


let r = new smt.Rectangle(3, 4, 'mm');
console.log(r.units)
console.log(r.area); // 1200 
console.log(r.toString()); //Figures units: mm Area: 1200 - width: 30, height: 40

