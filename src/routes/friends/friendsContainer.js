import { Alert } from "react-native";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { routeKeys } from "../../config";
import Friends from "./friends";
import { getListOfFriends, getUserById } from "../../api";
import { userState, friendState } from "../../states";

const { POPULATE_FRIEND_STATE } = friendState.actions;
const { getId } = userState.selectors;

const mapStateToProps = () => {
  return createStructuredSelector({
    id: getId
  });
};

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const { id } = stateProps;
  const { dispatch } = dispatchProps;
  const { navigation } = ownProps;

  return {
    ...stateProps,
    ...ownProps,
    goToFriendProfilePage: async friendId => {
      try {
        const friend = await getUserById(friendId);
        dispatch(POPULATE_FRIEND_STATE(friend));
        navigation.navigate(routeKeys.FriendsProfile);
      } catch (err) {
        Alert.alert(
          "Attempting to populate friends profile failed.",
          err.toString()
        );
      }
    },
    getListOfFriends: async () => {
      let friends;
      try {
        friends = await getListOfFriends(id);
      } catch (err) {
        Alert.alert(
          "Attempting to get your list of friends failed.",
          err.toString()
        );
      }
      return friends;
    }
  };
};

export default connect(mapStateToProps, null, mergeProps)(Friends);
