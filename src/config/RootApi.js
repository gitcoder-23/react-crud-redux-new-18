import axios from "axios";
import { baseUrl } from "./BaseUrl";

export const RootApi = axios.create({
    baseURL: baseUrl
})
