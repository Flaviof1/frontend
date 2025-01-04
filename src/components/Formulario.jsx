import React, { useState } from 'react';
import api from '../services/api';

function Formulario() {
  const [nome, setNome] = useState('');
  const [quantidade, setQuantidade] = useState('');
  const [preco, setPreco] = useState('');

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
    </div>
  );
}

export default Formulario;
