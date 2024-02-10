import styles from './ContactsListItem.module.scss';

export const Name = ({ children }) => {
  return <h3 className={styles.name}>{children}</h3>;
};

export const Item = ({ children }) => {
  return <li className={styles.item}>{children}</li>;
};

export const Number = ({ children }) => {
  return <span className={styles.number}>{children}</span>;
};
