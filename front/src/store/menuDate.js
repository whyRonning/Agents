let menuDate = {
  DateAboutMenu: [
    {
      Name: "Главная",
      Symbol: "/",
      Src: ""
    },
    {
      Name: "logo",
      Symbol: "img",
      Src:
        "https://upload.wikimedia.org/wikipedia/commons/4/42/Blue_sky%2C_white-gray_clouds.JPG"
    },
    {
      Name: "О нас",
      Symbol: "#",
      Src: "about"
    },
    {
      Name: "Наша команда",
      Symbol: "#",
      Src: "team"
    },
    {
      Name: "Объекты",
      Symbol: "/",
      Src: "objects"
    },
    {
      Name: "Преимущества",
      Symbol: "#",
      Src: "adv"
    },
    {
      Name: "Контакты",
      Symbol: "#",
      Src: "cont"
    }
  ],
  isMenuVisible: false
};
let menuDateReducer = (state = menuDate, action) => {
  switch (action.type) {
    case "UpdateMenu":
      return { ...state, isMenuVisible: !state.isMenuVisible };
    default:
      return state;
  }
};

export let menuState = () => ({
  type: "UpdateMenu"
});
export default menuDateReducer;
