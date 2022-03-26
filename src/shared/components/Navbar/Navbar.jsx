import styles from './index.module.css';

export const Navbar = ({ tabs }) => {
    return (
        <>
            <nav aria-label="Meeting Schedule App">
                <ul  role="menubar" className={styles.navbar}>
                    {tabs.map( (tab) => {
                        return ( <>
                         <li  role="none">
                             <a  role="menuitem" tabindex="0" href={tab.url}>
                                {tab.name}
                             </a>
                        </li>
                        </>)
                    })}
                </ul>
            </nav>
        </>
    );
}