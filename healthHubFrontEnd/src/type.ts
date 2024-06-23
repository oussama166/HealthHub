import { ReactElement } from "react";
interface SubItem {
  [key: string]: string;
}

interface SideBarItem {
  main: string;
  sub: SubItem;
  icon: ReactElement;
}

export interface SideBarItemData {
  [key: string]: SideBarItem;
}

export interface DashboardContextType {
  active: string;
  setActive: (value: string) => void;
}

export interface JobDeskItemProps {
  fill: boolean;
  title: string;
  titleClassName?: string;
  infoClassName?: string;
  info: string;
  icon: React.SVGAttributes<SVGElement>;
}

export type Patient = {
  id: number;
  userName: string;
  email: string;
  password: string;
  dossier_medicale: DossierMedical;
  consultations: Array<any>; // Add consultation type btw <any>
  avis: Array<any>; // Add Avis type btw <any>
};

export type Doctor = {
  id: number;
  name: string;
  userName: string;
  email: string;
  password: string;
  mapsUrl: string;
  ville: string;
  joinDate: string;
  price: number;
  specialty: string;
  consultations?: Array<any>; // Add consultation type btw <any>
  avis?: Array<any>; // Add Avis type btw <any>
};




interface DossierMedical {
  id?: number;
  antecedent: string;
  allergies: string;
  traitement: string;
}

export interface AuthContextType {
  isLogged: boolean;
  setIsLogged: (isLogged: boolean) => void;
  user: string | null;
  setUser: (user: string | null) => void;
  typeUser: "Doctor" | "Patient";
  setTypeUser: (typeUser: "Doctor" | "Patient") => void;
}

export interface signDoc {
  email: string;
  password: string;
  isDoctor: boolean;
}
