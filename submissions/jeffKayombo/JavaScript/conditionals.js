const x = 123 - 7;
for (let i = 1; i <= x; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        assert.include(text, 'Software Developer');
    } else if (i % 3 === 0) {
        assert.include(text, 'Software');
    } else if (i % 5 === 0) {
        assert.include(text, 'Developer');
    } 
}