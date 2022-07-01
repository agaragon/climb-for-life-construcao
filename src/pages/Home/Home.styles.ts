import styled from "styled-components";

export const Container = styled.div`
	height: 100vh;
	width: 100vw;
	display: flex;
	justify-content: center;
	align-items: center;
	.c4l-logo {
		color: #f9b03f;
		height: 259px;
	}
	@media screen and (max-width: 600px) {
		height: 100%;
		width: fit-content;
		block-size: fit-content;
		padding: 0 15px 0 10px;
		.c4l-logo {
			margin-top: 4rem;
			height: 10rem;
		}
	}
	@media screen and (max-width: 1000px) and (max-height: 600px) {
		height: 100%;
		width: fit-content;
		block-size: fit-content;
		padding: 0 15px 0 10px;
		.c4l-logo {
			margin-top: 4rem;
			height: 10rem;
		}
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
		justify-content: center;
	}
	.greetings {
		font-size: 42px;
		font-family: "Poppins", sans-serif;
		color: #ffffff;
		font-weight: normal;
		text-align: center;
		margin: 40px 0 0 0;
		line-height: 45px;
	}
	.about {
		font-size: 26px;
		font-family: "Poppins", sans-serif;
		letter-spacing: 0.52px;
		font-weight: 300;
		color: #ffffff;
		text-align: center;
		margin: 1rem 0 0 0;
		line-height: 34px;
	}
	.soon {
		font-size: 26px;
		font-family: "Poppins", sans-serif;
		letter-spacing: 0.52px;
		font-weight: 400;
		color: #f9b03f;
		text-align: center;
		margin: 0 0 40px 0;
		line-height: 34px;
	}
	.rights {
		text-align: center;
		font-size: 12px;
		font-family: "Poppins", sans-serif;
		color: #ffffff;
		margin-top: 30px;
	}
	@media screen and (min-width: 600px) {
		padding: 0 50px 0 50px;
	}
`;

export const LogoContainer = styled.div`
	width: 73px;
	height: 73px;
	margin: 0.5rem;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 50%;
	background-color: #d49a2f;
	@media screen and (min-width: 600px) {
		margin: 1rem;
	}
`;
