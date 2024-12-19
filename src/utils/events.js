import { useRouter } from "./router";
import { userManager } from "./user";

export const handleProfileFormSubmit = (e) => {
  e.preventDefault();
  const userDataMap = {
    username: "",
    email: "",
    bio: "",
  };

  document.querySelectorAll("input, textarea").forEach((element) => {
    const userDataKey = element.id;

    userDataMap[userDataKey] = element.value;

    userManager.setUserLocalStorage(userDataMap);
  });

  alert("프로필이 업데이트되었습니다.");
};

export const handleLoginFormSubmit = (e) => {
  e.preventDefault();
  const userName = document.body.querySelector(`#username`)?.value;

  userManager.setUserLocalStorage({ username: userName, email: "", bio: "" });

  const { router } = useRouter();
  router("/profile");
};

export const handleClick = (e) => {
  if (e.target.tagName === "A") {
    const { href } = e.target;
    let path = href.slice(href.lastIndexOf("/"));
    e.preventDefault();

    if (e.target.id === "logout") {
      userManager.resetUserLocalStorage();

      path = "/login";
    }

    const { router } = useRouter();

    router(path);
  }
};
