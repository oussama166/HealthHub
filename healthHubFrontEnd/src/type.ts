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
