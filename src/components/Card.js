import image from "../assests/katie-zaferes.png";
import rating from "../assests/star.png";

const Card = () => {
  const eventName = "Life lessons with Katie Zaferes";
  const price = 136;

  return (
    <div className="card-container">
      <img src={image} alt="" className="profile-pic" />
      <div className="avalibility">
        <p>SOLD OUT</p>
      </div>

      <div className="rating">
        <img src={rating} alt="" className="rating-icon" />
        <p>
          5.0 <span style={{ color: "#918E9B" }}>(6) USA</span>
        </p>
      </div>

      <p className="event-name">{eventName}</p>

      <p className="price">
        <strong>{`$ ${price}`}</strong>/person
      </p>
    </div>
  );
};

export default Card;
