import PropTypes from "prop-types";

export default function VideoCard({
  image,
  title,
  channel,
  views,
  timestamp,
  channelImage,
}) {
  return (
    <div className="video-card">
      <img className="video-card-thumbnail" src={image} alt="" />
      <div className="vide-card-info">
        <Avatar
          className="video-card-avatar"
          alt={channel}
          src={channelImage}
        />
        <div className="video-card-text">
          <h4>{title}</h4>
          <p>
            {views} • {timestamp}
          </p>
        </div>
      </div>
    </div>
  );
}

VideoCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  channel: PropTypes.string.isRequired,
  views: PropTypes.string.isRequired,
  timestamp: PropTypes.string.isRequired,
  channelImage: PropTypes.string.isRequired,
};
