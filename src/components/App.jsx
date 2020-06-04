import React from 'react'
// import React, {useEffect, useState, useContext} from 'react'
import { BrowserRouter, Route} from 'react-router-dom'

// components
import Home from './Home'
import Favorites from './Favorites'
import Header from './Header'
import BasicUseEffect from '../theory/BasicUseEffect'

//context
// import FavContextProvider, {FavContext} from '../config/context/FavContext'

function App() {

    // const [check, setCheck] = useState(false)
    // const {dispatch} = useContext(FavContext)

    // useEffect(()=> {
    //     let images = JSON.parse(localStorage.getItem('favImage'))
    //     console.log(images)
    //     if(images){
    //         dispatch(
    //             {
    //                 type : 'ADD_FAV',
    //                 payload: images.favorites
    //             }
    //         )
    //     }
    //     setCheck(true)
    // }, [])

    return(
        <BrowserRouter>
        <Header/>
            <div className="container"> 
                {/* apit components yang ingin diberi akses ke context, kalau mau hanya home dan fav saja yang bisa apa yang ada di FavContext maka letakkan FavContextProvider disini jika mau seluruh app maka letakkan di index */}
                {/* <FavContextProvider> */}
                    <Route path='/' exact component={Home}></Route>
                    <Route path='/favorites' exact component={Favorites}></Route>
                {/* </FavContextProvider> */}
                <Route path='/theory' exact component={BasicUseEffect}></Route>
            </div>
        </BrowserRouter>
    )
}

export default App;

