import { contactsReducer } from './contactsSlice'
import { filtersReducer } from './filtersSlice'
import storage from 'redux-persist/lib/storage'
import persistReducer from 'redux-persist/es/persistReducer'


const persistConfigContact = {
	key: 'contacts',
	storage,
 whitelist: ['items'],
	// blacklist:['']
}

const persistConfigFilter = {
	key: 'filters',
	storage,
}

const contactPersistedReducer = persistReducer(persistConfigContact, contactsReducer)
const filterPersistedReducer = persistReducer(persistConfigFilter, filtersReducer)

export const rootReducer = {
	contact: contactPersistedReducer,
	filter: filterPersistedReducer,
}