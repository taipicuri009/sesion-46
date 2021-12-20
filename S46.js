//Se creará la clase persona
function Persona(nombre,apellido,edad,genero,estatura,intereses){
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.genero = genero;
    this.estatura = estatura;
    this.intereses = intereses;
    this.bio = function(){
        alert(this.nombre+ "" +this.apellido+ "tiene" +this.edad+" años de edad. A mi me gusta o me interesa:"
        +this.intereses[0]+ " y "+this.intereses[2]);
    }
    this.saludo =function(){
        alert("hola, yo soy"+this.nombre+"");
    }
    this.bio2= function(){
        alert("hola, yo soy"+this.nombre+ "tengo la estutura de" +this.estatura+"1.58");
    }
}
//Aqui Crearemos la instancia de la persona
var persona1 = new Persona("priscila", "sanchez taipicuri", 16, "femenino", 1.58,["futbol", "voley", "peliculas"]);
var persona2 = new Persona("johel", "sanchez taipe", 50, "Masculino", 1.60, ["futbol" , "box","leer"]);
persona1.bio();
persona1.saludo();

persona2.bio2();
persona1.saludo();


