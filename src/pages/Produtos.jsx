import React, { useState, useEffect } from 'react';
import api from '../services/api';

function Produtos() {
    const [produtos, setProdutos] = useState([]);

    useEffect(() => {
        api.get('/produtos') // Faz uma requisição GET para o backend
            .then(response => {
                setProdutos(response.data); // Armazena os produtos no estado
            })
            .catch(error => {
                console.error('Erro ao buscar produtos:', error);
            });
    }, []);

    return (
        <div>
            <h1>Produtos</h1>
            <ul>
                {produtos.map(produto => (
                    <li key={produto.id}>
                        {produto.nome} - {produto.quantidade} unidades - R$ {produto.preco}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Produtos;
