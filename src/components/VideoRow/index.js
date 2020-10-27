import "./video-row.css";
import PropTypes from "prop-types";

export default function VideoRow({
  views,
  subs,
  description,
  timestamp,
  channel,
  title,
  image,
}) {
  return (
    <div className="video-row">
      <img src={image} alt="" />
      <div className="video-row-text">
        <h3>{title}</h3>
        <p className="video-row-headline">
          {channel} •{" "}
          <span className="video-row-subs">
            <span className="video-row-subs-number">{subs}</span>
            Subscribers{" "}
          </span>
          {views} views * {timestamp}
        </p>
        <p className="video-row-description">{description}</p>
      </div>
    </div>
  );
}

VideoRow.propTypes = {
  views: PropTypes.string.isRequired,
  subs: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  timestamp: PropTypes.string.isRequired,
  channel: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};
