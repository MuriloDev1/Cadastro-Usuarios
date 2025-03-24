import axios from 'axios'

// Create vai criar uma conexão com servidor
const api = axios.create({
    // Endereço Back-End
    baseURL: 'http://localhost:3000'
})

export default api