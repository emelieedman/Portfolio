import styles from './Collage.scss';

const Collage = ({
  title,
  project,
  project2,
  project3,
  project4,
  project5,
  singleColor
}) => {
  console.log(singleColor);
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>{title}</h1>
      <h2 className={styles.project} style={singleColor}>
        {project}
      </h2>
      <h2 className={styles.project2}>{project2}</h2>
      <h2 className={styles.project3}>{project3}</h2>
      <h2 className={styles.project4} style={singleColor}>
        {project4}
      </h2>
      <h2 className={styles.project5}>{project5}</h2>
    </div>
  );
};

export default Collage;
