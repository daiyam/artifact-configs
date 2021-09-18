[@daiyam/artifact-vsx-ts](https://github.com/daiyam/artifact-configs/tree/master/packages/vsx-ts)
=================================================================================================

[![MIT licensed](https://img.shields.io/badge/license-MIT-blue.svg)](./LICENSE)
[![NPM Version](https://img.shields.io/npm/v/@daiyam/artifact-vsx-ts.svg?colorB=green)](https://www.npmjs.com/package/@daiyam/artifact-vsx-ts)

The configuration to create Visual Studio extensions and publish them on [Visual Studio Marketplace](https://marketplace.visualstudio.com/) and [Open VSX Registry](https://open-vsx.org/).

Getting Started
---------------

```sh
mkdir myproject
cd myproject
npm init -y
artifact add @daiyam/base @daiyam/lang-ts @daiyam/vsx-ts
```

Dependencies
------------

- [ncc](https://github.com/vercel/ncc)
- [tsc-watch](https://github.com/gilamran/tsc-watch)

License
-------

Copyright &copy; 2021-present Baptiste Augrain

Licensed under the [MIT license](https://opensource.org/licenses/MIT).
