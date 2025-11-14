// Get the arguments passed to the script (excluding 'node' and filename)
const args = process.argv.slice(2);

// Handle different number of arguments
if (args[0] === undefined) {
  console.log("No argument");
} else if (args[1] === undefined) {
  console.log(args[0]);
} else {
  console.log(args[0] + " " + args[1]);
}

