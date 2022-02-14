import { Text, View, TextInput, Button, ActivityIndicator } from "react-native";
import { useState } from "react";
import styles from "./style";

const InputSearchUser = ({ setStateInputUserName, inputUserName, errorResponse, getGitHubUser }) => {
  const [loadingIndicator, setLoadingIndicator] = useState(false);

  return (
    <View>
      <Text style={styles.hintText}>Write GitHub user name:</Text>
      <TextInput
        onChangeText={setStateInputUserName}
        onSubmitEditing={() => getGitHubUser(inputUserName)}
        value={inputUserName}
        style={[styles.textInput, errorResponse ? styles.textInputRed : styles.textInputBlack]}
        placeholder="GitHub user name"
      />
      {errorResponse ? <Text style={styles.errorMessage}>User doesn't exist</Text> : null}
      {loadingIndicator ? (
        <View style={styles.containerActivityIndicator}>
          <ActivityIndicator />
        </View>
      ) : null}
      <Button
        onPress={() => {
          getGitHubUser(inputUserName);
          setLoadingIndicator(true);
        }}
        color="#438ef7"
        title="Search"
      />
    </View>
  );
};

export default InputSearchUser;
