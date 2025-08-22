
const BookList = ({books}) => {
    return (
        <div>
            {books.length > 0 ? 
            books.map(book => (
                <div key={book.id}>
                    <h3>{book.title}</h3>
                    <p><strong>Ano:</strong>{book.publicationYear}</p>
                </div>
            )) 
    : (
        <p>Nenhum livro encontrado</p>
    )}
        </div>
    )
}

export default BookList;