import { render, screen } from '@testing-library/react';
import Receita from './Receita';

it('Deve renderizar o nome da receita', () => {
  render(<Receita nome="Feijoada" pais="Brasil" descricao="Um prato tipico brasileiro." />);

  expect(screen.queryByText('Feijoada')).toBeInTheDocument();
});
