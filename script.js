// Script para alternar entre visualizar todos e apenas os recentes
const verTodosProjetosBtn = document.getElementById("verTodosProjetos");
const fecharProjetosBtn = document.getElementById("fecharProjetos");
const verTodosVideosBtn = document.getElementById("verTodosVideos");
const fecharVideosBtn = document.getElementById("fecharVideos");

const projetos = document.querySelectorAll("#projetos .projeto");
const videos = document.querySelectorAll("#work .video");

for (let i = 0; i < videos.length; i++) {
  if (i >= 2) {
    videos[i].style.display = "none";
  }
}

verTodosProjetosBtn.addEventListener("click", () => {
  projetos.forEach((projeto) => (projeto.style.display = "block"));
  verTodosProjetosBtn.style.display = "none";
  fecharProjetosBtn.style.display = "block";
});

fecharProjetosBtn.addEventListener("click", () => {
  projetos.forEach((projeto, index) => {
    if (index >= 2) projeto.style.display = "none";
  });
  fecharProjetosBtn.style.display = "none";
  verTodosProjetosBtn.style.display = "block";
});

verTodosVideosBtn.addEventListener("click", () => {
  videos.forEach((video) => (video.style.display = "block"));
  verTodosVideosBtn.style.display = "none";
  fecharVideosBtn.style.display = "block";
});

fecharVideosBtn.addEventListener("click", () => {
  for (let i = 0; i < videos.length; i++) {
    if (i >= 2) videos[i].style.display = "none";
  }
  fecharVideosBtn.style.display = "none";
  verTodosVideosBtn.style.display = "block";
});