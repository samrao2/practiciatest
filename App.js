import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Button } from 'react-native-elements';

//import { Button } from './src/components/Button';
//import { CardSection } from './src/components/CardSection';


class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'WELCOME!'
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Image source={require('./practicialogo.PNG')} />
        <Text>Hello, Chat App!</Text>

        <Button
        raised
        backgroundColor="#3399ff"
        borderRadius="20"
          onPress={() => navigate('Chat', { user: 'Lucy' })}
          title="CHAT WITH LUCY"
        />
      </View>
    );
  }
}

class ChatScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: `Chat with ${navigation.state.params.user}`,
  });
  render() {
    const { params } = this.props.navigation.state;
    return (
      <View>
        <Text>Chat with {params.user}</Text>
      </View>
    );
  }
}


const SimpleApp = StackNavigator({
  Home: { screen: HomeScreen },
  Chat: { screen: ChatScreen }

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
