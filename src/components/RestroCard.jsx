const RestroCard = (props) => {
  const { restroData } = props;

  const { name, costForTwo, avgRating, cuisines, cloudinaryImageId } = restroData.info;

  let imageURL;

  if (cloudinaryImageId) {
    imageURL =
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
      cloudinaryImageId;
  }
  return (
    <div className="restro-card">
      <img className="restro-logo" alt="restro-logo" src={imageURL} />
      <h3>{name}</h3>
      <h4>
        {
        cuisines?.join(", ")
        }
      </h4>
      <h4>Rating : {avgRating}</h4>
      <h4>{costForTwo}</h4>
    </div>
  );
};

export default RestroCard;