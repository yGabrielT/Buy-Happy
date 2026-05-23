/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package Modelo;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

/**
 *
 * @author gtrin
 */
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
    
    public void votarReview (int idReview, String tipo) throws SQLException, ClassNotFoundException
    {
        conectar();
        if (tipo.equals("up"))
        {
            st = conecta.prepareStatement("update confiabilidade set score = score + 1 where id_avaliacao = ?");
        }else
        {
            st = conecta.prepareStatement("update confiabilidade set score = score - 1 where id_avaliacao = ?");
        }
        
        st.setInt(1, idReview);
        st.executeUpdate();
    }
}
