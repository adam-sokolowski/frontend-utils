import compiler from './test-compiler.js';

test('Inserts name and outputs JavaScript', async () => {
 const stats = await compiler('./test-component.txt', { name: 'Alice' });
//  console.info(stats.toJson());
 const output = stats.toJson({ source: true }).modules[0].source;

 expect(output).toBe('-----');
});