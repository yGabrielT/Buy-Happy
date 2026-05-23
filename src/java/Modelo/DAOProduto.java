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
                json.append("\"totalAvaliacoes\":\"")
                    .append(escapeJson("100"))
                    .append("\",");
                 json.append("\"comments\":[");
                json.append("\"")
                    .append(escapeJson("teste"))
                    .append("\"");
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
