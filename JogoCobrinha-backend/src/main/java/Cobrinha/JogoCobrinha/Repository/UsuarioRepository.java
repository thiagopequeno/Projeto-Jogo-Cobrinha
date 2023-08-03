package Cobrinha.JogoCobrinha.Repository;

import Cobrinha.JogoCobrinha.Model.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;


public interface UsuarioRepository extends JpaRepository<Usuario,Long> {
    Usuario findByEmailAndSenha(String email, String senha);
}
