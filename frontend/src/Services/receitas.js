export async function obterReceitas() {
  return (await fetch('http://localhost:3001/receitas')).json();
}

export async function obterDetalhesDaReceita(id) {
  return (await fetch(`http://localhost:3001/receitas/${id}`)).json();
}
