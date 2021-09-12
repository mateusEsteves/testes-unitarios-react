import PropTypes from 'prop-types';
import './Receita.css';

export default function Receita({ nome, onClick }) {
  return (
    <div className="receita" onClick={onClick}>
      <div className="receita__containerTextos">
        <span className="receita__titulo">{nome}</span>
      </div>
    </div>
  );
}

Receita.propTypes = {
  nome: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};
