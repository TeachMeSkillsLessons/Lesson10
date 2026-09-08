// Написать класс Square, Rectangle и Triangle

// Перечисление типов фигур
enum FigureType {
  Square = "square",
  Rectangle = "rectangle",
  Triangle = "triangle",
}

// Абстрактный класс Figure
abstract class Figure {
  // Добавление защитного свойства type при создании класса
  constructor(protected readonly type: string) {}

  // Добавление публичного метода получения type
  getType(): string {
    const num = Number(this.type);
    if (num <= 0) throw new Error(`${FigureType} must be greater than 0`);
    return this.type;
  }

  // Добавление публичных абстрактный методов для фигур - получение площади и периметра
  abstract getArea(): number;
  abstract getPerimeter(): number;

  // Добавление публичного метода описание класса
  getDescription(): string {
    return this.constructor.name;
  }
}

// Класс Square (квадрат)
class Square extends Figure {
  //  Добавление приватного свойства side
  constructor(private readonly side: number) {
    // Указание типа при создании класса
    super(FigureType.Square);
  }

  // Получение площади
  getArea(): number {
    const side = this.side;
    if (side <= 0) {
      throw new Error(`The side must be greater than 0`);
    }
    return this.side ** 2;
  }

  // Получение периметра
  getPerimeter(): number {
    const side = this.side;
    if (side <= 0) {
      throw new Error(`The side must be greater than 0`);
    }
    return this.side * 4;
  }

  // Получение описания
  getDescription(): string {
    return `Square with side ${this.side}`;
  }
}

// Класс Rectangle (прямоугольник)
class Rectangle extends Figure {
  //  Добавление приватных свойств ширина и высоты
  constructor(
    private readonly width: number,
    private readonly height: number,
  ) {
    // Указание типа при создании класса
    super(FigureType.Rectangle);
  }

  // Получение площади
  getArea(): number {
    const width = this.width;
    if (width <= 0) {
      throw new Error(`The width must be greater than 0`);
    }
    return this.width * this.width;
  }

  // Получение периметра
  getPerimeter(): number {
    const width = this.width;
    const height = this.height;
    if (width <= 0 || height <= 0) {
      throw new Error(`The width and height must be greater than 0`);
    }
    return 2 * (this.width + this.height);
  }

  // Получение описания
  getDescription(): string {
    return `Rectangle with width ${this.width} and height ${this.height}`;
  }
}

//Класс Triangle
class Triangle extends Figure {
  constructor(
    private readonly side1: number,
    private readonly side2: number,
    private readonly side3: number,
  ) {
    if (side1 < side2 + side3 || side2 < side1 + side3 || side3 < side1 + side2) {
      throw new Error("Invalid triangle: sum of any two sides must be greater than the third");
    }
    super(FigureType.Triangle);
  }
  // Получение площади
  getArea(): number {
    const p = this.getPerimeter() / 2;
    if (p <= 0) {
      throw new Error(`P must be greater than 0`);
    }
    return Math.sqrt(p * (p - this.side1) * (p - this.side2) * (p - this.side3));
  }
  // Получение периметра
  getPerimeter(): number {
    const side1 = this.side1;
    const side2 = this.side2;
    const side3 = this.side3;
    if (side1 <= 0 || side2 <= 0 || side3 <= 0) {
      throw new Error(`The sides must be greater than 0`);
    }
    return this.side1 + this.side2 + this.side3;
  }
}
// Пример использования
const square = new Square(5);
console.log(square.getArea()); // 25
console.log(square.getPerimeter()); // 20
console.log(square.getType()); // square
console.log(square.getDescription()); // Square with side 5

console.log("-----------");

const rectangle = new Rectangle(4, 6);
console.log(rectangle.getArea()); // 24
console.log(rectangle.getPerimeter()); // 20
console.log(rectangle.getType()); // rectangle
console.log(rectangle.getDescription()); // Rectangle with width 4 and height 6

console.log("-----------");

const triangle = new Triangle(3, 4, 5);
console.log(triangle.getArea()); // 6
console.log(triangle.getPerimeter()); // 12
console.log(triangle.getType()); // triangle
console.log(triangle.getDescription()); // Triangle with side1 3, side2 4 and side3 5
