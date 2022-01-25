import {StyleSheet, View } from "react-native";

const WidgetWrapper = (props) => {

    return (
        <View style = {styles.container}>
            {props.content}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        minHeight: 100,
        marginBottom: '5%',
        padding: '3%',
        backgroundColor: '#fcfcfc',
        borderRadius: 8,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    }
})

export default WidgetWrapper