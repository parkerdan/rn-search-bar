# RN-Search-Bar
<br>
### Uses `react-native-vector-icons/FontAwesome` as the icon source.
<br>
##### You must have `react-native-vector-icons` installed and linked for this to work
<br>  

* `npm install react-native-vector-icons --save`
* `react-native link react-native-vector-icons`
* `npm install rn-search-bar --save`

<br>
![Example One](./SearchExTwo.png "Two Icons")

![Example One](./SearchExOne.png "Two Icons")

### Props

| Prop | Type | Description | Required |
| ---  | ---  | ---         | ---      |
| containerStyle | object | styles applied to the search bar container | **YES** |
| onChange | function | function called when text input changes | **YES** |
| textStyle | object | styles applied to the text input | no |
| clearTextOnPress | boolean | clear the text when the search button is pressed | no |
| renderLeftIcon | boolean | render the left side search icon | no |
| leftIconColor | string | color of the left | no |
| leftIconSize | number | size of the left icon | no |
| renderSearchIcon | boolean | render the search icon on the right side which functions as a button | no |
| searchIconSize | number | size of the search icon | no |
| searchIconColor | string | color of the search icon | no |
| searchIconBackgroundColor | string | backgroundColor for the search icon button | no |
| onPress | function | function called when search icon button is pressed, called with text input | if search icon is rendered |



```js
import React, { Component } from 'react';

import SearchBar from 'rn-search-bar';

class SearchBarExampleOne extends Component {
  render(){
    return(
      <SearchBar
        onPress={
          (text) => console.log('You typed + ' text)
        }
        onChange={
          (text) => console.log(text)
        }
        containerStyle={{
          height:50,
          borderTopWidth:1,
          borderBottomWidth:1
        }}
        renderSearchIcon={true}
        clearTextOnPress={true}
        renderLeftIcon={true}
        searchIconSize={15}
        searchIconColor={'deeppink'}
        searchIconBackgroundColor={'aqua'}
        leftIconColor={'rgba(152,152,152,.7)'}
        leftIconSize={12}
        textStyle={{
          color: 'cyan'
        }}
      />
    )
  };

class SearchBarExampleTwo extends Component {
  render(){
    return(
      <SearchBar
        onPress={
          (text) => console.log('You typed ' + text )
        }
        onChange={
          (text) => console.log(text)
        }
        containerStyle={{
          height:50,
          marginHorizontal: 10,
          borderRadius: 5,
          borderColor: 'purple',
          borderWidth: 1
        }}
        renderSearchIcon={true}
        clearTextOnPress={false}
        renderLeftIcon={false}
        searchIconSize={20}
        searchIconColor={'deeppink'}
        searchIconBackgroundColor={'aqua'}
        textStyle={{
          color: 'cyan',
          paddingLeft: 10
        }}
      />
    )
  };
}
```
