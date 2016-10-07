'use strict'

import React, { Component, PropTypes } from 'react';
import {
 TextInput,
 View,
 TouchableOpacity,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

// 'onPress' will only be called only if there is a value in the text area, with value passed in

const propTypes = {
 onPress: React.PropTypes.func.isRequired,
 containerStyle: React.PropTypes.object.isRequired,
 clearTextOnPress: React.PropTypes.bool,
 renderLeftIcon: React.PropTypes.bool,
 searchIconSize: React.PropTypes.number,
 searchIconColor: React.PropTypes.string,
 searchIconBackgroundColor: React.PropTypes.string,
 leftIconColor: React.PropTypes.string,
 leftIconSize: React.PropTypes.number,
 textStyle: React.PropTypes.object
};

export default class SearchBar extends Component {

 constructor(){
   super();
   this.pressedSearchIcon = this.pressedSearchIcon.bind(this);
   this.state = {
     textInput: '',
   };
 };

 pressedSearchIcon(){
   this.props.onPress(this.state.textInput);
   if (this.props.clearTextOnPress) {
     this.setState({ textInput: '' });
   }
 };

 renderLeftIcon(){
   if (this.props.renderLeftIcon) {
     return(
         <TouchableOpacity
           activeOpacity={1}
           onPress={
             () => this.textInput.focus()
           }
           style={{
             flex:1,
             alignItems:'center',
             justifyContent:'center'
           }}>
           <Icon name={'search'} size={this.props.leftIconSize} color={this.props.leftIconColor} />
         </TouchableOpacity>
     )
   }
 };

 render(){
   return(
     <View style={[{flexDirection:'row',overflow:'hidden'},this.props.containerStyle]}>
       {this.renderLeftIcon()}
       <View style={{
         flex: 6,
         backgroundColor: 'white',
       }}>
         <TextInput
           ref={(ref) => this.textInput = ref}
           placeholder={'Search'}
           value={this.state.textInput}
           onChangeText={
             (text) => this.setState({textInput:text})
           }
           underlineColorAndroid={'rgba(0,0,0,0)'}
           style={[{
             flex: 1,
           },this.props.textStyle]}/>
       </View>
       <TouchableOpacity
         onPress={this.pressedSearchIcon}
         style={{
           flex: 1,
           backgroundColor: this.props.searchIconBackgroundColor,
           alignItems:'center',
           justifyContent: 'center',
         }}>
         <Icon name={'search'} size={this.props.searchIconSize} color={this.props.searchIconColor} />
       </TouchableOpacity>
     </View>
   )
 };
};

SearchBar.propTypes = propTypes;
