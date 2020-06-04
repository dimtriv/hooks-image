import React, { createContext, useReducer, useEffect } from 'react'

// Membuat sebuah variable context
export const FavContext = createContext()

// reducer context
// kalau redux harus menyimpan data dalam bentuk object sedangkan context bebas
// kalau seperti ini bukannya semua state akan terganti? baik yang buat render fav dan render image
const FavReducer = (state, action) => {
    // localStorage.setItem('favImage', JSON.stringify({state}))
    // console.log(state)
    switch (action.type) {
        case 'ADD_FAV':
            if(state == null) return [action.payload]
            const addFav = state.find(fav =>{
                return fav.id === action.payload.id
            })
            if(addFav === undefined) return [...state, action.payload]
            return state
            
        case 'REMOVE_FAV':
            const remove = state.filter(fav => {
                return !(fav === action.payload)
            })
            
            return remove
    
        default:
            return state
    }
}

// Membuat Component context
const FavContextProvider = (props) => {

    // useReducer(nama_reducer, nilai_init)
    // useReducer return sebuah array, dimana array tersebut berisi 2 hal
    // 1. variable state tempat data disimpan
    // 2. function untuk mengirim object(dispatch)
    // yang dibelakang wajib menggunakan nama dispatch
    // const [favorites, dispatch]= useReducer(FavReducer, [])
    const [favorites, dispatch]= useReducer(FavReducer, [], () => JSON.parse(localStorage.getItem('favImage'))//belakangnya bisa pakai if else atau ternary operator, jadi gak usah di ganti2 di reducer diatas
    )
    // console.log(favorites)

    useEffect(() => {
            localStorage.setItem('favImage', JSON.stringify(favorites))
    }, [favorites])
    


    return(
        // yang membutuhkan favorites dan dispatch harus diapit FavContext.Provider
        <FavContext.Provider value={{dispatch, favorites}}>
            {/* berisi component yang akan diapit oleh FavContextProvider */}
            {props.children}
        </FavContext.Provider>
    )
}

export default FavContextProvider