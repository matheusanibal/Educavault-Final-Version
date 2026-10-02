// Remove apenas os dados armazenados pela versão antiga neste mesmo domínio.
// A navegação e o acesso às atividades independem de JavaScript.
try {
  for (const key of ['Arr1', 'Arr2', 'isLoggedIn']) {
    localStorage.removeItem(key);
  }
} catch {
  // O site continua funcionando quando o navegador bloqueia o armazenamento.
}
