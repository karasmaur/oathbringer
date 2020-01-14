import React from "react";
import SideMenu from "./sideMenu";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SecuredRoute from "../../securityUtils/SecureRoute";
import Notes from "./Notes";

const CampaignMenu = () => {
    return(
        <Router>
            <div>
                <SideMenu/>
                <Switch>
                    <SecuredRoute exact path="/campaignMenu/notes" component={Notes} />
                </Switch>
            </div>
        </Router>

    );
};

export default CampaignMenu;