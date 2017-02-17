# lew42

## Usage

```
git clone https://github.com/lew42/lew42.git
npm i
npm run server
```

Might require `npm i -g webpack webpack-dev-server`

Serves from localhost:8080


## Folder structure
The root node_modules is for the npm-installed modules.  The `/code/node_modules/` are git-controlled sub packages.  These can be globally required from within the `/code/` folder.

I'm using webpack's require.context feature to suck in all the .tests.js and .page.js files.  This is barely working right now, and although I've tried to refactor it several times, it's still a mess.


## More to come

Feel free to create issues to ask questions.. as you can see, I'm the only one here, and could use some company.
