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
  name: string;
  userName: string;
  email: string;
  password: string;
  dossier_medicale: object;
  consultations?: Array<any>;
  avis?: Array<any>;
};
