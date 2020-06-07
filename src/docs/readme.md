# Funcionamento

Regras de nogócio passado à limpo.


### Encurtar URL

Request

    POST http://localhost:8081/encurtador
    {
        url: "http://wisereducacao.com";
    }

Response

    {
        newUrl: "http://localhost:8081/abc123ab";
    }

1. Encurtar a URL conforme regra a baixo
   - Mínimo de 5 e máximo de 10 caracteres.
   - Apenas letras e números.
2. Salvar a URL original
3. Possui prazo de validade (você poderá escolher quanto tempo)
4. Retornar a url encurtada.


### Redirecionamento

Ao receber uma chamada para http://localhost:8081/abc123ab você irá retornar um redirecionamento 
para a url salva no banco ( http://wisereducacao.com ). Caso não seja encontrada, retornar HTTP 404.

