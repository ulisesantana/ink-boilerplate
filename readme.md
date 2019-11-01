# ink boilerplate

Use this boilerplate as Github template for start working on your new CLI.

For testing the CLI on your own PC remember to run `npm link` on the project root directory. Right after, you can use the value you have on the `bin` field in the package.json. The default one is `hi`.

## scripts

- `build`: runs the build script
- `prepare`:  runs the build script both BEFORE the package is packed and published and AFTER every local npm install without any arguments.
- `lint`: runs the linter
- `lint:fix`: try to fix linter errors
- `pretest`: runs the linter before the tests script
- `test`: runs the tests,
- `test:tdd`: runs the tests after every file is saved.

## CLI Example

```
$ hi --help

  Usage
    $ hi

  Options
    --name, -n  Your name

  Examples
    $ hi -n Jane
    Hello, Jane!

    $ hi
    Hello, Stranger!
```
