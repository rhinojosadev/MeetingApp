
import { Navbar } from '../../shared/components';

const tabs = [
    { name: "Dashboard", url: '/dashboard'},
    { name: "Schedule Meeting", url: '/schedule'}
]

export const Home = ({ children }) => {

    return (
        <>
            <Navbar tabs={tabs} />
            {children}
        </>
    )
}