import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
// import { StackNavigator } from 'react-navigation';
// import {
//   Button,
//   FormLabel,
//   FormInput,
//   FormValidationMessage,
//   Divider } from 'react-native-elements';

//import { Button } from './src/components/Button';
//import { CardSection } from './src/components/CardSection';

import IntroScreen from './src/components/intropage';

export default class App extends Component {

  render() {
   return (
     <View>
    <IntroScreen />
    </View>
  );
 }
}

// class HomeScreen extends React.Component {
//   static navigationOptions = {
//     title: 'PRACTICIA'
//   };
//   render() {
//     const { navigate } = this.props.navigation;
//     return (
// <View style={{ backgroundColor: 'white', flex: 1 }}>
// <Image
// style={{ flex: 7 / 8, height: undefined, width: undefined }}
// resizeMode="contain" source={require('./images/practicialogo.png')}
// />
// <Text style={styles.textStyle}>Sign up as a...</Text>
// <Divider style={{ height: 10, backgroundColor: 'white' }} />
//         <Button
//         raised
//         backgroundColor="#3399ff"
//         borderRadius={20}
//           onPress={() => navigate('Teacher')}
//           title="TEACHER"
//         />
//         <Divider style={{ height: 10, backgroundColor: 'white' }} />
//
//         <Button
//         raised
//         backgroundColor="green"
//         borderRadius={20}
//           onPress={() => navigate('Parent')}
//           title="PARENT"
//         />
//         <Divider style={{ height: 10, backgroundColor: 'white' }} />
//
//         <Button
//         raised
//         backgroundColor="brown"
//         borderRadius={20}
//           onPress={() => navigate('Student')}
//           title="ADULT STUDENT (18+)"
//         />
//         <Text style={styles.text2Style}>Already Registered?</Text>
//         <Button
//         raised
//         flex='2'
//         backgroundColor="grey"
//         borderRadius={20}
//           onPress={() => navigate('Login')}
//           title="Login"
//         />
//       </View>
//     );
//   }
// }
//
// class TeacherSignUp extends React.Component {
//   static navigationOptions = {
//     title: 'TEACHER SIGN UP',
//   };
//   render() {
//     return (
//       <View style={{ backgroundColor: 'white', flex: 1 }}>
//       <Divider style={{ height: 20, backgroundColor: 'white' }} />
//         <Text style={styles.textStyle}>Sign Up</Text>
//         <FormLabel>Email</FormLabel>
//         <FormInput />
//         <FormLabel>Password</FormLabel>
//         <FormInput />
//         <FormLabel>First Name</FormLabel>
//         <FormInput />
//         <FormLabel>LastNme</FormLabel>
//         <FormInput />
//         <Divider style={{ height: 10, backgroundColor: 'white' }} />
//         <Button
//         raised
//         backgroundColor="brown"
//         borderRadius={0}
//           // onPress={() => navigate()}
//           title="SUBMIT"
//         />
//       </View>
//     );
//   }
// }
// class ParentSignUp extends React.Component {
//   static navigationOptions = {
//     title: 'PARENT SIGN UP',
//   };
//   render() {
//     return (
//       <View style={{ backgroundColor: 'white', flex: 1 }}>
//         <Text>Sign Up</Text>
//       </View>
//     );
//   }
// }
// class StudentSignUp extends React.Component {
//   static navigationOptions = {
//     title: 'ADULT STUDENT SIGN UP',
//   };
//   render() {
//     return (
//       <View style={{ backgroundColor: 'white', flex: 1 }}>
//         <Text>Sign Up</Text>
//       </View>
//     );
//   }
// }
//
// class Login extends React.Component {
//   static navigationOptions = {
//     title: 'LOGIN',
//   };
//   render() {
//     return (
//       <View style={{ backgroundColor: 'white', flex: 1 }}>
//       <FormLabel>Email/Username</FormLabel>
//       <FormInput />
//       <FormLabel>Password</FormLabel>
//       <FormInput />
//       <Divider style={{ height: 10, backgroundColor: 'white' }} />
//       <Button
//       raised
//       backgroundColor="grey"
//       borderRadius={0}
//         // onPress={() => navigate()}
//         title="SUBMIT"
//       />
//       </View>
//     );
//   }
// }
//
// const SimpleApp = StackNavigator({
//   Home: { screen: HomeScreen },
//   Teacher: { screen: TeacherSignUp },
//   Parent: { screen: ParentSignUp },
//   Student: { screen: StudentSignUp },
//   Login: { screen: Login },
//
// });
//
// export default class App extends React.Component {
//   render() {
//     return <SimpleApp />;
//   }
// }
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'white',
//     alignItems: 'center',
//     justifyContent: 'center'
//   },
//   textStyle: {
//     alignSelf: 'center',
//     color: '#617189',
//     fontSize: 20,
//     fontWeight: '600',
//     paddingTop: 10,
//     paddingBottom: 10
// },
// text2Style: {
//   alignSelf: 'center',
//   color: '#617189',
//   fontSize: 14,
//   fontWeight: '300',
//   paddingTop: 10,
//   paddingBottom: 10
// },
// titleText: {
//   fontSize: 20,
//   fontWeight: 'bold',
// },
// });
