package Controle;

import Modelo.DAOReview;
import java.io.IOException;
import java.io.PrintWriter;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.sql.SQLException;

@WebServlet(name = "ControleVotoReview", urlPatterns = {"/ControleVotoReview"})
public class ControleVotoReview extends HttpServlet {

    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("application/json;charset=UTF-8");
        request.setCharacterEncoding("UTF-8");

        String tipo;
        int idReview;
        int idUsuario;

        try {
            tipo      = request.getParameter("tipo");
            idReview  = Integer.parseInt(request.getParameter("idReview"));
            idUsuario = Integer.parseInt(request.getParameter("idUsuario"));
        } catch (NumberFormatException | NullPointerException ex) {
            response.setStatus(HttpServletResponse.SC_BAD_REQUEST);
            PrintWriter out = response.getWriter();
            out.print("{\"erro\":\"Parâmetros inválidos\"}");
            return;
        }

        DAOReview dao = new DAOReview();
        try {
            String resultado = dao.votarReview(idReview, idUsuario, tipo);
            PrintWriter out = response.getWriter();
            out.print("{\"resultado\":\"" + resultado + "\"}");
        } catch (SQLException | ClassNotFoundException ex) {
            response.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
            PrintWriter out = response.getWriter();
            out.print("{\"erro\":\"" + ex.getMessage() + "\"}");
        }
    }

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    @Override
    public String getServletInfo() {
        return "Controle de votos em avaliações";
    }
}