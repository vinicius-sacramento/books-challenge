import api from "./api";

async function searchBooks(query, category, startIndex = 0) {
  const searchByQuery = `"${encodeURIComponent(query)}"`;
  const searchByCategory = `${encodeURIComponent(`subject:"${category}"`)}`;
  const orderBy = "&orderBy=relevance";
  const index = `&startIndex=${startIndex}`;
  const maxResult = "&maxResults=12";

  if (searchByQuery !== "") {
    const { data } = await api.get(searchByQuery + orderBy + index + maxResult);
    return data;
  } else if (searchByCategory !== "") {
    const { data } = await api.get(
      searchByCategory + orderBy + index + maxResult
    );
    return data;
  } else {
    console.log("não foi possível efetuar nenhuma requisição");
  }
}

export { searchBooks };
