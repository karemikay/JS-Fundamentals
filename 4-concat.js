// Get the arguments passed to the script (excluding 'node' and filename)
const args = process.argv.slice(2);

// Check if at least two arguments are passed
if (args[0] === undefined || args[1] === undefined) {
  console.log("Not enough arguments");
} else {
  console.log(args[0] + " is " + args[1]);
}
