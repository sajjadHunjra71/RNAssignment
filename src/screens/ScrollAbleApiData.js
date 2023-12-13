import { StyleSheet, Text, View, FlatList,Image,TextInput } from 'react-native';
import React, { useEffect, useState } from 'react';
import { images } from '../assets';
import { COLORS } from '../utils';

export default function ScrollAbleApiData() {
    const [allData, setAllData] = useState('');
    const [allData1, setAllData1] = useState('');
    const [search, setSearch] = useState('');

    const [filteredDataSource, setFilteredDataSource] = useState('');
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        try {
            fetch('https://jsonplaceholder.typicode.com/posts')
                .then((response) => response.json())
                .then((responseJson) => {
                    console.log(responseJson);
                    setAllData(responseJson);
                    setAllData1(responseJson);
                })
                .catch((error) => {
                    alert(error);
                });
        } catch (e) {
            alert(e);
        }
    };

    const searchFilterFunction = (text) => {
        setSearch(text);

        if (text) {
            const newData = allData1.filter(
                function (item) {

                    const itemData = item.title
                        ? item.title.toUpperCase()
                        : ''.toUpperCase();
                    const textData = text.toUpperCase();
                    return itemData.indexOf(textData) > -1;
                });
            setFilteredDataSource(newData);
            setAllData1(newData)
        } else {
            setFilteredDataSource(allData);
            setAllData1(allData)
            setSearch(text);
        }
    };


    const renderItem = ({ item }) => {
        return (
            <View style={{ width: '90%', height: 50, borderWidth: 1, borderRadius: 10, marginTop: 10,alignSelf: 'center',padding:7 }}>
                <Text style={{fontSize:15,fontWeight:'bold',}}>{item.id}</Text>
                <Text numberOfLines={1} style={{fontSize:18,fontWeight:'bold',marginTop:2}}>{item.title}</Text>
            </View>
        );
    };

    return (
        <View style={styles.container}>

            <View style={{width:'90%',flexDirection:'row',paddingHorizontal:10,marginTop:'10%',}}>
                <Image source={images.search} style={{width:20,height:20,resizeMode:'contain'}}/>
                <TextInput
                    placeholder='Search Here'
                    onChangeText={(text) => searchFilterFunction(text)}
                    value={search}
                    style={{borderBottomWidth:1,borderBottomColor:COLORS.gray,marginLeft:15,width:'95%'}}
                />
            </View>


            {
                allData1 ?
                    <View style={{ width: '100%', }}>
                        <FlatList
                            data={allData1}
                            renderItem={renderItem}
                            keyExtractor={(item) => item.id}
                        />

                    </View>
                    :
                    <Text>Loading</Text>
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,

    },
});
