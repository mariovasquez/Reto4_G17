const header = () => {
    const header = document.querySelector('.header');
    const nav = document.querySelector('.nav');
    const menuLinks = document.querySelectorAll('.menu__link');
    const navActionMenu = document.getElementById('navActionMenu');
    const navActionClose = document.getElementById('navActionClose');

    const openMenu = () => {
      nav.classList.toggle('nav--open');
    };
  
    const closeMenu = () => {
      nav.classList.remove('nav--open');
    };
    
    document.addEventListener('scroll', () => {header.classList.toggle('header--scroll', scrollY > 0)});
    navActionMenu.addEventListener('click', openMenu);
    navActionClose.addEventListener('click', closeMenu);
    for (const menuLink of menuLinks) menuLink.addEventListener('click', closeMenu);

};
  
export default header;