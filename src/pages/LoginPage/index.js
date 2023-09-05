import React from "react";
import { StyleSheet, Image, TextInput, View, TouchableOpacity, ImageBackground } from "react-native";
import { Text } from "react-native-web";

const LoginPage = () =>{
    return(
        <View style={styles.container}>
        <ImageBackground source={require('../../../assets/bgimg.jpg')} style ={styles.container}>
        <Image source={require('../../../assets/logo.png')} style ={styles.img} />
        <Text style={styles.txt}>WhatsApp</Text>
        <TextInput 
        placeholder="Email"
        style = {styles.input}
        />
        <TextInput 
        placeholder="Password"
        style = {styles.input}
        />
        <TouchableOpacity>
            <Text style={styles.btnTxt}>Login</Text>
        </TouchableOpacity>
        <View style = {styles.links}>
                <Text>Cadastre-se</Text>
                <Text>Esqueceu a senha?</Text>
        </View>
        </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    img: {
        marginBottom: '20px',
        width: '90px',
        height: '90px'
    },
    input: {
        marginBottom: '15px',
        backgroundColor: 'white',
        height: '40px',
        width: '65%',
        borderRadius: '10px'

    },
    links: {
        flexDirection: 'row',
        width: '65%',
        justifyContent: 'space-between',
        marginTop: '25px'
    },
    txt:{
        marginBottom: '100px',
        color: 'white',
        fontSize: '40px'
    },
    bgimage: {
        justifyContent: 'center',
        width: '100%'
    },
    btnTxt: {
        fontSize: '22px',
        color: 'white',
        backgroundColor: '#25D366',
        alignItems: 'center',
        padding: 10,
        paddingHorizontal: 30,
        borderRadius: '25px',
    },

})
export default LoginPage;
