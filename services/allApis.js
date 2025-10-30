import axios from "axios";
import base_url from "./baseurl";
import commonApi from "./commonApi";

export const loginApi = async (data) => {
  return await commonApi(`${base_url}/login`, 'POST', '', data)
}

export const getAllNewsApi = async () => {
  return await commonApi(`${base_url}/getallnews`, "GET", "");
};

export const getLatestNewsApi = async () => {
  return await commonApi(`${base_url}/getlatestnews`, "GET", "");
};

export const addNewsApi = async (data) => {
  return await commonApi(`${base_url}/addnews`, "POST", "", data);
};

export const editNewsApi = async (id, data) => {
  return await commonApi(`${base_url}/editnews/${id}`, "PUT", "", data);
};

export const deleteNewsApi = async (id) => {
  return await commonApi(`${base_url}/deletenews/${id}`, "DELETE", "");
};

export const adddpharmseatsApi = async (data) => {
  return await commonApi(`${base_url}/adddpharmseats`, 'POST', "", data)
}


// === DPHARM APIs ===
export const addDpharmApi = async (data) => {
  return await commonApi(`${base_url}/adddpharmseats`, "POST", "", data);
};

export const getAllDpharmApi = async () => {
  return await commonApi(`${base_url}/getpharmseats`, "GET", "");
};

export const editDpharmApi = async (id, data) => {
  return await commonApi(`${base_url}/editdpharmseats/${id}`, "PUT", "", data);
};

export const deleteDpharmApi = async (id) => {
  return await commonApi(`${base_url}/deldpharmseats/${id}`, "DELETE", "");
};

// === NURSING APIs ===
export const addNursingApi = async (data) => {
  return await commonApi(`${base_url}/addnursingseats`, "POST", "", data);
};

export const getAllNursingApi = async () => {
  return await commonApi(`${base_url}/getnursingseats`, "GET", "");
};

export const editNursingApi = async (id, data) => {
  return await commonApi(`${base_url}/editnursingseats/${id}`, "PUT", "", data);
};

export const deleteNursingApi = async (id) => {
  return await commonApi(`${base_url}/delnursingseats/${id}`, "DELETE", "");
};

export const addAdmissionApi = async (data) => {
  return await commonApi(`${base_url}/addadmission`, "POST", "", data);
};