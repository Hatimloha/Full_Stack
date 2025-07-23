// 3. Make a class Counter with a method to increment and show value.

class Counter{
    constructor(value){
        this.value = value;
    };

    increment(){
        this.value++
        console.log(`Value: ${this.value}`)
    }
};

const counter = new Counter(10);
counter.increment() // 11
counter.increment() // 12
counter.increment() // 13
counter.increment() // 14
counter.increment() // 15

