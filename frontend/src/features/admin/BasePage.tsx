import { useEffect, useState } from "react";
import {Divider, Paper, Text, Tabs, Grid, Card, Button} from "@mantine/core";
import { FormValues } from "../../types/FormValues.ts";
import { AppointmentsFormValues } from "../../types/AppointmentsFormValues.ts";
import {fetchAppointments, fetchForms} from "./api/appointments-forms.ts";
import {IconCalendar} from "@tabler/icons-react";

export const BasePage = () => {
    const [forms, setForms] = useState<FormValues[]>([]);
    const [appointments, setAppointments] = useState<AppointmentsFormValues[]>([]);

    useEffect(() => {
        const loadData = async () => {
            try {
                const formsData = await fetchForms();
                setForms(formsData);

                const appointmentsData = await fetchAppointments();
                setAppointments(appointmentsData);
            } catch (error) {
                console.error("Błąd podczas ładowania danych:", error);
            }
        };

        loadData();
    }, []);

    const generateTextFile = () => {
        let content = "Baza danych\n\n";

        content += "Formularze:\n";
        forms.forEach((form, index) => {
            content += `${index + 1}. ${form.name}\n`;
            content += `Email: ${form.email}\n`;
            content += `Media: ${form.socialMediaPresence ? "Tak" : "Nie"}\n`;
            content += `Branża: ${form.industry}\n`;
            content += `Pomysły: ${form.contentIdeas}\n`;
            content += `Cele: ${form.goals}\n`;
            content += `Pytania: ${form.additionalQuestions}\n\n`;
        });

        content += "Spotkania:\n";
        appointments.forEach((appointment, index) => {
            content += `${index + 1}. ${appointment.name}\n`;
            content += `Email: ${appointment.email}\n`;
            content += `Data: ${new Date(appointment.date).toLocaleDateString()}\n\n`;
        });

        const blob = new Blob([content], { type: "text/plain" });
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = "dane_mm.txt";
        link.click();
    };

    return (
        <div>
            <Paper shadow="xs" className="paper" style={{padding: "20px", marginRight: "250px"}}>
                <Divider my="lg"/>

                <Text size="lg" w={500} mt="md" c="#0500ff" style={{textAlign: "left", fontWeight: "bold"}}>
                    Baza danych
                </Text>
                <br/>

                <Tabs defaultValue="form">
                    <Tabs.List>
                        <Tabs.Tab value="form">Formularze</Tabs.Tab>
                        <Tabs.Tab value="appointments">Spotkania</Tabs.Tab>
                    </Tabs.List>

                    <Tabs.Panel value="form" pt="xs">
                        <Grid>
                            {forms.map((form) => (
                                <Grid.Col span={4} key={form.id}>
                                    <Card shadow="sm" p="lg" radius="md" withBorder>
                                        <Text size="sm" w={500} style={{color: '#0500ff'}}>
                                            {form.name}
                                        </Text>
                                        <Text size="xs" color="dimmed">{form.email}</Text>
                                        <Divider my="sm"/>
                                        <Text
                                            size="sm"><strong>Media:</strong> {form.socialMediaPresence ? 'Tak' : 'Nie'}
                                        </Text>
                                        <Text size="sm"><strong>Branża:</strong> {form.industry}</Text>
                                        <Text size="sm"><strong>Pomysły:</strong> {form.contentIdeas}</Text>
                                        <Text size="sm"><strong>Cele:</strong> {form.goals}</Text>
                                        <Text size="sm"><strong>Pytania:</strong> {form.additionalQuestions}
                                        </Text>
                                        <Divider my="sm"/>
                                    </Card>
                                </Grid.Col>
                            ))}
                        </Grid>
                    </Tabs.Panel>

                    <Tabs.Panel value="appointments" pt="xs">
                        <Grid>
                            {appointments.map((appointment) => (
                                <Grid.Col span={4} key={appointment.id}>
                                    <Card shadow="sm" p="lg" radius="md" withBorder>
                                        <Text size="sm" w={500} style={{color: '#0500ff'}}>
                                            {appointment.name}
                                        </Text>
                                        <Text size="xs" c="dimmed">{appointment.email}</Text>
                                        <Text size="sm" c="dimmed">
                                            <IconCalendar
                                                size={16}/> {new Date(appointment.date).toLocaleDateString()}
                                        </Text>
                                    </Card>
                                </Grid.Col>
                            ))}
                        </Grid>
                    </Tabs.Panel>
                </Tabs>

                <br />
                <Button variant="outline" onClick={generateTextFile} style={{ marginTop: "20px" }}>
                    Pobierz .txt
                </Button>

                <br />
                <Divider my="lg" />
            </Paper>
        </div>
    );
};