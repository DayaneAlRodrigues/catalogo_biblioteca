package repository;

import model.BookAction;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BookActionRepository extends JpaRepository<BookAction,Long> {
}
