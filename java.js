class Producto{
    constructor(tipo,variedad,precio){
        this.tipo=tipo;
        this.variedad=variedad;
        this.precio=precio;
        this.stock=true;
    }
    nomorestock(){
        this.stock=false;
        alert("No hay mas productos de esta variedad");
    }
}

function AgregarProducto()
{
    tipo=prompt("Ingrese el tipo de producto");
    variedad=prompt("Ingrese la variedad del producto");
    precio=prompt("Ingrese el precio");
    carrito.push(new Producto (tipo, variedad, precio));
}

function EliminarProducto()
{
    let item= prompt("Indique que número de la lista desea eliminar")
    carrito.splice(item);
}

let carrito=[];

let total=0;
for (let i=0; i=10; i++){ 
    let respuesta= prompt("¿Quiere agregar un producto al carrito? (si/no)");
    
    if(respuesta=="si"){
        AgregarProducto();
        total= total + parseInt(this.precio);
        console.log(carrito);
        alert("El total de su compra es: $" + parseInt(total));
    }
    else{
        break;
    }
}

let resp=prompt("¿Quiere eliminar algun producto del carrito? (si/no)");
if(resp=="si"){
    EliminarProducto();
    console.log(carrito);
    alert("Se elimino del carrito:" + this.tipo);
}

let respueta2= prompt("¿Posee cupón de descuento?");

if(respueta2=="si"){
    total = total*0.75;
}

let respueta3= prompt("¿Como desea abonar? 1-Efectivo  2-Tarjeta  3-Mercado Pago");

switch(respueta3){
    case "1":
        alert("Eligio pago en efectivo");
        alert("El total a pagar es: $" + parseInt(total));
    break;

    case "2":
        alert("Eligio pago con tarjeta");
        let cuotas=prompt("¿En cuantas cuotas lo abonara?");
        switch(cuotas){
            case "1":
                alert("Total a pagar por mes: $" + parseInt(total));
            break;
            case "6":
                total=(total*1.075)/6;
                alert("Total a pagar por mes: $" + parseInt(total));
            break;
            case "12":
                total=(total*1.14)/12;
                alert("Total a pagar por mes: $" + parseInt(total));
            break;
        }
    break;

    case "3":
        alert("Eligio pago con Mercado Pago");
        alert("El total a pagar es: $" + parseInt(total));
    break;

    default:

    break;
}