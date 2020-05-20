import React, { Component } from 'react'
import { Text, View ,FlatList, Button,Image,TouchableOpacity} from 'react-native'
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import App3 from './App3';
const Stack=createStackNavigator()
export default class FlatDemo extends Component {

    constructor(props){
        super(props)
        this.url="http://www.cjlly.com:3041/record"
        this.max=7
        this.state={data:[],albums:[]}
    }

    componentDidMount(){
        fetch(this.url,{method:"GET"})
        .then(resp=>resp.json())
        .then(albums=>{
            
            this.setState({albums:albums})
        })
    }

    _del=id=>{
        
            let data=this.state.albums.splice(0)
            let index=data.findIndex(album=>album.id===id)
            console.log(index,id)
            data.splice(index,1)
            this.setState({albums:data})
     

       
    }

    _goItem=(item)=>{
       
        let params={item:item}
        this.props.navigation.navigate("详情",params)
    }
    _renderItem=({item})=>{
        return (
            <View style={{justifyContent:'center',
            alignItems:'center',height:110,justifyContent:"space-between",flexDirection: 'row'}}>
                <Text style={{color:"red"}}>{item.id}</Text>
               
                <TouchableOpacity onPress={()=>this._goItem(item)}>

                <Image style={{width:80,height:80}} source={{uri:item.img}}/> 

                </TouchableOpacity>
               
                <Text>{item.name}</Text>
                <Button onPress={()=>this._del(item.id)} title="删除"/>
            </View>
        )
    }
    _ItemSeparatorComponent=()=>{
        return <View style={{height:1,backgroundColor:"red"}}></View>
    }

    _refresh=()=>{
        let d=Math.floor(Math.random()*100+100)
        let data=this.state.data.splice(0)
        data.unshift(d)
        this.setState({data:data})
    }
    _reachEnd=()=>{
        let data=this.state.data.splice(0)
        data.push(++this.max)
        this.setState({data:data})
    }
    


    render() {
        return (
            <View>
                <FlatList
                    ListEmptyComponent={<Text>数据是空的</Text>}
                    keyExtractor={({item,index})=>index}
                    ItemSeparatorComponent={this._ItemSeparatorComponent}
                    data={this.state.albums} 
                    renderItem={this._renderItem}
                    refreshing={false}
                    onRefresh={this._refresh}
                    onEndReached={this._reachEnd}
                    onEndReachedThreshold={0.2}
                />
                 
            </View>
            
        )
    }
}
