const PATHS = require('../config/paths');
const process = require('process');
const path = require('path');
const fs = require('fs');

// 지정한 디렉토리를 재귀탐색한다
const getDirectoriesAllFiles = (directory, arrayOfFiles) => {
  const files = fs.readdirSync(directory);
  arrayOfFiles = arrayOfFiles || [];

  files.forEach((file) => {
    let filepath = path.join(directory, '/', file);
    if (fs.statSync(filepath).isDirectory()) {
      arrayOfFiles = getDirectoriesAllFiles(
        directory + '/' + file,
        arrayOfFiles
      );
    } else {
      arrayOfFiles.push(file);
    }
  });
  return arrayOfFiles;
};

// 경로와 이름을 지정한 폴더 아래에 지정한 확장자의 파일들을 생성한다.
const makeFolder = (folderName, folderPath = PATHS.pages) => {
  const exts = ['json', 'pug', 'scss', 'ts'];
  const jsonTemplate = {
    head: {
      title: `${folderName}`,
    },
  };
  const templateJSON = JSON.stringify(jsonTemplate);

  fs.mkdirSync(path.join(folderPath, folderName));

  for (const ext of exts) {
    if (ext === 'json') {
      fs.writeFileSync(
        path.join(folderPath, `${folderName}/${folderName}.${ext}`),
        templateJSON
      );
    } else if (ext === 'ts') {
      fs.writeFileSync(
        path.join(folderPath, `${folderName}/${folderName}.${ext}`),
        `import './${folderName}.scss';\r`
      );
    } else {
      fs.writeFileSync(
        path.join(folderPath, `${folderName}/${folderName}.${ext}`),
        ''
      );
    }
  }
};

// 인자로 폴더명이 들어온다
try {
  const ARG_COUNT_CHECK = process.argv.length - 2;
  // 인자가 없는 경우 :
  if (process.argv[2] === undefined) console.log('인자를 넣어주세요!');

  // 인자 하나인 경우 :
  // 이 인자가 존재하는 폴더명인지 체크하고,
  // 폴더가 아니면 폴더 생성
  if (ARG_COUNT_CHECK === 1) {
    const FOLDER_PATH = path.join(PATHS.pages, process.argv[2]);
    const IS_EXIST_FOLDER_BY_NAME = fs.existsSync(FOLDER_PATH);

    if (IS_EXIST_FOLDER_BY_NAME) {
      const result = getDirectoriesAllFiles(FOLDER_PATH);
      console.log('result', result);
    }

    makeFolder(process.argv[2]);
  }

  // 인자 두개인 경우
  // 첫 번째 인자의 폴더가 존재하는지와 위치를 찾고
  // 해당 위치 아래에 폴더 생성
  if (ARG_COUNT_CHECK === 2) {
    // 최종 폴더명을 만들어야 한다. 폴더 재귀탐색 후 경로 생성
    const getDirectoriesAllFiles = (directory, arrayOfFiles) => {
      const files = fs.readdirSync(directory);
      arrayOfFiles = arrayOfFiles || [];
      pages.push(directory);

      files.forEach((file) => {
        let filepath = path.join(directory, '\\', file);
        if (fs.statSync(filepath).isDirectory()) {
          arrayOfFiles = getDirectoriesAllFiles(
            directory + '\\' + file,
            arrayOfFiles
          );
        }
      });
      return arrayOfFiles;
    };

    let pages = [];
    getDirectoriesAllFiles(PATHS.pages);
    for (let i = 0; i < pages.length; i++) {
      if (pages[i].indexOf(process.argv[2]) !== -1) {
        makeFolder(process.argv[3], pages[i]);
        break;
      } else {
        console.log(`The file could not be found : ${process.argv[2]}`);
        break;
      }
    }
  }
} catch (err) {
  console.log(`Error!`);
  console.log(err);
}
