# Projeto-Jogo-Cobrinha
Meu primeiro JOGO
<h1>Jogo da Cobrinha com Tela de Cadastro e Login</h1>
Descrição do Projeto
Este é um jogo da cobrinha desenvolvido com front-end em JavaScript, HTML e CSS, e backend em Java com o framework Spring. O jogo permite aos usuários se cadastrar e fazer login para jogar e competir no ranking de pontos máximos. Além disso, existem botões para soltar uma música durante o jogo.

Funcionalidades
Cadastro de Usuários: Permite que novos usuários se cadastrem na aplicação fornecendo nome de usuário e senha.
Login de Usuários: Permite que usuários cadastrados façam login para acessar o jogo.
Jogo da Cobrinha: O usuário pode jogar o clássico jogo da cobrinha, onde a cobrinha cresce a cada ponto e a velocidade aumenta conforme o tempo passa.
Rank de Pontos Máximos: Exibe o ranking dos jogadores com as pontuações máximas obtidas no jogo.
Música de Fundo: Botões permitem ao usuário escolher uma música para ser tocada durante o jogo.


Tecnologias Utilizadas
Front-end: JavaScript, HTML, CSS
Back-end: Java, Spring Framework
Banco de Dados: MYSQL


Crie o banco de dados dessa maneira:
create database Db_cobrinha;
drop database Db_cobrinha;
use Db_cobrinha;

select * from usuario;
select * from pontos;
CREATE TABLE usuario (
  id_usuario INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL,
  senha VARCHAR(100) NOT NULL
);
delete from usuario where id_usuario=9;
delete from pontos where id_pontos=8;
select * from usuario;
select * from pontos;
drop table pontos;
drop table usuario;


insert into pontos values(null,2,50,100);
CREATE TABLE pontos (
  id_pontos INT AUTO_INCREMENT PRIMARY KEY,
  fk_Usuarios INT,
  pontos_Maximo INT,
  pontos_Recente INT,
  FOREIGN KEY (fk_Usuarios) REFERENCES usuario(id_usuario)
);







Instalação
Clone este repositório em sua máquina local.
Configure o ambiente de desenvolvimento Java e Spring.
Configure o banco de dados (crie a tabela necessária para armazenar os dados do usuário e a pontuação do jogo).
Execute o servidor Spring e a aplicação Java.
Acesse a aplicação através do navegador em http://localhost:3000/cadastro


Como Jogar
Faça o login na aplicação ou crie uma nova conta.
No menu principal, clique em "Jogar" para começar o jogo da cobrinha.
Use as teclas de seta do teclado para movimentar a cobrinha e coletar os pontos.
Evite colidir com as paredes ou com o próprio corpo da cobrinha.
Ao encerrar o jogo, você será redirecionado para o ranking de pontos máximos.


Contribuição
Contribuições são bem-vindas! Sinta-se à vontade para enviar pull requests para melhorias, correções de bugs ou novas funcionalidades.

Autor
Thiago Pequeno de Castro 

Estagiario: 
São Paulo Tech School
Faculdade:
cursando ANALISE DESENVOLVIMENTO DE SISTEMAS NA SPTECH



Agradecimentos
Deus é bom
