import axios from "axios";
import base_url from "./baseurl";
import commonApi from "./commonApi";

export const loginApi=async(data)=>{
    return await commonApi(`${base_url}/login`, 'POST', '', data)
}