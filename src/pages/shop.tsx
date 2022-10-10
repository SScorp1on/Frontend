import React, {useEffect, useState} from "react";
import {AppShell, Button, Group, Header, Footer, Grid} from "@mantine/core";
import {useNavigate} from "react-router-dom";
import User from "../components/user";
import {Login, X} from "tabler-icons-react";
import {createBackendContext, updateTokens} from "../context/axios.context";
import BuyFramework from "../components/shop/buyFramework";
import {useDocumentTitle} from "@mantine/hooks";
import BuySofle from "../components/shop/buySofle";
import BuyLily from "../components/shop/buyLily";

interface UserInterface {
	username: string;
	email: string;
	avatar: string;
}

export default function ShopPage() {
	useDocumentTitle(`Магазин`);

	const navigate = useNavigate();

	const [user, setUser] = useState<null | UserInterface>(null);
	const [userLoading, setUserLoading] = useState(false);

	const toLogin = () => {
		navigate(`/login`);
	};

	const updateUser = async () => {
		setUserLoading(true);
		const userCtx = createBackendContext();
		return await userCtx.get(`user`)
			.then(r => {
				const u: UserInterface = r.data;
				setUser(u);
				setUserLoading(false);
				return true;
			})
			.catch(e => {
				setUser(null);
				setUserLoading(false);
				return false;
			});
	};

	useEffect(() => {
		updateUser().then(s => {
			if (!s) {
				updateTokens().then(_s => {
					if (_s) {
						updateUser().then();
					}
				});
			}
		});
	}, []);

	return (
		<AppShell
			navbarOffsetBreakpoint="sm"
			asideOffsetBreakpoint="sm"
			header={
				<Header height={70}>
					<Group position={`right`}>
						<Group style={{marginRight: `5px`}} position={`right`}>
							{user ? (
								<>
									<User
										username={user.username}
										email={user.email}
										avatar={user.avatar}
										setUserLoading={setUserLoading}
									/>
								</>
							) : (
								<>
									<Button
										onClick={toLogin}
										leftIcon={<Login/>}
										variant="outline"
										radius="md"
										size="sm"
										uppercase
										loading={userLoading}
										sx={{marginTop: `15px`, marginRight: `15px`}}
									>
										Войти
									</Button>
								</>
							)}
						</Group>
					</Group>
				</Header>
			}
			footer={
				<Footer height={60}>
					<Group sx={{marginTop: 13, marginLeft: 13}} position={`center`} align={`center`}>
						<Button variant={`outline`}>Доставка</Button>
						<Button variant={`outline`}>Контакты</Button>
						<Button variant={`outline`}>Вакансии</Button>
						<Button variant={`outline`}>Возврат</Button>
					</Group>
				</Footer>
			}
		>
			<Group position="apart" align={`top`}>
				<BuyFramework />
				<BuySofle />
				<BuyLily />
			</Group>
		</AppShell>
	);
}