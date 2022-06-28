import { Container } from "./Home.styles";
import C4LLogo from '../../assets/images/C4LLogo'
import InstagramLogoThin from '../../assets/images/InstagramLogoThin'
import WhatsAppLogo from '../../assets/images/WhatsAppLogo'
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
        <InstagramLogoThin />
        <WhatsAppLogo />
        <YoutubeLogo />
      </div>
    </Container>
  );
}

export default Home;
