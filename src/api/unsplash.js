import axios from "axios";

export default axios.create({
    baseURL: "https://api.unsplash.com/",
    headers: {
        Authorization: "Client-ID srOptdZTAO5VmAl_nKcr5-ByZinIw_a0T3W_bts8xCA"
    },
});
