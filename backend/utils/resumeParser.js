const fs = require("fs");

const pdfParse =
require("pdf-parse");

const parseResume =
async (filePath) => {

  try {

    const dataBuffer =
    fs.readFileSync(filePath);

    const data =
    await pdfParse(dataBuffer);

    return data.text;

  } catch (error) {

    console.log(
      "Resume Parse Error:",
      error.message
    );

    return "";
  }
};

module.exports =
parseResume;