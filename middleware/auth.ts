export default defineNuxtRouteMiddleware((to, from) => {
  console.log("hello from middleware");

  // const isLoggedIn = false;
  // // to is the destination route
  // if (isLoggedIn) {
  //   // redirect to the page we want to go
  //   return navigateTo(to.fullPath);
  // }
  // // otherwise, redirect to the login page
  // return navigateTo("/login")
});
