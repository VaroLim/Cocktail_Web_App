import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
} from 'firebase/auth'
import app from './firebase'

const auth = getAuth(app)
export async function login(email: string, password: string) {
    try {
        const credentials = await signInWithEmailAndPassword(auth, email, password)
        console.log(credentials)
        return credentials?.user ? credentials.user : null
    } catch (error) {
        console.log(error)
    }
}

export async function signup(email: string, password: string) {
    try {
        const credentials = await createUserWithEmailAndPassword(
            auth,
            email,
            password
        )
        console.log(credentials)
        return credentials?.user ? credentials.user : null
    } catch (error) {
        console.log(error)
    }
}

export async function logout() {
    try {
        await signOut(auth)
    } catch (error) {
        console.log(error)
    }
}
