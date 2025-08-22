import { useState } from "react";

const Filters = ({onFilter}) => {
    const [filters, setFilters] = useState({
        keyword: "",
        author: "",
        publicationYear: "",
    });

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setFilters(prevFilters => ({
            ...prevFilters,
            [name]:value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onFilter(filters);
    }

    return (
        <form onSubmit={handleSubmit}>
            <h4>Filtros</h4>
            <div>
                <label htmlFor="keyword">Palavra-chave</label>
                <input 
                    type="text"
                    id="keyword"
                    name="keyword"
                    value={filters.keyword}
                    onChange={handleInputChange} 
                    placeholder="antropologia histórica, etnologia indígena"/>
            </div>
            <div>
                <label htmlFor="keyword">Autor : Sobrenome, Nome</label>
                <input 
                    type="text"
                    id="author"
                    name="author"
                    value={filters.author}
                    onChange={handleInputChange} 
                    placeholder="Wolf, Eric"/>
            </div>
            <div>
                <label htmlFor="keyword">Ano de publicação</label>
                <input 
                    type="number"
                    id="publicationYear"
                    name="publicationYear"
                    value={filters.publicationYear}
                    onChange={handleInputChange} 
                    placeholder="1999"/>
            </div>
            <button type="submit">Aplicar filtros</button>
        </form>
    )
}

export default Filters;