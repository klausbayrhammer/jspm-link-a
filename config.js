System.config({
  baseURL: "/",
  defaultJSExtensions: true,
  transpiler: "none",
  paths: {
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },

  map: {
    "klausbayrhammer/jspm-link-b": "github:klausbayrhammer/jspm-link-b@master",
    "klausbayrhammer/jspm-link-d": "github:klausbayrhammer/jspm-link-d@master",
    "github:klausbayrhammer/jspm-link-b@master": {
      "jspm-link-c": "github:klausbayrhammer/jspm-link-c@0.0.1"
    }
  }
});
