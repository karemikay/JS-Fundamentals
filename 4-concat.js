// Get the arguments passed to the script (skip node and filename)
const args = process.argv.slice(2);

if (args[0] === undefined) {
  console.log("No argument");
} else if (args[1] === undefined) {
  console.log(args[0] + " is");
} else {
  console.log(args[0] + " is " + args[1]);
}
