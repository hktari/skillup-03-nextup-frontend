# Node version
FROM node:16 as build

# Set the working directory
WORKDIR /app

# Add the source code to app
COPY . /app

ENV NEXT_PUBLIC_BACKEND_ENDPOINT http://ec2co-ecsel-5apbszxsa72h-1414158158.us-east-2.elb.amazonaws.com:3000

RUN npm ci
RUN npm run build
RUN npm prune --production

# Production image, copy all the files and run next
FROM node:16 AS runner
WORKDIR /app

# Copy the build output to replace the default nginx contents.
COPY --from=build /app/next.config.js ./
COPY --from=build /app/public ./public
COPY --from=build /app/.next ./.next
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/package.json ./package.json

EXPOSE 3000

ENV PORT 3000

CMD ["npm", "start"]
