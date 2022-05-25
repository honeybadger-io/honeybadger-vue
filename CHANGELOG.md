## [3.0.1] - 2022-03-24
### Added
- Log error to console in development (#865)

## [3.0.0] - 2021-09-13
### Changed
- Vue 3 Support

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
