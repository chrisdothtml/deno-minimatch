FROM node:12

LABEL "com.github.actions.name"="Rebuild"
LABEL "com.github.actions.description"="Rebuild dist file"
LABEL "com.github.actions.icon"="refresh-cw"
LABEL "com.github.actions.color"="blue"

WORKDIR /
COPY . /
RUN yarn

ENTRYPOINT ["node", "/rebuild.js"]
