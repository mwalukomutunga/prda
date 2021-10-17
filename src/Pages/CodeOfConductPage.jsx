import PageHeader from "../Components/PageHeader";
import PageLoader from "../Components/PageLoader";
import Breadcrumbs from "../Components/Breadcrumbs";
import Footer from "../Components/Footer";
import CodeOfConduct from "../Content/CodeOfConduct";

const CodeOfConductPage = () => {
    return (
    <div className="text-center text-sm-left page">
        {/* <PageLoader />
        <PageHeader /> */}
        <Breadcrumbs Page={"Code of Conduct"} style ={{backgroundImage:'url(images/prda.webp'}} />
        <CodeOfConduct />
        {/* <Footer /> */}
        <div className="snackbars" id="form-output-global"></div>
    </div>);
}

export default CodeOfConductPage;