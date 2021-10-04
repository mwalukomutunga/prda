import PageHeader from "../Components/PageHeader";
import PageLoader from "../Components/PageLoader";
import Breadcrumbs from "../Components/Breadcrumbs";
import Footer from "../Components/Footer";
import ComingSoon from "../Content/ComingSoon";

const ComingSoonPage = () => {
    return (
    <div className="text-center text-sm-left page">
        {/* <PageLoader />
        <PageHeader /> */}
        <Breadcrumbs Page={"Coming soon"} />
        <ComingSoon/>
        {/* <Footer /> */}
        <div className="snackbars" id="form-output-global"></div>
    </div>);
}

export default ComingSoonPage;