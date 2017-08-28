import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { routeKeys } from "../../config";
import Friends from "./friends";
import { getListOfFriends, getUserById } from "../../api";
import { userState, friendState } from "../../states";

const { POPULATE_FRIEND_STATE } = friendState.actions;
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
    goToFriendProfilePage: async friendId => {
      const friend = await getUserById(friendId);
      dispatch(POPULATE_FRIEND_STATE(friend));
      navigation.navigate(routeKeys.FriendsProfile);
    },
    friends
  };
};

export default connect(mapStateToProps, null, mergeProps)(Friends);
