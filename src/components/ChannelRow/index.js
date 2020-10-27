import "./channel-row.css";
import PropTypes from "prop-types";
import { Avatar } from "@material-ui/core";
import VerifiedIcon from "@material-ui/icons/CheckCircleOutlineOutlined";

export default function ChannelRow({
  image,
  channel,
  subs,
  noOfVideos,
  description,
  verified,
}) {
  return (
    <div className="channel-row">
      <Avatar className="channel-row-logo" alt={channel} src={image} />
      <div className="channel-row-text">
        <h4>
          {channel} {verified && <VerifiedIcon />}
        </h4>
        <p>
          {subs} subscribers - {noOfVideos} videos
        </p>
        <p>{description}</p>
      </div>
    </div>
  );
}

ChannelRow.propTypes = {
  image: PropTypes.string.isRequired,
  channel: PropTypes.string.isRequired,
  subs: PropTypes.string.isRequired,
  noOfVideos: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  verified: PropTypes.bool.isRequired,
};
