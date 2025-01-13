import {FormValues} from "../../../types/FormValues.ts";
import {API_URL} from "../../../config.ts";
import {AppointmentsFormValues} from "../../../types/AppointmentsFormValues.ts";

export const fetchForms = async (): Promise<FormValues[]> => {
    try {
        const response = await fetch(`${API_URL}/forms`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include',
        });

        if (!response.ok) {
            throw new Error("Błąd podczas pobierania formularzy");
        }

        return response.json();
    } catch (error) {
        console.error("Błąd podczas pobierania formularzy:", error);
        throw error;
    }
};

export const fetchAppointments = async (): Promise<AppointmentsFormValues[]> => {
    try {
        const response = await fetch(`${API_URL}/appointments`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include',
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        return response.json();
    } catch (error) {
        console.error("Błąd podczas pobierania spotkań:", error);
        throw error;
    }
};
