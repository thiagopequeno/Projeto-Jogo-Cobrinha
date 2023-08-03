package Cobrinha.JogoCobrinha.Controller;

import Cobrinha.JogoCobrinha.Model.Usuario;
import Cobrinha.JogoCobrinha.Repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/usuario")
@CrossOrigin(origins = "http://10.18.6.64:3000")
public class UsuarioController {

    @Autowired
    private UsuarioRepository repository;

    public UsuarioController(UsuarioRepository repository) {
        this.repository = repository;
    }

    @PostMapping("/cadastrar")
    public boolean cadastrar(@RequestBody Usuario usuario) {
        System.out.println(usuario.toString());
        repository.save(usuario);

        return true;
    }


    @GetMapping("/listar")
    public List<Usuario> listar() {
        List<Usuario> usuarios = repository.findAll().stream().collect(Collectors.toList());

        return usuarios;
    }

    @PostMapping("/logar")
    public ResponseEntity<Usuario> logar(@RequestBody Usuario usuario) {
        Usuario usuarioLogado = repository.findByEmailAndSenha(usuario.getEmail(), usuario.getSenha());

        System.out.println(usuarioLogado.toString());

        if(usuarioLogado!=null){
            return ResponseEntity.ok().body(usuarioLogado);
        }else {
            // Usuário não encontrado ou credenciais inválidas, retorna uma resposta de erro (código HTTP 404 NOT FOUND)
            return ResponseEntity.notFound().build();
        }
    }
}






