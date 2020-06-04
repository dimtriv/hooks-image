import React, {useEffect, useState} from 'react'

const BasicUseEffect = () => {
    // useEffect render dahulu baru menjalankan effectnya
    const [numberOne, setNumberOne] = useState(0)
    const [numberTwo, setNumberTwo] = useState(0)

    // useEffect akan running setiap kali component render/return
    // useEffect menerima dua parameter, function dan array
    useEffect(() => {
        console.log('useEffect is running when state one change')
        // useEffect hanya akan running ketika numberOne berubah nilainya
    }, [numberOne])

    useEffect(() => {
        console.log('useffect aja')
    })

    //berperilaku sama seperti componentDidMount
    useEffect(()=> {
        console.log('useEffect []')
    }, [])

    return (
        <div>
            {console.log('render')}
            <div className="w-50 mx-auto">
                <h1 className='text-center'>Number One: {numberOne}</h1>
                <h1 className='text-center'>Number Two: {numberTwo}</h1>
                <button 
                    className="btn mr-3 btn-outline-danger btn-block mx-auto"
                    onClick={() => setNumberOne(numberOne + 1)}
                >Increment</button>
                <button 
                    className="btn btn-outline-danger btn-block mx-auto"
                    onClick={() => setNumberTwo(numberTwo + 5)}
                >Increment +5</button>
            </div>
        </div>
    )
}

export default BasicUseEffect
