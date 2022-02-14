import { Text, View, TextInput, Button, ActivityIndicator } from "react-native";
import { useState } from "react";
import styles from "./style";

const InputSearchUser = ({loading, setStateInputUserName, inputUserName, errorResponse, getGitHubUser, onSumbt}) => {
  const searchInputRef = useRef()

  const search = useCallback(() => {
    onSumbt(searchInputRef.current.getValue())
  }, [])

  return (
    <View>
      <Text style={styles.hintText}>Write GitHub user name:</Text>
      <SearchInput ref={searchInputRef} doSeach={search} disabled={loading}/>
      {!!errorResponse ? <Text style={styles.errorMessage}>User doesn't exist</Text> : null}
      {loading && (
        <View style={styles.containerActivityIndicator}>
          <ActivityIndicator />
        </View>
      )}
      <Button
        onPress={() => {
          search()
          // ...
        }}
    disabled={loading}
        color="#438ef7"
        title="Search"
      />
    </View>
  );
};

export default InputSearchUser;

function SearchInput({doSeach, innerRef}) {
  const [query, setQuery] = useState("")
  const inputRef = useRef()

  useImperativeHandle(innerRef, {
    getValue: () => inputRef.current.e
  })

  return <TextInput
    ref={inputRef }
    onChangeText={setQuery}
    onSubmitEditing={doSeach}
    value={query}
    style={[styles.textInput, errorResponse ? styles.textInputRed : styles.textInputBlack]}
    placeholder="GitHub user name"
  />
}

export default React.forwardRef((props, ref) => <SearchInput {...props} innerRef={ref} />)
