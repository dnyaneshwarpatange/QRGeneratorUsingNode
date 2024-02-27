import inquirer from "inquirer";
import fs from "fs";
import qr from "qr-image";

inquirer
  .prompt([
    {
        message:"Enter the URL>>",
        name:"URL",
    }
  ])
  .then((answers) => {
    const url = answers.URL;
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream('GeneratedQR.png'));
    writeFile('SavedURL.txt', url, (err) => {
        if (err) throw err;
        console.log('The URL has been saved in file SavedURL.txt');
      }); 
  })
  .catch((error) => {
    if (error.isTtyError) {
    } else {
    }
  });