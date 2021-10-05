import { NavLink,NavNavLink  } from "react-router-dom";
const InnerNavBar = () => {
    return (
        <div className="rd-navbar-inner">
            <div className="rd-navbar-aside-wrap">
                <div className="rd-navbar-nav-wrap">
                    <ul className="rd-navbar-nav">
                        <li className="active"><NavLink  to="/">Home
                            <svg className="button-santos" xmlns="https://www.w3.org/2000/svg"
                                shapeRendering="crispEdges">
                                <rect className="shape" width="100%" height="100%" x="0" y="0"></rect>
                            </svg></NavLink >
                        </li>
                        <li><NavLink to="/">About us
                            <svg className="button-santos" xmlns="https://www.w3.org/2000/svg"
                                shapeRendering="crispEdges">
                                <rect className="shape" width="100%" height="100%" x="0" y="0"></rect>
                            </svg></NavLink>
                            <ul className="rd-navbar-dropdown">
                                <li><NavLink to="/whatwedo">Who We Are</NavLink></li>
                                <li><NavLink to="codeofconduct">Code of Conduct</NavLink></li>
                                <li><NavLink to="/objectives">Objectives</NavLink></li>
                                {/* <li><NavLink to="/livelihoods">Liveliwoods</NavLink></li> */}
                                <li><NavLink to="/team">Team</NavLink></li>
                                <li><NavLink to="/whereWeWork">Where we work</NavLink></li>
                            </ul>
                        </li>
                        {/* <li><NavLink to="/">What We do
                            <svg className="button-santos" xmlns="https://www.w3.org/2000/svg"
                                shapeRendering="crispEdges">
                                <rect className="shape" width="100%" height="100%" x="0" y="0"></rect>
                            </svg></NavLink>
                            <ul className="rd-navbar-dropdown">
                                <li><NavLink to="/objectives">Objectives</NavLink></li>
                                <li><NavLink to="/livelihoods">Liveliwoods</NavLink></li>
                                <li><NavLink to="/whereWeWork">Where we work</NavLink></li>

                            </ul>
                        </li> */}

                        <li><NavLink to="/">Programmes
                            <svg className="button-santos" xmlns="https://www.w3.org/2000/svg"
                                shapeRendering="crispEdges">
                                <rect className="shape" width="100%" height="100%" x="0" y="0"></rect>
                            </svg></NavLink>
                            <ul className="rd-navbar-dropdown">
                                <li><NavLink to="/healthTraining">Leer health training School</NavLink></li>
                                <li><NavLink to="/agriculture">Agriculture </NavLink></li>
                                <li><NavLink to="/wash">Water, sanitation and Hygiene (WASH)</NavLink></li>
                                {/* <li><NavLink to="/disasterandrisk">Disaster & Risk Management</NavLink></li> */}
                                <li><NavLink to="/foodsecurity">Relief Programmes
                                    <svg className="button-santos" xmlns="https://www.w3.org/2000/svg"
                                        shapeRendering="crispEdges">
                                        <rect className="shape" width="100%" height="100%" x="0" y="0"></rect>
                                    </svg></NavLink>
                                    <ul className="rd-navbar-dropdown">
                                        <li><NavLink to="/flood">Flooding Intervation</NavLink></li>
                                        <li><NavLink to="/comingsoon">Covid 19</NavLink></li>

                                    </ul>
                                </li>

                                {/* <li><NavLink to="/history">Historical background and Establishment</NavLink></li> */}

                            </ul>
                        </li>
                        <li><NavLink to="/comingsoon">Alumni
                            <svg className="button-santos" xmlns="https://www.w3.org/2000/svg"
                                shapeRendering="crispEdges">
                                <rect className="shape" width="100%" height="100%" x="0" y="0"></rect>
                            </svg></NavLink>
                            {/* <ul className="rd-navbar-dropdown">
                                <li><NavLink to="/healthTraining">Midwifery School</NavLink></li>
                                <li><NavLink to="/healthTraining">Alumni</NavLink></li>
                            </ul> */}
                        </li>

                        <li><NavLink to="/gallery">Gallery
                            <svg className="button-santos" xmlns="https://www.w3.org/2000/svg"
                                shapeRendering="crispEdges">
                                <rect className="shape" width="100%" height="100%" x="0" y="0"></rect>
                            </svg></NavLink>
                        </li>

                        <li><NavLink to="/contacts">Contacts
                            <svg className="button-santos" xmlns="https://www.w3.org/2000/svg"
                                shapeRendering="crispEdges">
                                <rect className="shape" width="100%" height="100%" x="0" y="0"></rect>
                            </svg></NavLink>
                        </li>
                        
                        <li><NavLink to="/email">Email
                            <svg className="button-santos" xmlns="https://www.w3.org/2000/svg"
                                shapeRendering="crispEdges">
                                <rect className="shape" width="100%" height="100%" x="0" y="0"></rect>
                            </svg></NavLink>
                        </li>

                    </ul>
                </div>
                <ul className="list-inline desktop-element">
                    <li><NavLink className="fa fa-facebook text-white" to="/"> </NavLink></li>
                    <li><NavLink className="fa fa-google-plus text-white" to="/"> </NavLink></li>
                    <li><NavLink className="fa fa-NavLinkedin text-white" to="/"> </NavLink></li>
                    <li><NavLink className="fa fa-twitter text-white" to="/"> </NavLink></li>
                </ul>
            </div>
        </div>
    )
}
export default InnerNavBar;