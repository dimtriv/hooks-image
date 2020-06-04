import React, {useState, useEffect} from 'react'
import axios from '../config/axios'

//components
import SearchBar from './SearchBar'
import ImageList from './ImageList'

const Home = () => {

// pengganti state = useState, akan mereturn dua array [data, fnUbahdata]
    //nilai di dalam useState bisa bermacam-macam, tidak hrs object
    //fnUbahdata sebagai pengganti this.setState
    // const [data, fnUbahdata] = useState('')
    //['text', set'Text'] nama dikiri dengan nama dikanan setelah set harus sama 
    // const [text, setText] = useState('Kamis')
    const [images, setImages] = useState([])
    const [search, setSearch] = useState()

    //componentDidMount
    //berbeda dengan componentDidMount, kalau code dibawah di render dahulu baru dijalankan useEffet, hanya saja dengan code seperti ini dia hanya akan jalan sekali
    //sehingga gambar akan langsung muncul tanpa melakukan proses searching image
    useEffect(() => {
        onSearchImage()
    }, [])

    const onSearchImage = (keyword, amount) => {
        const config = {
            params: {
                key : '16615801-272db725cd11107e5487a60b8',
                q : keyword ? keyword : "random",
                per_page : amount ? amount : 10
            }
        }

        //UNSPLASH
        // const config = {
        //     params: {
        //         query : keyword ? keyword : "random",
        //         per_page : amount ? amount : 10
        //     }
        // }

        // isi dari text input ada di dalam object current pada property value
        // console.log(keywordRef)
        // console.log(keywordRef.current.value)
        // console.log(amountRef.current.value)
        
        //mengambil foto ke unsplash sesuai dengan keyword
        //dapat menentukan jumlah gambar yang di dapat, dengan jumlah maksimal 30
        axios.get('/', config)
        // kalau berhasil mendapat data, disimpan ke state images
        .then(res => {
            // console.log(res.data)
            setImages(res.data.hits)
            setSearch(true)
            })
            // console.log(res.data.results))
        //kalau gagal, munculkan object err di console
        .catch(err => console.log({err}))

        //UNSPLASH
        // axios.get('/search/photos', config)
        // // kalau berhasil mendapat data, disimpan ke state images
        // .then(res => {
        //     // console.log(res.data.results)
        //     setImages(res.data.results)
        //     setSearch(true)
        //     })
        //     // console.log(res.data.results))
        // //kalau gagal, munculkan object err di console
        // .catch(err => console.log({err}))
    }

    return (
        <div className="mt-5">
            {/* Search Bar memiliki property onSearchImage */}
            <SearchBar onSearchImage={onSearchImage} />
            <ImageList images={images} search={search}/> 
        </div>
    )
}

export default Home
