import styled from "styled-components";

export const Container = styled.div`
	background-color: #444142;
	height: 100vh;
	width: 100vw;
	display: flex;
	justify-content: center;
	align-items: center;
	.c4l-logo {
		color: #f9b03f;
		height: 259px;
	}
	.youtube-logo {
		height: 40px;
		color: #ffffff;
		margin-top: 5px;
		margin-left: 2px;
	}
	.instagram-logo {
		height: 40px;
		color: #ffffff;
		margin-top: 5px;
	}
	.whatsapp-logo {
		margin-top: 5px;
		height: 40px;
		color: #ffffff;
	}
	.flex-column {
		display: flex;
		flex-direction: column;
	}
	.flex-row {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		padding: 0 50px 0 50px;
	}
	.greetings {
		font-size: 42px;
		font-family: "Poppins", sans-serif;
		color: #ffffff;
		font-weight: normal;
		text-align: center;
		margin: 40px 0 0 0;
	}
	.about {
		font-size: 26px;
		font-family: "Poppins", sans-serif;
		letter-spacing: 0.52px;
		font-weight: normal;
		color: #ffffff;
		text-align: center;
		margin: 0 0 0 0;
	}
	.soon {
		font-size: 26px;
		font-family: "Poppins", sans-serif;
		letter-spacing: 0.52px;
		font-weight: 600;
		color: #f9b03f;
		text-align: center;
		margin: 0 0 40px 0;
	}
	.rights {
		text-align: center;
		font-size: 12px;
		font-family: "Poppins", sans-serif;
		color: #ffffff;
		margin-top: 30px;
	}
`;

export const LogoContainer = styled.div`
	width: 73px;
	height: 73px;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 50%;
	background-color: #d49a2f;
`;
