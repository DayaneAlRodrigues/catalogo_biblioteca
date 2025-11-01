package model;

import jakarta.persistence.*;
import lombok.Data;
import lombok.EqualsAndHashCode;

import java.util.Set;

@Data
@Entity
@Table(name = "tb_keyword")
@EqualsAndHashCode(exclude = {"books"})
public class Keyword {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_keyword")
    private Long idKeyword;

    @Column(name = "keyword", unique = true, nullable = false)
    private String keyword;

    // Mapeamento do lado inverso da relação N:N com Livro
    // 'mappedBy' aponta para o nome da propriedade na classe Livro
    @ManyToMany(mappedBy = "keywords")
    private Set<Book> books;
}
