const data = require('./all-fonts.json');
const fs = require('fs');
const result = {};

data.items.forEach(el=>{
  const files = {};
  Object.keys(el.files).forEach((key)=>{
    files[key] = el.files[key].replace('http://fonts.gstatic.com/s/','')
  })
  if(!result[el.category]) {
    result[el.category] = [];
  }
  result[el.category].push({
    family: el.family,
    files,
  })
})

console.log(result.length);

fs.writeFile("all-fonts-parsed.json", JSON.stringify(result), 'utf8', function (err) {
  if (err) {
    console.log("An error occured while writing JSON Object to File.");
    return console.log(err);
  }
  console.log("Add http://fonts.gstatic.com/s/");
});
