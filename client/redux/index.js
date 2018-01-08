import { combinedReducer } from 'redux'
import users from './users'
import products from './products'
import currentUser from './currentUser'

export default combinedReducer({users, products, currentUser})
