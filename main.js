//Declaración de variables
//Intitución
let nombreInst;
let anioLectivo;
let cue;

//Alumno
let nombreAlum;
let dniAlumn;

//otras variables
let cant_trim = Number(prompt("Ingrese la cantidad de trimestres a cargar"));
let nivel = prompt("Ingrese 1 para nivel primario o 2 para nivel secundario");

//Datos de las materias

//Nombre de las materias
let mat_1 = prompt("Ingrese el nombre de la materia 1");
let mat_2 = prompt("Ingrese el nombre de la materia 2");
let mat_3 = prompt("Ingrese el nombre de la materia 3");
let mat_4 = prompt("Ingrese el nombre de la materia 4");
let mat_5 = prompt("Ingrese el nombre de la materia 5");

//notas
//primer trimestre
let nota1_mat1;
let nota1_mat2;
let nota1_mat3;
let nota1_mat4;
let nota1_mat5;

// segundo trimestre
let nota2_mat1;
let nota2_mat2;
let nota2_mat3;
let nota2_mat4;
let nota2_mat5;

// tercer trimestre
let nota3_mat1;
let nota3_mat2;
let nota3_mat3;
let nota3_mat4;
let nota3_mat5;

//Ingreso de datos Institución
nombreInst = prompt("Ingrese el nombre de la Institución");
anioLectivo = prompt("Ingrese el año lectivo");
cue = prompt("Ingrese el número de CUE de la Institución");


// Selección del Nivel Primario o Secundario

if (nivel == 1) {
    console.log(nombreInst);
    console.log("Nivel Primario" + "Año Lectivo: " + anioLectivo);
    
} else if (nivel == 2) {
    console.log(nombreInst);
    console.log("Nivel Secundario" + "Año Lectivo: " + anioLectivo);


} else {
    alert("Usted debe seleccionar 1 para nivel primario o 2 para nivel secundario")

}

let cantidadDeAlumnos = Number(prompt("Ingrese la cantidad de libretas que desea realizar"));
let iterador = 0;


for (iterador = 0 ; iterador < cantidadDeAlumnos; iterador ++){

//Ingreso datos del alumno

nombreAlum = prompt("Ingrese el/los nombres del Alumno");
dniAlumn = prompt("Ingrese el DNI del Alumno");


// Maerias y Trimestres

if (cant_trim == 1) {
    // pido notas primer trimestre
    notasPrimerTrim();


    // muestro datos Primer Trimestre
    console.log("Alumno: " + nombreAlum);
    console.log("DNI del alumno : " + dniAlumn);

    console.log("Notas de: " + mat_1);
    console.log("Primer trimestre: " + nota1_mat1);

    console.log("Notas de: " + mat_2);
    console.log("Primer trimestre: " + nota1_mat2);

    console.log("Notas de: " + mat_3);
    console.log("Primer trimestre: " + nota1_mat3);

    console.log("Notas de: " + mat_4);
    console.log("Primer trimestre: " + nota1_mat4);

    console.log("Notas de: " + mat_5);
    console.log("Primer trimestre: " + nota1_mat5);

} else if (cant_trim == 2) {

    //Pido notas primer 

    notasPrimerTrim();

    // segundo trimestre

    notasSegundoTrim();

    //muestro datos
    console.log("Alumno: " + nombreAlum);
    console.log("DNI del alumno : " + dniAlumn);
    // notas Primer trimestre
    console.log("NOTAS PRIMER TRIMESTRE:")

    console.log("Materia " + mat_1 + " : " + nota1_mat1);
    console.log("Materia " + mat_2 + " : " + nota1_mat2);
    console.log("Materia " + mat_3 + " : " + nota1_mat3);
    console.log("Materia " + mat_4 + " : " + nota1_mat4);
    console.log("Materia " + mat_5 + " : " + nota1_mat5);

    // Notas Segundo Trimestre

    console.log("NOTAS SEGUNDO TRIMESTRE:")

    console.log("Materia " + mat_1 + " : " + nota2_mat1);
    console.log("Materia " + mat_2 + " : " + nota2_mat2);
    console.log("Materia " + mat_3 + " : " + nota2_mat3);
    console.log("Materia " + mat_4 + " : " + nota2_mat4);
    console.log("Materia " + mat_5 + " : " + nota2_mat5);


} else if (cant_trim == 3) {

    // pido datos 
    //Pido notas primer 
    notasPrimerTrim();

    // segundo trimestre

    notasSegundoTrim();

    // tercer trimestr
    notasTercerTrim();

// Datos
    console.log("Alumno: " + nombreAlum);
    console.log("DNI del alumno : " + dniAlumn);
    //Notas Primer Trimestre
    console.log("NOTAS PRIMER TRIMESTRE:")

    console.log("Materia " + mat_1 + " : " + nota1_mat1);
    console.log("Materia " + mat_2 + " : " + nota1_mat2);
    console.log("Materia " + mat_3 + " : " + nota1_mat3);
    console.log("Materia " + mat_4 + " : " + nota1_mat4);
    console.log("Materia " + mat_5 + " : " + nota1_mat5);


    // Notas Segundo Trimestre

    console.log("NOTAS SEGUNDO TRIMESTRE:")

    console.log("Materia " + mat_1 + " : " + nota2_mat1);
    console.log("Materia " + mat_2 + " : " + nota2_mat2);
    console.log("Materia " + mat_3 + " : " + nota2_mat3);
    console.log("Materia " + mat_4 + " : " + nota2_mat4);
    console.log("Materia " + mat_5 + " : " + nota2_mat5);

    // Notas Tercer Trimestre
    console.log("NOTAS TERCER TRIMESTRE:")

    console.log("Materia " + mat_1 + " : " + nota3_mat1);
    console.log("Materia " + mat_2 + " : " + nota3_mat2);
    console.log("Materia " + mat_3 + " : " + nota3_mat3);
    console.log("Materia " + mat_4 + " : " + nota3_mat4);
    console.log("Materia " + mat_5 + " : " + nota3_mat5);
} else {
    alert("usted debe presionar 1 para cargar el primer trimestre, 2 para cargar el primer y segundo trimestre o 3 para cargar los tres timestres");
}

}

// funciones
function notasPrimerTrim() {
    nota1_mat1 = Number(prompt("Ingrese la nota del primer trimeste de " + mat_1));
    nota1_mat2 = Number(prompt("Ingrese la nota del primer trimeste de " + mat_2));
    nota1_mat3 = Number(prompt("Ingrese la nota del primer trimeste de " + mat_3));
    nota1_mat4 = Number(prompt("Ingrese la nota del primer trimeste de " + mat_4));
    nota1_mat5 = Number(prompt("Ingrese la nota del primer trimeste de " + mat_5));
}

function notasSegundoTrim() {
    nota2_mat1 = Number(prompt("Ingrese la nota del segundo trimestre de " + mat_1));
    nota2_mat2 = Number(prompt("Ingrese la nota del segundo trimestre de " + mat_2));
    nota2_mat3 = Number(prompt("Ingrese la nota del segundo trimestre de " + mat_3));
    nota2_mat4 = Number(prompt("Ingrese la nota del segundo trimestre de " + mat_4));
    nota2_mat5 = Number(prompt("Ingrese la nota del segundo trimestre de " + mat_5));
}

function notasTercerTrim() {
    nota3_mat1 = Number(prompt("Ingrese la nota del tercer trimestre de " + mat_1));
    nota3_mat2 = Number(prompt("Ingrese la nota del tercer trimestre de " + mat_2));
    nota3_mat3 = Number(prompt("Ingrese la nota del tercer trimestre de " + mat_3));
    nota3_mat4 = Number(prompt("Ingrese la nota del tercer trimestre de " + mat_4));
    nota3_mat5 = Number(prompt("Ingrese la nota del tercer trimestre de " + mat_5));
}