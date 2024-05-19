function replacewords(sentence: string): string {
    return sentence.replace(/JavaScript/g, "TypeScript");
}
console.log(replacewords("I love JavaScript and JavaScript is awesome!"));
