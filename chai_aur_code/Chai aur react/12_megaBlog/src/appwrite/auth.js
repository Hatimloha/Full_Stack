import {Client, Account, ID} from 'appwrite';
import conf from '../conf/conf';

// this method is use for quality code: 
export class AuthService{
    client = new Client;
    account;
    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectID)
            this.account = new Account(this.client)
    }

    async createAccount({email, password, name}){
        try{
            const UserAccount = await this.account.create(ID.unique(), email, password, name);
            if(UserAccount){
                // call another method
                this.login({email, password})
            }else{
                return UserAccount
            }
        }catch(error){
            throw error
        }
    }

    async login({email, password}){
        try{
            return await this.account.createEmailSession(email, password)
        }catch(error){  
            throw error
        }
    }

    async getCurrentUser(){
        try {
            return await this.account.get()
        } catch (error) {
            throw error
        }
        // if we didn't get the value from DB or API didnt reach the DB or in any scenerio data not receive properly so below line will return null value to avoid application crash
        return null;
    }

    async logout(){
        try {
            await this.account.deleteSessions()
        } catch (error) {
            throw error
        }
    }
}

const authService = new AuthService();

// why to export object instend of class:
// => We dont need multiple instances of AuthService class just use directly using authService.<object method>
export default authService