//declaramos objetos para definir la nomina de profesionales
class profesionales {
    constructor(nombre, servicio, honorarios){
        this.nombre = nombre;
        this.servicio = servicio;
        this.honorarios = honorarios;
    }
}

//establecemos un array con todos los profesionales que hay
const staff = [
    {nombre: "Dra Carina Guzman", servicio: "Pediatría", honorarios: 2000},
    {nombre: "Dra Tatiana Rodrigo", servicio: "Neurocirugía", honorarios: 3000},
    {nombre: "Dra Carolina Balduzzi", servicio: "Gastroenterología", honorarios: 2000},
    {nombre: "Dr Hugo Morero", servicio: "Cirugía", honorarios: 3000},
    {nombre: "Dr Florencio Sanchez", servicio: "Traumatología", honorarios: 2500},
];

//declaro un objeto para carga de los pacientes
class pacientes {
    constructor(nombrePaciente, dni, telefono){
        this.nombrePaciente = nombrePaciente;
        this.dni = dni;
        this.telefono = telefono;
    }
}

//mensajes al usuario
alert("¡Hola! Bienvenido/a a la página del Centro de Salud Integral.")
//defino variables y arreglos para que el usuario pueda ingresar los servicio que quiere obtener
const servicios = [];
let precioTotal = "";
let opcion = "";

//Hacemos que el usuario ingrese parámetros en un ciclo, del cual resumiremos su adquisición
while (opcion !== "salir") {
    opcion = prompt(
        "A continuación se muestra la lista de profesionales con quien puedes agendar una cita: \n" + staff.map((servicio, index) => index + 1 + ")" + servicio.nombre +" " + servicio.servicio).join("\n") + "\n ¿Con que profesional desea reservar su turno?\n (Escriba el numero de la opcion elegida o escriba 'salir' para salir)"
    );
    if (opcion >= 1 && opcion <= staff.length) {
        const profesionalSeleccionado = staff[opcion - 1];
        servicios.push(profesionalSeleccionado);
        alert("Su turno se agendó correctamente");
        console.log(servicios);
        
        while (opcion !== "si" && opcion !== "no") {
            opcion = prompt("¿Desea elegir otro servicio? \n (si/no)").toLowerCase();
        }
        if (opcion === "no") {
            opcion = "salir";
            precioTotal = servicios.reduce((acumulador, servicioSeleccionado) => acumulador + servicioSeleccionado.honorarios, 0);
            console.log(precioTotal);
            alert("Turnos agendados:\n" + servicios.map((servicio, index) => index + 1 + ") " + servicio.nombre + " $" + servicio.honorarios).join("\n") + "\n" + "Total a pagar $" + parseInt(precioTotal));    
        }
        const nombrePaciente = prompt("Por favor, ingrese su nombre y apellido");
        let dni;
        do {
            dni = parseInt(prompt("Ingrese su DNI"));
            if (isNaN(dni)) alert("Ingrese un valor numérico válido para dni")
            } while (isNaN(dni) && dni > 0);
        
        let telefono;
        do {
            telefono = parseInt(prompt("Ingrese su número de teléfono"));
            if (isNaN(telefono)) alert("Ingrese un valor numérico válido para telefono");
        } while (isNaN(telefono) && telefono > 0);

        const pacientes1 = new pacientes (nombrePaciente, dni, telefono);
        if (nombrePaciente === " " && dni !== isNaN && telefono !== isNaN){
            alert(pacientes1.nombrePaciente + ", nos pondremos en contacto con usted al numero " + pacientes1.telefono + " para definir fecha y horario del turno. Muchas gracias por su elección");
        } else {
            alert ("Sus datos no fueron cargados correctamente, por favor verifique sus datos");
        }
        
    }
}
