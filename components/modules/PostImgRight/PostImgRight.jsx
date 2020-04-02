import styles from './PostImgRight.scss';

const Project = ({title, paragraph, image}) => {
  console.log(title);
  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.paragraph}>{paragraph}</p>
      <img className={styles.image} src={image} alt=""></img>
    </div>
  );
};

export default Project;
