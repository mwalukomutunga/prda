import PageHeader from "../Components/PageHeader";
import PageLoader from "../Components/PageLoader";
import Breadcrumbs from "../Components/Breadcrumbs";
import Footer from "../Components/Footer";
import WhereWeWork from "../Content/WhereWeWork";

const WhereWeWorkPage = () => {
    return (
    <div className="text-center text-sm-left page">
        {/* <PageLoader />
        <PageHeader /> */}
        <Breadcrumbs Page={"Where we work"} style ={{backgroundImage:'url(images/gallery_img073.JPG'}}/>
        <WhereWeWork />
        {/* <Footer /> */}
        <div className="snackbars" id="form-output-global"></div>
    </div>);
}

export default WhereWeWorkPage;