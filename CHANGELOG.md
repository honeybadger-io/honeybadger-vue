# [1.1.0](https://github.com/honeybadger-io/honeybadger-vue/compare/v1.0.4...v1.1.0) (2022-05-24)


### Bug Fixes

* docs vue2.x link ([#944](https://github.com/honeybadger-io/honeybadger-vue/issues/944)) ([7eaf1c8](https://github.com/honeybadger-io/honeybadger-vue/commit/7eaf1c8439324078a761bebba673fdc5620b0fd1))


### Features

* shipjs integration ([#954](https://github.com/honeybadger-io/honeybadger-vue/issues/954)) ([b9bb9a3](https://github.com/honeybadger-io/honeybadger-vue/commit/b9bb9a38cac7572c1700460fe4c0019777b12dac))



# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [1.0.4] - 2022-03-24
### Added
- Log error to console in development (#865)

## [1.0.3] - 2021-02-18
### Fixed
- Another attempt at making TypeScript definitions work. We're now [testing
  our type definitions](./honeybadger-vue.test-d.ts) with [tsd](https://github.com/SamVerschueren/tsd#usage).

## [1.0.2] - 2021-02-17
### Fixed
- Fix TypeScript errors in Vue 2


## [1.0.1] - 2021-02-17
### Fixed
- Add a module export with an `install` function. This fixes builds in newer Vue apps written in TypeScript

## [1.0.0] - 2021-01-19
### Changed
- Migrate honeybadger-js dependency to @honeybadger-io/js 3.0.0
  See https://docs.honeybadger.io/lib/javascript/support/upgrading-to-v3.html

## [0.0.12] - 2020-09-24
### Fixed
- Bump honeybadger-js version
- Import `Honeybadger` in TypeScript definitions file (fixes potential missing
  name error).

## [0.0.11] - 2020-04-24
### Fixed
- Update honeybadger-js to 2.2.1 (security release, see
    [here](https://github.com/honeybadger-io/honeybadger-js/blob/master/CHANGELOG.md#220---2020-03-16))

## [0.0.10] - 2020-01-08
### Fixed
- Fix TypeScript type definitions

## [0.0.9] - 2019-12-18
### Fixed
- Deps & security updates
- TypeScript definitions

## [0.0.8] - 2019-05-28
### Fixed
- Added missing dist/ directory to release

## [0.0.7] - 2019-04-16
### Changed
- Refactored tests to include debug mode output
- Changed the debug output based on Vue debug mode
- Update honeybadger-js to v1.0. See
  https://github.com/honeybadger-io/honeybadger-js/blob/master/CHANGELOG.md

## [0.0.6] - 2018-12-08
### Added
- Reduced size of context information sent to Notify
- We now send the props value to honeybadger

## [0.0.5] - 2018-12-07
### Added
- Dependency updates, additional documentation changes

## [0.0.4] - 2018-11-07
### Added
- Minor changes in Readme and travis configuration (no code changes)

## [0.0.3] - 2018-11-06
### Added
- Switch to yarn-based package lock

## [0.0.2] - 2018-11-06
### Added
- Added src folder to published artifact

## [0.0.1] - 2018-11-06
### Added
- Initial release (unpublished due to missing artifacts)
