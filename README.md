# eslint-config-rigorous

Rigourous set of rules for linting your JavaScript with [ESLint](http://eslint.org).

Keep in mind that this config is based on my personal preferences. In the extremely rare case that we share those same preferences, you might find this package useful. If not, it will take some convincing for me to change them.

## Installation

You can install the rules using npm:

    npm install --save-dev eslint-config-rigorous

## Usage

[Extend your ESLint configuration](http://eslint.org/docs/user-guide/configuring#extending-configuration-files) by using the `extends` property in your .eslintrc (example bellow using YAML syntax):

```yaml
---
extends: rigorous
 ```

You can override them of course:

```yaml
---
extends: rigorous
rules:
  quotes:
    - 2
    - double
```

Check out the [ESLint configuration guide](http://eslint.org/docs/user-guide/configuring) for more.

# Rules

The rules for rigorous are defined in config.yaml.

## License

[MIT license](http://opensource.org/licenses/mit-license.php)
