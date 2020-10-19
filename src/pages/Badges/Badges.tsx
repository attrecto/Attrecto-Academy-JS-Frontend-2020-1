import React, {Component} from "react";
import {BadgesService} from "../../service/badges.service";

class Badges extends Component<any, any>{

    badgeService = new BadgesService();

    async componentDidMount() {
        const response = await this.badgeService.getBadges();
        console.log("response", response);
    }


    render() {
        return <div>Badges</div>;
    }

}

export default Badges;
