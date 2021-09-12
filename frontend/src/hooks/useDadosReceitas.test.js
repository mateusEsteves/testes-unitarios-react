import { renderHook, act } from '@testing-library/react-hooks';
import { obterReceitas } from '../Services/receitas';
import { useDadosReceitas } from './useDadosReceitas';

jest.mock('../Services/receitas.js', () => {
  return {
    obterReceitas: jest.fn(),
  };
});

beforeEach(() => {
  obterReceitas.mockReset();
});

const receitas = [
  {
    id: 0,
    nome: 'Feijoada',
    pais: 'Brasil',
  },
  {
    id: 1,
    nome: 'Acarajé',
    pais: 'Brasil',
  },
  {
    id: 2,
    nome: 'Sushi',
    pais: 'Japão',
  },
];

it('Ao inicializar o hook deve buscar os dados das receitas no back-end', async () => {
  await act(async () => {
    renderHook(() => useDadosReceitas());
  });

  expect(obterReceitas).toHaveBeenCalledTimes(1);
});

it('Ao inicializar o hook, deve retornar as receitas obtidas no back-end sem filtrar', async () => {
  obterReceitas.mockResolvedValue(receitas);
  let hook;

  await act(async () => {
    hook = renderHook(() => useDadosReceitas());
  });

  expect(hook.result.current.receitas).toHaveLength(3);
});

it('Ao filtrar por país, o hook deve retornar apenas as receitas do país informado', async () => {
  obterReceitas.mockResolvedValue(receitas);
  let hook;

  await act(async () => {
    hook = renderHook(() => useDadosReceitas());
  });

  act(() => {
    hook.result.current.filtrarReceitas('', 'Japão');
  });

  expect(hook.result.current.receitas).toHaveLength(1);
});

it('Ao filtrar por nome, o hook deve retornar apenas a receita com o nome informado', async () => {
  obterReceitas.mockResolvedValue(receitas);
  let hook;

  await act(async () => {
    hook = renderHook(() => useDadosReceitas());
  });

  act(() => {
    hook.result.current.filtrarReceitas('Feijoada', '');
  });

  expect(hook.result.current.receitas).toHaveLength(1);
});
