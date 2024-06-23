import { Patient } from "@/type";
import axios from "axios";

const host = "http://localhost:8083/api/v1/";
export const postPatients = async (data: Patient) => {
  return await axios
    .post(`${host}createPatient`, data)
    .then((res) => {
      alert("Patient created successfully");
      console.log(res)
      localStorage.clear();
      localStorage.setItem("Patient", JSON.stringify(res.data));
    })
    .catch((error) => {
      console.error(error);
    });
};
export const getPatient = async (name: string) => {
  return await axios
    .get(`http://localhost:8083/api/v1/getPatient/${name}`, {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    })
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.error(err);
    });
};

export const deletePatient = async (idUser: number) => {
  return axios
    .delete(`http://localhost:8083/api/v1/deletePatient/${idUser}`, {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    })
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.error(err);
    });
};
