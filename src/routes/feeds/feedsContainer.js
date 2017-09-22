import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import Feeds from "./feeds";
import { getFeeds } from "../../api";
import { userState } from "../../states";

const { UPDATE_FEEDS } = userState.actions;
const { getId, getFeeds } = userState.selectors;

const mapStateToProps = () => {
  return createStructuredSelector({
    id: getId,
    feeds: getFeeds
  });
};

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const { id } = stateProps;
  const { dispatch } = dispatchProps;

  // TODO: have a try/catch to display error message and add loading
  return {
    ...ownProps,
    ...stateProps,
    populateFeeds: async () => {
      try {
        const feeds = await getFeeds(id);
        dispatch(UPDATE_FEEDS(feeds));
      } catch (err) {
        Alert.alert("Attempting to get feeds failed.", err.toString());
      }
    }
  };
};

export default connect(mapStateToProps, null, mergeProps)(Feeds);
