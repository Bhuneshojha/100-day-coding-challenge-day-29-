//          100 days of coding challenge ( DAY 29 )

// Question 01
// ---This function finds where "code" first shows up in a text
function findCodePosition(Str: string): number {
  return Str.indexOf("code");  // --Looks for "code" and tells where it found it
}

console.log(findCodePosition("I Make my cousin to learn code with Javascript."));
// ---Outputs the start position of "code"
// Question 02
// ---This function checks if a sentence has "JavaScript" in it
function hasJavaScript (Str: string): boolean{
  return Str.includes("javascript");
}

console.log(hasJavaScript("I feel good when i code in javascript"));
// --Outputs true or false based on the check
//   Question 03 
function extractFirstTenChars(Str: string): string{
  return Str.substring(0 , 15);// --Gets characters from start to position 15
}

console.log(extractFirstTenChars("Hello,My dear jascript"));
// ---Shows the first 10 characters
