import { initializeApp } from '@react-native-firebase/app';

const firebaseConfig = {
    apiKey: 'AIzaSyCZ7jSSqGNXqUqHHzT0ozPKMja0Hay3GjY',
    projectId: 'homemealtaste-2f322',
    appId: '1:62879434393:android:27fcd3e0b85c82d7e5da08',
    databaseURL: 'https://console.firebase.google.com/u/1/project/homemealtaste-2f322/database/homemealtaste-2f322-default-rtdb/data/~2F',
    messagingSenderId: '62879434393',
    authDomain: 'homemealtaste-2f322.firebaseapp.com',
    storageBucket: 'gs://homemealtaste-2f322.appspot.com'
};

const app = initializeApp(firebaseConfig);

export default app;