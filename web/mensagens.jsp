<%-- 
    Document   : erro
    Created on : 2 de abr. de 2026, 20:41:19
    Author     : gtrin
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSP Page</title>
        <style>
            p{
                width: 50%;
                text-align: center;
                border: solid black 1px;
                padding: 20px;
                margin:10px auto;
                border-radius: 10px;
                background-color: #ededed;
                box-shadow: 10px 10px 5px rgba(0,0,0,0.7);
            }
            a{
                text-decoration: none;
            }
            a:hover{
                color:red;
                text-decoration: underline;
            }
        </style>
    </head>
    <body>
        <p>
            <b>${mensagem}</b>
            <br>
            <a href="index.html">Home</a>
        </p>
    </body>
</html>
