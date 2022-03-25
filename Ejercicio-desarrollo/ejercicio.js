//Nota: Usar los campos ya creados (code,name,age,phone) que hacen referencia a cada campo del formulario

// Realizar validaciones (Funciones)

// -code debe tener 9 caracteres (3 Letras,1 guion y 5 Numeros luego) example: ABS-12345

// -name debe tener minimo 5 caracteres, solo se admiten letras

// -age debe ser mayor o igual a 16

// -phone si inicia con 3 debe tener 10 digitos y si inicia con otro numero debe tener 8 digitos

//

/**
 * @author [Italo Alberto Guevara Villamil - italo.guevara@sofka.com.co]
 * @version [1.0.0 25-03-2022]
 */


/**
 * [Expresiones regulares de validacón del formulario]
 */
let regxCode = /[A-Z][A-Z][A-Z][-][0-9][0-9][0-9][0-9][0-9]/
let regxSymbols = /[/*-+°"#$%&/)(=?¡¿'?,:.;-<_>]/
let regxNumbers = /[0-9]/
let regxLetter = /[a-zA-Z]/
let regxPhone1 = /^[3]/

/**
 * [Validación del CODE]
 * 
 * @param {String} codigo
 */
validationCode = (code) => {
    if(!regxCode.test(code.value)){
        ui.message('Código', `El código ${code.value} no es válido`);
        console.log(`TEST CODE = ERROR`);
    }else{
        console.log(`TEST CODE = OK`);
    }
}

/**
 * validación del NAME
 * 
 * @param {String} nombre
 */
validationName = (name) => {
    if(name.value.length >= 5){
        if(regxNumbers.test(name.value) || regxSymbols.test(name.value)){
            ui.message('Nombre', `El nombre ${name.value} tiene caracteres inválidos`);
            console.log(`TEST NAME = ERROR`);
        }else{
            console.log(`TEST NAME = OK`);
        }
    }else{
        ui.message('Nombre', `El nombre ${name.value} no tiene un tamaño válido`);
        console.log(`TEST NAME = ERROR`);
    }

}

/**
 * [Validación de la edad]
 * 
 * @param {String} edad
 */
validationAge = (age) => {
    if(age.value < 16){
        ui.message('Edad',`La edad de ${age.value} años no es válida`);
        console.log(`TEST AGE = ERROR`);
    }else{
        console.log(`TEST AGE = OK`);
    }
}

/**
 * [Validación del telefono]
 * 
 * @param {String} telefono
 */
validationPhone = (phone) => {
    if(regxLetter.test(phone.value) || regxSymbols.test(phone.value)){

        ui.message('Telefono',`El telefono ${phone.value} tiene caracteres inválidos`);
        err = true;

    }else{

        if(regxPhone1.test(phone.value) && (phone.value > 3000000000) && (phone.value <= 3999999999)){
            console.log(`TEST PHONE = OK`);
            
        }else if(!regxPhone1.test(phone.value) && (phone.value > 9999999) && (phone.value <= 99999999)){
            console.log(`TEST PHONE = OK`);

        }else{
            console.log(`TEST PHONE = ERROR`);
            ui.message('Telefono',`El telefono ${phone.value} no es válido`);
        }
    }
}


form.addEventListener('submit',(e)=>{

    e.preventDefault();

    validationCode(code);
    validationName(name);
    validationAge(age);
    validationPhone(phone);
});

