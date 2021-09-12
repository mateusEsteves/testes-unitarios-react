import './App.css';
import { useState } from 'react';
import Lista from './Lista/Lista';
import Cabecalho from './Cabecalho/Cabecalho';
import Filtros from './Filtros/Filtros';
import DetalhesReceita from './DetalhesReceita/DetalhesReceita';
import { useDadosReceitas } from './hooks/useDadosReceitas';

export default function App() {
  const { receitas, filtrarReceitas } = useDadosReceitas();
  const [mostrarDetalhesDaReceita, setMostrarDetalhesDaReceita] = useState(false);
  const [receitaSelecionada, setReceitaSelecionada] = useState(null);

  return (
    <>
      {mostrarDetalhesDaReceita && (
        <DetalhesReceita
          id={receitaSelecionada}
          aoFechar={() => setMostrarDetalhesDaReceita(false)}
        />
      )}
      <div className="app">
        <Cabecalho />
        <Filtros aoAplicarFiltros={filtrarReceitas} />
        <Lista
          receitas={receitas}
          aoSelecionarReceita={(id) => {
            setReceitaSelecionada(id);
            setMostrarDetalhesDaReceita(true);
          }}
        />
      </div>
    </>
  );
}
