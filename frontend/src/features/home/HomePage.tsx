import {Container, Text, Paper, Divider, Anchor, Timeline, Grid} from "@mantine/core";
import {
    IconBrandFacebook,
    IconBrandInstagram,
    IconBrandLinkedin,
    IconBrandX,
    IconBrandTiktok, IconBuilding, IconChartBar, IconAward, IconUsers,
} from "@tabler/icons-react";
import './HomePage.css';

export const HomePage = () => {
    return (
        <div style={{padding: "20px"}}>
            <Container size="lg">
                <Paper shadow="xs" className="paper">
                    <Text className="title-text">
                        Witaj w Media Masters!
                    </Text>

                    <Divider my="lg"/>

                    <Text className="justify-text" style={{lineHeight: 1.8}}>
                        Jesteśmy agencją marketingową Social Media, która w kreatywny i profesjonalny sposób przeniesie
                        Twoją markę do świata Mediów Społecznościowych. Naszą misją jest wspieranie firm w osiąganiu
                        pełnego potencjału oraz rozgłosu w internecie. 🔥
                    </Text>

                    <Divider my="lg"/>

                    <Text className="paper-text" style={{ fontWeight: "bold", fontSize: "20px", marginBottom: "10px" }}>
                        Oferujemy:
                    </Text>
                    <br/>
                    <Grid gutter="lg">
                        <Grid.Col span={6}>
                            <Text>✅ Prowadzenie mediów społecznościowych</Text>
                            <Text>📈 Odpowiednia strategia i analiza wyników</Text>
                            <Text>🎨 Tworzenie profesjonalnych grafik i wideo</Text>
                        </Grid.Col>
                        <Grid.Col span={6}>
                            <Text>✍️ Moderacja profilu i dbanie o wizerunek marki</Text>
                            <Text>🔥 Tworzenie viralowych i angażujących treści</Text>
                            <Text>🥊 Analiza rynku i konkurencji</Text>
                        </Grid.Col>
                    </Grid>
                    <br/>
                    <Divider my="lg"/>

                    <Text className="paper-text" style={{ fontWeight: "bold", fontSize: "20px", marginBottom: "20px" }}>
                        Dlaczego warto zadbać o profesjonalne tworzenie oraz kreowanie marki w mediach społecznościowych?
                    </Text>
                    <br/>

                    <div style={{ padding: "20px", backgroundColor: "#f9f9f9", borderRadius: "10px" }}>
                        <Grid gutter="lg">
                            <Grid.Col>
                                <div style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                                    <Text style={{ fontSize: "24px" }}>🤝</Text>
                                    <div>
                                        <Text style={{ fontWeight: "bold" }}>Przyciąganie nowych klientów</Text>
                                        <Text c="dimmed">
                                            Dzięki regularnym i angażującym treściom, zainteresujemy nowych oraz dopasowanych klientów poprzez media społecznościowe.
                                        </Text>
                                    </div>
                                </div>
                            </Grid.Col>

                            <Grid.Col >
                                <div style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                                    <Text style={{ fontSize: "24px" }}>💎</Text>
                                    <div>
                                        <Text style={{ fontWeight: "bold" }}>Profesjonalny wizerunek w sieci</Text>
                                        <Text c="dimmed">
                                            Nasze usługi sprawią, że komunikacja wizualna będzie spójna i estetyczna, a nowi i obecni klienci zbudują większą więź z firmą.
                                        </Text>
                                    </div>
                                </div>
                            </Grid.Col>

                            <Grid.Col >
                                <div style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                                    <Text style={{ fontSize: "24px" }}>⌛</Text>
                                    <div>
                                        <Text style={{ fontWeight: "bold" }}>Oszczędność czasu</Text>
                                        <Text c="dimmed">
                                            Skupiasz się na swoim biznesie, my tworzymy markę oraz reklamę Twojej firmy w mediach społecznościowych.
                                        </Text>
                                    </div>
                                </div>
                            </Grid.Col>

                            <Grid.Col>
                                <div style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                                    <Text style={{ fontSize: "24px" }}>📢</Text>
                                    <div>
                                        <Text style={{ fontWeight: "bold" }}>Kampanie reklamowe</Text>
                                        <Text c="dimmed">
                                            Skutecznie poprowadzimy kampanie reklamowe w social mediach.
                                        </Text>
                                    </div>
                                </div>
                            </Grid.Col>
                        </Grid>
                    </div>


                    <Divider my="lg"/>
                    <Text className="paper-text" style={{ fontWeight: "bold", fontSize: "20px", marginBottom: "20px" }}>
                        Co udało nam się już osiągnąć? <br/>
                    </Text>
                    <br/>
                    <Timeline active={1} bulletSize={24} lineWidth={2}>
                        <Timeline.Item bullet={<IconBuilding size={12}/>} title="Reklamy dla firm">
                            <Text c="dimmed" size="sm">
                                Wykreowaliśmy reklamy dla następujących firm:{" "}
                                <Text variant="link" component="span" inherit>
                                    Rebel, Disney+, Egmont, Next Film, Multikino, Cinema City, SkyShowtime, Polsat Box
                                    Go, Znak, Paramount Network, deagostini, Dom Wydawniczy Rebis, MANDO
                                </Text>
                            </Text>

                        </Timeline.Item>

                        <Timeline.Item bullet={<IconChartBar size={12}/>} title="Konta tematyczne">
                            <Text c="dimmed" size="sm">
                                Prowadziliśmy konta o tematyce: biznesowej, samoROZWOJOWEJ, rozrywkowej, naukowej oraz
                                newsowej, m.in.:
                                <Text variant="link" component="span" inherit> ciekawostki_o_filmach, straszne_historie,
                                    historie.sukcesu, moviesroom.pl</Text>
                            </Text>
                        </Timeline.Item>

                        <Timeline.Item bullet={<IconAward size={12}/>} title="Uzyskane wyniki">
                            <Text c="dimmed" size="sm">
                                Dzięki odpowiednim strategiom udało nam się uzyskać:
                                <Text variant="link" component="span" inherit> milionowe zasięgi, zwiększenie
                                    zaangażowania odbiorców na wszystkich prowadzonych kontach.</Text>
                            </Text>
                        </Timeline.Item>

                        <Timeline.Item title="Zebrane statystyki" bullet={<IconUsers size={12}/>} lineVariant="dashed">
                            <Text c="dimmed" size="sm">
                                Na wszystkich prowadzonych kontach zebraliśmy:
                                <Text variant="link" component="span" inherit> ponad 100 milionów wyświetleń
                                    postów</Text> oraz
                                <Text variant="link" component="span" inherit> ponad 200 000 obserwujących.</Text>
                            </Text>
                        </Timeline.Item>
                    </Timeline> <br/>

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
                <br/>
            </Container>
        </div>
    );
};
