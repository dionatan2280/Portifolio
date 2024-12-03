// Importação dos módulos 'desafios' e 'projetos' de outros arquivos
import { desafios } from "./desafios.js";
import { projetos } from "./projetos.js";

// Seleção de elementos do DOM para interação
const navigation = document.querySelector("#navigation"); 
const backToTopButton = document.querySelector("#backToTopButton"); 
const toggle = document.querySelector("#sw-checkbox"); 
const projectsSection = document.querySelector("#projects .wrapper"); 

const notebook_1 = document.querySelector("#notebook-1"); // Elemento notebook-1
const notebook_2 = document.querySelector("#notebook-2"); // Elemento notebook-2
const notebook_2_white = document.querySelector("#notebook-2-white"); // Elemento notebook-2 branco
const vidro = document.querySelector("#vidro"); // Elemento vidro

// Evento que inicia as ações quando a página é carregada
window.addEventListener("load", function begin() {
  projetos(projectsSection); // Carrega os projetos na seção
  const desafioBtn = document.querySelector("#desafio");

  // Ao clicar no botão "desafio", troca para o conteúdo do desafio
  desafioBtn.addEventListener("click", () => {
    desafios(projectsSection);
    // Configura o retorno para a seção de projetos
    document
      .querySelector("#backToProjectsBtn")
      .addEventListener("click", begin);
  });
});

// Evento de scroll para realizar ações ao rolar a página
window.addEventListener("scroll", onScroll);
onScroll(); 

// Define animações que são removidas após 4 segundos
window.onload = setTimeout(() => {
  notebook_1.style.opacity = 0; 
  notebook_1.style.animation = "none"; 
  notebook_2.style.animation = "none";
  notebook_2_white.style.animation = "none"; 
  vidro.style.animation = "none"; 
}, 4000);

// Função de scroll que chama outras funções relacionadas à rolagem da página
function onScroll() {
  showNavOnScroll(); 
  showBackToTopButtonOnScroll(); 
  
  // Ativa a classe 'active' no menu conforme a seção visível
  activateMenuAtCurrentSection(about);
  activateMenuAtCurrentSection(projects);
  activateMenuAtCurrentSection(knowledge);
  activateMenuAtCurrentSection(contact);
}

// Função que ativa o item de menu da seção atual
function activateMenuAtCurrentSection(section) {
  const targetLine = scrollY + innerHeight / 2;
  const sectionTop = section.offsetTop; 
  const sectionHeight = section.offsetHeight; 

  // Condições para verificar se a seção está visível no meio da tela
  const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop;
  const sectionEndsAt = sectionTop + sectionHeight;
  const sectionEndPassedTargetLine = sectionEndsAt <= targetLine;

  const sectionBoundaries =
    sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine;

  // Seleciona o item de menu correspondente à seção
  const sectionId = section.getAttribute("id");
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`);

  // Remove a classe 'active' e adiciona novamente se a seção estiver visível
  menuElement.classList.remove("active");
  if (sectionBoundaries) {
    menuElement.classList.add("active");
  }
}

// Função que mostra o menu de navegação quando a página é rolada
function showNavOnScroll() {
  if (scrollY > 0) {
    navigation.classList.add("scroll"); // Adiciona a classe 'scroll' se o scroll for maior que 0
  } else {
    navigation.classList.remove("scroll"); // Remove a classe 'scroll' se o scroll for 0
  }
}

// Função que mostra o botão "Voltar ao topo" quando a página é rolada
function showBackToTopButtonOnScroll() {
  if (scrollY > 550) {
    backToTopButton.classList.add("show"); // Exibe o botão após o scroll de 550px
  } else {
    backToTopButton.classList.remove("show"); // Esconde o botão quando o scroll for menor
  }
}

// Função para abrir o menu ao clicar no botão "open"
openMenu();
function openMenu() {
  const openBtns = document.querySelectorAll(".open");
  openBtns.forEach((e) => {
    e.addEventListener("click", () => {
      document.body.classList.add("menu-expanded"); // Adiciona a classe 'menu-expanded'
    });
  });
}

// Função para fechar o menu ao clicar no botão "close"
closeMenu();
function closeMenu() {
  const closeBtns = document.querySelectorAll(".close");
  closeBtns.forEach((e) => {
    e.addEventListener("click", () => {
      document.body.classList.remove("menu-expanded"); // Remove a classe 'menu-expanded'
    });
  });
}

// Configuração do ScrollReveal para animações nas seções ao rolar
ScrollReveal({
  origin: "bottom",
  distance: "50px",
  duration: 1000,
}).reveal(
  `#home, 
  #home img, 
  #about, 
  #about header, 
  #about p,
  #about img,
  #projects,
  #projects header,
  #projects .card,
  #knowledge,
  #knowledge header,
  #knowledge .card,
  #contact,
  #contact header`
);

// Função para alternar entre modo claro e escuro ao clicar no switch
toggle.addEventListener("change", () => {
  document.body.classList.toggle("light-mode"); // Alterna a classe 'light-mode'
});
