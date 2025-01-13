import {Button, Divider, Fieldset, Paper, Select, Text, Textarea, TextInput} from "@mantine/core";
import {useForm} from "./hooks/useForm.ts";

export const FormPage = () => {
    const {formValues, handleChange, handleSubmit, errors, isSubmitting, successMessage} = useForm();

    return (
        <div>
            <Paper shadow="xs" className="paper">
                <Text className="title-text">
                    Wypełnij krótki formularz!
                </Text> <br/>

                <Divider my="lg"/>
                <Text className="paper-text" style={{fontWeight: "bold"}}>
                    Dziękujemy za zainteresowanie naszą ofertą! <br/> <br/>
                </Text>
                <Text className="text-2">
                    Abyśmy mogli lepiej zrozumieć Twoje potrzeby i wycenić usługę budowania Twojej marki w mediach
                    społecznościowych, <br/>prosimy o wypełnienie poniższego krótkiego formularza. Zajmie to tylko
                    kilka minut, a pozwoli nam stworzyć spersonaliz- <br/> owaną ofertę, która najlepiej odpowiada Twoim oczekiwaniom.
                    Zależy nam na tym, aby każda współpraca przynosiła wym- <br/>ierne korzyści i była wyjątkowa.
                    Dołącz do grona zadowolonych klientów Media Masters i wspólnie zbudujmy sukces Twojej <br/>marki
                    online!
                </Text>

                <Divider my="lg"/>
                <br/>
                <Fieldset legend="Informacje osobiste">
                    <TextInput
                        label="Twoje imię"
                        placeholder="Imię"
                        size="sm"
                        value={formValues.name}
                        onChange={(e) => handleChange('name', e.target.value)}
                    />
                    {errors.name && <Text c="red" size="sm">{errors.name}</Text>}

                    <TextInput
                        label="Twój adres email"
                        placeholder="Email"
                        mt="sm"
                        value={formValues.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                    />
                    {errors.email && <Text c="red" size="sm">{errors.email}</Text>}
                </Fieldset>
                <br/> <br/>

                <Select
                    label="1. Czy prowadzisz już media społecznościowe swojej marki?"
                    placeholder="Wybierz"
                    data={['Tak', 'Nie']}
                    value={formValues.socialMediaPresence || ''}
                    onChange={(value) => handleChange('socialMediaPresence', value || '')}
                />
                {errors.socialMediaPresence && <Text c="red" size="sm">{errors.socialMediaPresence}</Text>}
                <br/>

                <Textarea
                    label="1.1 Jeśli TAK, podaj ich nazwę oraz platformę. Jeśli NIE, pomiń ten podpunkt."
                    placeholder="Twoja odpowiedź"
                    autosize
                    minRows={2}
                    value={formValues.socialMediaDetails}
                    onChange={(e) => handleChange('socialMediaDetails', e.target.value)}
                />
                {errors.socialMediaDetails && <Text c="red" size="sm">{errors.socialMediaDetails}</Text>}

                <br/>
                <Textarea
                    label=" 2. Opisz w jakiej dziedzinie/branży działasz i czym dokładnie się zajmujesz."
                    placeholder="Twoja odpowiedź"
                    autosize
                    minRows={2}
                    value={formValues.industry}
                    onChange={(e) => handleChange('industry', e.target.value)}
                />
                {errors.industry && <Text c="red" size="sm">{errors.industry}</Text>}

                <br/>
                <Textarea
                    label=" 3. Czy masz jakieś konkretne pomysły, uwagi bądź wymagania co do prowadzenia kont np. ilość postów czy rodzaj publikowanej treści?"
                    placeholder="Twoja odpowiedź"
                    autosize
                    minRows={2}
                    value={formValues.contentIdeas}
                    onChange={(e) => handleChange('contentIdeas', e.target.value)}
                />

                <br/>

                <Textarea
                    label="4. Jaki ma być cel prowadzenia przez nas mediów społecznościowych Twojej firmy?"
                    placeholder="Twoja odpowiedź"
                    autosize
                    minRows={2}
                    value={formValues.goals}
                    onChange={(e) => handleChange('goals', e.target.value)}
                />
                <br/>

                <Textarea
                    label="5. Miejsce na dodatkowe pytania lub uwagi."
                    placeholder="Twoja odpowiedź"
                    autosize
                    minRows={2}
                    value={formValues.additionalQuestions}
                    onChange={(e) => handleChange('additionalQuestions', e.target.value)}
                />
                <br/>
                <Divider my="lg"/>
                <br/>
                <Text className="paper-text" style={{fontWeight: "bold"}}>
                    Dziękujemy za wypełnienie ankiety! <br/> <br/>
                </Text>
                <Text className="text-2">
                    Prześlij formularz, a wkrótce zgłosimy się do Ciebie z naszymi pomysłami.
                    Pozdrawiamy, ekipa Media Masters.
                </Text>
                <br/>

                <Divider my="lg"/>

                <Text className="paper-text" style={{fontWeight: "bold"}}>
                    Wyślij ankietę
                </Text> <br/>

                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <Button color="#0500ff" onClick={handleSubmit} disabled={isSubmitting}>
                        {isSubmitting ? 'Wysyłanie...' : 'Wyślij'}
                    </Button>
                </div>
                <br/><br/>

                {successMessage && (
                    <Text c="#0500ff" size="sm" mt="md">
                        {successMessage}
                    </Text>
                )}
            </Paper>
        </div>
    );
};
