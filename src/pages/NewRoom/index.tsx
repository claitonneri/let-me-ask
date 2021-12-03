import { Link } from 'react-router-dom';

import logoImg from '../../assets/images/logo.svg';
import illustrationImg from '../../assets/images/illustration.svg';

import Button from '../../components/Button';

import { Container, Aside, Main, Wrapper } from './styles';

const NewRoom: React.FC = () => {
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

          <h2>Criar uma nova sala</h2>

          <form>
            <input type="text" placeholder="Digite o código da sala" />
            <Button>Criar sala</Button>
          </form>

          <p>
            Quer entrar em uma sala já existente?{' '}
            <Link to="/">Clique aqui</Link>
          </p>
        </Wrapper>
      </Main>
    </Container>
  );
};

export default NewRoom;
