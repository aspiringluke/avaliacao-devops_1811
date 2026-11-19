CREATE TABLE IF NOT EXISTS produtos (
    idProduto INT NOT NULL PRIMARY KEY,
    nome VARCHAR(45),
    categoria VARCHAR(45),
    preco DECIMAL(10,2),
    quantidade INT
)