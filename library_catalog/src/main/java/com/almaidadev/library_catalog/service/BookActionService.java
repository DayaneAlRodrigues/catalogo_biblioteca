package service;

import model.ActionType;
import model.Book;
import model.BookAction;
import org.springframework.stereotype.Service;
import repository.BookActionRepository;

import java.time.LocalDateTime;

@Service
public class BookActionService {
    private final BookActionRepository actionRepository;

    public BookActionService(BookActionRepository actionRepository) {
        this.actionRepository = actionRepository;
    }

    public void registerAction(Book book, ActionType type) {
        BookAction action = new BookAction();
        action.setBook(book);
        action.setActionType(type);
        action.setActionTimestamp(LocalDateTime.now());
        actionRepository.save(action);
    }
}
