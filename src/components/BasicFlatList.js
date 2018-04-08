import React, { Component } from 'react';
import { AppRegistry, FlatList, StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import flatListData from '../../data/flatListData';

class FlatListItem extends Component {
    render() { 
             
        return (
        <View style={{
                flex: 1,
                backgroundColor: this.props.index % 2 == 0 ? 'mediumseagreen': 'tomato'
                               
          }}>  
          <View style={{height:0.1,backgroundColor:"grey"}}></View>
          <TouchableHighlight onPress={()=>alert(this.props.index)}>
          <View  style={{height:this.props.index  == 1 ? 0 : 100  ,width:"100%"}}>          
              <Text style={styles.flatListItem}>{this.props.item.name}</Text>
              <Text style={styles.flatListItem}>{this.props.item.foodDescription}</Text>
              </View>
              </TouchableHighlight>
          </View>
        );
    }
}
const styles = StyleSheet.create({
    flatListItem: {
        color: 'white',
        padding: 10,
        fontSize: 16,  
    }
});

export default class BasicFlatList extends Component {
    render() {
      return (
        <View style={{flex: 1, marginTop: 22}}>
            <FlatList 
                data={flatListData}
                renderItem={({item, index})=>{
                    //console.log(`Item = ${JSON.stringify(item)}, index = ${index}`);
                    return (
                    <FlatListItem item={item} index={index}>

                    </FlatListItem>);
                }}
                >

            </FlatList>
        </View>
      );
    }
}