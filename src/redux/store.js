import {configureStore} from '@reduxjs/toolkit'
import { persistStore } from 'redux-persist';

import appreducer from './reducer'
const store = configureStore({ reducer: appreducer })


const persistor = persistStore(store);

export { store, persistor };