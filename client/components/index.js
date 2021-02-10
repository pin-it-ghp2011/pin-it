/**
 * `components/index.js` exists simply as a 'central export' for our components.
 * This way, we can import all of our components from the same place, rather than
 * having to figure out which file they belong to!
 */
export {default as NavBar} from './NavBar'
export {default as UserHome} from './user-home'
export {default as LogIn} from './auth/LogIn'
export {default as SignUp} from './auth/SignUp'
export {useAuth, AuthProvider} from './auth/AuthContext'
export {default as SingleArticle} from '../components/SingleArticle'
export {default as AddArticle} from '../components/AddArticle'
export {default as AllArticles} from '../components/AllArticles'
