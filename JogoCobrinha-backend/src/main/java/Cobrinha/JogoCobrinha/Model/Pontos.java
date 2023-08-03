package Cobrinha.JogoCobrinha.Model;

import jakarta.persistence.*;

@Table(name = "Pontos")
@Entity(name = "Pontos")
public class Pontos {

    @Id @GeneratedValue (strategy = GenerationType.IDENTITY)
    private Long idPontos;

    private Long fkUsuarios;

    private int pontos_Maximo;

    private int pontos_Recente;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "fkUsuarios", insertable = false, updatable = false)
    private Usuario usuario;

    public Pontos() {

    }

    public Long getIdPontos() {
        return idPontos;
    }

    public void setIdPontos(Long idPontos) {
        this.idPontos = idPontos;
    }

    public Long getFkUsuarios() {
        return fkUsuarios;
    }

    public void setFkUsuarios(Long fkUsuarios) {
        this.fkUsuarios = fkUsuarios;
    }

    public int getPontosMaximo() {
        return pontos_Maximo;
    }

    public void setPontosMaximo(int pontos_Maximo) {
        this.pontos_Maximo = pontos_Maximo;
    }

    public int getPontosRecente() {
        return pontos_Recente;
    }

    public void setPontosRecente(int pontos_Recente) {
        this.pontos_Recente = pontos_Recente;
    }

    public Usuario getUsuario() {
        return usuario;
    }

    public void setUsuario(Usuario usuario) {
        this.usuario = usuario;
    }
}
