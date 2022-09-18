const featured = () => {
    const newReleases = document.getElementById('newReleases');
    const popular = document.getElementById('popular');
    const newReleasesAlbums = document.getElementById('newReleasesAlbums');
    const popularAlbums = document.getElementById('popularAlbums');
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
        newReleasesAlbums.classList.remove('container--featured-albums-disabled');
        popularAlbums.classList.add('container--featured-albums-disabled');
        arrowLeft1.classList.remove('arrow--disabled');
        arrowRight1.classList.remove('arrow--disabled');
        arrowLeft2.classList.add('arrow--disabled');
        arrowRight2.classList.add('arrow--disabled');
    });
    popular.addEventListener('click', () => {
        newReleases.classList.remove('section__featured-title--selected');
        popular.classList.add('section__featured-title--selected');
        newReleasesAlbums.classList.add('container--featured-albums-disabled');
        popularAlbums.classList.remove('container--featured-albums-disabled');
        arrowLeft1.classList.add('arrow--disabled');
        arrowRight1.classList.add('arrow--disabled');
        arrowLeft2.classList.remove('arrow--disabled');
        arrowRight2.classList.remove('arrow--disabled');
    });
};

export default featured;