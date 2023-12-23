import image from "../assests/photo-grid.png";

const Hero = () => {
  return (
    <hero className="hero">
      <img src={image} alt="" className="hero-image" />
      <div className="texts">
        <h1 className="header">Online Experiences</h1>
        <p className="para">
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home.
        </p>
      </div>
    </hero>
  );
};

export default Hero;
