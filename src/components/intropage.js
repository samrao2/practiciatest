import React, { Component } from 'react';
import {
    View,
     Text,
     Image
   } from 'react-native';
   import {
     Divider,
     Button
   } from 'react-native-elements';
   import styles from './styles';


class IntroScreen extends Component {
  static navigationOptions = {
    title: 'PRACTICIA'
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
<View style={{ backgroundColor: 'white', flex: 1 }}>
<Image
style={{ flex: 7 / 8, height: undefined, width: undefined }}
resizeMode="contain" source={require('../../images/practicialogo.png')}
/>
<Text style={styles.textStyle}>Sign up as a...</Text>
<Divider style={{ height: 10, backgroundColor: 'white' }} />
        <Button
        raised
        backgroundColor="#3399ff"
        borderRadius={20}
          onPress={() => navigate('Teacher')}
          title="TEACHER"
        />
        <Divider style={{ height: 10, backgroundColor: 'white' }} />

        <Button
        raised
        backgroundColor="green"
        borderRadius={20}
          onPress={() => navigate('Parent')}
          title="PARENT"
        />
        <Divider style={{ height: 10, backgroundColor: 'white' }} />

        <Button
        raised
        backgroundColor="brown"
        borderRadius={20}
          onPress={() => navigate('Student')}
          title="ADULT STUDENT (18+)"
        />
        <Text style={styles.text2Style}>Already Registered?</Text>
        <Button
        raised
        flex='2'
        backgroundColor="grey"
        borderRadius={20}
          onPress={() => navigate('Login')}
          title="Login"
        />
      </View>
    );
  }
}
export default IntroScreen;
