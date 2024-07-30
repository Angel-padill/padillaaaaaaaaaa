//movimieto de dinero(crear transaccion)
//obtener transaciones
//obtener transaccion por usuario

import TransactionModel from "../moel/TransactionModel.js";

class ManagerTransaction {
    contructor(accountFromId, accountId, type, amout, description){
        this.accountFromId = accountFromId;
        this.accountId= accountId;
        this.type = type;
        this.amout = amout;
        this.description  = description;
    }

    async createTransaction(){
        try {
            const transaction = TransactionModel.create({
                accountFromId: this.accountFromId,
                accountId: this.accountId,
                type: this.type, 
                amout: this.amout,
                description: this.description,
            })
            return transaction;
        }catch (error){
            throw new Error('Error al crear al crear la transaccion ${error}')
        }
    }

    async getTransaction(id){
        try{
            const transaction = await TransactionModel.find();
            return transaction;
        }catch (error) {throw new Error('Error al obtener la transaccion ${error}')

        }
    }
    async getTransactions(){
        try{
            const transactions= await TransactionModel.find();
            return transactions;
        }catch (error) {throw new Error('Error al obtener las transaccions ${error}')

        }
    }

    async getTransactions(id){
        try{
            const transactions= await TransactionModel.find();
            return transactions;
        }catch (error) {throw new Error('Error al obtener las transaccions ${error}')

        }
    }
}
export default ManagerTransaction;