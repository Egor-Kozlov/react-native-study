import { Text, View, StyleSheet, TextInput } from "react-native";
import { useState, useEffect } from "react";


const ShowUser = () => {
    const [userName, setStateUserName] = useState(null);
    const [inputUserName, setStateInputUserName] = useState(null);
    const [userInfo, setStateUserInfo] = useState(null);

    return (
        <View>
            <Text>{userName ? userName: 'Write GitHub user name:'}</Text>
            {userInfo ? userName : <TextInput 
                onChangeText={setStateInputUserName}
                value={inputUserName}
                style = {styles.textInput} 
                placeholder = "GitHub user name"
            />}
        </View>
    )
}

const styles = StyleSheet.create({
    textInput: {
        width: '70%',
        height: 25,
        borderWidth: 1,
        borderColor: '#000000',
        backgroundColor: '#e6e6e6'
    }
})

export default ShowUser