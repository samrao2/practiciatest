import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { StackNavigator } from 'react-navigation';
import {
  Button,
  FormLabel,
  FormInput,
  FormValidationMessage,
  Divider } from 'react-native-elements';

//import { Button } from './src/components/Button';
//import { CardSection } from './src/components/CardSection';


class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'PRACTICIA'
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
<View style={{ backgroundColor: 'white', flex: 1 }}>
<Divider style={{ height: 100, backgroundColor: 'white' }} />

<Text>Sign up as a...</Text>
<Divider style={{ height: 200, backgroundColor: 'white' }} />


        <Button
        raised
        backgroundColor="#3399ff"
        borderRadius='20'
          onPress={() => navigate('Teacher')}
          title="TEACHER"
        />
        <Divider style={{ height: 15, backgroundColor: 'white' }} />

        <Button
        raised
        backgroundColor="green"
        borderRadius='20'
          onPress={() => navigate('Parent')}
          title="PARENT"
        />
        <Divider style={{ height: 15, backgroundColor: 'white' }} />

        <Button
        raised
        backgroundColor="brown"
        borderRadius='20'
          onPress={() => navigate('Student')}
          title="ADULT STUDENT (18+)"
        />
      </View>
    );
  }
}

class TeacherSignUp extends React.Component {
  static navigationOptions = {
    title: 'TEACHER SIGN UP',
  };
  render() {
    return (
      <View style={{ backgroundColor: 'white', flex: 1 }}>
        <Text>Sign Up</Text>
        <FormLabel>Email</FormLabel>
        <FormInput />
        <FormLabel>Password</FormLabel>
        <FormInput />
        <FormLabel>First Name</FormLabel>
        <FormInput />
        <FormLabel>LastNme</FormLabel>
        <FormInput />
        <Divider style={{ height: 10, backgroundColor: 'white' }} />
        <Button
        raised
        backgroundColor="brown"
        borderRadius='0'
          // onPress={() => navigate()}
          title="SUBMIT"
        />
      </View>
    );
  }
}
class ParentSignUp extends React.Component {
  static navigationOptions = {
    title: 'PARENT SIGN UP',
  };
  render() {
    return (
      <View style={{ backgroundColor: 'white', flex: 1 }}>
        <Text>Sign Up</Text>
      </View>
    );
  }
}
class StudentSignUp extends React.Component {
  static navigationOptions = {
    title: 'ADULT STUDENT SIGN UP',
  };
  render() {
    return (
      <View style={{ backgroundColor: 'white', flex: 1 }}>
        <Text>Sign Up</Text>
      </View>
    );
  }
}


const SimpleApp = StackNavigator({
  Home: { screen: HomeScreen },
  Teacher: { screen: TeacherSignUp },
  Parent: { screen: ParentSignUp },
  Student: { screen: StudentSignUp }
});

export default class App extends React.Component {
  render() {
    return <SimpleApp />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

// import React from 'react';
// import { StyleSheet, Text, View, Button } from 'react-native';
// import { StackNavigator } from 'react-navigation';
//
// class HomeScreen extends React.Component {
//   static navigationOptions = {
//     title: 'WELCOME',
//     justify: 'center'
//   };
//   render() {
//     const { navigate } = this.props.navigation;
//     return (
//       <View>
//         <Text>Hello, Chat App!</Text>
//         <Button
//           onPress={() => navigate('Chat')}
//           title="Chat with Lucy"
//         />
//       </View>
//     );
//   }
// }
//
// const SimpleApp = StackNavigator({
//   Home: { screen: HomeScreen },
// //     Chat: { screen: ChatScreen },
// // });
//
// // class ChatScreen extends React.Component {
// //   static navigationOptions = {
// //     title: 'Chat with Lucy',
// //   };
// //   render() {
// //     return (
// //       <View>
// //         <Text>Chat with Lucy</Text>
// //       </View>
// //     );
// //   }
// // }
// //
// export default class App extends React.Component {
//   render() {
//     return <SimpleApp />;
//   }
// }
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center'
//   }
// });
