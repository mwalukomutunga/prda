import Breadcrumbs from "../Components/Breadcrumbs";
import Flood from "../Content/Flood";

const FloodIntervationPage = () => {
    return (
    <div className="text-center text-sm-left page">
        <Breadcrumbs Page={"Flood intervention"} />
        <Flood/>
        <div className="snackbars" id="form-output-global"></div>
    </div>);
}

export default FloodIntervationPage;