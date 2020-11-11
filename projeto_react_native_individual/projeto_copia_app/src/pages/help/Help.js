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

const Help = () => {
  return (
    <>
      <View>
        <Image
          style={Style.image}
          source={require('./../../assets/img/paypal4.png')}
        />
      </View>
      <View>
        <Text style={Style.txtBodyOne}>Precisa de ajuda com sua senha?</Text>
        <Text style={Style.txtBodyTwo}>
          Informe o e-mail de log in do PayPal e nós o ajudaremos a criar uma
          nova senha.
        </Text>
      </View>
      <View style={Style.txtInput}>
        <TextInput placeholder="E-mail" />
      </View>
      <TouchableHighlight
        style={Style.addButton}
        onPress={() => change(setPasswordScreen)}>
        <Text style={Style.addButtonText}>Avançar</Text>
      </TouchableHighlight>
      <View style={Style.btnOne}>
        <TouchableOpacity onPress={() => next(setEmailScreen)}>
          <Text style={Style.forgotButtonText}>Esqueceu seu e-mail?</Text>
        </TouchableOpacity>
      </View>
      <View style={Style.btnTwo}>
        <TouchableOpacity onPress={() => back(previousPage)}>
          <Text style={Style.forgotButtonText}>
            Volte para acessar sua conta do PayPal
          </Text>
        </TouchableOpacity>
      </View>
      <View style={Style.footBtnOne}>
        <TouchableOpacity onPress={() => foot(newPage)}>
          <Text style={Style.footTxt}>
            Fale conosco Privacidade Termos de Uso Mundialmente
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Help;
