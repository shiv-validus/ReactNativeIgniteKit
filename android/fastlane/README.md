fastlane documentation
----

# Installation

Make sure you have the latest version of the Xcode command line tools installed:

```sh
xcode-select --install
```

For _fastlane_ installation instructions, see [Installing _fastlane_](https://docs.fastlane.tools/#installing-fastlane)

# Available Actions

## Android

### android test

```sh
[bundle exec] fastlane android test
```

🧪 Run unit tests

### android dev_internal

```sh
[bundle exec] fastlane android dev_internal
```

🚀 Deploy DEV flavor to Internal Testing

### android sit_beta

```sh
[bundle exec] fastlane android sit_beta
```

🧪 Deploy SIT flavor to Beta

### android uat_closed

```sh
[bundle exec] fastlane android uat_closed
```

🔒 Deploy UAT flavor to Closed Track

### android prod_release

```sh
[bundle exec] fastlane android prod_release
```

🏁 Deploy PROD flavor to Production

----

This README.md is auto-generated and will be re-generated every time [_fastlane_](https://fastlane.tools) is run.

More information about _fastlane_ can be found on [fastlane.tools](https://fastlane.tools).

The documentation of _fastlane_ can be found on [docs.fastlane.tools](https://docs.fastlane.tools).
