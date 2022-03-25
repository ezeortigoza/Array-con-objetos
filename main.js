const Rutinas = [

    {Dia: 1 , Descripcion: "Pierna y hombro" , Ejercicio: "Vuelo lateral y sentadilla" },
    {Dia: 2 , Descripcion: "Pecho y biceps", Ejercicio: "Curl de biceps y pecho"},
    {Dia: 3 , Descripcion: "Espalda y triceps", Ejercicio: "Press frances y dominadas pronas"},
    {Dia: 4 , Descripcion: "Espalda , pecho ,triceps , biceps y piernas" , Ejercicio: "Dominadas supinas, fondos , polea triceps , banco scoop y peso muerto"},

]


const Buscado = Rutinas.find(Descripcion => Descripcion.Dia == 1);
alert(Buscado.Dia + ' ' + Buscado.Descripcion.toString() );

const Existe = Rutinas.some(Descripcion => Descripcion.Dia == "Proteina" );
alert(Existe);

const dias = Rutinas.filter(Descripcion => Descripcion.Dia >= 2);
console.log(dias);

const listaEjercicio = Rutinas.map( Rutinas => Rutinas.Ejercicio );
console.log(listaEjercicio );






