import React from "react";
import KeyboardPage from "../../components/shop/keyboardPage";
import {Space, Stack, Text} from "@mantine/core";

const description = () => (
	<Stack style={{maxWidth: `840px`}}>
		<Text>
			<Text weight={700} color={`red`} span>Framework</Text> - ортогональная клавиатура.
			Она имеет 59 клавиш. Данное количество клавиш идеально подходит для учебы, работы и
			игры.
		</Text>
		<Space h={`sm`}/>
		<Text>
			Энкодер отлично справится с задачами, связанными с громкостью. Есть возможность
			сделать тише или громче, а также поставить или снять с паузы текущий трек.
		</Text>
		<Space h={`sm`}/>
		<Text>
			Если количества клавиш не хватит для поставленных задач, то имеется возможность
			использовать слои. Слои – это изменение значения всех кнопок с помощью специально
			назначенной клавиши. Настраивается данная функция в специальной программе, поэтому
			справится каждый.
		</Text>
		<Space h={`sm`}/>
		<Text>
			Эту возможность можно сравнить с цифровым рядом на обычной клавиатуре. При нажатии
			на цифру без шифта – отображается цифра. При нажатии на цифру с зажатым шифтом –
			отображается символ. Клавиатура Framework работает по такому же принципу,
			только данную функцию можно назначить на <Text color={`red`} span>любую </Text>
			клавишу, как и значение, которое будет отображаться по нажатию.
		</Text>
	</Stack>
);

const img = [
	{image: `https://github.com/stevennguyen/framework/blob/master/images/1.jpg?raw=true`},
	{image: `https://github.com/stevennguyen/framework/blob/master/images/2.jpg?raw=true`},
	{image: `https://github.com/stevennguyen/framework/blob/master/images/3.jpg?raw=true`},
	{image: `https://github.com/stevennguyen/framework/blob/master/images/4.jpg?raw=true`},
];

export default function FrameworkPage() {
	return (
		<KeyboardPage
			keyboardName={`Framework`}
			price={9999}
			description={description()}
			img={img}
			encoderAmount={1}
			connector={`Type-C`}
			wireless={false}
		    keyAmount={59}
		/>
	);
}
