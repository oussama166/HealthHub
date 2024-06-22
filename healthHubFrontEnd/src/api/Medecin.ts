import { Doctor } from "@/type";
import axios from "axios";

const host = "http://localhost:8083/api/v1/";
export const createDoctor = async (data: Doctor) => {
  return await axios
    .post(`${host}createDoc`, data, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((res) => {
      localStorage.setItem("doctor", JSON.stringify(res.data));
      return true;
    })
    .catch((err) => {
      console.error(err);
      return false;
    });
};

export const getDoctors = async () => {
  return await axios
    .get(`${host}getDocs`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.error(err);
      return err;
    });
};

export const getDoctor = async (doc: Doctor) => {
  return await axios
    .post(`${host}getDoc`, {
      data: doc,
    })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err;
    });
};

export const getDoctorByName = async (name: string) => {
  return await axios
    .get(`${host}getDoc/${name}`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err;
    });
};

export const updateDoctor = async (doc: Doctor) => {
  return await axios
    .post(`${host}updateDoc`, doc)
    .then((res) => res.data)
    .catch((err) => err);
};

export const deleteDoctor = async (idDoc: number) => {
  return await axios
    .delete(`${host}removeDocById/${idDoc}`)
    .then((res) => res.data)
    .catch((err) => err);
};

export const deleteDoctorByName = async (username: string) => {
  return await axios
    .delete(`${host}removeDocByUsername/${username}`)
    .then((res) => res.data)
    .catch((err) => err);
};
