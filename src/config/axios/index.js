import axios from 'axios'

export default axios.create(
    { 
        baseURL : 'https://pixabay.com/api',
        // baseURL : 'https://api.unsplash.com',
        // headers: { Authorization : "Client-ID Fmor-vmzZ3dspkCdbog95hZkXc0xOvf30ZMAeNkcpJw"}
    }
)

