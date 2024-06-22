import { Patient } from "@/type";
import axios from "axios";

export const  PostPatients = async (data: Patient) => {
  return await axios.post("http://localhost:8083/api/v1/createPatient", {
    headers: {
      "Content-Type": "application/json",
    },
    data: {
      id: data.id,
      userName: data.userName,
      email: data.email,
      password: data.password,
      dossier_medicale: data.dossier_medicale,
      consultations: data.consultations,
      avis: data.avis,
    },
  }).then(res=>{
    console.log(data)
    localStorage.setItem("patients",JSON.stringify(data))
    console.log(res.statusText);
    console.log(res.data);
  }).catch (error => {
    if (axios.isAxiosError(error)) {
      console.error('AxiosError:', error);
      console.error('Message:', error.message);
      console.error('Response:', error.response);
    } else {
      console.error('Error:', error);
    }})
  
};
export const getPatient = async (name:String) => {
  return axios.get(`http://localhost:8083/api/v1/getPatient/${name}`, {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    }
  }).then(res => {
    console.log(res.data);
  }).catch(err=>{
    console.error(err);
  });
};

export const deletePatient = async (idUser:number) => {
  return axios.delete(`http://localhost:8083/api/v1/deletePatient/${idUser}`, {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    }
  }).then(res => {
    console.log(res.data);
  }).catch(err=>{
    console.error(err);
  });
};