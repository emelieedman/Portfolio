import styles from "./Collage.scss";

const Collage = ({ title, image1, image2, image3, image4, image5, image6, image7, image8, image9, image10}) => {
    return (
        <div className={styles.wrapper}>
            <h1 className={styles.title}>{title}</h1>
            <img className={styles.image1} src={image1} alt="" />
            <img className={styles.image2} src={image2} alt="" />
            {/* <img className={styles.image3} src={image3} alt="" />
            <img className={styles.image4} src={image4} alt="" />
            <img className={styles.image5} src={image5} alt="" />
            <img className={styles.image6} src={image6} alt="" />
            <img className={styles.image7} src={image7} alt="" />
            <img className={styles.image8} src={image8} alt="" />
            <img className={styles.image9} src={image9} alt="" />
            <img className={styles.image10} src={image10} alt="" /> */}
        </div>
    )
}


export default Collage;