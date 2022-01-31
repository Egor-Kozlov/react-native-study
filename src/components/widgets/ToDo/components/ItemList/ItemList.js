import { View, Text, FlatList, ScrollView } from "react-native";
import Item from "../Item/Item";
import styles from "./styles";

const ItemList = ({ toDoList, deleteListItem, changeCardStatus }) => {
  const renderItem = ({ item }) => (
    <Item
      title={item.title}
      id={item._id}
      status={item.status}
      deleteListItem={deleteListItem}
      changeCardStatus={changeCardStatus}
    />
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
};

export default ItemList;
