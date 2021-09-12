import { render, screen, fireEvent } from '@testing-library/react';
import Lista from './Lista';

const receitas = [
  {
    id: 0,
    nome: 'Feijoada',
    pais: 'Brasil',
  },
  {
    id: 1,
    nome: 'Feijoada',
    pais: 'Brasil',
  },
];

it('Caso não seja informada nenhuma receita, deve exibir a mensagem de nenhuma receita encontrada', () => {
  render(<Lista receitas={[]} aoSelecionarReceita={() => {}} />);
  expect(screen.queryByText('Nenhuma receita encontrada')).toBeInTheDocument();
});

it('Caso sejam informadas receitas, não deve exibir a mensagem de nenhuma receita encontrada', () => {
  render(<Lista receitas={receitas} aoSelecionarReceita={() => {}} />);
  expect(screen.queryByText('Nenhuma receita encontrada')).not.toBeInTheDocument();
});

it('Caso sejam informadas receitas, deve renderizar as receitas', () => {
  render(<Lista receitas={receitas} aoSelecionarReceita={() => {}} />);
  expect(screen.queryAllByText('Feijoada')).toHaveLength(2);
});

it("Ao selecionar uma receita, deve chamaro o método 'aoSelecionarReceita', informando o id da receita selecionada", () => {
  const aoSelecionarReceita = jest.fn();

  render(<Lista receitas={receitas} aoSelecionarReceita={aoSelecionarReceita} />);
  fireEvent.click(screen.getAllByText('Feijoada')[0]);

  expect(aoSelecionarReceita).toHaveBeenCalledWith(0);
});
