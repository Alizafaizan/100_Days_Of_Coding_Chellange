function areStringEqualIgnorecase(str1: string, str2: string): boolean {
    return str1.toLowerCase() === str2.toLowerCase();
}
console.log(areStringEqualIgnorecase("hello", "Hello"));
console.log(areStringEqualIgnorecase("world", "World"));
console.log(areStringEqualIgnorecase("hello", "babies"));

