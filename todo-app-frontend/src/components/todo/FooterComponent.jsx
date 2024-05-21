import { useContext } from "react";
import { AuthContext } from "./security/AuthContext";

function FooterComponent() {
    const authContext = useContext(AuthContext)

    console.log(`Footer component - ${authContext.number}`);

    return (
        <footer className="footer">
            <div className="container">
                This app is developed and maintained by <a className="navbar-brand ms-10 fs-10 fw-bold text-black" href="https://github.com/0-Yash-0">Yash Tomar</a>
            </div>
        </footer>
    )
}

export default FooterComponent