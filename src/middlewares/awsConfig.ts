import * as aws from "@aws-sdk/client-s3";
import * as s3RequestPresigner from "@aws-sdk/s3-request-presigner";
import type { User } from "@prisma/client";
//import { env } from "../config";

//Croyez moi j'aimerai beaucoup mettre ça dans un fichier .env mais ça ne fonctionne pas donc ca commence à me gonfler alors je fais le foutre en dur ici

const AWS_S3_BUCKET_NAME = "ybook-dev"
const AWS_S3_REGION = "eu-west-3"
const AWS_S3_ACCESS_KEY_ID = "AKIASOIICHUXAJOIJPVY" 
const AWS_S3_SECRET_ACCESS_KEY ="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"


export const s3client = new aws.S3({
  region: AWS_S3_REGION,
  credentials: {
    accessKeyId: AWS_S3_ACCESS_KEY_ID,
    secretAccessKey: AWS_S3_SECRET_ACCESS_KEY,
  },
});

export const getBucketParams = (id: User["id"]) => ({
  Bucket: AWS_S3_BUCKET_NAME,
  Key: `molina-ybook/${id}/${Date.now() + Math.random()}`,
  ContentType: "image/*",
});

export const getSignedPostUrl = async (id: User["id"]) => {
  const params = getBucketParams(id);
  return {
    url: await s3RequestPresigner.getSignedUrl(
      s3client,
      new aws.PutObjectCommand(params),
      {
        expiresIn: 60,
      }
    ),
    key: params.Key,
  };
};

export const getSignedGetUrl = async (s3key: string) => {
  const params = {
    Bucket: AWS_S3_BUCKET_NAME,
    Key: s3key,
  };
  const command = new aws.GetObjectCommand(params);
  return await s3RequestPresigner.getSignedUrl(s3client, command, {
    expiresIn: 300,
  });
};