import {Divider, Paper, Text, Anchor} from "@mantine/core";
import './ContactPage.css';
import {useNavigate} from 'react-router-dom';
import {
    IconBrandFacebook,
    IconBrandInstagram,
    IconBrandLinkedin,
    IconBrandTiktok,
    IconBrandX,
    IconChevronsRight
} from "@tabler/icons-react";

export const ContactPage = () => {
    const navigate = useNavigate();
    return (
        <div>
            <Paper shadow="xs" className="paper">
                <Text className="title-text">
                    Skontaktuj się z nami!
                </Text>
                <Divider my="lg"/>

                <Text className="text-2">
                    Abyśmy mogli lepiej dopasować ofertę do Twoich wymagań możesz również wypełnić
                    krótki <br/> formularz znajdujący się w zakładce{" "}
                    <span
                        onClick={() => navigate('/form')}
                        className="highlighted-link"
                    >
                        Wypełnij formularz
                    </span>.
                </Text>

                <Divider my="lg"/>
                <br/> <br/>
                <div className="contact-info">
                    <div className="contact-item">
                        <Anchor href="mailto:kontakt.mastersofmedia@gmail.com">
                            <IconChevronsRight size={24} className="icon"/> email@gmail.com
                        </Anchor>
                    </div>

                    <div className="contact-item">
                        <Anchor href="tel:+48500073091">
                            <IconChevronsRight size={24} className="icon"/> 123 123 123
                        </Anchor>
                    </div>
                </div>
                <br/> <br/>
                <Divider my="lg"/>
                <br/>
                <div className="social-icons">
                    <Anchor href="https://www.instagram.com/mediamasters_pl/" target="_blank">
                        <IconBrandInstagram size={32} className="icon"/>
                    </Anchor>
                    <Anchor href="https://www.linkedin.com/company/mediamasterspolska/" target="_blank">
                        <IconBrandLinkedin size={32} className="icon"/>
                    </Anchor>
                    <Anchor href="https://www.facebook.com/profile.php?id=61561504961562" target="_blank">
                        <IconBrandFacebook size={32} className="icon"/>
                    </Anchor>
                    <Anchor href="https://x.com/mediamasterspl" target="_blank">
                        <IconBrandX size={32} className="icon"/>
                    </Anchor>
                    <Anchor href="https://www.tiktok.com/@mediamasters_pl" target="_blank">
                        <IconBrandTiktok size={32} className="icon"/>
                    </Anchor>
                </div>
                <br/> <br/>
            </Paper>
        </div>
    );
};