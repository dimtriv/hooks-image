import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'

//import bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'

import FavContextProvider from './config/context/FavContext'


ReactDOM.render(
    <FavContextProvider>
        <App/>
    </FavContextProvider>, 
    document.getElementById('root'))
