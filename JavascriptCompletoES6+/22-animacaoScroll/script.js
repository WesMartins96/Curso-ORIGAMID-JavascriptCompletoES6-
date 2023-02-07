//Veremos mais abaixo Animação ao Scroll

//Veremos sobre Scroll suave link interno mais abaixo 


//É sempre bom isolar cada código 
function initTabNav() {
  const tabMenu = document.querySelectorAll('.js-tabmenu li');
  const tabContent = document.querySelectorAll('.js-tabcontent section');

  if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add('ativo');

    function activeTab(index) {
      tabContent.forEach((section) => {
        section.classList.remove('ativo');
      });
      tabContent[index].classList.add('ativo');
    }

    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener('click', () => {
        activeTab(index);
      });
    });
  }
}
initTabNav();



//Criando accordinList com animação
function initAccordion() {
  const accordionList = document.querySelectorAll('.js-accordion dt');
  if (accordionList.length) {
    accordionList[0].classList.add('ativo');
    accordionList[0].nextElementSibling.classList.add('ativo');

    function activeAccordion() {
      this.classList.toggle('ativo');
      this.nextElementSibling.classList.toggle('ativo');
    }

    accordionList.forEach((item) => {
      item.addEventListener('click', activeAccordion);
    })
  }
}
//Se estivermos repetindo muito um nome, por exemplo a classe 'ativo', podemos coloca-la em
//uma constante
initAccordion();


//Adicionando Scroll Suave nos links internos
function initScrollSuave() {
  const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);
    const topo = section.offsetTop;
    //Metodo scrollTo(y-coordenada, x-coordenada);
    //window.scrollTo(0, 1000)

    //Podemos em vez de usarmos o scrollTo com duas coordenadas, podemos usar um objeto
    //scrollTo(options);
    window.scrollTo({
      top: topo,
      behavior: 'smooth',
    })
  }

  linksInternos.forEach((link) => {
    link.addEventListener('click', scrollToSection);
  });
}
initScrollSuave();



//Animação ao Scroll
function initAnimacaoScroll() {
  const sections = document.querySelectorAll('.js-scroll');

  if (sections.length) {
    const windowMetade = window.innerHeight * 0.6;

    function animaScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top - windowMetade;
        console.log(sectionTop);
        if (sectionTop < 0) {
          section.classList.add('ativo');
        }
      })
    }

    window.addEventListener('scroll', animaScroll);
  }
}
initAnimacaoScroll();


