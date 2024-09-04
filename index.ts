const greet: string = "Hello"

let isTrue: boolean
isTrue = true

let age: number = 25


type Osztaly={
    evfolyam:number,
    betu: 'A'|'B'|'C'|'D'
}

type Diak = {
    name: string,
    age: number,
    class: Osztaly
}

let Peti: Diak

Peti = { name: "Péter", age: 47, class: {betu:'B', evfolyam:10} }



console.log(greet)