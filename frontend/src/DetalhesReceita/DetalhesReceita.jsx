import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { obterDetalhesDaReceita } from '../Services/receitas';
import './DetalhesReceita.css';

export default function DetalhesReceita({ id, aoFechar }) {
  const [dadosReceita, setDadosReceita] = useState(null);

  useEffect(() => {
    carregarDados();

    async function carregarDados() {
      const resultado = await obterDetalhesDaReceita(id);
      setDadosReceita(resultado);
    }
  }, [id]);

  return dadosReceita == null ? (
    <></>
  ) : (
    <div className="detalhesReceita">
      <div className="detalhesReceita__container">
        <h2 className="detalhesReceita__titulo">{dadosReceita.nome}</h2>
        <span className="detalhesReceita__pais">({dadosReceita.pais})</span>
        <p>{dadosReceita.descricao}</p>

        <div className="detalhesReceita__fechar" onClick={aoFechar}>
          OK
        </div>
      </div>
    </div>
  );
}

DetalhesReceita.propTypes = {
  id: PropTypes.number,
  aoFechar: PropTypes.func,
};
