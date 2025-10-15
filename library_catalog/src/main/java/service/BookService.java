package service;

import jakarta.transaction.Transactional;
import model.ActionType;
import model.Book;
import org.springframework.stereotype.Service;
import repository.BookRepository;

import java.util.List;

@Service
public class BookService {
    private final BookRepository bookRepository;
    private final BookActionService actionService;

    public BookService(BookRepository bookRepository, BookActionService actionService) {
        this.bookRepository = bookRepository;
        this.actionService = actionService;
    }
    @Transactional
    public Book save(Book book){
        Book saved = bookRepository.save(book);
        ActionType type = (book.getIdBook() == null) ? ActionType.CREATE : ActionType.UPDATE;
        actionService.registerAction(saved, type);
        // atualizar a view materializada
        return saved;
    }

    @Transactional
    public List<Book> searchCatalog(String searchTerm){
        String tsQueryFormated = searchTerm.replace("AND", "&").replace("OR", "|").replace("NOT", "!");

        // 2. Inicia a medição do tempo AQUI (PARA AVALIAÇÃO DE PERFORMANCE)
        long start = System.currentTimeMillis();

        // 3. Executa a busca nativa (chamando o método do Repositório)
        List<Book> results = bookRepository.searchByNativeBooleanSearch(tsQueryFormated);

        // 4. Finaliza a medição do tempo AQUI
        long end = System.currentTimeMillis();
        long executionTime = end - start;

        // 5. Loga ou armazena o tempoExecucao para a AVALIAÇÃO DO ALGORITMO
        System.out.println("Tempo de execução da busca booleana: " + executionTime + " ms");

        return results;

    }
}
