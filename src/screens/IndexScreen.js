import React, { useContext, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Button, TouchableOpacity} from 'react-native';
import { Context } from '../context/BlogContext'
import { Feather } from '@expo/vector-icons';

const IndexScreen = ({ navigation }) => { 
    
    const { state, deleteBlogPost, getBlogPosts } = useContext(Context)

    useEffect(() => { 
        getBlogPosts();

        const listener = navigation.addListener('didFocus', () => { 
            getBlogPosts();
        })
        //memory leak clean-up function after the listener
        return () => { 
            listener.remove();
        };
    }, [])

    return (
        <View>
            <FlatList
                data={state}
                keyExtractor={(blogPost) => blogPost.title}
                renderItem={({ item }) => { 
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate('Show', { id: item.id })}>
                            <View style={styles.row}>
                            <Text style={styles.title}>{item.title} - {item.id}</Text>
                            <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                                <Feather name="trash-2" style={styles.icon} />
                            </TouchableOpacity>
                            </View>
                        </TouchableOpacity>


                        ) 
                        
                }}

            />
        </View>
    )
}

IndexScreen.navigationOptions = ({ navigation }) => { 
    return {
        headerRight: () => (
          <TouchableOpacity onPress={() => navigation.navigate('Create')}>
            <Feather name="plus" size={30} style={styles.plus} />
          </TouchableOpacity>
        ),
      };
}



const styles = StyleSheet.create({ 
    row: { 
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
        paddingHorizontal: 10,
        borderTopWidth: 1,
        borderColor: 'gray'
    },
    title: { 
        fontSize: 18,
    },
    icon: { 
        fontSize: 24
    },
    plus: { 
        marginRight: 20,
    }


})

export default IndexScreen;