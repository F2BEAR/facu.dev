FROM --platform=linux/amd64 node:18 as builder

WORKDIR /opt/builder

COPY . .

RUN npm install && npm run build

FROM --platform=linux/amd64 node:18 as worker

WORKDIR /opt/app

COPY --from=builder /opt/builder/package.json package.json
COPY --from=builder /opt/builder/.next .next
COPY --from=builder /opt/builder/public public

RUN npm install --omit=dev

CMD [ "npm", "start" ]