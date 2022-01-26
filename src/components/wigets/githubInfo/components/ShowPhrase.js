import { useState, useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";

const ShowPhrase = () => {
    const [phrase, setStatePhrase] = useState('initial');

    useEffect(() => {
        fetch('https://api.github.com/zen')
            .then(response => response.text())
            .then(res => setStatePhrase(res))
    }, []);

    return (
        <View style = {{width: '100%'}}>
            <Text style = {styles.phrase}>{`"${phrase}"`}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    phrase: {
        fontSize: 14,
        textAlign: 'center'
    },
})

export default ShowPhrase