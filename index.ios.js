import React from 'react';
import { Text, View, Button, AppRegistry } from 'react-native';

const gerarNumeroRandomico = () => {
    const numeroAleatorio = Math.floor(Math.random() * 10);
    // eslint-disable-next-line no-undef 
    alert(numeroAleatorio);
};

const App = () => (
    <View>
        <Text>Gerador de Numeros Randomicos</Text>
        <Button 
            title="Gerar"
            onPress={gerarNumeroRandomico}
        />
    </View>
);

AppRegistry.registerComponent('randomNumbers', () => App);
