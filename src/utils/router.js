import { MainPage } from "../pages/MainPage";
import { LoginPage } from "../pages/LoginPage";
import { ProfilePage } from "../pages/ProfilePage";
import { userManager } from "./user";
import { NotFoundPage } from "../pages/NotFoundPage";
import {
  handleClick,
  handleLoginFormSubmit,
  handleProfileFormSubmit,
} from "./events";

//? 좋은 것은 설득의 과정을 거치지 않아도 전파가 된다.
//? 네이밍 컨밴션은 좋은 것에 대해서 이미 전파가 되어 있다.
const PATHNAME_COMPONENT_MAP = Object.freeze({
  "/": () => renderMainPage(),
  "/profile": () => renderProfilePage(),
  "/login": () => renderLoginPage(),
});

const HASH_PATHNAME_COMPONENT_MAP = Object.freeze({
  "#/": () => renderMainPage(),
  "#/profile": () => renderProfilePage(),
  "#/login": () => renderLoginPage(),
});

const historyRouteGuard = (path) => {
  const isLogin = userManager.isLogin();

  if (path === "/login" && isLogin) {
    return "/";
  }

  if (path === "/profile" && !isLogin) {
    return "/login";
  }

  return path;
};

const hashRouteGuard = (hash) => {
  const isLogin = userManager.isLogin();

  if (hash === "#/login" && isLogin) {
    return "#/";
  }

  if (hash === "#/profile" && !isLogin) {
    return "#/login";
  }

  return hash;
};

export const useRouter = () => {
  const historyRouter = (path) => {
    let pathname = path || window.location.pathname;

    const isInvalid = !Object.keys(PATHNAME_COMPONENT_MAP).includes(pathname);

    pathname = historyRouteGuard(pathname);

    const page = isInvalid
      ? renderNotFoundPage
      : PATHNAME_COMPONENT_MAP[pathname];

    history.pushState(null, "", pathname);

    page();
  };

  const hashRouter = (hash) => {
    let refinedHash = hash || window.location.hash;

    if (!refinedHash.includes("#")) {
      refinedHash = `#${hash}`;
    }

    const isInvalid = !Object.keys(HASH_PATHNAME_COMPONENT_MAP).includes(
      refinedHash,
    );

    refinedHash = hashRouteGuard(refinedHash);

    const page = isInvalid
      ? renderNotFoundPage
      : HASH_PATHNAME_COMPONENT_MAP[refinedHash];

    history.pushState(null, "", refinedHash);

    page();
  };

  return {
    router(value) {
      if (window.location.hash) {
        hashRouter(value);
      } else {
        historyRouter(value);
      }
    },
  };
};

const renderMainPage = () => {
  document.querySelector("#root").innerHTML = MainPage();
  document.querySelector("nav").addEventListener("click", handleClick);
};

const renderProfilePage = () => {
  document.querySelector("#root").innerHTML = ProfilePage();
  document.querySelector("nav").addEventListener("click", handleClick);
  document
    .querySelector("#profile-form")
    .addEventListener("submit", handleProfileFormSubmit);
};

const renderLoginPage = () => {
  document.querySelector("#root").innerHTML = LoginPage();
  document
    .querySelector("#login-form")
    .addEventListener("submit", handleLoginFormSubmit);
};

const renderNotFoundPage = () => {
  document.querySelector("#root").innerHTML = NotFoundPage();
};
