import { Text, View, Button } from "react-native";
import styles from "./styles";

const ShortUserInfo = ({ userName, userInfo, openModal, resetUser }) => {
  return (
    <View>
      <Text style={styles.userName}>Current user: {userName}</Text>
      <View style={styles.userInfoContainer}>
        <Text>{`Based in ${userInfo.location}`}</Text>
        <Text>{`Count of public repos: ${userInfo.public_repos}`}</Text>
        <Text>{`Count of followers: ${userInfo.followers}`}</Text>
        <Text>{`Count of followings: ${userInfo.following}`}</Text>
        <Text onPress={openModal} style={styles.moreInfo}>
          More info...
        </Text>
      </View>
      <Button onPress={resetUser} color="#ab0000" title="Search a new user" />
    </View>
  );
};

export default ShortUserInfo;
