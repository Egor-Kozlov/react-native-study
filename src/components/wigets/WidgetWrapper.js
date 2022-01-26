import {StyleSheet, View, Text } from "react-native";

const WidgetWrapper = ({children, title}) => {

    return (
        <View style = {styles.container}>
            <Text style = {styles.title}>{title}</Text>
            {children}
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
    },
    title: {
        fontSize: 15,
        marginBottom: '4%'
    }
})

export default WidgetWrapper