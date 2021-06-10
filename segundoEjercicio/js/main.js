// 1     Desarrollar una función que identifique que cursos llevaré 
//       según el codigo que se pase como parámetro y me retorne
//       los cursos en un string ejemplo 'matemática, religión, teatro'


let cursos = [
    {codigo : "mt001", name : "matematica"},
    {codigo : "rl002", name : "religion"},
    {codigo : "tt003", name : "teatro"},

]

const searchCourse=(codigo1)=>{  
    let objResult = cursos.find(x => x.codigo == codigo1 );
    if (objResult != null)
    return objResult.name;
    else return "No existe curso"
}
console.log(searchCourse("mt001"))



// 2   Escriba una funcion que pida dos números enteros y que calcule su división, escribiendo si la división es exacta o no.

/*
const num = ()=>{

    let number1 = parseInt(prompt("Dame un número"))
    let number2 = parseInt(prompt("Dame otro número"))

    let division = number1 / number2

    if(Number.isInteger(division)){
        return (`La división es exacta, el resultado es ${division}`)
        
    }else{
        return ('la division no es exacta')
        
    }    
}
console.log(num())
*/

// 3    Escriba una funcion que pida dos números y que conteste cuál es el menor y cuál el mayor o que escriba que son iguales.

/*
const num2 = () => {
    
    let number1 = parseInt(prompt("Dame valor A"))
    let number2 = parseInt(prompt("Dame valor B"))

    if(number1>number2){
        return (`A = ${number1} y es mayor a B = ${number2}`)
    }else if(number1<number2){
        return (`B = ${number2} y es mayor a A = ${number1}`)
    }else{
        return 'Ambos son iguales'
    }
}

console.log(num2())
*/


// 4    Escriba una funcion que pida el año actual y un año cualquiera y que escriba cuántos años han pasado desde ese año o cuántos años faltan para llegar a ese año.

/*
const getYearCurrent = () =>{

    let getYearNow = parseInt(prompt("Escribe el número de este año"));
    let getYearRandom = parseInt(prompt("Escribe cualquier año"));

    if(getYearNow>getYearRandom){
        return `Han pasado ${getYearNow-getYearRandom}`;
    }else{
        return `Faltan ${getYearRandom-getYearNow} años para llegar a ${getYearRandom}`;
    }
}

getYearCurrent()

*/

// 5    Escriba una funcion que avise cuando se escriben valores negativos o nulo
/*
const values = () => {

    let getValue = parseInt(prompt("Dame un número, No positvo"));

    if(getValue<0){
        return 'El valor es negativo'
    }else if(!Number.isInteger(getValue)){
        return 'El valor es nulo'
    }else{
        return 'incorrecto, No positivo'
    }
}

console.log(values())*/