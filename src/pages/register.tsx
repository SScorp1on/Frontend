import {
	TextInput,
	PasswordInput,
	Anchor,
	Paper,
	Title,
	Text,
	Container,
	Button,
} from "@mantine/core";
import { useDocumentTitle } from "@mantine/hooks";
import { useNavigate } from "react-router-dom";

export default function Register() {
	useDocumentTitle(`Register`);
	const navigate = useNavigate();

	const toLogin = () => {
		navigate(`/login`);
	};

	return (
		<Container size={420} my={40}>
			<Title
				align="center"
				sx={theme => ({
					fontFamily: `Greycliff CF, ${theme.fontFamily}`,
					fontWeight: 900,
				})}
			>
				Привет!
			</Title>
			<Text color="dimmed" size="sm" align="center" mt={5}>
				Уже есть аккаунт?{` `}
				<Anchor<`a`> href="#" size="sm" onClick={toLogin}>
					Войти
				</Anchor>
			</Text>

			<Paper withBorder shadow="md" p={30} mt={30} radius="md">
				<TextInput label="Почта" placeholder="твоя@почта.рф" required />
				<PasswordInput
					label="Пароль"
					placeholder="Твой пароль"
					required
					mt="md"
				/>
				<Button fullWidth mt="xl">
					Регистрация
				</Button>
			</Paper>
		</Container>
	);
}
