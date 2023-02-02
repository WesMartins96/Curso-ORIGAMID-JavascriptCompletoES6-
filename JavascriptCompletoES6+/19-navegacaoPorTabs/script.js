//Veremos sobre Navegação por Tabs


/** 
Adicionar Classes para Manipulação A ideia de navegação por tabs, é ter uma lista de itens que 
controla a visualização de uma lista de conteúdo. Cada item da lista possui
um conteúdo relacionado ao mesmo.

<!-- Primeiro, adicionar classes que irão facilitar a manipulação dos elementos --> 
<ul class="animais-lista js-tabmenu"> 
  ... 
</ul> 
<div class="animais-descricao js-tabcontent"> 
  ... 
</div> 
*/


//Selecionar os itens
const tabMenu = document.querySelectorAll('.js-tabmenu li');
const tabContent = document.querySelectorAll('.js-tabcontent section');

// Verificar se existe elemento em tabContent e tabMenu 
if (tabContent.length && tabMenu.length) {
  tabContent[0].classList.add('ativo');


//Função Callback
//Recebe index como parâmetro para ativar a tab. Sempre que ativar, remove a classe 
//ativo de todos os outros elementos.
  function activeTab(index) {
    tabContent.forEach((section) => {
      section.classList.remove('ativo');
    })
    tabContent[index].classList.add('ativo');
  }


//Adicionar o Evento
//Neste caso precisamos passar antes a fução anônima no callback, para podermos passar o 
//index como argumento de activeTab
  tabMenu.forEach((itemMenu, index) => {
    itemMenu.addEventListener('click', () => {
      activeTab(index);
    });
  });
}

//Assim que Carregar
/*Adicionar a classe ativo ao primeiro elemento e adicionar a classe js ao html.
Assim identicamos se o JavaScript está habilitado ou não.
<!-- No head do browser --> 
<script>document.documentElement.className += ' js';</script>
*/


