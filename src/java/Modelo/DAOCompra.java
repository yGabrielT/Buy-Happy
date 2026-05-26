package Modelo;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Timestamp;
import java.time.LocalDateTime;

public class DAOCompra {
     private Connection conecta;
    private PreparedStatement st;
    private ResultSet resultado;
    
    public void conectar() throws ClassNotFoundException, SQLException{
        Class.forName("com.mysql.cj.jdbc.Driver");
        conecta = DriverManager.getConnection("jdbc:mysql://localhost:3306/buyhappy","root","1234");
    }
    
    public void finalizarCompra(String carrinho, int idUsuario)  throws SQLException, ClassNotFoundException
    {
        conectar();
        carrinho = carrinho.replace("[", "")
                   .replace("]", "")
                   .replace("{", "")
                   .replace("}", "")
                   .replace("\"", "");

        String[] itens = carrinho.split(",");
        
        float precoTotal = 0;
        LocalDateTime agora = LocalDateTime.now();
        st = conecta.prepareStatement("insert into pedido(id_usuario,data_pedido,valor_total) values (?,?,?)",PreparedStatement.RETURN_GENERATED_KEYS);
        st.setInt(1, idUsuario);
        st.setTimestamp(2,Timestamp.valueOf(agora));
        st.setFloat(3,precoTotal);
        st.executeUpdate();
        ResultSet generatedKeys = st.getGeneratedKeys();
        if (generatedKeys.next())
        {
            int idPedido = generatedKeys.getInt(1);
            for (int i = 0; i < itens.length; i += 2) {

                int id = Integer.parseInt(
                    itens[i].split(":")[1]
                );

                int quantidade = Integer.parseInt(
                    itens[i + 1].split(":")[1]
                );

                st = conecta.prepareStatement("select preco, estoque from produto where id_produto = ?");
                st.setInt(1, id);
                resultado = st.executeQuery();
                if (resultado.next())
                {
                    float preco = resultado.getFloat("preco");
                    float estoque = resultado.getFloat("estoque");
                    precoTotal += preco * quantidade;
                    st = conecta.prepareStatement("insert into itens_pedido(id_pedido,id_produto,quantidade,preco_unitario) values (?,?,?,?)");
                    st.setInt(1, idPedido);
                    st.setInt(2, id);
                    st.setInt(3, quantidade);
                    st.setFloat(4, preco);
                    st.executeUpdate();
                    
                    st = conecta.prepareStatement("update produto set estoque = estoque - ? where id_produto = ?");
                    st.setInt(1, quantidade);
                    st.setInt(2, id);
                    st.executeUpdate();
                    
                }
                
            }
            st = conecta.prepareStatement("update pedido set valor_total = ? where id_pedido = ?");
            st.setFloat(1, precoTotal);
            st.setInt(2, idPedido);
            st.executeUpdate();
        }
    }
}
