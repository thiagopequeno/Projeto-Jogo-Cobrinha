package Cobrinha.JogoCobrinha.Dto;

public class PontoUsuarioDTO {
    private String nomeUsuario;
    private int pontosMaximo;
    private int pontosRecente;

    public PontoUsuarioDTO(String nomeUsuario, int pontosMaximo, int pontosRecente) {
        this.nomeUsuario = nomeUsuario;
        this.pontosMaximo = pontosMaximo;
        this.pontosRecente = pontosRecente;
    }

    public PontoUsuarioDTO() {
    }

    public String getNomeUsuario() {
        return nomeUsuario;
    }

    public void setNomeUsuario(String nomeUsuario) {
        this.nomeUsuario = nomeUsuario;
    }

    public int getPontosMaximo() {
        return pontosMaximo;
    }

    public void setPontosMaximo(int pontosMaximo) {
        this.pontosMaximo = pontosMaximo;
    }

    public int getPontosRecente() {
        return pontosRecente;
    }

    public void setPontosRecente(int pontosRecente) {
        this.pontosRecente = pontosRecente;
    }
}
