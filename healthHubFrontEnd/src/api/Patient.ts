import { Patient } from "@/type";
import axios from "axios";

export const putPatients = async (data: Patient) => {
  return axios.post("http://localhost:8083/api/v1/createPatient", {
    headers: {
      "Content-Type": "application/json",
    },
    data: {
      id: data.id,
      name: data.name,
      userName: data.userName,
      email: data.email,
      password: data.password,
      dossier_medicale: data.dossier_medicale,
      consultations: data.consultations,
      avis: data.avis,
    },
  });
};

