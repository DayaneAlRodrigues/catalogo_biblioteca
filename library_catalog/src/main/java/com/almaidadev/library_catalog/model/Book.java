package model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Set;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="tb_book")
public class Book {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idBook;
    private String title;
    // 1. @ManyToOne: Indica que muitos Livros podem ter UMA Editora.
    @ManyToOne
    // 2. @JoinColumn: Especifica a coluna real da Foreign Key no banco de dados.
    //    'name' deve ser o nome da coluna FK na tabela 'tb_livro'.
    //    'referencedColumnName' é a PK da tabela 'tb_editora' (opcional, mas bom para clareza).
    @JoinColumn(name = "id_publisher", referencedColumnName = "id_publisher")
    private Publisher publisher; // Este campo representa o OBJETO Editora, não apenas o ID.
    private int publicationYear;
    private int originalYear;

    @ManyToMany(cascade = {CascadeType.PERSIST, CascadeType.MERGE}) // Define o comportamento de salvamento
    @JoinTable(
            name = "tb_book_author", // 1. Nome da tabela de junção (intermediária)
            joinColumns = @JoinColumn(name = "id_book"), // 2. FK desta classe (Livro) na tabela de junção
            inverseJoinColumns = @JoinColumn(name = "id_author") // 3. FK da outra classe (Autor) na tabela de junção
    )
    private Set<Author> authors;

    @ManyToMany(cascade = {CascadeType.PERSIST, CascadeType.MERGE})
    @JoinTable(
            name = "tb_keyword_book", // 1. Nome da tabela de junção
            joinColumns = @JoinColumn(name = "id_book"), // 2. FK desta classe (Livro) na tabela de junção
            inverseJoinColumns = @JoinColumn(name = "id_keyword") // 3. FK da outra classe (Keyword) na tabela de junção
    )
    private Set<Keyword> keywords;
}
