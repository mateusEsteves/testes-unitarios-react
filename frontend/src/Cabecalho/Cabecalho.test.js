import { render } from '@testing-library/react';
import Cabecalho from './Cabecalho';

it('Deve renderizar corretamente', () => {
  const { baseElement } = render(<Cabecalho />);
  expect(baseElement).toMatchSnapshot();
});
