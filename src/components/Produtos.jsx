import React, { useState, useEffect } from 'react';
import api from '../services/api';

function Formulario() {
  const [nome, setNome] = useState('');
  const [quantidade, setQuantidade] = useState('');
  const [preco, setPreco] = useState('');
  const [produtos, setProdutos] = useState([]); // Estado para armazenar os produtos

  // Função para buscar os produtos do backend
  const fetchProdutos = async () => {
    try {
      const response = await api.get('/produtos');
      setProdutos(response.data);
    } catch (error) {
      console.error('Erro ao buscar produtos:', error);
    }
  };

  useEffect(() => {
    fetchProdutos(); // Chama a função de buscar produtos quando o componente for montado
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const novoProduto = {
      nome,
      quantidade,
      preco
    };

    try {
      await api.post('/produtos', novoProduto);
      alert('Produto adicionado com sucesso!');
      setNome('');
      setQuantidade('');
      setPreco('');
      fetchProdutos(); // Atualiza a lista de produtos após adicionar um novo produto
    } catch (error) {
      console.error('Erro ao adicionar produto:', error);
    }
  };

  return (
    <div className="formulario">
      <h2>Adicionar Produto</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nome">Nome:</label>
          <input
            type="text"
            id="nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="quantidade">Quantidade:</label>
          <input
            type="number"
            id="quantidade"
            value={quantidade}
            onChange={(e) => setQuantidade(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="preco">Preço:</label>
          <input
            type="number"
            id="preco"
            value={preco}
            onChange={(e) => setPreco(e.target.value)}
            required
          />
        </div>
        <button type="submit">Adicionar Produto</button>
      </form>

      <h3>Produtos</h3>
      <ul>
        {produtos.map((produto) => (
          <li key={produto.id}>
            {produto.nome} - {produto.quantidade} unidades - R$ {produto.preco}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Formulario;
