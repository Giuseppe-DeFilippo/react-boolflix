import { Outlet } from 'react-router-dom';
import HeaderComponent from './HeaderComponent';

function DefaultLayoutComponent() {

    return (
        <>
            <HeaderComponent />
            <main className='bg-secondary py-4'>
                <Outlet />
            </main>
        </>
    )
}
export default DefaultLayoutComponent;