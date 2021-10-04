import PageHeader from "../Components/PageHeader";
import PageLoader from "../Components/PageLoader";
import Breadcrumbs from "../Components/Breadcrumbs";
import WhatWeDo from "../Content/WhatWeDo";

const WhatWeDoPage = () => {
    return (
    <div className="text-center text-sm-left page">
        {/* <PageLoader />
        <PageHeader /> */}
        <Breadcrumbs Page={"Who We Are"} />
        <WhatWeDo />
        {/* <Footer /> */}
        <div className="snackbars" id="form-output-global"></div>
    </div>);
}

export default WhatWeDoPage;