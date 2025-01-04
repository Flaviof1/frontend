import React from 'react';
import Produtos from './pages/Produtos';
import Formulario from './components/Formulario';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Controle de Estoque</h1>
      </header>
      <main>
        <div className="content">
          <Formulario />
          <Produtos />
        </div>
      </main>
    </div>
  );
}

export default App;
