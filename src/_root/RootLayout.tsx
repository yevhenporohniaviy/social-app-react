import BottomBar from "@/components/shared/BottomBar";
import LeftSidebar from "@/components/shared/LeftSidebar";
import TopBar from "@/components/shared/TopBar";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div className="w-full md:flex">
      <TopBar />
      <LeftSidebar />
      <div className="flex flex-1 h-full">
        <Outlet /> 
      </div>
      <BottomBar />
    </div>
  );
}
 
export default RootLayout;