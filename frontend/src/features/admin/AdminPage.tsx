import {Divider, Paper, Text, TextInput, PasswordInput, Button} from "@mantine/core";
import {useForm} from "@mantine/form";
import {login} from "./api/login.ts";
import {useNavigate} from "react-router-dom";

type LoginFormType = {
    username: string;
    password: string;
}
export const AdminPage = () => {
    const navigate = useNavigate();

    const form = useForm<LoginFormType>({
        initialValues: {
            username: "",
            password: "",
        },
        validate: {
            username: (value) => (value ? null : "Login jest wymagany"),
            password: (value) => (value ? null : "Hasło jest wymagane"),
        },
    });

    const handleSubmit = async (data: LoginFormType) => {
        try {
            await login(data.username, data.password);
            navigate('/base');
        } catch (error) {
            console.error('Login failed', error);
        }
    }

    return (
        <div>
            <Paper shadow="xs" className="paper">
                <Text className="title-text">Logowanie dla administracji!</Text>
                <Divider my="lg" />

                <form onSubmit={form.onSubmit(handleSubmit)}>
                    <TextInput
                        label="Login"
                        placeholder="Wprowadź login"
                        {...form.getInputProps("username")}
                        required
                    />

                    <PasswordInput
                        label="Hasło"
                        placeholder="Wprowadź hasło"
                        {...form.getInputProps("password")}
                        required
                        style={{ marginTop: 10 }}
                    />

                    {form.errors.username && (
                        <Text c="red" size="sm" style={{ marginTop: 10 }}>
                            {form.errors.username}
                        </Text>
                    )}
                    {form.errors.password && (
                        <Text c="red" size="sm" style={{ marginTop: 10 }}>
                            {form.errors.password}
                        </Text>
                    )}

                    <br />
                    <br />

                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <Button type="submit" color="#0500ff">
                            Zaloguj
                        </Button>
                    </div>
                    <br />
                </form>
            </Paper>
        </div>
    );
};