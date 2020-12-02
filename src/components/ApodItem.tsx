import React, { useState } from 'react'
import { FlatList, ImageBackground, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { APOD } from '../../Type';
import { LinearGradient } from 'expo-linear-gradient';
import { BorderlessButton } from 'react-native-gesture-handler';

type Props = {
    apods: APOD[];
}



const ApodItem: React.FC<Props> = ({ apods }) => {
    const [viewApod, setViewApod] = useState<APOD>(apods[apods.length - 1]);
    const [isHide, setisHide] = useState(true);

	return (
       
            <TouchableOpacity
                onPress={() => setisHide(!isHide)}
            > 
                <ImageBackground
                    source={{ uri:viewApod.hdurl }}
                    style={{ width: "100%", height: "100%" }}
                >
                    {isHide ? (
                        <View style={styles.globalContainer}>
                            <View >
                                <LinearGradient start={{ x: 0, y: 1 }} end={{ x: 0, y: 0 }} colors={['transparent', '#020024', '#000000']}>
                                    <FlatList
                                        data={apods}
                                        keyExtractor={apod => apod.date}
                                        horizontal={true}
                                        inverted

                                        renderItem={({ item }) => <TouchableOpacity
                                            onPress={() => setViewApod(item)}
                                        >
                                            <View style={styles.box}>
                                                <ImageBackground
                                                    source={{ uri: item.url }}
                                                    style={styles.image}
                                                >
                                                </ImageBackground>
                                            </View>
                                        </TouchableOpacity>} />
                                </LinearGradient>
                            </View>


                            <View style={styles.botContainer}>
                                <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }} colors={['transparent', '#020024', '#000000']}>
                                    <View style={styles.infosContainer}>
                                        <Text style={styles.title}>{viewApod.title}</Text>
                                        <Text style={styles.description}>{viewApod.explanation}</Text>
                                    </View>
                                </LinearGradient>
                            </View>

                        </View>
                    ) : null}
                </ImageBackground>
            </TouchableOpacity>
	)
}

const styles = StyleSheet.create({
    globalContainer: {
        flex:1,
        justifyContent:"space-between"
    },
    infosContainer: { 
        paddingBottom:"3%"
    },
    botContainer:{
        flex:1,
        position: "absolute",
        bottom:0,     
    },
    title:{
        color: 'white',
        fontSize: 36,
        paddingBottom: 30,
        paddingLeft:10,
 
    },
    description:{
        color: 'white', 
        paddingLeft:10,
    },
    box: {
        width:100,
        height:100,
        marginLeft: 5,
    },
    image: {
        width:"100%",
        height:"100%",
    },
});

export default ApodItem