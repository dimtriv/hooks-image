import React, {useContext, useState} from 'react'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, Button
    } from 'reactstrap';

//context (yang membutuhkan favorites dan dispatch harus meng-import FavContext)
import { FavContext } from '../config/context/FavContext'

function ImageList(props) {
    // console.log(props)
    const [addFav, setaddFav] = useState([])
    const {dispatch} = useContext(FavContext)
    
    // console.log(addFav)
    const addFavorites = (image) => {
        // console.log(addFav)
        dispatch(
            {
                type: 'ADD_FAV',
                payload: image
            }
        )
    }
    const images = props.images.map((image)=>{
        //image : {id, description, alt_description, urls, likes, user}
        return (
            <Card key={image.id}>
                <CardImg top width="100%" src={image.largeImageURL} alt={image.user} />
                <CardBody>
                    <CardTitle><h3>{image.user ? image.user : "Anonim" }</h3></CardTitle>
                    <CardText>Views: {image.views}</CardText>
                    <CardText>Likes: {image.likes}</CardText>
                    <Button color="primary"  block onClick={ () =>{ setaddFav([...addFav, image]); addFavorites(image)}}>Favorite</Button>
                </CardBody>
            </Card>
        )

        //UNSPLASH
        // return (
        //     <Card key={image.id}>
        //         <CardImg top width="100%" src={image.urls.regular} alt={image.alt_description} />
        //         <CardBody>
        //             <CardTitle><h3>{image.description ? image.description : "No Title" }</h3></CardTitle>
        //             <CardText>{image.alt_description}</CardText>
        //             <Button color="primary"  block >Favorite</Button>
        //         </CardBody>
        //     </Card>
        // )
    })

    if((props.images.length === 0) && (props.search)){
        return (
            <h1>Image Not Found</h1>
        )
    }
    return(
        <div className="card-columns">
            {images}
        </div>
    )
}

export default ImageList;