// Define uma função chamada 'desafios' que recebe um elemento HTML como parâmetro.
function desafios(section) {
  // Atualiza o conteúdo interno do elemento 'section' com uma estrutura HTML.
  section.innerHTML = `<header>
      <h4>Projetos</h4>
      
          <p>
            Desenvolva uma página para ser seu portifólio.
          </p>
          <p>HTML - CSS - JS</p>
        </div>
      </div>
      <a href="#projects" id="backToProjectsBtn" class="button">Voltar</a>
    </div>`;
}

export { desafios };
