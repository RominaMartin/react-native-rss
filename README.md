### RSS News: The Onion - React Native

This project was bootstrapped with [Create React Native App](https://github.com/react-community/create-react-native-app).

## Table of Contents

* [Project basics](#project-basics)
* [Used dependencies](#used-dependencies)
  * [Parser component](#parser-component)
  * [Navigation component](#navigation-component)

## Project basics
This is my very first React Native project!

This app connects to [The Onion](https://www.theonion.com) RSS feed and displays the latest news.

In order to get going you need to download the code, you can do that via pull, clone or just download the zip what suits you the best. Afterwards run `npm install` to get all the dependencies.

Once you have all the dependencies just run `npm start` and you'll be able to take a look!


## Used dependencies
All the dependencies are added to the `package.json` so in order to get them you just need to run `npm install`.

### Parser component

This component is called `react-native-xml2js`. It will parse the XML feed and convert it to an object. You can find it documentation [here](https://www.npmjs.com/package/react-native-xml2js).

The documentation doesn't show how to make the include without the require, it would be like this: 

`import {parseString} from 'react-native-xml2js'`

### Navigation component

This component is called `react-navigation`. It will make navigation easy, in a few basic steps it would be:

- Include the dependency
`import { StackNavigator } from 'react-navigation';`
- Create a StackNavigator, in this object you have to define the screens you want to include in the navigation. In this case it looks like this: 

```
const RootNavigator = StackNavigator({
  ItemList: {
    screen: ItemList,
    navigationOptions: {
        headerTitle: 'Home',
    }
  },
  Details: {
    screen: Detail,
    navigationOptions: {
        headerTitle: 'Detail',
    }
  }
});
```

- Next step would be to add the navigation rules we want like this:
 `navigate('Details', {item: item})`

 In this case we are sending information to the next screen, in order to get it you need to access to the navigation prop like this:

 `this.props.navigation.state.params.$YOUR_INFO`