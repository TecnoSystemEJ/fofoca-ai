import imgLogo from "../../../assets/logo.png";
import {Outlet} from "react-router-dom";
import "./style.css";

function AuthTemplate() {
    return (
        <main className="main">
            <div className="main__left">
                <img src={imgLogo} />
            </div>
            <div className="main__right">
                <Outlet/>
            </div>
        </main>
    );
}

export default AuthTemplate;
