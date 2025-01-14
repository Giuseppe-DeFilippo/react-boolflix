import { Outlet } from 'react-router-dom';
import HeaderComponent from './HeaderComponent';

function DefaultLayoutComponent() {

    return (
        <>
            <HeaderComponent />
            <main>
                <Outlet />
            </main>
        </>
    )
}
export default DefaultLayoutComponent;