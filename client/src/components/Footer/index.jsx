import styles from './styles.module.scss';
import { FaFacebook, FaInstagram } from '../../assets';
import { Link } from 'react-router-dom';

export const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.left}>
      <h1 className={styles.footerTitle}>GLOSSÁRIO DE LIBRAS</h1>
      <p className={styles.description}>
        Criado em Julho de 2022, nosso website foi criado a partir de um projeto
        da faculdade, com o objetivo de ensinar Libras especificamente aos
        alunos dos cursos de Administração, Pedagogia e Tecnologia, ajudando com
        palavras- chaves que serão abordadas durante a graduação.
      </p>
      <div className={styles.socialContainer}>
        <div className={styles.socialIcon}>
          <FaFacebook size={40} />
        </div>
        <div className={styles.socialIcon}>
          <FaInstagram size={40} />
        </div>
      </div>
    </div>
    <div className={styles.center}>
      <h3 className={styles.linksTitle}>Links Úteis</h3>
      <ul className={styles.list}>
        <Link to="/aprender" className={styles.listItem}>
          <li>Home</li>
        </Link>
        <li className={styles.listItem}>O que é Libras?</li>
        <Link to="/historias" className={styles.listItem}>
          <li>Histórias</li>
        </Link>
        <li className={styles.listItem}>Libras ou LIBRAS?</li>
        <Link to="/sinais" className={styles.listItem}>
          <li>Sinais</li>
        </Link>
        <li className={styles.listItem}>Recomendações</li>
        <li className={styles.listItem}>Parceiros</li>
      </ul>
    </div>
    <div className={styles.right}>
      <a href="https://www.handtalk.me/br" target={'_blank'}>
        <img
          src="https://www.amigodosurdo.com/images/selos/selo-amigo-do-surdo-branco-redondo-hugo.png"
          alt="Hugo faz o sinal de positivo. Em cima dele, o texto: Site amigo do surdo"
        ></img>
      </a>
    </div>
  </footer>
);
