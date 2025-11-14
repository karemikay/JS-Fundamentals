// Get the arguments passed to the script (excluding 'node' and filename)
const args = process.argv.slice(2);

// Check if there is a first argument
if (args[0] === undefined) {
  console.log("No argument");
} else {
  console.log(args[0]);
}
