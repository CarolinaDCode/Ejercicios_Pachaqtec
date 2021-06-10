// Clasificar a una persona según su edad
// si su edad es mayor o igual que cero y menor o igual que 5 "es un bebe"
// si su edad es mayor que 5 y menor o igual que 11 "es un niño(a)"
// si su edad es meyor o igual que 11 y menor que 18 "es un adolecente"
// si su edad es menor que 55 y mayor o igual que 18 "es un adulto"
// si su edad es mayor que 55 "es un adulto mayor"
// si su edad es negativa "edad incorrecta"

const clasificacionEdad = (edad) =>{
    if(edad < 0 ){
        console.log('edad incorrecta')
    }else if(edad >= 0 && edad<=5){
      console.log('es un bebe')
    }else if(edad > 5 && edad<=11){
      console.log('es un niño(a)')
    }else if(edad >= 11 && edad<18){
      console.log('es un adolescente')
    }else if(edad < 55 && edad>=18){
      console.log('es un adulto')
    }else if(edad>55){
      console.log('es un adulto mayor')
    }
}

clasificacionEdad(-15)
clasificacionEdad(3)
clasificacionEdad(10)
clasificacionEdad(13)
clasificacionEdad(25)
clasificacionEdad(60)

