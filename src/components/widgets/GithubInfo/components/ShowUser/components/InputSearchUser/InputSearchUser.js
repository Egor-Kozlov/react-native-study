import { Text, View, TextInput, Button } from "react-native";
import styles from "./style";
const InputSearchUser = ({
  setStateInputUserName,
  inputUserName,
  errorResponse,
  getGitHubUser,
}) => {
  return (
    <View>
      <Text style={styles.hintText}>Write GitHub user name:</Text>
      <TextInput
        onChangeText={setStateInputUserName}
        value={inputUserName}
        style={[
          styles.textInput,
          errorResponse ? styles.textInputRed : styles.textInputBlack,
        ]}
        placeholder="GitHub user name"
      />
      {errorResponse ? (
        <Text style={styles.errorMessage}>User doesn't exist</Text>
      ) : null}
      <Button
        onPress={() => getGitHubUser(inputUserName)}
        color="#438ef7"
        title="Search"
      />
    </View>
  );
};

export default InputSearchUser;
