# Teste ReactJS

---

1. Para a requisição da API do Youtube, foi necessário determinar os paramêtros para requisição: part=snippet (obrigatório), maxResults(o número de resultados que queremos, pode ser entre 0 ~ 50) e Key que é única para cada usuário.
2. Usei o método map, para retornar todos os videos que foram gerados no response.data.itens e depois renderiza-los no VideoList;
3. VideoItem determina a como será renderizado o card do vídeo, aqui posso renderizar título, thumbnail e descrição, o tamanho da thumbnail pode ser alterado mudando de medium para high;
4. VideoDetail returna o iframe, determinando a renderização do player com título e descrição;
5. Para o SearchBar, usei o método form com onChange para capturar os inputs de usúario e posteriormente alterar o state.term.
6. Em App, importei todos os components e também criei um handleVideoSelect para renderizar o iframe e handleSubmit para requisição ao método de API.

