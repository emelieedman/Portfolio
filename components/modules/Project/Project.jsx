import styles from './Project.scss';

const Project = ({title, paragraph}) => {
  return (
    <div>
      <h3 className={styles.title}>{title}</h3>
      <p>{paragraph}</p>
    </div>
  );
};

export default Project;
