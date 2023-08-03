package Cobrinha.JogoCobrinha.Controller;

import Cobrinha.JogoCobrinha.Dto.PontoUsuarioDTO;
import Cobrinha.JogoCobrinha.Model.Pontos;
import Cobrinha.JogoCobrinha.Model.Usuario;
import Cobrinha.JogoCobrinha.Repository.PontosRepository;
import Cobrinha.JogoCobrinha.Repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@RequestMapping("/pontos")
@CrossOrigin(origins = "http://10.18.6.64:3000")
public class PontosController {
@Autowired
    private PontosRepository repository;

@Autowired
private UsuarioRepository repositoryUsuario;

    public PontosController(PontosRepository repository, UsuarioRepository repositoryUsuario) {
        this.repository = repository;
        this.repositoryUsuario = repositoryUsuario;
    }
    @PostMapping("/inserir/{idUsuario}")
    public boolean inserirPontos(@PathVariable Long idUsuario, @RequestParam Long pontos) {
        // Buscar o usuário pelo ID no banco de dados
        Optional<Usuario> usuarioOptional = repositoryUsuario.findById(idUsuario);

        if (usuarioOptional.isPresent()) {
            // Criar um novo objeto Pontos e associá-lo ao usuário encontrado
            Usuario usuario = usuarioOptional.get();
            Pontos pontosUsuario = repository.findByFkUsuarios(idUsuario);

            if (pontosUsuario == null) {
                // Se ainda não existirem pontos para esse usuário, crie um novo objeto Pontos
                pontosUsuario = new Pontos();
                pontosUsuario.setFkUsuarios(usuario.getIdUsuario());
            }

            // Verifica se os pontos recebidos são maiores do que os pontos atuais em pontosMaximo
            if (pontos > pontosUsuario.getPontosMaximo()) {
                pontosUsuario.setPontosMaximo(pontos.intValue());
            }

            // Atualiza os pontosRecente com o valor recebido
            pontosUsuario.setPontosRecente(pontos.intValue());

            // Salva o objeto Pontos no repositório
            repository.save(pontosUsuario);

            return true;
        } else {
            // Usuário não encontrado pelo ID informado
            return false;
        }
    }







    @GetMapping("/listar")
    public List<PontoUsuarioDTO> listar() {
        List<Pontos> pontosList = repository.findAll();
        List<PontoUsuarioDTO> dtos = new ArrayList<>();

        for (Pontos pontos : pontosList) {

            Usuario usuario = pontos.getUsuario();
            PontoUsuarioDTO dto = new PontoUsuarioDTO();
            dto.setNomeUsuario(usuario.getNome());
            dto.setPontosMaximo(pontos.getPontosMaximo());
            dto.setPontosRecente(pontos.getPontosRecente());
            dtos.add(dto);

        }
        Collections.sort(dtos, Comparator.comparingInt(PontoUsuarioDTO::getPontosMaximo).reversed());
        return dtos;
    }




    @GetMapping("/listar/{id}")
    public Object[] listarPorUsuario(@PathVariable long id) {
        return repository.encontrarPontosMaximoERecentePorUsuario(id);
    }

    @GetMapping("/rank")
    public List<Integer> listarTresMaioresPontos() {
        return repository.listarTresMaioresPontosRecentes();
    }

    @GetMapping("/rank/{idUsuario}")
    public List<Integer> obterPontosRecentesPorUsuario(@PathVariable Long idUsuario) {
        return repository.encontrarPontosRecentesPorUsuario(idUsuario);
    }

}
