import styles from "../styles/Presentation.module.css";

const Presentation = () => {
  return (
    <div className={styles.full_frame}>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/n61M4-OYRSc"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default Presentation;
