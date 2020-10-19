import React, {FC} from "react";
import {Link} from "react-router-dom";


interface RouteConfig {
    link: string;
    label: string;
}

const Navbar: FC = () =>{

    const routes: RouteConfig[] = [
        {
            link: 'home',
            label: 'Home'
        },
        {
            link: 'badges',
            label: 'Badges'
        },
        {
            link: 'users',
            label: 'Users'
        }
    ];

    return (<nav className="navbar navbar-expand-lg navbar-light bg-light">
        {routes.map((route: RouteConfig)=>{
            return <Link to={route.link} className="mr-3">{route.label}</Link>;
        })}
    </nav>)
}

export default Navbar;
