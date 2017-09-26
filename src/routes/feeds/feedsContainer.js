import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import Feeds from "./feeds";
import { getFeeds as getFeedsApi } from "../../api";
import { userState } from "../../states";

const { UPDATE_FEEDS } = userState.actions;
const { getId, getFeeds } = userState.selectors;

const mapStateToProps = () => {
  return createStructuredSelector({
    id: getId,
    feeds: getFeeds
  });
};

export default connect(mapStateToProps)(Feeds);
