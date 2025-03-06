export default {
    appType: "mpa",
    build: {
      rollupOptions: {
        input: {
          index: "index.html",  // ✅ Correto, já que está na raiz
          login: "src/login.html",
          home: "src/home.html",  // 🛠 Renomeado para manter a lógica do projeto
          perfil: "src/perfil.html",
        },
      },
    },
  };
  