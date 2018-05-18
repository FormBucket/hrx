import { loadable } from "hrx";

let loader = thunk =>
  loadable({
    loader: thunk
  });

let routes = [
  {
    path: "/",
    component: loader(() => import("./HomePage"))
  },
  {
    path: "*",
    component: loader(() => import("./PageNotFound"))
  }
];

export default routes;
