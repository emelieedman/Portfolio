import styles from './Collage.scss';

const Collage = ({title, project, project2, project3, project4, project5}) => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>{title}</h1>
      <h2 className={styles.project}>{project}</h2>
      <h2 className={styles.project}>{project2}</h2>
      <h2 className={styles.project}>{project3}</h2>
      <h2 className={styles.project}>{project4}</h2>
      <h2 className={styles.project}>{project5}</h2>
    </div>
  );
};

export default Collage;
