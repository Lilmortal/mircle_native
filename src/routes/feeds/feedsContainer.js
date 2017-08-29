import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import Feeds from "./feeds";
import { userState } from "../../states";

const { getFeeds } = userState.selectors;

const mapStateToProps = () => {
  return createStructuredSelector({
    feeds: getFeeds
  });
};

export default connect(mapStateToProps)(Friends);
