// Write a JavaScript function to remove HTML/XML tags from
// string.
// Test Data:
// console.log(strip_tags('<p><strong><em>SkillSanta
// Assignments</em></strong></p>'));
// Output:
// “SkillSanta Assignments”

const stripTags = (string) => {
  return string.replace(/<[^>]*>/g, "");
};

console.log(
  stripTags("<p><strong><em>SkillSanta Assignments</em></strong></p>")
);

document.write("output is in console");
