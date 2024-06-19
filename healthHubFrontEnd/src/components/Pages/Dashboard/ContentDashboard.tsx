import { useContext, useEffect, useState } from "react";
import { DashboardContext } from "../Dashboard";
import DashboardItem from "./Items/DashboardItem";
import Jobdesk from "./Items/Jobdesk";

function ContentDashboard() {
  const { active } = useContext(DashboardContext);
  const [activeComponent, setActiveComponent] = useState(<DashboardItem />);

  useEffect(() => {
    let component;
    if (active == "dashboard") {
      component = <DashboardItem />;
    }
    if (active == "desktop") {
      component = <Jobdesk />;
    }
    setActiveComponent(component);
  }, [active]);

  return <>{activeComponent}</>;
}

export default ContentDashboard;
