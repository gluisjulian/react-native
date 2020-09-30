import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

function AddTask(props) {
  const [text, setText] = useState('');

  function createTask() {
    props.route.params.createTask(text);
    props.navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon
          onPress={() => props.navigation.goBack()}
          name="arrow-back"
          color="#fff"
          size={45}
        />
        <Text style={styles.text}>Add new Tasks</Text>
      </View>
      <View style={styles.form}>
        <Text style={styles.text}>Task Description</Text>
        <TextInput
          style={styles.input}
          placeholder="Create the taks"
          maxLength={100}
          textAlignVertical="top"
          value={text}
          onChangeText={(value) => setText(value)}
        />
        <TouchableOpacity style={styles.button} onPress={() => createTask()}>
          <Text style={styles.buttonText}>Creat task</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default AddTask;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#a9a9a9',
    paddingTop: 40,
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 55,
  },
  text: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  form: {
    width: '100%',
    padding: 20,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  input: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    backgroundColor: '#fff',
    marginVertical: 20,
    fontSize: 24,
    fontWeight: 'bold',
  },
  button: {
    width: '100%',
    height: 70,
    borderRadius: 10,
    backgroundColor: '#fff',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});