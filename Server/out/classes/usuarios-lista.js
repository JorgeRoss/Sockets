"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UsuariosLista {
    constructor() {
        this._list = [];
    }
    agregar(usuario) {
        this._list.push(usuario);
        console.log(this._list);
        return usuario;
    }
    actualizarNombre(id, nombre) {
        for (let usuario of this._list) {
            if (usuario.id = id) {
                usuario.nombre = nombre;
            }
        }
        console.log('-----ACTUALIZADO-------');
        console.log(this._list);
    }
    getLista() {
        return this._list.filter(usuario => usuario.nombre !== 'Sin-Nombre');
    }
    getUsuario(id) {
        return this._list.find(usuario => usuario.id == id);
    }
    borraUsuario(id) {
        let tempUsuario = this.getUsuario(id);
        this._list = this._list.filter(usuario => usuario.id !== id);
        return tempUsuario;
    }
}
exports.UsuariosLista = UsuariosLista;
//# sourceMappingURL=usuarios-lista.js.map