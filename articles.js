import './articles.css';

const stopLines = document.getElementsByClassName('stop-line');

if (stopLines.length > 0) {
    const stopLinesLength = stopLines.length;
    const lastStopLine = stopLines[stopLinesLength-1];
    lastStopLine.style.display = "none";
}
  
function handleYoutubeVideos() {
    if (youtubeVideos.length > 0) {
        for (let i = 0; i < youtubeVideos.length; i++) {

            const source = `https://img.youtube.com/vi/${youtubeVideos[i].dataset.embed}/maxresdefault.jpg`;
            const image = new Image();
            image.src = source;
            image.addEventListener( "load", function() {
                youtubeVideos[i].appendChild(image);
            }(i));
            
            youtubeVideos[i].addEventListener("click", function() {
                const videoSource = `https://www.youtube.com/embed/${this.dataset.embed}?start=${this.dataset.start}&amp;autoplay=1`;
                const iframe = document.createElement( "iframe" );
                iframe.setAttribute( "frameborder", "0" );
                iframe.setAttribute("allowfullscreen", "");
                iframe.setAttribute( "allow", "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" );
                iframe.setAttribute( "src", videoSource);
                this.innerHTML = "";
                this.appendChild(iframe);
            });
        }
    }
}
const youtubeVideos = document.getElementsByClassName('youtube');
if(youtubeVideos.length > 0) {handleYoutubeVideos();}