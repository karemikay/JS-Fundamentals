// Get the arguments passed to the script (skip 'node' and filename)
const args = process.argv.slice(2);

// Print the first two arguments exactly
console.log(args[0] + " is " + args[1]);
