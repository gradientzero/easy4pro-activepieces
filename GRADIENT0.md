nvm use 20
npm install

sh tools/deploy.sh

docker compose -p activepieces up

# sometimes postgres fails with compose, do following and retry:
sh tools/reset.sh


## Create new piece
```bash
npm run cli pieces create
# Enter the piece name: fiesda
# Enter the package name: @easy4pro/piece-fiesda
# Select the piece type: custom
```

```bash
npm run cli pieces create
# Enter the piece name: ecomon
# Enter the package name: @easy4pro/piece-ecomon
# Select the piece type: custom
```

## Commit to repository
```bash
git add .
git commit -m "add fiesda and ecomon pieces" -n
git push
```

## Upload to npm.js (account easy4pro, see 1password)
```bash
npm login
npm run publish-piece fiesda
npm run publish-piece ecomon
```

## Install eco/fie pieces on activepieces
```bash
- Login to activepieces instance
- Settings -> Pieces -> +Install Piece
- Enter the package name: @easy4pro/piece-fiesda, select latest version (starting with 0.0.1)
- Enter the package name: @easy4pro/piece-ecomon, select latest version (starting with 0.0.1)
```

## Use Pieces
```bash
- Create new flow, select piece fiesda or ecomon
- Create Server Account Token (Admin Dashboard) for any Identity and copy Token Value to new Connection
- Apply Connection Base URL: eg https://easy4pro-ecomon.gradient0.com
```
