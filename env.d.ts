declare namespace NodeJs{
    export interface ProcessEnv{
        AWS_S3_REGION: string;
        AWS_S3_ACCESS_KEY_ID: string;
        AWS_S3_SECRET_ACCESS_KEY: string;
        AWS_S3_BUCKET_NAME: string;
    }
} // J'avoue je sais pas ce que ça fait