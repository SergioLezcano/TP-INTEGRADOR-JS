// definir variables

const valorTicket = 200;

// descuentos

let descEstudiante = 0.80;
let descTrainee = 0.50;
let descJunior = 0.15;

// elementos

const formulario = document.getElementById('formulario');
const categoria = document.getElementById('categoria');
const cantidad = document.getElementById('cantidad');
const totalPagar = document.getElementById('totalAPagar');
const btnResumen = document.getElementById('resumen');
const btnBorrar = document.getElementById('borrar');

function Calcular(){
    let total = cantidad.value * valorTicket;

    // calculos condicionales

    if (cantidad.value == "") {
        alert("Debe indicar la cantidad")
    }

    switch (categoria.value) {
        case "estudiante":
            total = total - (total * descEstudiante);
            break;
        case "trainee":
            total = total - (total * descTrainee);
            break;
        case "junior":
            total = total - (total * descJunior);
            break;
        
        default:
            alert ("Debe seleccionar una categoria")
            break;
    }
    totalPagar.textContent = `Total a Pagar: $ ${total}`;
}

function Limpiar(){
    document.getElementById('formulario').reset();
    totalPagar.textContent = "Total a Pagar: $";
}


btnResumen.addEventListener('click',(e)=>{
    e.preventDefault()
    Calcular()
});