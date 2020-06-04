import React, { useRef } from 'react'

function SearchBar(props) {

    const keywordRef = useRef()
    const amountRef = useRef()

    const onSubmitForm = (e) => {
        e.preventDefault()

        //memanggil function yang ada di app.jsx
        //membutuhkan dua argument ('keyword gambar', jumlah gambar yang diinginkan')
        props.onSearchImage(
            keywordRef.current.value,
            amountRef.current.value
        )
    }   
    return(
        <div>
            {/* Memunculkan alert text */}
            {/* <button onClick = {() => {alert(text)}}> Munculkan text </button> */}
            {/* Mengubah isi dari text */}
            {/* <button onClick = {() => {setText('Sudah diubah')}}> Mengubah text </button> */}
            <form onSubmit={onSubmitForm} className="form-group">
                <input ref={ keywordRef } type="text" className="form-control" placeholder="Pictures" />
                <input ref={ amountRef } type="text" className="form-control my-3" placeholder="How many do you want ? " />
                <input type="submit" className="btn btn-outline-primary btn-block" value="Search"/>
            </form>
        </div>
    )
}

export default SearchBar;