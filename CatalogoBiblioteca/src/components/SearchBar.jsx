import { useState } from "react";

const SearchBar = ({onSearch}) => {
    const [query, setQuery] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(query);
    }
    return(
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Pesquise por título, autor ou palavras chaves"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                aria-label ="Campo de pesquisa de livros"
                />
                <button type="submit">Pesquisar</button>
        </form>
    )

}

export default SearchBar;