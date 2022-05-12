let a = 'Hello, %insert name here%!';
let replacer = '%insert name here%';
let match = 'Document Object Model';
let c = a.replaceAll(replacer, match);
console.log(c);
