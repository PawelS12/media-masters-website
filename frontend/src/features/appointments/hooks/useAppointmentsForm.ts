import { useState } from "react";
import { AppointmentsFormValues } from "../../../types/AppointmentsFormValues";
import { createAppointment } from "../api/create-appointment";

interface FormErrors {
    name?: string;
    email?: string;
    date?: string;
}

export const useAppointmentsForm = () => {
    const [appFormValues, setFormValues] = useState<AppointmentsFormValues>({
        name: "",
        email: "",
        date: new Date(),
    });

    const [errors, setErrors] = useState<FormErrors>({});
    const [successMessage, setSuccessMessage] = useState<string | null>(null);

    const validate = (): boolean => {
        const newErrors: FormErrors = {};

        if (!appFormValues.name) {
            newErrors.name = "Imię jest wymagane!";
        } else if (appFormValues.name.length < 3) {
            newErrors.name = "Imię musi składać się z co najmniej 3 znaków.";
        } else if (/\d/.test(appFormValues.name)) {
            newErrors.name = "Imię nie może zawierać cyfr!";
        }

        if (!appFormValues.email) {
            newErrors.email = "Email jest wymagany!";
        } else if (!/\S+@\S+\.\S+/.test(appFormValues.email)) {
            newErrors.email = "Podaj poprawny adres email!";
        }

        if (!appFormValues.date || isNaN(appFormValues.date.getTime()) || appFormValues.date < new Date()) {
            newErrors.date = "Wybierz datę spotkania, która nie jest przeszła!";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (field: keyof AppointmentsFormValues, value: AppointmentsFormValues[keyof AppointmentsFormValues]) => {
        setFormValues((prevValues) => ({
            ...prevValues,
            [field]: value,
        }));
    };

    const handleSubmit = async () => {
        if (!validate()) {
            console.log("Formularz zawiera błędy. Wysyłanie danych jest niemożliwe.");
            return;
        }

        try {
            const response = await createAppointment(appFormValues);

            if (response.status === 200 || response.status === 201) {
                console.log("Appointment created successfully!");
                setSuccessMessage("Twoje spotkanie zostało pomyślnie umówione! Oczekuj potwierdzenia email.");
            } else {
                const errorText = await response.json();
                console.log("Form submission failed with status:", response.status);
                console.log("Error message:", errorText);
                setSuccessMessage("Wystąpił błąd podczas zapisywania spotkania. Spróbuj ponownie.");
            }
        } catch (error) {
            console.error("Error during appointment submission:", error);
            setSuccessMessage("Wystąpił błąd. Prosimy spróbować ponownie.");
        }
    };

    return { appFormValues, handleChange, handleSubmit, errors, successMessage };
};
