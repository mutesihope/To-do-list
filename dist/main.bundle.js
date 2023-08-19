/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const todos = [\n  {\n    task: 'Go to the gym',\n    completed: false,\n    id: 1,\n  },\n  {\n    task: 'Wash the car',\n    completed: false,\n    id: 2,\n  },\n];\n\nfunction dotolist() {\n  todos.sort((a, b) => a.index - b.index);\n\n  const autoCreate = document.getElementById('taskholder');\n\n  const ul = document.createElement('ul');\n\n  todos.forEach((todo) => {\n    const li = document.createElement('li');\n    li.textContent = todo.task;\n\n    if (todo.completed) {\n      li.classList.add('completed');\n    }\n\n    ul.appendChild(li);\n  });\n\n  autoCreate.appendChild(ul);\n}\n\ndocument.addEventListener('DOMContentLoaded', dotolist);\n\n\n//# sourceURL=webpack://webpack/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;