import PropTypes from 'prop-types';
import { useState } from 'react';
import './Filtros.css';

export default function Filtros({ aoAplicarFiltros }) {
  const [nome, setNome] = useState('');
  const [pais, setPais] = useState('');

  return (
    <aside className="filtros">
      <input
        type="text"
        placeholder="insira um nome"
        className="filtros__inputs"
        onInput={(e) => setNome(e.target.value)}
      />
      <select
        name="pais"
        id="pais"
        className="filtros__inputs"
        onChange={(e) => setPais(e.target.value)}
        data-testid="selecionar-pais"
      >
        <option default>selecione um país</option>
        <option value="brasil">Brasil</option>
        <option value="frança">França</option>
        <option value="japão">Japão</option>
      </select>
      <button
        className="filtros__inputs filtros__aplicarFiltros"
        onClick={() => aoAplicarFiltros(nome, pais)}
      >
        Aplicar Filtros
      </button>
    </aside>
  );
}

Filtros.propTypes = {
  aoAplicarFiltros: PropTypes.func,
};
