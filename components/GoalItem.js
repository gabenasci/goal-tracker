import { StyleSheet, View, Text, Pressable } from 'react-native';

function GoalItem(props) {
  
  // function deleteGoalHandler() {
  //   props.onDeleteItem(props.id)
  // }
  // instead of declaring the above function, and changing the onPress function
  // to deleteGoalHandler - we can pass the function onDeleteItem argument (id)
  // via .bind -> .bind() first parameter is this, and second parameter is the argument 
  return (
    <Pressable onPress={props.onDeleteItem.bind(this, props.id)}>
      <View style={styles.goalItem}>  
        <Text style={styles.goalText}> {props.text} </Text>
      </View>
    </Pressable>
  )
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 6,
    padding: 8,
    backgroundColor: "#2200e2",
    borderRadius: 6,
  },
  goalText: {
    color: "white", // STYLES ARE NOT INHERITED,
    //so we create style just for text
  },
});