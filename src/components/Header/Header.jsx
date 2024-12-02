import { HeaderMenu } from "./HeaderMenu";
import { Link } from "react-router-dom";

export const Header = () => {
    return (
        <>
            <header>
                <Link to="/">LOGO</Link>

                <HeaderMenu/>
            </header>
        </>
    );
}