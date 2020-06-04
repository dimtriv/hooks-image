import React, {useState} from 'react'

const BasicUseState = () => {

    // INTINYA kalau variable memiliki lebih dari satu nilai seperti array dan object maka pakai ... agar nilai yang lama tidak tergantikan dengan yang baru, namun justru nilai yang lama ditambah dengan nilai yang baru

    // membuat state menggunakan salah satu hooks function
    // useState akan me-return array, array tersebut akan langsung distruct untuk menentukan dua variable
   // variable yang pertama akan digunakan untuk menyimpan state itu sendiri
   // variable yang kedua digunakan untuk sebuah function yang berguna untuk mengubah data di state
    // const [firstName, setFirstName] = useState('')
    // const [lastName, setLastName] = useState('')

       // state dapat berupa object
   // setName akan me replace object yang tersimpan
   // maka dari itu harus menggunakan metode distruct agar data lama tidak hilang (...name)
    // const [name, setName] = useState({ firstName : '', lastName: ''})
    // bisa akses name.firstName dan name.lastName

    // state dapat berupa array
   // setSongs akan me replace array yang tersimpan
   // maka dari itu harus menggunakan metode distruct agar data lama tidak hilang (...songs)
    const [songs, setSongs] = useState([
        {title : 'Heal the world', artist : 'Michael Jackson'}, 
        {title: 'How do you sleep ?', artist : 'Sam Smith'},
        {title : 'Sail', artist : 'Awolnation'}
    ])

    const titleRef =useRef()
    const artistRef =useRef()

    const addNewSong = (e) => {
        e.preventdefault()
        const newSong = {
            title: titleRef.current.value,
            artist: artistRef.current.value
        }

        // menambah satu object lagu baru
        setSongs([...songs, newSong])
    }

    return(
        <div>
            <div>
                {/* <form className="form-group mt-5">
                    <input placeholder="first name" className="form-control" type="text" onChange={(e) => setFirstName(e.target.value)}/>
                    <input placeholder="last name" className="form-control my-4" type="text" onChange={(e) => setLastName(e.target.value)}/>
                </form> */}

                {/* <form className="form-group mt-5"> */}
                    {/* harus pakai destructuring '...' karena kalau tidak saat kita isi frist name maka last name akan kosong, begitu juga sebaliknya jika kita isi lastname first name akan menghilang, karena pada dasarnya yang dilakukan adalah mereplace.*/}
                    {/* <input placeholder="first name" className="form-control" type="text" onChange={(e) => setName({...name,firstName : e.target.value})}/>
                    <input placeholder="last name" className="form-control my-4" type="text" onChange={(e) => setName({...name,lastName : e.target.value})}/>
                </form> */}
                <p>Kita memiliki {songs.length} lagu</p>
                <form onSubmit={addNewSong} className="form-group mt-5">
                    <input placeholder="songs" className="form-control" type="text" ref={titleRef}/>
                    <input placeholder="artist" className="form-control my-4" type="text" ref={artistRef}/>
                    <input className="btn btn-block btn-primary" type="submit" value="Add new song" />
                </form>
            </div>
            {/* <p>First Name : {firstName}</p>
            <p>Last Name : {lastName}</p> */}

            {/* <p>Name : {JSON.stringify(name)}</p>
            <p>First Name : {name.firstName}</p>
            <p>Last Name : {name.lastName}</p> */}
        </div>
    )
}

export default BasicUseState