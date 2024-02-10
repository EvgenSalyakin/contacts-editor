import Style from './Footer.module.css';

export const Footer = () => {
  return (
    <footer className={Style.footer}>
      <p className={Style.small}>
        Millions of developers use GitHub to build personal projects, support
        their businesses, and work together on open source technologies.
      </p>
      <a href="https://github.com/EvgenSalyakin">· My project on GitHub ·</a>
      <p>Copyleft (&#8580;) 2024 by Yevhenii Saliakin</p>
    </footer>
  );
};
