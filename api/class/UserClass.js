//Registrarse el usuario
//Iniciar secion 
//Cerrar secion
//0btener informacionn del usuario
//Crear transacciones 
//Pedir prestamos 
//Borar cuenta
//Actualizar

import UserModel from "../UserModel1.js"
import ManagerAccount from "./AccountClass.js";
import ManagerCard from "./CardClass.js"

class ManagerUser{constructor(email,phone, 
    name, 
    lastName, 
    isInSession, 
    isAdmin,
    password){
        this.email = email;
        this.phone = phone;
        this.name = name;
        this.lastName = lastName;
        this.isInSession = isInSession;
        this.isAdmin = isAdmin;
        this.password = password;
    }
        
    async register(){
        try {
         const user = await UserModel.create({
            email: this.email,
             phone: this.phone,
             name: this.name,
             lastName: this.name,
             isInSession: this.isInSession,
             isAdmin: this.isAdmin,
             Password: this.password,
             });
            const MA =  new ManagerAccount(user._id,12345,"Ahorro",10000);
            const currentAccount = await MA.createAccount();
            const MC = new ManagerCard(user._id,currentAccount._id,"16digitos al azar","debito","De la fecha actual sumar 3 años","Generar codigos de 3 cifras","active");
            await Mc.createCard();
            return user;
        } catch (error) {
            throw new Error('Error al registrar usuario: ${error}');
        }
    }

    async Login(email, password){
        try {
            const user = await UserModel.finOne({email: email})
            if(!user){
                throw new Error("Usuario no registraado!")
            }
            if(user.password !== password){
                throw new error ("contraseña incorrecta!")
            }
            return "Succeeded"
        } catch (error) {
            throw new Error('Error al registrar usuario: ${error}');

        }
    }
    async getUserInfo(id){
        try {
            const user = await UserModel.finById(id);
            return user;
        } catch (error) {
            throw new Error('Error al registrar usuario: ${error}')
        }
    }
    async updateInfo(email,){
        try {
            if(!email){
                throw  new Error("Correo invalido");
            }
            await UserModel.finByIdAndUpdate(id,{
                $set:{email:email}
            });
            return "ok"
        } catch (error) {
            throw new Error('Error al acctualizar el correo: ${error}')
        }
    }

    async updatePhone(email,){
        try {
            if(!phone){
                throw  new Error("Numero de telefono invalido");
            }
            await UserModel.finByIdAndUpdate(id,{
                $set:{phone}
            });
            return "ok"
        } catch (error) {
            throw new Error('Error al acctualizar el numero de telefono: ${error}')
        }
    }

    async updatePassword(id,password){
        try {
            if(!password){
                throw  new Error("Contraseña invalida");
            }
            await UserModel.finByIdAndUpdate(id,{
                $set:{password}
            });
            return "ok"
        } catch (error) {
            throw new Error('Error al actuañizar la Contraseña: ${error}')
        }
    }

    //pendiente aliminar usuario
}

export default ManagerUser;