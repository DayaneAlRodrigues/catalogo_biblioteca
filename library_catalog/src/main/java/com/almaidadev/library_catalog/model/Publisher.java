package model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data; // Anotações do Lombok
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

@Data // Gera Getters, Setters, toString, hashCode, equals
@NoArgsConstructor // Construtor sem argumentos
@AllArgsConstructor // Construtor com todos os argumentos
@Entity // Marca esta classe como uma Entidade JPA (tabela no DB)
@Table(name = "tb_publisher") // Especifica o nome da tabela no PostgreSQL
public class Publisher{

    @Id // Marca o campo como Chave Primária
    @GeneratedValue(strategy = GenerationType.IDENTITY) // Indica que o valor é gerado pelo banco (SERIAL)
    private Long idPublisher;

    // As colunas serão mapeadas automaticamente, mas podemos usar @Column para forçar o nome, se necessário
    private String namePublisher;

    private String city;

    // Nota: Nenhuma lógica de negócio é necessária aqui, apenas a estrutura.
}