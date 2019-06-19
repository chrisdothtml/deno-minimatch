FROM node:12

RUN yarn

ADD rebuild.js /rebuild.js

ENTRYPOINT ["node", "/rebuild.js"]
