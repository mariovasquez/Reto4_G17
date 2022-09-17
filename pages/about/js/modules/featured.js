const featured = () => {
    const newReleases = document.getElementById('newReleases');
    const popular = document.getElementById('popular');
    const newReleasesAlbums = document.getElementById('newReleasesAlbums');
    const popularAlbums = document.getElementById('popularAlbums');

    
    newReleases.addEventListener('click', () => {
        newReleases.classList.add('section__featured-title--selected');
        popular.classList.remove('section__featured-title--selected');
        newReleasesAlbums.classList.remove('section__featured-albums--disabled');
        popularAlbums.classList.add('section__featured-albums--disabled');
    });
    popular.addEventListener('click', () => {
        newReleases.classList.remove('section__featured-title--selected');
        popular.classList.add('section__featured-title--selected');
        newReleasesAlbums.classList.add('section__featured-albums--disabled');
        popularAlbums.classList.remove('section__featured-albums--disabled');
    });
    for (const menuLink of menuLinks) menuLink.addEventListener('click', closeMenu);

};
  
export default featured;