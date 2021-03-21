import React from "react";
import Photo from "./Photo";
const PhotoContainer=props=>{
    const displayPhotos=()=>{
        return props.photos.map(photo=>{
            return<Photo picture={photo.picture}/>
        })
    }
    return(
        <div>
<section>

    {displayPhotos()}

</section>
        </div>
    )
}
export default PhotoContainer;