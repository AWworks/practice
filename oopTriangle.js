class Triangle {
  base;
  height;

  constructor(b, h) {
    this.base = b;
    this.height = h;
  }

  area() {
    return (this.base * this.height) / 2;
  }

  //   displayArea() {
  //     console.log(
  //       `Area of triangle of Base: ${this.base}, Height: ${this.height} is ${this.area}`
  //     );
  //   }
}

let a = new Triangle(5, 10);
let b = new Triangle(8, 4);

console.log(
  `Area of triangle of Base: ${a.base}, Height: ${a.height} is ${a.area()}`
);
console.log(
  `Area of triangle of Base: ${b.base}, Height: ${b.height} is ${b.area()}`
);
