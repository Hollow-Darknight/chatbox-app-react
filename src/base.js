import Rebase from 're-base';
import firebase from 'firebase/app';
import 'firebase/database';

const firebaseApp = firebase.initializeApp({
    // Ajouter les infos de base de donnée firebase ici
});

const base = Rebase.createClass(firebase.database());

export {firebaseApp};

export default base;
