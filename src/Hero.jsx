import heroImg from "./assets/hero.svg";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt ab
            fugit qui nesciunt adipisci saepe velit, ut esse eius molestias, rem
            maxime officia nam error porro consequuntur aliquam. Rem at iusto
            qui quis, eaque reiciendis optio cum labore deleniti libero
            suscipit! Sapiente quam reiciendis molestias suscipit ut aliquam
            consequuntur ea?
          </p>
        </div>
        <div className="img-container">
            <img src={heroImg} alt="woman and rhe browser" className="img" />
        </div>
      </div>
    </section>
  );
};
export default Hero;
