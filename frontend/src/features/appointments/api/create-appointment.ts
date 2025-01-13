import {API_URL} from "../../../config.ts";

export const createAppointment = async (appointmentData: { name: string; email: string; date: Date }) => {
    try {
        console.log("Sending appointment data:", appointmentData);

        const response = await fetch(`${API_URL}/appointments`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: appointmentData.name,
                email: appointmentData.email,
                date: appointmentData.date.toISOString(),
            }),
        });

        console.log("Request body:", JSON.stringify({
            name: appointmentData.name,
            email: appointmentData.email,
            date: appointmentData.date.toISOString(),
        }));

        if (!response.ok) {
            const errorData = await response.json();
            console.error("Error response from server:", errorData);
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        return response;
    } catch (error) {
        console.error("Error during API call:", error);
        throw error;
    }
};
