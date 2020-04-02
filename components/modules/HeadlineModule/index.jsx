import styles from './index.scss';

const HeadlineModule = ({
  title,
  subtitle,
  button,
  backgroundColor,
  color,
  changeColor,
  changeBackgroundColor,
  changeSingleColor
}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.box} style={backgroundColor}></div>
      <h1 className={styles.title} style={color}>
        {title}
      </h1>
      <h2 className={styles.subtitle} style={color}>
        {subtitle}
      </h2>
      <button
        className={styles.button}
        style={backgroundColor}
        onClick={() => {
          changeColor();
          changeBackgroundColor();
          changeSingleColor();
        }}
      >
        {button}
      </button>
    </div>
  );
};

export default HeadlineModule;
