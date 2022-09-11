const featured = () => {
    const newReleases = document.getElementById('newReleases');
    const popular = document.getElementById('popular');
    const newReleasesAlbums1 = document.getElementById('newReleasesAlbums1');
    const newReleasesAlbums2 = document.getElementById('newReleasesAlbums2');
    const popularAlbums1 = document.getElementById('popularAlbums1');
    const popularAlbums2 = document.getElementById('popularAlbums2');
    const featuredAlbumContainers = document.querySelectorAll('.section__featured-album-container');
    const buttonsBuy = document.querySelectorAll('.button-text--buy');
    const albumImages = document.querySelectorAll('.section__featured-album-img');
    const arrowLeft1 = document.getElementById('arrowLeft1');
    const arrowRight1 = document.getElementById('arrowRight1');
    const arrowLeft2 = document.getElementById('arrowLeft2');
    const arrowRight2 = document.getElementById('arrowRight2');

    console.log(featuredAlbumContainers);

    for (const featuredAlbumContainer of featuredAlbumContainers) {
        featuredAlbumContainer.addEventListener('mouseover', () => {
            for (const buttonBuy of buttonsBuy) {
                if(featuredAlbumContainer.id === buttonBuy.id){
                    buttonBuy.classList.add('button-text--buy--enable');
                }
            }
            for (const albumImage of albumImages) {
                if(featuredAlbumContainer.id === albumImage.id){
                    albumImage.classList.add('section__featured-album-img--hover');
                }
            }
        });
        featuredAlbumContainer.addEventListener('mouseout', () => {
            for (const buttonBuy of buttonsBuy) {
                if(featuredAlbumContainer.id === buttonBuy.id){
                    buttonBuy.classList.remove('button-text--buy--enable');
                }
            }
            for (const albumImage of albumImages) {
                if(featuredAlbumContainer.id === albumImage.id){
                    albumImage.classList.remove('section__featured-album-img--hover');
                }
            }
        });
    }

    
    newReleases.addEventListener('click', () => {
        newReleases.classList.add('section__featured-title--selected');
        popular.classList.remove('section__featured-title--selected');
        newReleasesAlbums1.classList.remove('section__featured-albums--disabled');
        newReleasesAlbums2.classList.add('section__featured-albums--disabled');
        popularAlbums1.classList.add('section__featured-albums--disabled');
        popularAlbums2.classList.add('section__featured-albums--disabled');
        arrowLeft1.classList.remove('arrow--disabled');
        arrowRight1.classList.remove('arrow--disabled');
        arrowLeft2.classList.add('arrow--disabled');
        arrowRight2.classList.add('arrow--disabled');
    });
    popular.addEventListener('click', () => {
        newReleases.classList.remove('section__featured-title--selected');
        popular.classList.add('section__featured-title--selected');
        newReleasesAlbums1.classList.add('section__featured-albums--disabled');
        newReleasesAlbums2.classList.add('section__featured-albums--disabled');
        popularAlbums1.classList.remove('section__featured-albums--disabled');
        popularAlbums2.classList.add('section__featured-albums--disabled');
        arrowLeft1.classList.add('arrow--disabled');
        arrowRight1.classList.add('arrow--disabled');
        arrowLeft2.classList.remove('arrow--disabled');
        arrowRight2.classList.remove('arrow--disabled');
    });

    arrowLeft1.addEventListener('click', () => {
        newReleasesAlbums2.classList.toggle('section__featured-albums--disabled');
        newReleasesAlbums1.classList.toggle('section__featured-albums--disabled');
    });
    arrowRight1.addEventListener('click', () => {
        newReleasesAlbums2.classList.toggle('section__featured-albums--disabled');
        newReleasesAlbums1.classList.toggle('section__featured-albums--disabled');
    });

    arrowLeft2.addEventListener('click', () => {
        popularAlbums2.classList.toggle('section__featured-albums--disabled');
        popularAlbums1.classList.toggle('section__featured-albums--disabled');
    });
    arrowRight2.addEventListener('click', () => {
        popularAlbums2.classList.toggle('section__featured-albums--disabled');
        popularAlbums1.classList.toggle('section__featured-albums--disabled');
    });
};

export default featured;