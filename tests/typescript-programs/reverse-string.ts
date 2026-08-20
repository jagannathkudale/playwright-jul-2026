function reverseString(input: string): string {
    return input.split('').reverse().join('');
}

const str = "Jagannath";

console.log("Original String:", str);
console.log("Reversed String:", reverseString(str));