import { render, screen, fireEvent } from '@testing-library/react';
import Filtros from './Filtros';

it('Ao informar um nome e clicar em filtrar, deve chamar a função aoAplicarFiltros, passando o nome', () => {
  const aoAplicarFiltros = jest.fn();

  render(<Filtros aoAplicarFiltros={aoAplicarFiltros} />);
  fireEvent.input(screen.getByPlaceholderText('insira um nome'), {
    target: { value: 'Feijoada' },
  });
  fireEvent.click(screen.getByText('Aplicar Filtros'));

  expect(aoAplicarFiltros).toHaveBeenCalledWith('Feijoada', '');
});

it('Ao informar um país e clicar em Aplicar Filtros, deve chamar a função aoAplicarFiltros, passando o país', () => {
  const aoAplicarFiltros = jest.fn();

  render(<Filtros aoAplicarFiltros={aoAplicarFiltros} />);
  fireEvent.change(screen.getByTestId('selecionar-pais'), {
    target: { value: 'brasil' },
  });
  fireEvent.click(screen.getByText('Aplicar Filtros'));

  expect(aoAplicarFiltros).toHaveBeenCalledWith('', 'brasil');
});

it('Ao informar um nome e um país e clicar em Aplicar Filtros, deve chamar a função aoAplicarFiltros, passando ambos', () => {
  const aoAplicarFiltros = jest.fn();

  render(<Filtros aoAplicarFiltros={aoAplicarFiltros} />);
  fireEvent.input(screen.getByPlaceholderText('insira um nome'), {
    target: { value: 'Feijoada' },
  });
  fireEvent.change(screen.getByTestId('selecionar-pais'), {
    target: { value: 'brasil' },
  });
  fireEvent.click(screen.getByText('Aplicar Filtros'));

  expect(aoAplicarFiltros).toHaveBeenCalledWith('Feijoada', 'brasil');
});
