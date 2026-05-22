/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package Modelo;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.DriverManager;
import java.sql.SQLException;

/**
 *
 * @author gtrin
 */
public class DAOUsuario {
    
    private Connection conecta;
    private PreparedStatement st;
    private ResultSet resultado;
    
    public void conectar() throws ClassNotFoundException, SQLException{
        Class.forName("com.mysql.cj.jdbc.Driver");
        conecta = DriverManager.getConnection("jdbc:mysql://localhost:3306/buyhappy","root","1234");
        
    }
    
    public void salvarUsuario (String e, String s, String n) throws SQLException, ClassNotFoundException
    {
        conectar();
        st = conecta.prepareStatement("insert into USUARIO(nome,email,senha,tipo_usuario) values (?,?,?,0)");
        st.setString(1, n);
        st.setString(2, e);
        st.setString(3, s);
        st.executeUpdate();
    }
    
    public String[] buscarUsuario(String email, String senha) throws SQLException, ClassNotFoundException
    {
        String dados[] = new String[3];
        conectar();
        st = conecta.prepareStatement("SELECT * FROM USUARIO WHERE email=? AND senha=?");
        st.setString(1, email);
        st.setString(2, senha);
        ResultSet dadosUsuario = st.executeQuery();
        if (dadosUsuario.next()){
            
            dados[0] = dadosUsuario.getString("email");
            dados[1] = dadosUsuario.getString("senha");
            dados[2] = dadosUsuario.getString("nome");
            return dados;
        }
        else{
            return null;
        }

    }
}
