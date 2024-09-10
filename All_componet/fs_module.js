// Utility function to read JSON file
// const readJsonFile = (filePath) => {
//   return new Promise((resolve, reject) => {
//     fs.readFile(filePath, "utf8", (err, data) => {
//       if (err) return reject(err);
//       resolve(JSON.parse(data));
//     });
//   });
// };

// // Utility function to write JSON file
// const writeJsonFile = (filePath, jsonData) => {
//   return new Promise((resolve, reject) => {
//     fs.writeFile(filePath, JSON.stringify(jsonData, null, 2), "utf8", (err) => {
//       if (err) return reject(err);
//       resolve();
//     });
//   });
// };

// const app = express();

// function readJsonFile(filename) {
//   try {
//     const data = fs.readFileSync(filename, "utf8");
//     return JSON.parse(data || "[]"); // Return an empty array if the file is empty
//   } catch (err) {
//     return []; // Return an empty array if the file doesn't exist
//   }
// }

// function writeJsonFile(filename, data) {
//   try {
//     fs.writeFileSync(filename, JSON.stringify(data, null, 2));
//   } catch (err) {
//     console.error("Error writing file:", err);
//   }
// }
