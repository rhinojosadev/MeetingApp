import { Link } from "react-router-dom";

import styles from './index.module.css';

export const Navbar = ({ tabs }) => {
    return (
        <>
            <nav aria-label="Meeting Schedule App">
                <ul role="menubar" className={styles.navbar}>
                    {tabs.map( (tab) => {
                        return ( <>
                         <li tabIndex={0} role="menuitem">
                            <Link to={tab.url}>{tab.name}</Link>
                         </li>
                        </>)
                    })}
                </ul>
            </nav>
        </>
    );
}