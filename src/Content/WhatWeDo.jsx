import ComingSoon from "./ComingSoon";
const WhatWeDo = () => {
    return (
        <section className="section-md bg-white text-left">
            <div className="shell">
                <div className="tabs-custom tabs-services tabs-vertical" id="tabs-3">
                    <ul className="nav-custom nav-custom-tabs group-tabs">
                        <li className="active"><a href="services.html#tabs-3-1" data-toggle="tab">
                            Who We Are<span
                                className="icon-arrow icon-rotate-90 material-icons-keyboard_backspace"></span></a></li>

                    </ul>
                    <div className="tab-content text-left">
                        <div className="tab-pane fade in active counter-index-sec" id="tabs-3-1">
                            <div className="inset-right-lg-150">
                                <h2>Who We Are</h2>
                                <p className="big text-width-large">
                                    The Presbyterian Relief and Development Agency (PRDA) is a Relief and Development arm
                                    of the Presbyterian Church of South Sudan and Sudan (PCOSS/S), established in 1993 and
                                    registered as an NGO by the Kenyan Government and the SRRC in 1996 and 2003 respectively.
                                </p>
                                <p className="big text-width-large">
                                    It was admitted to OLS/UNICEF consortium membership in 1997. It was registered by the
                                    Ministry of Legal Affairs and Constitutional Development of the Republic of South Sudan
                                    in 2008 and subsequently renewed in 2012
                                </p>
                                <p className="big text-width-large">
                                    PRDA has since its inception worked with the
                                    war affected and the marginalized communities of South Sudan providing emergency relief
                                    services and development programs and continually builds the affected peoples’ capacities
                                    to prepare them for self-reliance and sustainable development.
                                </p>

                            </div>
                            <div className="range range-30">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default WhatWeDo;