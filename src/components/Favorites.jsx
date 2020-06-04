// untuk dapat menggunakan data dari context, gunakan useContext
import React, {useContext} from 'react'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, Button
    } from 'reactstrap';


//context (yang membutuhkan favorites dan dispatch harus meng-import FavContext)
import { FavContext } from '../config/context/FavContext'

const Favorites = () => {

    //favorites = []
    const {favorites, dispatch} = useContext(FavContext)
    // localStorage.setItem('favImage', JSON.stringify({favorites}))
    const remove = (image) => {
        
        dispatch(
            {
                type : 'REMOVE_FAV',
                payload: image
            }
        )
    }

    const renderImage = favorites.map(image => {
        // console.log(image)
        return (
            <Card key={image.id}>
                <CardImg top width="100%" src={image.largeImageURL} alt={image.user} />
                <CardBody>
                    <CardTitle><h3>{image.user ? image.user : "Anonim" }</h3></CardTitle>
                    <CardText>Views: {image.views}</CardText>
                    <CardText>Likes: {image.likes}</CardText>
                    <Button color="primary"  block onClick={ () => remove(image)}>Remove</Button>
                </CardBody>
            </Card>
        )
    })
    return (
        <div className="card-columns">
            {renderImage}
        </div>
    )
}

export default Favorites

// EXERCISE
// 1.Render list image
// 2. beri tombol remove
    // -buat tombol
    // -gunakan dispatch-bikin case baru di reducer
    // -gunakan.filter()
