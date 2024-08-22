import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "94a3720c61074c4b9cdd0c103491ce1a"
    }
})