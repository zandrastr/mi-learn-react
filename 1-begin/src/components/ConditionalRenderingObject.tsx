class Car {
    brand: string;
    color: string;
    year: number;

    constructor(brand: string, color: string, year: number) {
        this.brand = brand;
        this.color = color;
        this.year = year;
    }
}

export const ConditionalRenderingObject = () => {
    const car = new Car('Ford', 'Red', 2012);

    // 1.
    // if(car.color === "Red"){
    //     //do something
    // }

    // 2.
    //return <> {car.color === "Red" ? <p>Some info here if car is red</p> : <h3>Some other info here if car is not red</h3> }</>;

    //3.
    return <> {car.color === 'Red' && <p>Some info here if car is red</p>}</>;
};
