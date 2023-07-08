import "./Dish.css";

export default function Dish({ name, imgSrc, price, qty, resName }) {
  console.log(resName);
  return (
    <div className="dish">
      <div>
        <img src={imgSrc} alt={name} className="dish-img" />
      </div>
      <div className="dish-info">
        <h3>{name}</h3>
        <span>
          Rs {price} for {qty}
        </span>
        <span>{resName}</span>
      </div>
    </div>
  );
}
