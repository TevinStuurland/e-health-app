# FEEDBACK
A E-health app for a HvA school project.

## Getting Started (one time setup)

### Install Node (npm)

If you have not got node installed, please install it. Go to https://nodejs.org and install the latest version.

### Install Gulp

__If you have previously installed a version of gulp globally, please run `npm rm --global gulp`
to make sure your old version doesn't collide with gulp-cli.__

```sh
$ npm install --global gulp-cli
```


#### Install project dependencies
To run sass and other gulp tasks install the development depencencies.

```sh
$ npm install
```

#### Run gulp:

```sh
$ gulp
```

To run individual tasks, use `gulp <task> <othertask>`.


## Daily workflow

*Workflow: pull > gulp > add changes > commit > push*

Run gulp from the project root to compile sass and watch for changes.
```sh
$ gulp
```

Work from the `./app` folder.

#### Adding changes to git.

```sh
$ git add . -A
```
This adds everything you changed. the syntax is: `git add <file>` the `-A` flag means *everything* also newly created files without it newly created file **won't** be added.

#### Commiting your files

```sh
$ git commit -m 'your commit message'
```
Write commit messages in the *imperative* tense. **Example:**

```sh
# Good (imperative)
git commit -m 'update the typography css' 

# Bad (past)
git commit -m 'updated the typography css' 

```

Commit messages should be able to be read like this: "This commit will `update the typography css`."

Writing good git messages: http://chris.beams.io/posts/git-commit/


#### Pushing changes to the remote (github)

```sh
# Git push <remote> <branch>
git push origin master

# or for short
git push
```


