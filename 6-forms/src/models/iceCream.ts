export class IceCream {
    constructor (
        public name: string,
        public price: number, 
        public flavour: string,
        public cone: boolean,
        public howToDo: HowToDo
    ) {}
}

export class HowToDo {
    constructor(
        public step1: string,
        public step2: string,
        public step3: string,
    ) {}
}