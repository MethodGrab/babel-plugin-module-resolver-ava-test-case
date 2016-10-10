console.log( '========== begin foo.spec.js ==========' );
console.log( 'foo.spec.js :: process.cwd()', process.cwd() );

import test   from 'ava';

import foo    from 'lib/foo';
import helper from 'test/helpers/foo-helper';


test( `#foo should return 'foo'`, t => {
	t.true( foo() === 'foo' );
});
