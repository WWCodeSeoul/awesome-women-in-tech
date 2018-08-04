# awsome-women-in-tech web

## How-to-contribute

### Installation

1. Fork the repository

2. Clone the repository
```
$ git clone https://github.com/your-user-name/awesome-women-in-tech.git
```

3. Add upstream remote
```
$ cd awesome-women-in-tech/website
$ git remote add upstream https://github.com/wwcodeseoul/awesome-women-in-tech.git
```

4. Install dependencies
```
$ cd awesome-women-in-tech/website
$ yarn install
```

### Development

To start new feature, you have to update your repository


If you using git flow, start new feature from develop branch.

Or...

1. Checkout to develop
```
$ git checkout develop
```

2. Pull from upstream
```
$ git pull upstream develop
```

3. Make branch under feature
```
$ git branch feature/your-feature
```

4. Checkout to branch
```
$ git checkout feature/your-feature
```

5. Start development server
```
$ yarn start
(Run command in website directory)
```

Open your browser and move to `http://localhost:3000/awsome-women-in-tech/`

Good! Now, you are ready to contribute!
