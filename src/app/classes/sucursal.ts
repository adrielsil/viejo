import { Mes } from './mes';

export class Sucursal {
    /* Modelo TypeScript */
    constructor(
        private _nombre: string,
        private _provincia: string,
        private _direccion: string,
        private _ventaspormes: Array<number>
    ) { }

    get nombre(): string { // get por defecto
        return this._nombre;
    }

    set nombre(name: string) { // set por defecto
        this._nombre = name;
    }

    get provincia(): string { // get por defecto
        return this._provincia;
    }

    set provincia(provincia: string) { // set por defecto
        this._provincia = provincia;
    }

    get direccion(): string { // get por defecto
        return this._direccion;
    }

    set direccion(direccion: string) { // set por defecto
        this._direccion = direccion;
    }

    setVentasMes(ventas: number, mes: number) {
        if(mes > 0 && ventas >= 0) {
            this._ventaspormes[mes] = ventas;
        }
    }

    getVentasMes(mes) {
        return this._ventaspormes[mes];
    }

    get ventas() {
        return this._ventaspormes;
    }

}