import styles from "./styles.module.scss";
import { FaFacebook, FaInstagram } from "../../assets";
import { Link } from "react-router-dom";

export const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.container}>
      <section className={styles.section}>
        <h3 className={styles.title}>GLOSSÁRIO DE LIBRAS</h3>
        <p className={styles.description}>
          Criado em julho de 2022, nosso website foi desenvolvido a partir de um
          projeto entre alunos do Centro Universitário Cesuca em Cachoeirinha,
          RS, com o objetivo de ensinar libras especificamente para os alunos
          dos cursos de tecnologia, administração e pedagogia, auxiliando na
          compreensão de palavras chaves que serão abordadas durante a
          graduação.
        </p>
      </section>
      <section className={styles.section}>
        <h3 className={styles.title}>Links Úteis</h3>
        <div className={styles.list_container}>
          <ul className={styles.list}>
            <li>
              <Link to="/aprender" className={styles.link}>
                Aprender
              </Link>
            </li>
            <li>
              <Link to="/historias" className={styles.link}>
                Histórias
              </Link>
            </li>
            <li>
              <Link to="/sinais" className={styles.link}>
                Sinais
              </Link>
            </li>
          </ul>
          <ul className={styles.list}>
            <li>
              <Link to="/" className={styles.link}>
                O que é Libras?
              </Link>
            </li>
            <li>
              <Link to="/" className={styles.link}>
                Recomendações
              </Link>
            </li>
            <li>
              <Link to="/" className={styles.link}>
                Parceiros
              </Link>
            </li>
          </ul>
        </div>
      </section>
      <section className={styles.section}>
        <div className={styles.stamp_container}>
          <a href="https://www.handtalk.me/br" target="_blank">
            <img
              src="https://www.amigodosurdo.com/images/selos/selo-amigo-do-surdo-branco-redondo-hugo.png"
              alt="Hugo faz o sinal de positivo. Acima dele, o texto: site amigo do surdo"
            />
          </a>
        </div>
      </section>
    </div>
  </footer>
);
