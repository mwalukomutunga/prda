// import './App.css';
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from './Components/HomePage';
import Governance from "./Pages/Governance";
import TeamPage from "./Pages/TeamPage";
import CodeOfConductPage from "./Pages/CodeOfConductPage";
import DisasterAndRiskPage from "./Pages/DisasterAndRiskPage";
import HistoryPage from "./Pages/HistoryPage";
import WaterPage from "./Pages/WaterPage";
import LivelihoodPage from "./Pages/LivelihoodPage";
import ObjectivesPage from "./Pages/ObjectivesPage";
import FoodSecurityPage from "./Pages/FoodSecurityPage";
import WhereWeWorkPage from "./Pages/WhereWeWorkPage";
import HealthTrainingPage from "./Pages/HealthTrainingPage";
import GalleryPage from "./Pages/GalleryPage";
import Agriculture from "./Pages/AgriculturePage";
import WhatWeDoPage from "./Pages/WhatWeDoPage";
import ContactPage from "./Pages/ContactPage";
import FloodIntervationPage from "./Pages/FloodIntervationPage";
import ComingSoonPage from "./Pages/ComingSoonPage";
import Footer from "./Components/Footer";
import PageHeader from "./Components/PageHeader";


import React from 'react';
function App() {

  var strWindowFeatures = "location=yes,height=570,width=520,scrollbars=yes,status=yes";
  return (
    <React.Fragment>
      <Router basename="/" >
        <PageHeader />
        <Switch>
          <Route exact strict path="/" component={HomePage} />
          <Route path={'/(.+)'}
            render={() => (
              <>
                <Route exact path="/governance" component={Governance} />
                <Route exact path="/whatwedo" component={WhatWeDoPage} />
                <Route exact path="/agriculture" component={Agriculture} />
                <Route exact path="/team" component={TeamPage} />
                <Route exact path="/codeofconduct" component={CodeOfConductPage} />
                <Route exact path="/disasterandrisk" component={DisasterAndRiskPage} />
                <Route exact path="/history" component={HistoryPage} />
                <Route exact path="/wash" component={WaterPage} />
                <Route exact path="/livelihoods" component={LivelihoodPage} />
                <Route exact path="/objectives" component={ObjectivesPage} />
                <Route exact path="/foodsecurity" component={FoodSecurityPage} />
                <Route exact path="/wherewework" component={WhereWeWorkPage} />
                <Route exact path="/healthtraining" component={HealthTrainingPage} />
                <Route exact path="/gallery" component={GalleryPage} />
                <Route exact path="/contacts" component={ContactPage} />
                <Route exact path="/flood" component={FloodIntervationPage} />
                <Route exact path="/comingsoon" component={ComingSoonPage} />
              </>
            )
            } />
        </Switch>
        <Route exact path="/email" render={() => (window.location = "https://host22.safaricombusiness.co.ke:2096/", "_blank", strWindowFeatures)} />
        <Route exact path="/facebook" render={() => (window.open = "https://www.facebook.com/search/top?q=prda", "_blank", strWindowFeatures)} />
        <Route exact path="/in" render={() => window.location('https://developer.mozilla.org/en-US/docs/Web/API/Location/reload', "_blank", strWindowFeatures)} />
        <Footer />
      </Router>

    </React.Fragment>
  );
}

export default App;
