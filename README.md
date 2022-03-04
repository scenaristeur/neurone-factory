# Neurone-factory

- tools for https://github.com/scenaristeur/agents.git




# build es6 module
- https://whitep4nth3r.com/blog/how-to-build-test-and-release-node-module-es6


# link modules

```
Test your node module before you publish

We can use npm link to test out the functionality of an npm package without publishing it.

In your node module project directory, run the following command:
bash-shell

npm link

In an existing project directory, or a new directory where you wish to test this npm package (assuming the project already has a package.json), run the following command:
bash-shell

npm link my-new-npm-package
# or for scoped projects
npm link @scope-name/my-new-npm-package

You can now import the node module as you would if it was published to npm, for example:


```
