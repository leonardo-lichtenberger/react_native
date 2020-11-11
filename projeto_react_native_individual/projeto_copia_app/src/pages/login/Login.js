import React from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';

import Style from './styles';

const Login = ({navigation}) => {
  return (
    <>
      <View>
        <Image
          style={Style.image}
          source={require('./../../assets/img/paypal4.png')}
        />
      </View>
      <View style={Style.txtInputOne}>
        <TextInput placeholder="E-mail" />
      </View>
      <View style={Style.txtInputTwo}>
        <TextInput placeholder="Senha" />
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('Help')}>
        <Text style={Style.txtForgot}>Esqueceu?</Text>
      </TouchableOpacity>
      <Text style={Style.txtBody}>Novo no PayPal? Criar conta</Text>
      <TouchableHighlight
        style={Style.addButton}
        onPress={() => login(homePage)}>
        <Text style={Style.addButtonText}>Log in</Text>
      </TouchableHighlight>
    </>
  );
};

export default Login;
