const knex = require('../config/data');

class Produto
{
    async findAll()
    {
        try 
        {
            let produtos = await knex.select(["idProduto","nome","categoria","preco", "quantidade"]).table("produtos");
            return {valid: true, values: produtos};
        } catch (error) 
        {        
            return {valid: false, message: error};
        }   
    }
    
    async create(nome, categoria, preco, quantidade)
    {
        try {
            await knex('produtos')
                .insert({
                    nome: nome,
                    categoria: categoria,
                    preco: preco,
                    quantidade: quantidade
                });
            return {valid: true};
        } catch (error) {
            return {valid: false, message: error};
        }
    }
}

module.exports = new Produto();