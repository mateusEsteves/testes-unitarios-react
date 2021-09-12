import { render, screen, fireEvent, act } from '@testing-library/react';
import { obterDetalhesDaReceita } from '../Services/receitas';
import DetalhesReceita from './DetalhesReceita';

const dadosReceita = {
  id: 0,
  nome: 'Feijoada',
  pais: 'Brasil',
  descricao:
    'A feijoada consiste em uma mistura do feijão preto cozido, com partes menos nobres do porco, como orelha, rabo, além de linguiça e carne seca. Normalmente vem acompanhada de couve e de arroz.',
};

jest.mock('../Services/receitas', () => {
  return {
    obterDetalhesDaReceita: jest.fn(),
  };
});

beforeEach(() => {
  obterDetalhesDaReceita.mockReset();
});

it('Ao renderizar o componente, deve buscar os dados da receita', async () => {
  obterDetalhesDaReceita.mockResolvedValue({});

  await act(async () => {
    render(<DetalhesReceita id={0} aoFechar={() => {}} />);
  });

  expect(obterDetalhesDaReceita).toHaveBeenCalledTimes(1);
  expect(obterDetalhesDaReceita).toHaveBeenCalledWith(0);
});

it('Deve renderizar corretamente o nome da receita', async () => {
  obterDetalhesDaReceita.mockResolvedValue(dadosReceita);

  await act(async () => {
    render(<DetalhesReceita id={0} aoFechar={() => {}} />);
  });

  expect(screen.queryByText('Feijoada')).toBeInTheDocument();
});

it('Deve renderizar corretamente o país da receita', async () => {
  obterDetalhesDaReceita.mockResolvedValue(dadosReceita);

  await act(async () => {
    render(<DetalhesReceita id={0} aoFechar={() => {}} />);
  });

  expect(screen.queryByText('(Brasil)')).toBeInTheDocument();
});

it('Ao clicar no botão OK, deve chamar a função aoFechar', async () => {
  obterDetalhesDaReceita.mockResolvedValue({});
  const aoFechar = jest.fn();

  await act(async () => {
    render(<DetalhesReceita id={0} aoFechar={aoFechar} />);
  });

  act(() => {
    fireEvent.click(screen.getByText('OK'));
  });

  expect(aoFechar).toHaveBeenCalledTimes(1);
});
