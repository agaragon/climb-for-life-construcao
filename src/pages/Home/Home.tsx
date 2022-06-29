import { Container, LogoContainer } from "./Home.styles";
import C4LLogo from '../../assets/images/C4LLogo'
import WhatsAppLogo from '../../assets/images/WhatsAppLogo'
import InstagramLogoThin from '../../assets/images/InstagramLogoThin'
import YoutubeLogo from '../../assets/images/YoutubeLogo'
function Home()
{
  return (
    <Container>
      <div className="flex-column">
        <C4LLogo />
        <p className="greetings">Olá, agradecemos sua visita!</p>
        <p className="about">Somos uma escola de desenvolvimento humano.</p>
        <p className="soon">Em breve nosso site estará no ar.</p>
        <div className="flex-row">
          <LogoContainer>
            <a target="_blank" href="https://www.instagram.com/climb4life/" rel="noreferrer">
              <InstagramLogoThin />
            </a>
          </LogoContainer>
          <LogoContainer>
            <a target="_blank" href="https://wa.me/554891434318" rel="noreferrer">
              <WhatsAppLogo />
            </a>
          </LogoContainer>
          <LogoContainer>
            <a target="_blank" href="https://www.youtube.com/c/Climb4Life" rel="noreferrer">
              <YoutubeLogo />
            </a>
          </LogoContainer>
        </div>
        <p className="rights">@Todos os direitos reservados</p>
      </div>
    </Container>
  );
}

export default Home;
