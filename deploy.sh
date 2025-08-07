#!/bin/bash

IMAGE_NAME="scaas-app"
REGION="asia-south1"
PROJECT_ID="dailyreminders-456104"
REPO_NAME="scaas-repo"
SERVICE_ACCOUNT="pythonscript@dailyreminders-456104.iam.gserviceaccount.com"
FULL_IMAGE_URI="$REGION-docker.pkg.dev/$PROJECT_ID/$REPO_NAME/$IMAGE_NAME"

echo "🐳 Building image..."
docker build -t $IMAGE_NAME .

echo "🏷️ Tagging image for Artifact Registry..."
docker tag $IMAGE_NAME $FULL_IMAGE_URI

echo "🚀 Pushing image to Artifact Registry..."
docker push $FULL_IMAGE_URI

echo "☁️ Deploying to Cloud Run..."
gcloud run deploy $IMAGE_NAME \
  --image $FULL_IMAGE_URI \
  --region $REGION \
  --platform managed \
  --allow-unauthenticated \
  --memory 512Mi \
  --set-env-vars=ENV=production \
  --service-account=$SERVICE_ACCOUNT
