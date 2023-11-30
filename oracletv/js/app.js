const MobilehambugerBtn = document.getElementById("nav-mobile-hambuger-icon");
const MobileNavbarBody = document.getElementById("mobileNavBarid");
const UserAuthbtn = document.getElementById("UserAuthbtn");
const userAuthBtnsShowModal = document.getElementById("userAuthBtnsShowModal");

UserAuthbtn.addEventListener("click", () => {
  console.log("object clicked");
  userAuthBtnsShowModal.classList.toggle("userAuthBtns-active");
  setTimeout(() => {
    userAuthBtnsShowModal.classList.remove("userAuthBtns-active");
  }, 3000);
});

function userAuthBtnsShowModalStartUp() {
  userAuthBtnsShowModal.classList.add("userAuthBtns-active");
  setTimeout(() => {
    userAuthBtnsShowModal.classList.remove("userAuthBtns-active");
  }, 4000);
}
userAuthBtnsShowModalStartUp();
MobilehambugerBtn.addEventListener("click", () => {
  MobileNavbarBody.classList.toggle("mobileNavBar");
  console.log("mobile nav bar");
  setTimeout(() => {
    MobileNavbarBody.classList.remove("mobileNavBar");
  }, 5000);
});
