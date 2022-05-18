import styles from "./landing-page.module.css";
export const LandingPage = () => {
  return (
    <>
      <div className={styles.landing_page_wrapper}>
        <section className={styles.hero_text_section}>
          <div className={styles.logo_container}>
            <h1>SayIt</h1>
            <small>Just say it.</small>
          </div>
        </section>
        <section className={styles.hero_img_section}>
          <img src="assets/social-hero.svg" className="img-responsive" alt="hero" />
        </section>
      </div>
    </>
  );
};
