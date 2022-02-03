import React from "react";
import { View, Text, FlatList, ScrollView } from "react-native";
import Item from "../Item/Item";
import styles from "./styles";

export default React.memo(function ItemList({
  toDoList,
  deleteListItem,
  changeCardStatus,
}) {
  const renderItem = ({ item }) => (
    console.log("renderList"),
    (
      <Item
        title={item.title}
        id={item._id}
        status={item.status}
        deleteListItem={deleteListItem}
        changeCardStatus={changeCardStatus}
      />
    )
  );

  const List = ({ title, objStatus }) => {
    const foundСards = toDoList
      .filter((objItem) => objItem.status === objStatus)
      .reverse();
    return (
      <View>
        <Text style={styles.statusTitle}>
          {title}
          <Text style={styles.countItems}>{` (${foundСards.length})`}</Text>
        </Text>
        <FlatList
          style={styles.statusContainer}
          data={foundСards}
          renderItem={renderItem}
          keyExtractor={(item) => item._id}
        ></FlatList>
      </View>
    );
  };

  return (
    <ScrollView horizontal={true} style={styles.listContainer}>
      <List title={"Active"} objStatus={"active"} />
      <List title={"Done"} objStatus={"done"} />
      <List title={"Deleted"} objStatus={"deleted"} />
    </ScrollView>
  );
});
