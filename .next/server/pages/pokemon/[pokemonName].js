module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("InXX");


/***/ }),

/***/ "2ZqG":
/***/ (function(module, exports) {

module.exports = require("unstated-next");

/***/ }),

/***/ "89Ff":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("UlNW");
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("vOcA");


const Button = _emotion_styled__WEBPACK_IMPORTED_MODULE_0___default.a.button`
  border: 1px solid;
  padding: 8px;
  font-weight: 600;
  letter-spacing: 0.03em;
  transition: background-color 0.2s linear;
  :hover {
    cursor: pointer;
  }
  ${props => props.isDanger ? `
    border: 1px solid ${_colors__WEBPACK_IMPORTED_MODULE_1__[/* BACKGROUND */ "a"].COLOR.danger};
    background-color: transparent;
    color:${_colors__WEBPACK_IMPORTED_MODULE_1__[/* BACKGROUND */ "a"].COLOR.danger};
    &:hover{
        background-color: ${_colors__WEBPACK_IMPORTED_MODULE_1__[/* BACKGROUND */ "a"].COLOR.danger};
        color: white;
        border: 1px solid  ${_colors__WEBPACK_IMPORTED_MODULE_1__[/* BACKGROUND */ "a"].COLOR.danger};
    }
  ` : `
    border: 1px solid ${_colors__WEBPACK_IMPORTED_MODULE_1__[/* BACKGROUND */ "a"].COLOR.secondary};
    background-color: transparent;
    color:white;
    &:hover{
        background-color: ${_colors__WEBPACK_IMPORTED_MODULE_1__[/* BACKGROUND */ "a"].COLOR.secondary};
        color: white;
        border: 1px solid  ${_colors__WEBPACK_IMPORTED_MODULE_1__[/* BACKGROUND */ "a"].COLOR.secondary};
    }
  `}
`;
/* harmony default export */ __webpack_exports__["a"] = (Button);

/***/ }),

/***/ "InXX":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return /* binding */ getServerSideProps; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./containers/PokemonContainer/PokemonContainer.tsx + 1 modules
var PokemonContainer = __webpack_require__("hlHU");

// EXTERNAL MODULE: external "@emotion/styled"
var styled_ = __webpack_require__("UlNW");
var styled_default = /*#__PURE__*/__webpack_require__.n(styled_);

// EXTERNAL MODULE: ./node_modules/react-responsive-modal/styles.css
var styles = __webpack_require__("fvWP");

// EXTERNAL MODULE: external "react-responsive-modal"
var external_react_responsive_modal_ = __webpack_require__("tAqf");

// EXTERNAL MODULE: ./utils/useLocalStorage.ts
var useLocalStorage = __webpack_require__("zP4l");

// EXTERNAL MODULE: external "react-toastify"
var external_react_toastify_ = __webpack_require__("oAEb");

// EXTERNAL MODULE: ./components/Button/Button.tsx
var Button = __webpack_require__("89Ff");

// EXTERNAL MODULE: ./components/colors.ts
var colors = __webpack_require__("vOcA");

// CONCATENATED MODULE: ./components/OverlayLoading/OverlayLoading.tsx
var __jsx = external_react_default.a.createElement;


const Spinner = styled_default()("div")`
  display: inline-block;
  width: 80px;
  height: 80px;
  :after {
    content: " ";
    display: block;
    width: 64px;
    height: 64px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid white;
    border-color: white transparent white transparent;
    animation: lds-dual-ring 1.2s linear infinite;
  }
  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
const Container = styled_default()("div")`
  display: flex;
  justify-content: center;
  padding: 40% 0;
`;

const OverlayLoading = () => {
  return __jsx(Container, null, __jsx(Spinner, null));
};

/* harmony default export */ var OverlayLoading_OverlayLoading = (OverlayLoading);
// CONCATENATED MODULE: ./pages/pokemon/[pokemonName].tsx
var _pokemonName_jsx = external_react_default.a.createElement;










const Box = styled_default.a.div`
  margin: 8px 4px;
  padding: 16px;
  border: 1px solid ${colors["b" /* BOX */].COLOR.border};
  .wrapper {
    display: flex;
    flex-direction: column;
    text-align: center;
  }
`;
const ModalStyleSuccess = {
  modal: {
    background: colors["a" /* BACKGROUND */].COLOR.success
  }
};
const ModalStyleDanger = {
  modal: {
    background: colors["a" /* BACKGROUND */].COLOR.danger
  }
};
const AlertMessage = styled_default.a.p`
  background-color: ${colors["a" /* BACKGROUND */].COLOR.danger};
  color: white;
  margin-top: 8px;
  padding: 8px;
`;
async function getServerSideProps(context) {
  return {
    props: {
      pokemonName: context.query.pokemonName
    }
  };
}

const Detail = props => {
  var _pokemonDetail$sprite, _pokemonDetail$sprite2;

  const [ownedPokemon, setOwnedPokemon] = Object(useLocalStorage["a" /* default */])("ownedPokemon", "");
  const {
    0: pokemonName,
    1: setPokemonName
  } = Object(external_react_["useState"])("");
  const {
    0: openSuccessModal,
    1: setOpenSuccessModal
  } = Object(external_react_["useState"])(false);
  const {
    0: openFailModal,
    1: setOpenFailModal
  } = Object(external_react_["useState"])(false);
  const {
    0: alertMessage,
    1: setAlertMessage
  } = Object(external_react_["useState"])("");
  const pokemonContainer = PokemonContainer["a" /* default */].useContainer();
  const {
    fetchPokemonDetail,
    pokemonDetail,
    fetchingPokemonDetail
  } = pokemonContainer;
  Object(external_react_["useEffect"])(() => {
    fetchPokemonDetail(props.pokemonName);
  }, []);

  const handleCatchButtonClick = () => {
    /**
     *
     * @param probabilityChance {number}, it is a number between 0 - 10 with 10 as 100%
     */
    const probability = ((probabilityChance = 0.5) => {
      return !!probabilityChance && Math.random() <= probabilityChance;
    })();

    if (probability) {
      setOpenSuccessModal(true);
    } else {
      setOpenFailModal(true);
    }
  };

  const renderModal = () => {
    const savePokemon = () => {
      const isNickNameExist = () => {
        return ownedPokemon.some(item => item.nickName === pokemonName);
      };

      if (ownedPokemon.length > 0 && isNickNameExist()) {
        setAlertMessage("Duh lupa ya? kan yang namanya itu udah ada, coba nickname lain gih");
        return;
      }

      const catchedPokemon = {
        name: pokemonDetail.name,
        nickName: pokemonName,
        image: pokemonDetail.sprites.front_default
      };
      setOwnedPokemon(prevState => {
        if (prevState) {
          return [...prevState, catchedPokemon];
        }

        return [catchedPokemon];
      });
      external_react_toastify_["toast"].success("Wah berhasil berhasil, cek profil anda gan!", {
        position: "top-center",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined
      });
      setPokemonName("");
      setOpenSuccessModal(false);
    };

    return _pokemonName_jsx(external_react_default.a.Fragment, null, _pokemonName_jsx(external_react_responsive_modal_["Modal"], {
      styles: ModalStyleSuccess,
      open: openSuccessModal,
      onClose: () => {
        setPokemonName("");
        setOpenSuccessModal(false);
      }
    }, _pokemonName_jsx("h2", null, "Demi Apa??"), _pokemonName_jsx("h3", null, "Kamu Berhasil Menangkapnya"), _pokemonName_jsx("h4", null, "Beri pokemon mu nama tuan, biar semakin wantap wantap"), _pokemonName_jsx("div", null, _pokemonName_jsx("input", {
      type: "text",
      value: pokemonName,
      placeholder: "Nama Pokemon mu tuan",
      onChange: event => {
        setAlertMessage("");
        setPokemonName(event.target.value);
      }
    }), _pokemonName_jsx("button", {
      onClick: savePokemon
    }, "Simpan")), alertMessage && _pokemonName_jsx(AlertMessage, null, alertMessage)), _pokemonName_jsx(external_react_responsive_modal_["Modal"], {
      styles: ModalStyleDanger,
      open: openFailModal,
      onClose: () => setOpenFailModal(false)
    }, _pokemonName_jsx("h2", null, "Gagal"), _pokemonName_jsx("h3", null, "Sayang sekali coba lagi sampai sayang,"), _pokemonName_jsx("h3", null, "Eh sampai dapat maksudnya")));
  };

  return _pokemonName_jsx(Box, null, renderModal(), !fetchingPokemonDetail && pokemonDetail && _pokemonName_jsx("div", {
    className: "wrapper"
  }, _pokemonName_jsx("div", null, _pokemonName_jsx("img", {
    src: pokemonDetail === null || pokemonDetail === void 0 ? void 0 : (_pokemonDetail$sprite = pokemonDetail.sprites) === null || _pokemonDetail$sprite === void 0 ? void 0 : _pokemonDetail$sprite.front_default,
    alt: pokemonDetail === null || pokemonDetail === void 0 ? void 0 : (_pokemonDetail$sprite2 = pokemonDetail.sprites) === null || _pokemonDetail$sprite2 === void 0 ? void 0 : _pokemonDetail$sprite2.front_default,
    height: 96,
    width: 96
  })), _pokemonName_jsx("div", null, _pokemonName_jsx("div", null, _pokemonName_jsx("h2", null, "Name"), _pokemonName_jsx("p", null, pokemonDetail.name)), _pokemonName_jsx("div", null, _pokemonName_jsx(Button["a" /* default */], {
    onClick: handleCatchButtonClick
  }, "Catch")), _pokemonName_jsx("div", null, _pokemonName_jsx("h2", null, "Types"), pokemonDetail.types.map(type => {
    return _pokemonName_jsx("p", null, type.type.name);
  })), _pokemonName_jsx("div", null, _pokemonName_jsx("h2", null, "Moves"), pokemonDetail.moves.map(move => {
    return _pokemonName_jsx("p", null, move.move.name);
  }))), _pokemonName_jsx("div", null)), fetchingPokemonDetail && _pokemonName_jsx(OverlayLoading_OverlayLoading, null));
};

/* harmony default export */ var _pokemonName_ = __webpack_exports__["default"] = (Detail);

/***/ }),

/***/ "UlNW":
/***/ (function(module, exports) {

module.exports = require("@emotion/styled");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "fvWP":
/***/ (function(module, exports) {



/***/ }),

/***/ "hlHU":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: external "unstated-next"
var external_unstated_next_ = __webpack_require__("2ZqG");

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__("zr5I");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./services/axios/index.ts

const BASE_URL = "https://pokeapi.co/api/v2/";
const apiClient = external_axios_default.a.create({
  baseURL: BASE_URL
});
apiClient.interceptors.response.use(undefined, error => {
  // Errors handling
  const {
    response
  } = error;
  const {
    data
  } = response;

  if (data) {
    console.error(data);
  }
});
/* harmony default export */ var axios = (apiClient);
// CONCATENATED MODULE: ./containers/PokemonContainer/PokemonContainer.tsx
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const DEFAULT_LIMIT = 20;

const Container = () => {
  const {
    0: testState,
    1: setTestState
  } = Object(external_react_["useState"])("asdas");
  const {
    0: fetchingPokemons,
    1: setFetchingPokemons
  } = Object(external_react_["useState"])(false);
  const {
    0: fetchingPokemonDetail,
    1: setFetchingPokemonDetail
  } = Object(external_react_["useState"])(false);
  const {
    0: pokemons,
    1: setPokemons
  } = Object(external_react_["useState"])({
    count: 0,
    next: null,
    previous: null,
    results: []
  });
  const {
    0: pokemonDetail,
    1: setPokemonDetail
  } = Object(external_react_["useState"])(null);

  const fetchPokemon = async () => {
    try {
      setFetchingPokemons(true);
      if (!pokemons.next && pokemons.previous) return;

      if (!pokemons.previous) {
        const response = await axios.get(`pokemon?limit=${DEFAULT_LIMIT}`);
        setPokemons(response.data);
      }

      if (pokemons.next) {
        const response = await external_axios_default.a.get(pokemons.next);
        setPokemons(prevState => {
          return _objectSpread(_objectSpread({}, prevState), {}, {
            previous: response.data.previous,
            next: response.data.next,
            results: [...prevState.results, ...response.data.results]
          });
        });
      }
    } catch (error) {
      console.error(error);
    } finally {
      setFetchingPokemons(false);
    }
  };

  const fetchPokemonDetail = async name => {
    try {
      setFetchingPokemonDetail(true);
      const response = await axios.get(`pokemon/${name}`);
      setPokemonDetail(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setFetchingPokemonDetail(false);
    }
  };

  return {
    testState,
    setTestState,
    fetchPokemon,
    pokemons,
    fetchingPokemons,
    fetchPokemonDetail,
    pokemonDetail,
    fetchingPokemonDetail
  };
};

const PokemonContainer = Object(external_unstated_next_["createContainer"])(Container);
/* harmony default export */ var PokemonContainer_PokemonContainer = __webpack_exports__["a"] = (PokemonContainer);

/***/ }),

/***/ "oAEb":
/***/ (function(module, exports) {

module.exports = require("react-toastify");

/***/ }),

/***/ "tAqf":
/***/ (function(module, exports) {

module.exports = require("react-responsive-modal");

/***/ }),

/***/ "vOcA":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return TEXT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BACKGROUND; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return BOX; });
const TEXT = {
  COLOR: {
    main: "#ececec"
  }
};
const BACKGROUND = {
  COLOR: {
    main: "#30475e",
    secondary: "#f2a365",
    danger: "#dd4444",
    success: "#4db875"
  }
};
const BOX = {
  COLOR: {
    border: "#f2a365"
  }
};

/***/ }),

/***/ "zP4l":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function useLocalStorage(key, initialValue) {
  // State to store our value
  // Pass initial state function to useState so logic is only executed once
  const {
    0: storedValue,
    1: setStoredValue
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(undefined);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const getInitialState = () => {
      try {
        // Get from local storage by key
        const item = window.localStorage.getItem(key); // Parse stored json or if none return initialValue

        setStoredValue(item ? JSON.parse(item) : initialValue);
      } catch (error) {
        // If error also return initialValue
        console.log(error);
        setStoredValue(initialValue);
      }
    };

    getInitialState();
  }, []); // Return a wrapped version of useState's setter function that ...
  // ... persists the new value to localStorage.

  const setValue = value => {
    try {
      // Allow value to be a function so we have same API as useState
      const valueToStore = value instanceof Function ? value(storedValue) : value; // Save state

      setStoredValue(valueToStore); // Save to local storage

      localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      // A more advanced implementation would handle the error case
      console.log(error);
    }
  };

  return [storedValue, setValue];
}

/* harmony default export */ __webpack_exports__["a"] = (useLocalStorage);

/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });