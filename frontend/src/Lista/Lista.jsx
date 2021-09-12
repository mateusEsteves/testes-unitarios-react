import PropTypes from 'prop-types';
import Receita from '../Receita/Receita';
import './Lista.css';

export default function Lista({ receitas, aoSelecionarReceita }) {
  return (
    <main className="lista">
      {receitas.length === 0 ? (
        <div className="semItens">
          <span className="semItens__texto">Nenhuma receita encontrada</span>
        </div>
      ) : (
        receitas?.map((receita) => (
          <Receita
            key={receita.id}
            nome={receita.nome}
            onClick={() => aoSelecionarReceita(receita.id)}
          />
        ))
      )}
    </main>
  );
}

Lista.propTypes = {
  receitas: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      nome: PropTypes.string.isRequired,
    })
  ),
  aoSelecionarReceita: PropTypes.func.isRequired,
};

Lista.defaultProps = {
  receitas: [],
};
