class Ususario{
    constructor(nombre,apellido,edad,correo,puntos){
        this.nombre=nombre;
        this.apellido=apellido;
        this.edad=edad;
        this.correo=correo;
        this.puntos=puntos;
    }
}

function AltaUsuario()
{
    nombre=prompt("Ingrese sus nombres");
    apellido=prompt("Ingrese su apellido");
    edad=prompt("Ingrese su edad");
    correo=prompt("Ingrese su correo electrónico");
    puntos=0;
    perfiles.push(new Ususario (nombre,apellido,edad,correo,puntos));
}

let perfiles=[];

let respuesta4= prompt("¿Quiere registrarse de manera gratuita? (si/no)");
    
if(respuesta4=="si"){
    AltaUsuario();
    console.log(perfiles);
    alert("¡Gracias por registrarse!");
}
else{
    alert("Puede registrarse cuando quiera en el formulario que se encuentra en el INICIO");
}