module.exports = (api, options) => {
  const utils = require("./tools/utils");
  const views = require("./tools/views");

  api.render("./template");

  var packages = {
    dependencies: {
      lodash: "^4.17.15"
    },
    devDependencies: {
      "node-sass": "^4.12.0",
      "sass-loader": "^8.0.0",
      "vue-svg-loader": "^0.15.0",
      "vue-template-compiler": "^2.6.10"
    }
  };

  var plLines = "";

  // if (options.addVuAxios) {
  packages["dependencies"]["axios"] = "^0.19.0";
  packages["dependencies"]["vue-axios"] = "^2.1.5";
  plLines += `\nimport axios from 'axios';
		\nimport VueAxios from 'vue-axios';
		\nVue.use(VueAxios, axios);`;
  // }

  // if (options.addGSAP) {
  packages["dependencies"]["gsap"] = "^3.0.4";
  // }

  // if (options.addTypograf) {
  packages["dependencies"]["typograf"] = "^6.10.0";
  plLines += views.typograph;
  // }

  plLines += `\nimport '@/assets/scss/app.scss';`;

  api.extendPackage(packages);


  api.onCreateComplete(() => {

    const mainPath = api.resolve(`./src/main.js`);
    const storePath = api.resolve(`./src/store/index.js`);
    const routerPath = api.resolve(`./src/router/index.js`);
    const homePagePath = api.resolve(`./src/views/Home.vue`);

    //* get main content
    let contentMain = utils.readFile(mainPath);
    console.log(contentMain);
    const lines = contentMain.split(/\r?\n/g).reverse();
    //* inject import main content
    const lastImportIndex = lines.findIndex(line => line.match(/^import/));
    lines[lastImportIndex] = plLines + lines[lastImportIndex];
    //* modify main content
    contentMain = lines.reverse().join("\n");
    utils.writeFile(mainPath, contentMain);
    // api.injectImports(api.entryFile, `./src/assets/scss/app.scss`);

    const appPath = api.resolve(`./src/App.vue`);

    //* get App content
    let appFile = utils.readFile(appPath);
    // * modify App content
    const appFileContent = appFile
      .replace(/^<template>[^]+<\/style>/, views.app)
      .trim();
    utils.writeFile(appPath, appFileContent);

    // * get router/index.js content
    let routerFile = utils.readFile(routerPath);
    // * modify router/index.js content
    const routerFileContent = routerFile
      .replace(/^import[^]+router/, views.router)
      .trim();
    utils.writeFile(routerPath, routerFileContent);

    // * get store/index.js content
    let storeFile = utils.readFile(storePath);
    // * modify store/index.js
    const storeFileContent = storeFile
      .replace(/^import[^]+\}\)/, views.store)
      .trim();
    utils.writeFile(storePath, storeFileContent);

    // * get HomePage content
    let homePageFile = utils.readFile(homePagePath);
    // * modify store/index.js
    const homePageContent = homePageFile
      .replace(/^<template>[^]+<\/script>/, views.homePage)
      .trim();
    utils.writeFile(homePagePath, homePageContent);


    // * delete extra files
    utils.removeFile(api.resolve("./src/components/HelloWorld.vue"));
    utils.removeFile(api.resolve("./src/views/About.vue"));
  });
};
