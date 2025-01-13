import {Link, Outlet, useLocation} from 'react-router-dom';
import {Header} from "./Header.tsx";
import {AppShell, Burger} from "@mantine/core";
import {useDisclosure} from "@mantine/hooks";

export const Layout = () => {
    const [opened, {toggle}] = useDisclosure();
    const location = useLocation();
    const hideNavbarPaths = ['/base'];
    const isNavbarHidden = hideNavbarPaths.includes(location.pathname);

    return (
        <div>
            <AppShell
                header={{height: 100}}
                navbar={{
                    width: 300,
                    breakpoint: 'sm',
                    collapsed: {mobile: !opened},
                }}
                padding="md"
            >
                <AppShell.Header>
                    <Link to="/home">
                        <img
                            src="src/photos/TOP.png"
                            alt="Logo"
                            style={{height: '60%', marginTop: '20px', marginLeft: '5px'}}
                        />
                    </Link>

                    <Burger
                        opened={opened}
                        onClick={toggle}
                        hiddenFrom="sm"
                        size="sm"
                    />
                </AppShell.Header>

                {!isNavbarHidden && (
                    <AppShell.Navbar p="md">
                        <Header />
                    </AppShell.Navbar>
                )}

                <AppShell.Main>
                    <Outlet/>
                </AppShell.Main>
            </AppShell>
        </div>
    );
};