import { useState } from "react";
import { useNavigate } from "react-router";
import Filters from "../components/FIlters";
import SearchBar from "../components/SearchBar";
import BookList from "../components/BookList";
import { useAuth } from "../context/AuthProvider";

const mockBooks = [
    { id: 1, title: "El Transporte en la Sociedad Actual" , author: "Abejon, Manuel",publicationYear: 1981, keyword: "antropologia" },
    { id: 2, title: "Antropología. Una exploración de la diversidad humana" , author:"Kottak, Conrad Phillip",publicationYear: 1994, keyword: "antropologia histórica" },
    { id: 3, title: "Sociedades, Pueblos y Culturas" , author: "Navarro, Pío", publicationYear: 1981, keyword: "sociologia" },
    { id: 4, title: "Economía, Fetichismo y Religión en las Sociedades Primitivas" , author: "Godelier, Maurice", publicationYear: 1974, keyword: "economia politica" },
]

export default function Home (){
    const {logout} = useAuth();
    const navigate = useNavigate();

    const [filteredBooks, setFilteresBooks] = useState(mockBooks);

    const handleLog = () => {
        logout();
        navigate("/login");
    }

    const handleSearch = (query) => {
        const results = mockBooks.filter( book =>
            book.title.toLowerCase().includes(query.toLowerCase()) ||
            book.author.toLowerCase().includes(query.toLowerCase()));
            setFilteresBooks(results)
    };

    const handleFilter = (filters) => {
        let results = mockBooks;

        if (filters.keyword){
            results = results.filter(book => 
                book.keyword.toLowerCase().includes(filters.keyword))
        }

        if (filters.author){
            results = results.filter(book => book.author.toLowerCase().includes(filters.author.toLowerCase()));
        }
        if (filters.publicationYear) {
        results = results.filter(book => book.publicationYear === parseInt(filters.publicationYear));
        }
        setFilteresBooks(results);
    }
    
    return(
        <div>
            <h1>Catálogo de Livros</h1>
            <p>Bem vindo usuario</p>
            <button onClick={handleLog}>Sair</button>
            <SearchBar onSearch={handleSearch} />
            <div>
                <aside>
                    <Filters onFilter={handleFilter} />
                </aside>
                <main>
                    <BookList books={filteredBooks} />
                </main>
            </div>
        </div>
        
    );
}