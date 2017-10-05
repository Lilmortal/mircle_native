import { Alert } from "react-native";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { routeKeys } from "../../config";
import Friends from "./friends";
import { getListOfFriends, getUserById } from "../../api";
import { userState, friendState } from "../../states";

const { POPULATE_FRIEND_STATE } = friendState.actions;

const { UPDATE_FRIENDS } = userState.actions;
const { getId, getFriends } = userState.selectors;

const mapStateToProps = () => {
  return createStructuredSelector({
    id: getId,
    friends: getFriends,
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const { navigation } = ownProps;

  return {
    goToFriendProfilePage: async friendId => {
      try {
        const friend = await getUserById(friendId);
        dispatch(POPULATE_FRIEND_STATE(friend));
        navigation.navigate(routeKeys.FriendsProfile, {
          user: `${friend.firstName} ${friend.surname}`,
        });
      } catch (err) {
        Alert.alert(
          "Attempting to populate friends profile failed.",
          err.toString()
        );
      }
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Friends);
