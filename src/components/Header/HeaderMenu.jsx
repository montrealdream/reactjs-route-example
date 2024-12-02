import { NavLink } from "react-router-dom";

export const HeaderMenu = () => {
    return (
        <>
            <ul className="header-menu">
                <li>
                    <NavLink to="/">Trang chủ</NavLink>
                </li>
                <li>
                    <NavLink to="/product">Trang sản phẩm</NavLink>
                </li>
                <li>
                    <NavLink to="/blog">Trang bài viết</NavLink>
                    <ul>
                        <li>
                            <NavLink to='/blog/skill'>Trang bài viết kỹ năng</NavLink>
                        </li>
                    </ul>
                </li>
                <li>
                    <NavLink to="/about">Trang miêu tả</NavLink>
                    <ul>
                        <li>
                            <NavLink to='/about/history'>Trang miêu tả lịch sử</NavLink>
                        </li>
                        <li>
                            <NavLink to='/about/us'>Trang miêu tả chúng tui</NavLink>
                        </li>
                    </ul>
                </li>
                <li>
                    <NavLink to="profile">Trang cá nhân</NavLink>
                </li>
            </ul>
        </>
    );
}