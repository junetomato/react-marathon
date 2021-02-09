import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyAHcD-tri0-Q17avJVe8qjbzxYKeK2Qswk",
    authDomain: "react-marathon-e9edc.firebaseapp.com",
    databaseURL: "https://react-marathon-e9edc-default-rtdb.firebaseio.com",
    projectId: "react-marathon-e9edc",
    storageBucket: "react-marathon-e9edc.appspot.com",
    messagingSenderId: "946312842159",
    appId: "1:946312842159:web:6fac974b022fac16f3bd5a"
};

class Firebase {
    constructor() {
        !firebase.apps.length && firebase.initializeApp(firebaseConfig);

        this.fire = firebase;
        this.database = this.fire.database();
    }

    getPokemonSocket = ( cb ) => {
        this.database.ref( 'pokemons' ).on( 'value', ( snapshot ) => {
            cb( snapshot.val() );
        })
    }

    getPokemonsOnce = async () => {
        return await this.database.ref( 'pokemons' ).once( 'value' )
            .then( snapshot => snapshot.val() );
    }

    postPokemon = ( key, pokemon ) => {
        this.database.ref( `/pokemons/${ key }` ).set( pokemon );
    }

    addPokemon = ( data, cb ) => {
        const newKey = this.database.ref().child( 'pokemons' ).push().key;
        this.database.ref( 'pokemons/' + newKey ).set( data ).then( () => cb() );
    }
}

export default Firebase;
