import FavoriteSites from "./FavoriteSites"

function Gallery(){
    return(
        <div className="gallery">
            <h2>Gallery</h2>
            <ul>
                <li><img width={200} src=".\asset\smile monkey.jpg" ></img></li>
                <li><img width={200} src=".\asset\smile monkey.jpg" ></img></li>
                <li><img width={200} src=".\asset\smile monkey.jpg" ></img></li>
            </ul>
        </div>
    )
}
export default Gallery;