import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

const BlogPostForm = ({ onSubmit, initialValues }) => { 

    const [title, setTitle] = useState(initialValues.title);
    const [content, setContent] = useState(initialValues.content);

    return (
        <View>
            <Text style={styles.label}>Enter Title: </Text>
            <TextInput style={styles.input}
             value={title} 
             onChangeText={(text) => setTitle(text)}
             />
            <Text style={styles.label}>Enter Content: </Text>
            <TextInput 
            style={styles.contentInput} 
            value={content} 
            onChangeText={(text) => setContent(text)}
            />
            <Button 
             title="Save Blog Post"
             onPress={() => onSubmit(title, content)}
            />
        </View>
    )

};
//default props are automatic
BlogPostForm.defaultProps = { 
    initialValues: { 
        title: '',
        content: ''
    }
}


const styles = StyleSheet.create({ 
    input: { 
        fontSize: 18,
        borderWidth: 1,
        borderColor: 'black',
        height: 40,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 15,
        paddingLeft: 5,
    },
    label: { 
        fontSize: 20, 
        marginBottom: 5, 
        paddingLeft: 10,
        marginTop: 10,
    },
    contentInput: { 
        fontSize: 18,
        borderWidth: 1,
        borderColor: 'black',
        height: 100,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 15,
        paddingLeft: 5,

    }
});

export default BlogPostForm;