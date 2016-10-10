# Test Case for [babel-plugin-module-resolver](https://github.com/tleunen/babel-plugin-module-resolver) with AVA

## Usage
- `npm start` runs the script without errors
- `npm test` throws `Error: Cannot find module 'lib/bar'`

The problem seems to be trying to import `lib/bar` in `test/helpers/foo-helper.js`.  
If you comment out `import bar from 'lib/bar';` in `test/helpers/foo-helper.js` then `npm test` will run without errors.
