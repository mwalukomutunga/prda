import PageHeader from "../Components/PageHeader";
import PageLoader from "../Components/PageLoader";
import Breadcrumbs from "../Components/Breadcrumbs";
import Footer from "../Components/Footer";
import HealthTraining from "../Content/HealthTraining";

const HealthTrainingPage = () => {
    return (
    <div className="text-center text-sm-left page">
        {/* <PageLoader />
        <PageHeader /> */}
        <Breadcrumbs Page={"Leer Health Science Institute"} style ={{backgroundImage:'url(images/4-1920x729.jpg'}} />
        <HealthTraining />
        {/* <Footer /> */}
        <div className="snackbars" id="form-output-global"></div>
    </div>);
}

export default HealthTrainingPage;