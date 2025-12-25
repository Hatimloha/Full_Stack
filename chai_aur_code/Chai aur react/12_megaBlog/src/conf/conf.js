// VITE_APPWRITE_URL="https://fra.cloud.appwrite.io/v1"  // # end_point
// VITE_APPWRITE_PROJECT_ID="6907a494000c11b8a7c6"
// VITE_APPWRITE_DATABASE_ID="6907a5a40039217ff726"
// VITE_APPWRITE_COLLECTION_ID="6907a7540012c7fe9e07"
// VITE_APPWRITE_BUCKET_ID="6907a8d90023cb4a0e2d"


const conf = {
    appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
    appwriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appwriteDatabaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    appwriteCollectionId: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
    appwriteBucketId: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
};

export default conf;
