function removeLastElement<T>(arr:T[]): T | undefined{
    return arr.pop();
}
const fruites: string[] = ["Apple", "Mango"];
console.log(removeLastElement(fruites));
console.log(fruites);

