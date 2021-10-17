import PageHeader from "../Components/PageHeader";
import PageLoader from "../Components/PageLoader";
import Breadcrumbs from "../Components/Breadcrumbs";
import Footer from "../Components/Footer";
import History from "../Content/History";

const HistoryPage = () => {
    return (
    <div className="text-center text-sm-left page">
        {/* <PageLoader />
        <PageHeader /> */}
        <Breadcrumbs Page={"History"} style ={{backgroundImage:'url(images/prda.webp'}}/>
        <History />
        {/* <Footer /> */}
        <div className="snackbars" id="form-output-global"></div>
    </div>);
}

export default HistoryPage;