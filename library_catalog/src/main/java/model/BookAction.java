package model;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDateTime;

@Data
@Entity
@Table (name = "tb_book_action")
public class BookAction {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_book_action")
    private Long idBookAction;

    @Enumerated(EnumType.STRING) // Armazena o enum como String ('CREATE', 'UPDATE', 'DELETE')
    @Column(name = "type_action", length = 10)
    private ActionType actionType;

    @Column(name = "timestamp_action")
    private LocalDateTime actionTimestamp;

    // -----------------------------------------------------------------
    // MAPEAMENTO DA FOREIGN KEY (id_book)
    // -----------------------------------------------------------------

    // @ManyToOne, pois muitas Ações pertencem a UM Livro
    @ManyToOne(fetch = FetchType.LAZY) // Carrega o Livro somente se for acessado
    @JoinColumn(name = "id_book", referencedColumnName = "id_book", nullable = false)
    private Book book;

}
