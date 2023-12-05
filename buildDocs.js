// // const fs = require("fs");
// // const path = require("path");
// // const cheerio = require("cheerio");
// import fs from "fs";
// import path from "path";
// import cheerio from "cheerio";

// const dir = "./docs/.vuepress/dist"; // your dist directory
// let uid = 0;
// const transformDir = (distDir, uid) => {
//   fs.readdir(distDir, (err, files) => {
//     if (err) {
//       console.error("Error reading directory", err);
//       return;
//     }
//     // const stats = fs.statSync(files);

//     // if (stats.isDirectory()) {
//     //   return transformDir(files, uid++);
//     // }

//     files
//       .filter((file) => file.endsWith(".html"))
//       .forEach((file) => {
//         const filePath = path.join(distDir, file);
//         fs.readFile(filePath, "utf8", (err, data) => {
//           if (err) {
//             console.error("Error reading file", err);
//             return;
//           }
//           const $ = cheerio.load(data);
//           $("a").each((index, element) => {
//             const href = $(element).attr("href");
//             if (href && href.startsWith("/")) {
//               $(element).attr("href", `.${href}`);
//             }
//           });
//           $("link").each((index, element) => {
//             const href = $(element).attr("href");
//             if (href && href.startsWith("/")) {
//               $(element).attr("href", `.${href}`);
//             }
//           });
//           // $("script").each((index, element) => {
//           //   const src = $(element).attr("src");
//           //   if (src && src.startsWith("/")) {
//           //     $(element).attr("src", `.${src}`);
//           //   }
//           // });

//           // 创建script标签
//           const script = $(
//             `<script type="module">
//           document.addEventListener('DOMContentLoaded', () => {
//             const toggleButton = document.querySelector('.toggle-color-mode-button');

//             toggleButton && toggleButton.addEventListener('click', () => {
//               console.log('Toggle button clicked!');
//               var isDack =
//               localStorage.getItem("vuepress-color-scheme") === "dark";
//               localStorage.setItem(
//                 "vuepress-color-scheme",
//                 isDack ? "auto" : "dark"
//               );
//               location.reload();
//             });
//           });
//         </script>
//         `
//           );

//           // 将script标签插入到HTML的head部分
//           !uid && $("head").append(script);

//           fs.writeFile(filePath, $.html(), "utf8", (err) => {
//             if (err) {
//               console.error("Error writing file", err);
//               return;
//             }
//             console.log(`Updated  in ${file}`);
//           });
//         });
//       });
//   });
// };
// processDir(dir, uid);

// function processDir(dirPath, uid) {
//   // 读取指定目录下的所有文件和子目录
//   const files = fs.readdirSync(dirPath);
//   transformDir(dirPath, uid);
//   files.forEach((file) => {
//     const filePath = path.join(dirPath, file);
//     const stats = fs.statSync(filePath);
//     if (stats.isDirectory()) {
//       // 处理子目录
//       processDir(filePath);
//     }
//   });
// }
