class Rectangle {
  length;
  width;

  constructor(l, w) {
    this.length = l;
    this.width = w;
  }

  area() {
    return this.length * this.width;
  }

  perimeter() {
    return 2 * (this.length + this.width);
  }
}

let a = new Rectangle(10, 5);
let b = new Rectangle(6, 3);

console.log(
  `Rectangle 1 - Length: ${a.length}, Width: ${
    a.width
  }, Area: ${a.area()}, Perimeter: ${a.perimeter()}`
);
console.log(
  `Rectangle 2 - Length: ${b.length}, Width: ${
    b.width
  }, Area: ${b.area()}, Perimeter: ${b.perimeter()}`
);
