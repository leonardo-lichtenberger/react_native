import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  image: {
    position: 'absolute',
    top: 60,
    marginLeft: 180,
  },

  txtBodyOne: {
    marginHorizontal: 30,
    marginTop: 160,
    color: '#000000',
    fontSize: 30,
    textAlign: 'center',
  },

  txtBodyTwo: {
    textAlign: 'center',
    marginHorizontal: 30,
    marginTop: 20,
    marginBottom: 10,
    color: '#000000',
  },

  txtInput: {
    marginHorizontal: 45,
    marginTop: 20,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#000000',
  },

  addButton: {
    backgroundColor: '#3b7bbf',
    margin: 10,
    marginHorizontal: 60,
    marginTop: 30,
    padding: 25,
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    borderRadius: 30,
    elevation: 3,
  },

  addButtonText: {
    color: '#fff',
  },

  forgotButtonText: {
    color: '#3b7bbf',
    textAlign: 'center',
  },

  btnOne: {
    marginTop: 20,
  },

  btnTwo: {
    marginTop: 40,
  },

  footBtnOne: {
    marginTop: 60,
    padding: 20,
    backgroundColor: '#C0C0C0',
  },

  footTxt: {
    fontSize: 12,
    textAlign: 'center',
  },
});

export default styles;
