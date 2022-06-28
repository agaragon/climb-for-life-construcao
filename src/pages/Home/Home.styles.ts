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
	}
	.instagram-logo {
		height: 40px;
	}
	.whatsapp-logo {
		height: 40px;
	}
	.flex-column {
		display: flex;
		flex-direction: column;
	}
	.greetings {
		font-size: 42px;
		font-family: "Poppins", sans-serif;
		color: #ffffff;
		font-weight: normal;
	}
	.about {
		font-size: 26px;
		font-family: "Poppins", sans-serif;
		letter-spacing: 0.52px;
		font-weight: normal;
		text-align: center;
	}
	.soon {
		font-size: 26px;
		font-family: "Poppins", sans-serif;
		letter-spacing: 0.52px;
		font-weight: 600;
		color: #f9b03f;
	}
`;
