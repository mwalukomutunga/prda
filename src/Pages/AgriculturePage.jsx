import PageHeader from "../Components/PageHeader";
import PageLoader from "../Components/PageLoader";
import Breadcrumbs from "../Components/Breadcrumbs";
import Agriculture from "../Content/Agriculture";
import CodeOfConduct from "../Content/CodeOfConduct";

const AgriculturePage = () => {
    return (
        <div className="text-center text-sm-left page">
            <Breadcrumbs Page={"Agriculture Intervention"} />
            <Agriculture />
            <div className="snackbars" id="form-output-global"></div>
        </div>);
}

export default AgriculturePage;