import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { routeKeys } from "../../config";
import Friends from "./friends";
import { getListOfFriends } from "../../api";
import { userState } from "../../states";

const { getId } = userState.selectors;

const getUserFriends = async id => {
  return await getListOfFriends(id);
};

const mapStateToProps = () => {
  return createStructuredSelector({
    id: getId
  });
};

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const { id } = stateProps;
  const { dispatch } = dispatchProps;
  const { navigation } = ownProps;

  let friends;
  try {
    friends = getUserFriends(id);
  } catch (err) {
    console.error(err);
  }

  return {
    ...stateProps,
    ...ownProps,
    goToFriendProfilePage: friendId => {
      navigation.navigate(routeKeys.FriendsProfile, {
        isAFriend: true,
        friendId
      });
    },
    friends
  };
};

export default connect(mapStateToProps, null, mergeProps)(Friends);
