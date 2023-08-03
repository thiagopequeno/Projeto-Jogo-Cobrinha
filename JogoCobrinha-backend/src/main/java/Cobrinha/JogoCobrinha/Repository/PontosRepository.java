package Cobrinha.JogoCobrinha.Repository;

import Cobrinha.JogoCobrinha.Model.Pontos;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface PontosRepository extends JpaRepository<Pontos,Long> {


    @Query(value = "SELECT u.id_usuario, u.nome, p.pontos_Maximo, p.pontos_Recente " +
            "FROM usuario u " +
            "LEFT JOIN pontos p ON u.id_usuario = p.fk_Usuarios " +
            "WHERE u.id_usuario = ?1", nativeQuery = true)
    Object[] encontrarPontosMaximoERecentePorUsuario(long idUsuario);

    @Query(value = "SELECT pontos_Recente FROM pontos ORDER BY pontos_Recente DESC LIMIT 3", nativeQuery = true)
    List<Integer> listarTresMaioresPontosRecentes();

    @Query(value = "SELECT pontos_Recente FROM pontos WHERE fk_Usuarios = :id_Usuario", nativeQuery = true)
   List <Integer> encontrarPontosRecentesPorUsuario(@Param("id_Usuario") Long idUsuario);

    Pontos findByFkUsuarios(Long idUsuario);
}
