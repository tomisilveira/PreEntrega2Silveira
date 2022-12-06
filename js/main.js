let nombre;
let dni;
let cursos;
let tramite;
let comision;
let cursoAInscribir;

function ingresoEstudiante() {
  nombre = prompt(
    "Bienvenido Fundación San Patricio, escriba su Nombre y Apellido"
  );
  dni = prompt("Indique su numero de Documento");
}
ingresoEstudiante();

tramite = prompt(
  "Indique que tramite desea realizar, 1- Incribirme a un nuevo curso, 2- Certificado de alumno regular, 3- Otras consultas,"
);

switch(tramite){
    case "1" :
        cursos = prompt(
            "Indique a que curso deseas inscribirte: 1- Desarrollo Web, 2- Java Script, 3- Backend"
          );
          if(cursos=="1"){
            cursoAInscribir="Desarrollo Web";
          }
          else{
            if(cursos=="2"){
                cursoAInscribir="Java Script";
            }
            else{
                cursoAInscribir="Back-End";
            }
          }
          function comisionCursada(comision) {
            alert(
              "Alumno: " +nombre+" con DNI:"+dni+" comisión asiganada para el curso " + " " + cursoAInscribir + " es: " + comision
            );
          }
        
          while (comision != "Mañana" || comision != "Tarde" || comision != "Noche") {
            comision =prompt("Ingrese a que comision quiere inscribirse: Mañana/Tarde/Noche");
            if (comision == "Mañana" || comision == "Tarde" || comision == "Noche") {
                break;}
            }
          comisionCursada(comision);
          break;
    case "2":
        alert(
            nombre+ "su certificado de alumno regular se está confeccionando, pronto lo recibirá por mail"
          );
          break;
    case "3":
        alert(
            "Gracias por ponerse en contacto, a la brevedad nos estaremos comunicando vía WhatsApp"
          );
          break;
}
