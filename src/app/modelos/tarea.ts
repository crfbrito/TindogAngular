export class Tarea{
    tid:number;
    descripcion:string;
    duracion:number;
    usuario:number;

    constructor(tid?, descripcion?, duracion?, usuario?){
        this.tid=tid;
        this.descripcion=descripcion;
        this.duracion=duracion;
        this.usuario=usuario;
    }

}