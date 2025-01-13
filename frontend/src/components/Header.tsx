import {NavLink} from "@mantine/core";
import {
    IconCalendarMonth,
    IconFilePlus,
    IconHome2,
    IconPhoneRinging,
    IconAdjustments,
} from "@tabler/icons-react";
import {NavigateFunction, useNavigate} from "react-router-dom";

export const Header = () => {
    const navigate: NavigateFunction = useNavigate();

    return (
        <div style={{display: "flex", flexDirection: "column", height: "100%"}}>
            <div>
                <NavLink
                    onClick={() => navigate('/home')}
                    href="#required-for-focus"
                    label="Strona główna"
                    leftSection={<IconHome2 size="1.4rem" stroke={1.5}/>}
                    styles={{
                        label: {fontSize: "1.2rem", fontWeight: 550},
                    }}
                />
                <NavLink
                    onClick={() => navigate('/contact')}
                    href="#required-for-focus"
                    label="Kontakt"
                    leftSection={<IconPhoneRinging size="1.4rem" stroke={1.5}/>}
                    styles={{
                        label: {fontSize: "1.2rem", fontWeight: 550},
                    }}
                />
                <NavLink
                    onClick={() => navigate('/appointments')}
                    href="#required-for-focus"
                    label="Umów spotkanie"
                    leftSection={<IconCalendarMonth size="1.4rem" stroke={1.5}/>}
                    styles={{
                        label: {fontSize: "1.2rem", fontWeight: 550},
                    }}
                />
                <NavLink
                    onClick={() => navigate('/form')}
                    href="#required-for-focus"
                    label="Wypełnij formularz"
                    leftSection={<IconFilePlus size="1.4rem" stroke={1.5}/>}
                    styles={{
                        label: {fontSize: "1.2rem", fontWeight: 550},
                    }}
                />
            </div>

            <div style={{marginTop: "auto"}}>
                <NavLink
                    onClick={() => navigate('/admin')}
                    href="#required-for-focus"
                    label="Administrator"
                    leftSection={<IconAdjustments size="1.4rem" stroke={1.5}/>}
                    styles={{
                        label: {fontSize: "1rem", fontWeight: 550},
                    }}
                />
            </div>
        </div>
    );
};
