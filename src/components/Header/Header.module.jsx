import Styles from './Header.module.css';

export const Header = ({ title }) => {
  return (
    <header className={Styles.header}>
      <h1 className={Styles.page_title}>Yevhenii Saliakin</h1>
      <h3>{title}</h3>
      <a href="https://github.com/EvgenSalyakin">· My project on GitHub ·</a>
    </header>
  );
};
