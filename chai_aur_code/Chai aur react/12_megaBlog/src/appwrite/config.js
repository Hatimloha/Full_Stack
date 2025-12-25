import {Client, ID, Databases, Storage, Query} from 'appwrite';
import conf from '../conf/conf';

export class Service{
    client = new Client();
    databases;
    bucket;
    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectID)
            this.databases = new Databases(this.client);
            this.bucket = new Storage(this.client) 
    }

    async createPost({title, slug, content, featureImage, status, userId}){
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseID, 
                conf.appwriteCollectionID,
                slug,
                {
                    title,
                    content,
                    featureImage,
                    status, 
                    userId
                }
            )
        } catch (error) {
            throw error
        }
    }


    async updatePost(slug, {title, content, featureImage, status}){
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseID, 
                conf.appwriteCollectionID,
                slug,
                {
                    title,
                    content,
                    featureImage,
                    status,
                }
            )
        } catch (error) {
            throw error 
        }
    }

    async deletePost(slug){
        try {
            await this.databases.deleteDocument(
                conf.appwriteDatabaseID,
                conf.appwriteCollectionID,
                slug
            )
            return true
        } catch (error) {
            console.log(error);
            return false     
        }
    }

    async getPost(slug){
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseID,
                conf.appwriteCollectionID,
                slug
            )  
        } catch (error) {
            console.log(error);
            return false
        }
    }

// Query feature will work only when index are available in Appwrite
async getPosts(queries = [Query.equal('status:', "active")]){
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseID,
                conf.appwriteCollectionID,
                queries,
            )
        } catch (error) {
            throw error
            return false
        }
    }


async uploadFile(file){
    try {
        return await this.bucket.createFile(
            conf.appwriteBucketID,
            ID.unique(),
            file
        )
    } catch (error) {
        throw error
        return false
    }
}


async deleteFile(fileId){
    try {
        return await this.bucket.deleteFile(
            conf.appwriteBucketID,
            fileId
        )
        return true
    } catch (error) {
        throw error
        return false
    }
}

async getFilePreview(fileId){
    try {
        return await this.bucket.getFilePreview(
            conf.appwriteBucketID,
            fileId
        )
    } catch (error) {
        throw error
        return false;
    }

}
}
const service = new Service();
export default service;