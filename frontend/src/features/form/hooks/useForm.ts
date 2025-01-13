import {useState} from "react";
import {FormValues} from "../../../types/FormValues.ts";
import {API_URL} from "../../../config.ts";

interface FormErrors {
    name?: string;
    email?: string;
    socialMediaPresence?: string;
    socialMediaDetails?: string;
    industry?: string;
    contentIdeas?: string;
    goals?: string;
    additionalQuestions?: string;
}

export const useForm = () => {
    const [formValues, setFormValues] = useState<FormValues>({
        name: '',
        email: '',
        socialMediaPresence: '',
        socialMediaDetails: '',
        industry: '',
        contentIdeas: '',
        goals: '',
        additionalQuestions: '',
    });

    const [successMessage, setSuccessMessage] = useState<string | null>(null); // New state for success message
    const [errors, setErrors] = useState<FormErrors>({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (field: keyof FormValues, value: FormValues[keyof FormValues]) => {
        setFormValues((prevValues) => ({
            ...prevValues,
            [field]: value,
        }));
    };

    const validateForm = (): boolean => {
        const newErrors: FormErrors = {};

        if (!formValues.name) {
            newErrors.name = "Imię jest wymagane!";
        } else if (formValues.name.length < 3) {
            newErrors.name = "Imię musi składać się z co najmniej 3 znaków.";
        } else if (/\d/.test(formValues.name)) {
            newErrors.name = "Imię nie może zawierać cyfr!";
        }

        if (!formValues.email) {
            newErrors.email = "Email jest wymagane!";
        } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
            newErrors.email = "Podaj poprawny adres email!";
        }

        if (!formValues.socialMediaPresence) {
            newErrors.socialMediaPresence = 'Wybór odpowiedzi na pytanie o media społecznościowe jest wymagany!';
        }

        if (formValues.socialMediaPresence === 'Tak' && !formValues.socialMediaDetails) {
            newErrors.socialMediaDetails = 'Jeśli prowadzisz media społecznościowe, musisz podać szczegóły!';
        }

        if (!formValues.industry) {
            newErrors.industry = 'Opis branży jest wymagany!';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async () => {
        if (validateForm()) {
            setIsSubmitting(true);

            try {
                const response = await fetch(`${API_URL}/forms`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formValues),
                });

                if (response.status === 200 || response.status === 201) {
                    console.log('Form submitted successfully!');
                    const responseData = await response.json();
                    console.log('Server response:', responseData);

                    setSuccessMessage('Formularz został pomyślnie przesłany! Dziękujemy!');
                } else {
                    const errorText = await response.text();
                    console.log('Form submission failed with status:', response.status);
                    console.log('Error message:', errorText);
                    setSuccessMessage("Wystąpił błąd podczas zapisywania spotkania. Spróbuj ponownie.");
                }
            } catch (error) {
                console.error('Error during form submission:', error);
                setSuccessMessage("Wystąpił błąd. Prosimy spróbować ponownie.");
            } finally {
                setIsSubmitting(false);
            }
        } else {
            console.log('Formularz zawiera błędy:', errors);
        }
    };

    return {formValues, handleChange, handleSubmit, errors, isSubmitting, successMessage};
}