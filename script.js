let nombrePaciente = prompt("Por favor, ingrese su nombre y apellido");
let reglaNombrePaciente = isNaN(nombrePaciente);
console.log(reglaNombrePaciente);

let dni = parseInt(prompt("Ingrese su DNI"));
let reglaDni = Number(dni) >0;
console.log(reglaDni);



let telefono = parseInt(prompt("Ingrese su número de teléfono"));
let reglaTelefono = Number(telefono) >0;
console.log (reglaTelefono);

if (reglaNombrePaciente === true && reglaDni === true && reglaTelefono === true){
    alert (nombrePaciente + ", nos pondremos en contacto con usted al numero " + telefono + " para definir fecha y horario del turno. Muchas gracias por su elección")
} else {
    alert("Sus datos no fueron cargados correctamente, por favor verifique sus datos");
}
// let pacienteValido = reglaNombrePaciente(true) && reglaDni(true) && reglaTelefono (true);
// console.log(pacienteValido);
        
//         if (nombrePaciente != isNaN && dni != isNaN && telefono != isNaN){
//             const pacientes1 = new pacientes (nombrePaciente, dni, telefono);
//             alert (pacientes1.nombrePaciente + ", nos pondremos en contacto con usted al numero " + pacientes1.telefono + " para definir fecha y horario del turno. Muchas gracias por su elección")
//         } else {
//             alert("Sus datos no fueron cargados correctamente, por favor verifique sus datos");
//         }



        
// }
// }
// let telefono1 = true;
// // console.log(telefono);
// if (telefono1){
//     telefono1 = !telefono1;
//     console.log("falso");
// }



// usuario_valido = True
// regla_nombre_valido = len(nombre) > 3
// regla_edad_valido = edad.isnumeric()
// if ! (regla_edad_valido):
//         print("Edad tiene que ser un entero")
//         usuario_valido = False;{
//     }