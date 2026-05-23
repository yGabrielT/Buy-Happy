package Modelo;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.DriverManager;
import java.sql.SQLException;

public class DAOProduto {
    private Connection conecta;
    private PreparedStatement st;
    private ResultSet resultado;
    
    public void conectar() throws ClassNotFoundException, SQLException{
        Class.forName("com.mysql.cj.jdbc.Driver");
        conecta = DriverManager.getConnection("jdbc:mysql://localhost:3306/buyhappy","root","1234");
    }
    
    private String escapeJson(String texto) {

        if (texto == null) {
            return "";
        }

        return texto
                .replace("\\", "\\\\")
                .replace("\"", "\\\"")
                .replace("\n", "\\n")
                .replace("\r", "\\r")
                .replace("\t", "\\t");
    }
    
    public String[] buscarProdutos() throws SQLException, ClassNotFoundException
    {
        String dados[] = new String[1];
        conectar();
        Class.forName("com.mysql.cj.jdbc.Driver");

            conecta = DriverManager.getConnection(
                    "jdbc:mysql://localhost:3306/buyhappy",
                    "root",
                    "1234"
            );

            st = conecta.prepareStatement("SELECT * FROM produto");

            resultado = st.executeQuery();

            StringBuilder json = new StringBuilder();

            json.append("[");

            boolean primeiro = true;

            while (resultado.next()) {

                if (!primeiro) {
                    json.append(",");
                }

                primeiro = false;

                json.append("{");
                json.append("\"id\":")
                    .append(resultado.getInt("id_produto"))
                    .append(",");

                json.append("\"nome\":\"")
                    .append(escapeJson(resultado.getString("nome")))
                    .append("\",");

                json.append("\"descricao\":\"")
                    .append(escapeJson(resultado.getString("descricao")))
                    .append("\",");

                json.append("\"preco\":")
                    .append(resultado.getDouble("preco"))
                    .append(",");

                json.append("\"categoria\":\"")
                    .append(escapeJson(resultado.getString("categoria")))
                    .append("\",");
                json.append("\"avaliacao\":\"")
                    .append(escapeJson("5.0"))
                    .append("\",");
                
                
                 PreparedStatement stTotalReview =
                    conecta.prepareStatement(
                        "SELECT COUNT(*) FROM Avaliacao WHERE id_produto = 1"
                    );
                ResultSet totalReview = stTotalReview.executeQuery();
                totalReview.next();
                
                json.append("\"totalAvaliacoes\":\"")
                    .append(escapeJson(totalReview.getString("COUNT(*)")))
                    .append("\",");
                json.append("\"stock\":\"")
                    .append(escapeJson(resultado.getString("estoque")))
                    .append("\",");
/*  
                json.append("\"comments\":[");
                
                PreparedStatement stReview =
                    conecta.prepareStatement(
                        "SELECT Comentario FROM Avaliacao WHERE id_produto = ?"
                    );

                stReview.setInt(1, resultado.getInt("id_produto"));

                ResultSet review = stReview.executeQuery();

                boolean primeiraImagem = true;

                while(review.next()) {

                    if(!primeiraImagem) {
                        json.append(",");
                    }

                    primeiraImagem = false;

                    json.append("\"")
                        .append(escapeJson(review.getString("Comentario")))
                        .append("\"");
                }

                json.append("],");
*/
                json.append("\"comments\":[");

                PreparedStatement stReview =
                    conecta.prepareStatement(
                        "select avaliacao.id_avaliacao, nome,comentario,nota,score from avaliacao " +
                        "inner join usuario on usuario.id_usuario = avaliacao.id_usuario " +
                        "left join confiabilidade on confiabilidade.id_avaliacao = avaliacao.id_avaliacao " +
                        "where avaliacao.id_produto = ?"
                    );

                stReview.setInt(1, resultado.getInt("id_produto"));

                ResultSet review = stReview.executeQuery();

                boolean primeiroComentario = true;

                while(review.next()) {

                    if(!primeiroComentario) {
                        json.append(",");
                    }

                    primeiroComentario = false;

                    json.append("{");

                    json.append("\"nome\":\"")
                        .append(escapeJson(review.getString("nome")))
                        .append("\",");

                    json.append("\"estrelas\":")
                        .append(review.getInt("nota"))
                        .append(",");
                    
                    json.append("\"id\":")
                        .append(escapeJson(review.getString("id_avaliacao")))
                        .append(",");

                    json.append("\"score\":")
                        .append(review.getDouble("score"))
                        .append(",");

                    json.append("\"descricao\":\"")
                        .append(escapeJson(review.getString("comentario")))
                        .append("\"");

                    json.append("}");
                }

                json.append("],");
                
                json.append("\"imagens\":[");
                json.append("\"")
                    .append(escapeJson(resultado.getString("imagem_url")))
                    .append("\"");
                json.append("]");
                json.append("}");
            }

            json.append("]");
            dados[0] = json.toString();
            return dados;

    }
}
