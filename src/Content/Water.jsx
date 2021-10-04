import ComingSoon from "./ComingSoon";
const Water = () => {
    return (
        <section className="section-md bg-white text-left">
            <div className="shell">
                <div className="tabs-custom tabs-services tabs-vertical" id="tabs-3">
                    <ul className="nav-custom nav-custom-tabs group-tabs">
                        <li className="active"><a href="services.html#tabs-3-1" data-toggle="tab">
                            Water, Sanitation & Hygiene (Wash) Intervention<span
                                className="icon-arrow icon-rotate-90 material-icons-keyboard_backspace"></span></a></li>

                    </ul>
                    <div className="tab-content text-left">
                        <div className="tab-pane fade in active counter-index-sec" id="tabs-3-1">
                            <div className="inset-right-lg-150">
                                {/* <h2>Water, Sanitation & Hygiene (Wash) Intervention</h2> */}
                                <p className="big text-width-large">
                                    PRDA upsurge WASH interventions to promote access to water through drilling and
                                    rehabilitation of boreholes and other water sources as well as training Water User Committees
                                    (WUCs) on repairs and maintenance and promoting community hygiene practices. Water
                                    coverage is determined by the SPHERE standards and institutional support through working
                                    with UNCEF and government national and state level water resources department.
                                </p>
                                <p className="big text-width-large">
                                    Limited access to improved water sources, deficient sanitation facilities and low knowledge
                                    and practice of good hygiene behaviours are all interlinked factors of a negative loop and
                                    PRDA strategy is to break this loop intervening on water source reliability, household level
                                    sanitation and diffused positive hygiene behaviours.<br/>This approach has important positive
                                    effects on the side of protection and contrast to GBV as household-based sanitation limits
                                    the need of women, girls, boys and men for re-searching isolated places were to attend daily
                                    needs.
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

export default Water;