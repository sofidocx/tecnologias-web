const root = document.getElementById("root"); 

function Conteudo(...elementos){
    const main = document.createElement("main");
    elementos.forEach((elemento) => main.append(elemento));
    return main; 
}


function Rodape(texto){
    const paragrafo = document.createElement("p");
    paragrafo.innerText = texto;
    const footer = document.createElement("footer");
    footer.append(paragrafo);
    return footer;
}

function Titulo(texto){
    const h1 = document.createElement("h1");
    h1.innerText = texto;
    return h1;
}

function Icone(origem, texto){
    const img = document.createElement("img");
    img.setAttribute("src", origem);
    img.setAttribute("alt", texto);
    return img;
}

function Input(id, tipo, rotulo){
    const label = document.createElement("label");
    label.setAttribute("for", id);
    label.innerText = rotulo;
    const input = document.createElement("input");
    input.setAttribute("type", tipo);
    input.setAttribute("id", id);
    input.setAttribute("name", id);
    const div = document.createElement("div");
    div.append(label, input);
    return div;
}

function InputSubmit (valor) {
    const input = document.createElement("input");
    input.setAttribute("type", "submit");
    input.setAttribute("value", valor);
    return input;
}

function Link(rota, texto){
    const a = document.createElement("a");
    a.setAttribute("href", rota);
    a.innerText = texto;
    return a;
}

function onLogin(event){
    event.preventDefault();
    Navega("/home");
}

function FormLogin(){
    const form = document.createElement("form");
    form.setAttribute("action", "/login");
    form.setAttribute("method", "post");
    const inputEmail = Input("email", "email", "E-mail");
    const inputSenha = Input("senha", "password", "Senha");
    const inputEntrar = InputSubmit("Entrar");
    form.append(inputEmail, inputSenha, inputEntrar);
    form.addEventListener("submit", onLogin);
    return form;
}

function PageLogin(){
    const logo = Icone("https://www.svgrepo.com/show/411955/learn.svg", "Logo da Aplicação");
    const titulo = Titulo("Aluno Online");
    const form = FormLogin();
    const link = Link("/esqueceu-senha", "Esqueceu sua Senha?");
    const conteudo = Conteudo(logo, titulo, form, link);
    conteudo.classList.add("login-container");
    const rodape = Rodape("Copyright (C) 2024");
    root.append(conteudo, rodape);
    document.title = "Login - Aluno Online";
}

function Navega(rota){
    root.innerHTML = null;
    if (rota === "/login") {
    PageLogin();
    } else if (rota === "/home") {
    PageHome();
    } else if (rota === "/perfil") {
    PagePerfil();
    } else {
    root.innerHTML = "<p>Página não encontrada!</p>";
    }
}

Navega("/login");

