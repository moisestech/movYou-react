import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";
import ChannelRow from "../ChannelRow";
import VideoRow from "../VideoRow";
import "./search-page.css";

export default function SearchPage() {
  return (
    <div className="search-page">
      <div className="search-page-filter">
        <TuneOutlinedIcon />
        <h2>Filter</h2>
      </div>
      <hr />
      <ChannelRow
        image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.Jbm7P8PO0ABnbo4P0G8hdwHaE2%26pid%3DApi&f=1"
        channel="Clever Programmer"
        verified
        subs="659K"
        noOfVideos={382}
        description="You can find awesome programming lessons here! Also, expect programming tips and tricks that will take your coding sskills to the ..."
      />

      <hr />
      <VideoRow
        views="1.4M"
        subs="659K"
        description="Do you want a FREE one"
        timestamp="59 seconds ago"
        channel="Clever Programmer"
        title="Let's Build a YouTube Clone"
        image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.Jbm7P8PO0ABnbo4P0G8hdwHaE2%26pid%3DApi&f=1"
      />
      <VideoRow
        views="1.4M"
        subs="659K"
        description="Do you want a FREE one"
        timestamp="59 seconds ago"
        channel="Clever Programmer"
        title="Let's Build a YouTube Clone"
        image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.Jbm7P8PO0ABnbo4P0G8hdwHaE2%26pid%3DApi&f=1"
      />
      <VideoRow
        views="1.4M"
        subs="659K"
        description="Do you want a FREE one"
        timestamp="59 seconds ago"
        channel="Clever Programmer"
        title="Let's Build a YouTube Clone"
        image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.Jbm7P8PO0ABnbo4P0G8hdwHaE2%26pid%3DApi&f=1"
      />
      <VideoRow
        views="1.4M"
        subs="659K"
        description="Do you want a FREE one"
        timestamp="59 seconds ago"
        channel="Clever Programmer"
        title="Let's Build a YouTube Clone"
        image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.Jbm7P8PO0ABnbo4P0G8hdwHaE2%26pid%3DApi&f=1"
      />
      <VideoRow
        views="1.4M"
        subs="659K"
        description="Do you want a FREE one"
        timestamp="59 seconds ago"
        channel="Clever Programmer"
        title="Let's Build a YouTube Clone"
        image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.Jbm7P8PO0ABnbo4P0G8hdwHaE2%26pid%3DApi&f=1"
      />
    </div>
  );
}
