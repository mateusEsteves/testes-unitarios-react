import { useCallback, useEffect, useState } from 'react';
import { obterReceitas } from '../Services/receitas';

export function useDadosReceitas() {
  const [receitas, setReceitas] = useState([]);
  const [itensFiltrados, setItensFiltrados] = useState([]);

  const filtrarReceitas = useCallback(
    (nome, pais) => {
      const resultado = receitas.filter((receita) => {
        const paisIgual =
          pais == null || pais.length === 0 ? true : new RegExp(pais, 'i').test(receita.pais);

        const nomeIgual =
          nome == null || nome.length === 0 ? true : new RegExp(nome, 'i').test(receita.nome);

        return paisIgual && nomeIgual;
      });

      setItensFiltrados(resultado);
    },
    [receitas]
  );

  useEffect(() => {
    carregarDados();

    async function carregarDados() {
      const resultado = await obterReceitas();
      setReceitas(resultado);
      setItensFiltrados(resultado);
    }
  }, []);

  return {
    receitas: itensFiltrados,
    filtrarReceitas,
  };
}
