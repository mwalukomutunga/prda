import Breadcrumbs from "../Components/Breadcrumbs";
import FoodSecurity from "../Content/FoodSecurity";
const FoodSecurityPage = () => {
    return (
    <div className="text-center text-sm-left page">
        {/* <PageLoader />
        <PageHeader /> */}
        <Breadcrumbs Page={"Food security"} style ={{backgroundImage:'url(images/DSC00156.jpg'}}/>
        <FoodSecurity />
        {/* <Footer /> */}
        <div className="snackbars" id="form-output-global"></div>
    </div>);
}

export default FoodSecurityPage;