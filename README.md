### RSS News: The Onion - React Native

This project was bootstrapped with [Create React Native App](https://github.com/react-community/create-react-native-app).

## Table of Contents

* [Project basics](#project-basics)
  * [You should know](#you-should-know)
* [Used dependencies](#used-dependencies)
  * [Parser component](#parser-component)
  * [Navigation component](#navigation-component)
* [About me](#about-me)

## Project basics
This is my very first React Native project!

This app connects to [The Onion](https://www.theonion.com) RSS feed and displays the latest news.

_[The Onion](https://www.theonion.com) is an American digital media company and news satire organization that publishes articles on international, national, and local news. The Onion's articles cover current events, both real and fictional, satirizing the tone and format of traditional news organizations with stories, editorials, op-ed pieces, and man-in-the-street interviews using a traditional news website layout and an editorial voice modeled after that of the Associated Press._ [Wikipedia page for more info](https://en.wikipedia.org/wiki/The_Onion)

### You should know
- In order to get going you need to download the code, you can do that via pull, clone or just download the zip what suits you the best. Afterwards run `npm install` to get all the dependencies. Once you have all the dependencies just run `npm start` and you'll be able to take a look!

- There's a pull to refresh included in the list, try it out!

## Used dependencies
All the dependencies are added to the `package.json` so in order to get them you just need to run `npm install`.

### Parser component

This component is called `react-native-xml2js`. It will parse the XML feed and convert it to an object. You can find full documentation [here](https://www.npmjs.com/package/react-native-xml2js).

The documentation doesn't show how to make the include without the require, it would be like this: 

`import {parseString} from 'react-native-xml2js'`

### Navigation component

This component is called `react-navigation`. It will make navigation easy. You can find full documentation [here](https://www.npmjs.com/package/react-navigation).

In a few basic steps it would be:

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
 
 
 ## About me
 
 Hello, I'm Romina and you can check my personal page [here](https://rominamartin.github.io/)
