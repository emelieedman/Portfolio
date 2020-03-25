/* styles */
import style from './index.scss';

const HeadlineModule = ({ title, subtitle }) => {
	return (
	<div className={style.wrapper}>
		<div className={style.box}></div>
		<h1 className={style.title} data-content={title}>{title}</h1>
		<h2 className={style.subtitle}>{subtitle}</h2>
	</div>
	);
};

export default HeadlineModule;
