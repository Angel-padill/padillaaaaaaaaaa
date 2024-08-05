// metodos estaticos con los datos del usuario
class tarjeta {
    constructor (dieciseisdigitosAlazar,debito,Delafechaactualsumar3años,Generarcodigosde3cifras,active){
        this.dieciseisdigitosAlazar = dieciseisdigitosAlazar;
        this.debito = debito;
        this.Delafechaactualsumar3años = Delafechaactualsumar3años;
        this.Generarcodigosde3cifras = Generarcodigosde3cifras;
        this.active = active;
    }

    static generardatosdetarjeta(){
        const fechaActual = new date();
        const nuevaFecha = this.sumartresaños(fechaActual);
        const numerocuenta = this.generarnumerocuenta(16);
        const codigo = this.generarcodigo();
        return{
            numerocuenta: numerocuenta,
            fechaVencimiento: nuevaFecha.localdate(),
            codigo:codigo
        };
    }

    static sumartresaños(fecha){
        const nuevaFecha = new date(fecha);

        nuevaFecha.fullyear(nuevaFecha.fullyear()+3);
        return nuevaFecha;
    }

    static generarcodigode3cifras(){
        return Math.floor(math.random()*900)+100;
    }















    8







}