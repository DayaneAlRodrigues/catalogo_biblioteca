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
@Table(name="tb_author")

public class Author {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long IdAuthor;
    private String lastName;
    private String firstName;
    @ManyToMany(mappedBy = "authors")
    private Set<Book> books;

}
