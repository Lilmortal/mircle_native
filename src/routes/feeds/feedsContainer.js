import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import Feeds from "./feeds";
import { getFeeds } from "../../api";
import { userState } from "../../states";

const { getId } = userState.selectors;

const mapStateToProps = () => {
  return createStructuredSelector({
    id: getId
  });
};

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const { id } = stateProps;
  const { dispatch } = dispatchProps;

  // TODO: have a try/catch to display error message and add loading
  return {
    ...ownProps,
    ...stateProps,
    getFeeds: async () => {
      let feeds;
      try {
        feeds = await getFeeds(id);
      } catch (err) {
        Alert.alert("Attempting to get feeds failed.", err.toString());
      }
      return feeds;
    }
  };
};

export default connect(mapStateToProps, null, mergeProps)(Feeds);
