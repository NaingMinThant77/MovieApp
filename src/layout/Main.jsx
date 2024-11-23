import Nav from '../components/Nav'
import { Outlet } from 'react-router-dom'

function Main() {
    return (
        <section>
            <Nav />
            <Outlet />
        </section>
    )
}

export default Main