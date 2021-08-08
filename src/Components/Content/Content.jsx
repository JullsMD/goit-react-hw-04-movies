import styles from './Content.module.css';

const Content = ({ children }) => {
  return <section className={styles.Content}>{children}</section>;
};
export default Content;
