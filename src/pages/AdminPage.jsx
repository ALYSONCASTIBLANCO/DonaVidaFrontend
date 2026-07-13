import CentersTable from "../components/ui/CentersTable";
import DashboardStats from "../components/ui/DashboardStats";
import FilesLoader from "../components/ui/FilesLoader";
export default function AdminPage(){
    return(
        <>
        <DashboardStats />
        <FilesLoader/>
        <CentersTable/>
        </>
    );
}