package repository;

import model.Book;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BookRepository extends JpaRepository<Book,Long> {

    @Query(value = """
        SELECT l.* FROM tb_book b
        INNER JOIN mv_book_search mv ON b.id_book = mv.id_book
        WHERE mv.text_search @@ to_tsquery('portuguese', :tsQueryString)
        """, nativeQuery = true)
    List<Book> searchByNativeBooleanSearch(@Param("tsQueryString") String tsQueryString);
}
