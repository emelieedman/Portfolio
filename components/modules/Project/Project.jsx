import styles from './Project.scss';

const Project = ({
  title,
  subtitle,
  paragraph,
  image,
  subtitle2,
  paragraph2,
  image2,
  subtitle3,
  paragraph3,
  image3,
  subtitle4,
  paragraph4,
  image4
}) => {
  console.log(title);
  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>{title}</h3>

      <h4 className={styles.subtitle}>{subtitle}</h4>
      <p className={styles.paragraph}>{paragraph}</p>
      <img className={styles.image} src={image} alt=""></img>

      <h4 className={styles.subtitle2}>{subtitle2}</h4>
      <p className={styles.paragraph2}>{paragraph2}</p>
      <img className={styles.image2} src={image2} alt=""></img>

      <h4 className={styles.subtitle3}>{subtitle3}</h4>
      <p className={styles.paragraph3}>{paragraph3}</p>
      <img className={styles.image3} src={image3} alt=""></img>

      <h4 className={styles.subtitle4}>{subtitle4}</h4>
      <p className={styles.paragraph4}>{paragraph4}</p>
      <img className={styles.image4} src={image4} alt=""></img>
    </div>
  );
};

export default Project;
