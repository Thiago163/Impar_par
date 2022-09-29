import { setStatusBarNetworkActivityIndicatorVisible } from "expo-status-bar";
import react, {useState} from "react";

import {View, Text, TextInput, TouchableOpacity, StyleSheet} from 'react-native'

export default function Home(){
    

let [valor1, setValor1] = useState();
let [total, setTotal] = useState();

function CalcularTotal(){

    let resultado = valor1;

    if(valor1 % 2 === 0) {
        alert("O número é par");
    } else {
        alert("O número é impar");
    }
}
    
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Projeto Nascimento</Text>

            <TextInput onChangeText={setValor1} style={styles.campo} placeholder="Digite seu ano de nascimento"/>
           
            <TouchableOpacity style={styles.botao} onPress={CalcularTotal}>
                <Text style={styles.botaoTexto}>Calcular</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#3B3936',
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    },

titulo:{
    fontSize:25,
    color: '#FFF',
    fontWeight: 'bold',
    marginBottom:40
},

campo:{
    backgroundColor: '#8B008B',
    fontSize:18,
    padding:8,
    marginTop:10,
    width:300,
    borderRadius:10
},

botao:{
    backgroundColor: '#BD2A2E',
    alignItems: "center",
    padding: 15,
    borderRadius: 7,
    marginTop: 20,
    width: 250
},

botaoTexto:{
    color: '#FFF',
    fontSize: 17,
    fontWeight: '700'
}

});