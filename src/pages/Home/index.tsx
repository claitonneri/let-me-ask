/* eslint-disable react/button-has-type */
import { useHistory } from 'react-router-dom';

import logoImg from '../../assets/images/logo.svg';
import googleIconImg from '../../assets/images/google-icon.svg';
import illustrationImg from '../../assets/images/illustration.svg';

import Button from '../../components/Button';

import { useAuth } from '../../hooks/auth';

import { Container, Aside, Main, Wrapper } from './styles';

const Home: React.FC = () => {
  const history = useHistory();
  const { signIn, user } = useAuth();

  async function handleCreateRoom() {
    if (!user) {
      await signIn();
    }

    history.push('/rooms/new');
  }

  return (
    <Container>
      <Aside>
        <img
          src={illustrationImg}
          alt="Ilustração simbolizando perguntas e respostas"
        />
        <strong>Toda pergunta tem uma resposta.</strong>
        <p>Aprenda e compartilhe conhecimento com outras pessoas</p>
      </Aside>
      <Main>
        <Wrapper>
          <img src={logoImg} alt="Letmeask" />
          <button onClick={handleCreateRoom}>
            <img src={googleIconImg} alt="Logo do Google" />
            Crie sua sala com Google
          </button>
          <div>ou entre em uma sala</div>
          <form>
            <input type="text" placeholder="Digite o código da sala" />
            <Button>Entrar na sala</Button>
          </form>
        </Wrapper>
      </Main>
    </Container>
  );
};

export default Home;
