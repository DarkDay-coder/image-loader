import {useState} from "react";
import loadingImage from './image/loading.gif'

function ImageLoader({src, alt}) {
    const [isLoading, setIsLoading] = useState(true);

    console.log('isLoading', isLoading)

    const handleImageLoad = () => {
        console.log('inside handle load', isLoading)
        setIsLoading(false);
    };

    return (
        <div>
            {/*<img src={isLoading ? loadingImage : src} alt={'alt'} onLoad={handleImageLoad} />*/}

            {isLoading ? <img src={loadingImage} alt={'alt'} onLoad={handleImageLoad}/> :

                <img src={src} alt={alt} onLoad={handleImageLoad}/>}
        </div>
    );
}

export default ImageLoader;