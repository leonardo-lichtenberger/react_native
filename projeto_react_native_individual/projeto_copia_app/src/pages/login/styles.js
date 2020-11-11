import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  image: {
    position: 'absolute',
    top: 60,
    marginLeft: 180,
  },

  txtInputOne: {
    borderBottomWidth: 1,
    marginHorizontal: 25,
    marginTop: 245,
    borderBottomColor: '#000000',
  },

  txtInputTwo: {
    borderBottomWidth: 1,
    marginHorizontal: 25,
    marginTop: 10,
    borderBottomColor: '#000000',
  },

  txtForgot: {
    marginTop: 10,
    marginLeft: 295,
    fontSize: 15,
    color: '#3b7bbf',
  },

  txtBody: {
    textAlign: 'center',
    fontSize: 15,
    marginTop: 20,
    marginBottom: 190,
    color: '#3b7bbf',
  },

  addButton: {
    backgroundColor: '#C0C0C0',
    alignItems: 'center',
    justifyContent: 'center',
    height: 30,
    elevation: 3,
    padding: 30,
  },

  addButtonText: {
    fontSize: 20,
    color: '#fff',
  },
});

export default styles;
