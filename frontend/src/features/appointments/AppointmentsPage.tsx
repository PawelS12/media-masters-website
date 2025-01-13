import { Divider, Paper, Text, Input, Button } from "@mantine/core";
import {DateInput} from '@mantine/dates';
import './AppointmentsPage.css';
import '@mantine/dates/styles.css';
import { useAppointmentsForm } from "./hooks/useAppointmentsForm.ts";
import { IconAt, IconUser } from "@tabler/icons-react";

export const AppointmentsPage = () => {
    const { appFormValues, handleChange, handleSubmit, errors, successMessage } = useAppointmentsForm();

    return (
        <div>
            <Paper shadow="xs" className="paper">
                <Text className="title-text">
                    Umów się na spotkanie!
                </Text>
                <Divider my="lg" />
                <Text className="text-2">
                    Jeżeli zależy Ci na dokładnym przedstawieniu swoich wymagań, umów się z nami na spotkanie
                    online.<br/>
                    Zaznacz odpowiadający Ci termin w kalendarzu i zaplanuj spotkanie. Potwierdzenie daty oraz
                    dostępne <br/> godziny spotkania
                    dostaniesz od nas w ciągu paru godzin poprzez adres email.
                </Text>

                <Divider my="lg" />

                <Text className="paper-text" style={{ fontWeight: "bold" }}>
                    Wybierz datę spotkania <br /> <br />
                </Text>

                <div className="datetime-picker-container">
                    <DateInput
                        clearable
                        value={appFormValues.date}
                        onChange={(value) => handleChange("date", value || new Date())}
                        placeholder="Wybierz datę i godzinę"
                    />
                    {errors.date && <Text c="red" size="sm">{errors.date}</Text>}
                </div>
                <br />

                <Divider my="lg" />

                <Text className="paper-text" style={{ fontWeight: "bold" }}>
                    Wypełnij pola potrzebnymi danymi
                </Text> <br />

                <Input
                    value={appFormValues.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    placeholder="Imię"
                    leftSection={<IconUser size={16} />}
                />
                {errors.name && <Text c="red" size="sm">{errors.name}</Text>}

                <br />

                <Input
                    value={appFormValues.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    placeholder="Email"
                    leftSection={<IconAt size={16} />}
                />
                {errors.email && <Text c="red" size="sm">{errors.email}</Text>}

                <Divider my="lg" />

                <br />
                <Text className="paper-text" style={{ fontWeight: "bold" }}>
                    Wyślij zgłoszenie
                </Text> <br />

                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Button color="#0500ff" onClick={handleSubmit}>
                        Wyślij
                    </Button>
                </div>
                <br /><br />
                {successMessage && (
                    <Text c="#0500ff" size="sm" mt="md">
                        {successMessage}
                    </Text>
                )}
            </Paper>
        </div>
    );
};
