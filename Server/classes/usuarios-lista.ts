import { Usuario } from './usuario';

export class UsuariosLista {

    private _list: Usuario[] = [];

    constructor() { }

    public agregar(usuario: Usuario) {

        this._list.push(usuario);
        console.log(this._list);
        return usuario;

    }


    public actualizarNombre(id: string, nombre: string) {


        for(let usuario of this._list){

            if(usuario.id = id){
                usuario.nombre = nombre;
            }
        }
        
        console.log('-----ACTUALIZADO-------');
        console.log(this._list);
    }

    public getLista(){
        return this._list.filter( usuario => usuario.nombre !== 'Sin-Nombre')
    }

    public getUsuario(id:string){
        return this._list.find( usuario => usuario.id == id)
    }

    public borraUsuario(id:string){
        let tempUsuario = this.getUsuario(id);

        this._list = this._list.filter( usuario => usuario.id !== id)

        return tempUsuario;

    }



}