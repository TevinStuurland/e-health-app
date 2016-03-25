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

Run gulp to from the projects root compile sass and watch for changes.
```sh
$ gulp
```
