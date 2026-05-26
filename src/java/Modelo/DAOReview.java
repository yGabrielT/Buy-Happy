package Modelo;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

public class DAOReview {
    private Connection conecta;
    private PreparedStatement st;
    private ResultSet resultado;
    
    public void conectar() throws ClassNotFoundException, SQLException{
        Class.forName("com.mysql.cj.jdbc.Driver");
        conecta = DriverManager.getConnection("jdbc:mysql://localhost:3306/buyhappy","root","1234");
    }
    
    public void salvarReview (String m, int u, int p, int n) throws SQLException, ClassNotFoundException
    {
        conectar();
        st = conecta.prepareStatement("insert into avaliacao (id_Usuario,id_Produto,Nota,Comentario,Compra_Confirmada) values (?,?,?,?,1)",PreparedStatement.RETURN_GENERATED_KEYS);
        st.setInt(1, u);
        st.setInt(2, p);
        st.setInt(3, n);
        st.setString(4, m);
        st.executeUpdate();
        
        ResultSet generatedKeys = st.getGeneratedKeys();
        int idAvaliacao = 0;
        if(generatedKeys.next()) {
            idAvaliacao = generatedKeys.getInt(1);
        }
        
        st = conecta.prepareStatement("insert into confiabilidade(id_avaliacao,score) values (?,?)");
        st.setInt(1, idAvaliacao);
        st.setInt(2, 0);
        st.executeUpdate();
    }
    
    /**
     * Verifica se o usuário já votou nessa avaliação.
     * Retorna o tipo do voto ("up" ou "down") se já votou, ou null se não votou.
     */
    public String verificarVotoUsuario(int idReview, int idUsuario) throws SQLException, ClassNotFoundException
    {
        conectar();
        st = conecta.prepareStatement("SELECT tipo FROM voto_usuario WHERE id_avaliacao = ? AND id_usuario = ?");
        st.setInt(1, idReview);
        st.setInt(2, idUsuario);
        resultado = st.executeQuery();
        if (resultado.next()) {
            return resultado.getString("tipo");
        }
        return null;
    }
    
    /**
     * Registra ou atualiza o voto de um usuário em uma avaliação.
     * - Se não votou antes: adiciona o voto e incrementa/decrementa o score.
     * - Se votou igual: remove o voto (toggle) e reverte o score.
     * - Se votou diferente: troca o voto e ajusta o score em 2.
     * Retorna uma string com o resultado: "added", "removed" ou "changed".
     */
    public String votarReview(int idReview, int idUsuario, String tipo) throws SQLException, ClassNotFoundException
    {
        conectar();
        String votoAtual = verificarVotoUsuario(idReview, idUsuario);
        
        if (votoAtual == null) {
            // Nunca votou: insere o voto e atualiza o score
            st = conecta.prepareStatement("INSERT INTO voto_usuario (id_avaliacao, id_usuario, tipo) VALUES (?, ?, ?)");
            st.setInt(1, idReview);
            st.setInt(2, idUsuario);
            st.setString(3, tipo);
            st.executeUpdate();
            
            String sql = tipo.equals("up")
                ? "UPDATE confiabilidade SET score = score + 1 WHERE id_avaliacao = ?"
                : "UPDATE confiabilidade SET score = score - 1 WHERE id_avaliacao = ?";
            st = conecta.prepareStatement(sql);
            st.setInt(1, idReview);
            st.executeUpdate();
            
            return "added";
            
        } else if (votoAtual.equals(tipo)) {
            // Clicou no mesmo botão: remove o voto (toggle)
            st = conecta.prepareStatement("DELETE FROM voto_usuario WHERE id_avaliacao = ? AND id_usuario = ?");
            st.setInt(1, idReview);
            st.setInt(2, idUsuario);
            st.executeUpdate();
            
            String sql = tipo.equals("up")
                ? "UPDATE confiabilidade SET score = score - 1 WHERE id_avaliacao = ?"
                : "UPDATE confiabilidade SET score = score + 1 WHERE id_avaliacao = ?";
            st = conecta.prepareStatement(sql);
            st.setInt(1, idReview);
            st.executeUpdate();
            
            return "removed";
            
        } else {
            // Votou diferente: troca o voto e ajusta score em 2
            st = conecta.prepareStatement("UPDATE voto_usuario SET tipo = ? WHERE id_avaliacao = ? AND id_usuario = ?");
            st.setString(1, tipo);
            st.setInt(2, idReview);
            st.setInt(3, idUsuario);
            st.executeUpdate();
            
            String sql = tipo.equals("up")
                ? "UPDATE confiabilidade SET score = score + 2 WHERE id_avaliacao = ?"
                : "UPDATE confiabilidade SET score = score - 2 WHERE id_avaliacao = ?";
            st = conecta.prepareStatement(sql);
            st.setInt(1, idReview);
            st.executeUpdate();
            
            return "changed";
        }
    }
}