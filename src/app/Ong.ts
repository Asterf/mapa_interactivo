export interface Ong{
    nombre_institucion:string,
    tipo_entidad:string,
    representante:string,
    celular:string[],
    correo:string,
    enlace_web:string,
    direccion:{
        detalle:string,
        provincia:string,
        distrito:string,
    },
    dir_img:string,
    nombre_proyecto:string,
    sector: string[],
    estado:string,
    posicion:{
        lat:number,
        lng:number
    }
}