import axios from "axios";

const resepInstance = axios.create({
    baseURL: "https://masak-apa-tomorisakura.vercel.app/api",
});

export default resepInstance;