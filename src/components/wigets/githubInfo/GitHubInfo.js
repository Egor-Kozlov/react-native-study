import { useState } from "react";
import { View, Text, StyleSheet, TextInput  } from "react-native"
import { backgroundColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";
import getUserInfo from "./request"

const GitHubInfo = (props) => {
    const [userName, setStateUserName] = useState(null);

    return (
        <View style = {styles.widget}>
            <Text>{props.widgetTitle}</Text>
            <TextInput 
                onChangeText={setStateUserName}
                value={userName}
                style = {styles.textInput} 
                placeholder = "Write GitHub user name"
            />
        </View>  
    )
}

const styles = StyleSheet.create({
    widget: {
        width: '100%',
        backgroundColor: '#6121b5'
    },
    textInput: {
        width: '80%',
        height: 25,
        borderWidth: 1,
        borderColor: '#000000',
        backgroundColor: '#e6e6e6'
    }
})

export default GitHubInfo