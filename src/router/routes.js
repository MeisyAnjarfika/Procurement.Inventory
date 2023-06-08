
const routes = [
    {
      path: "/",
      name: "/",
      redirect: "/dashboard-default",
    },
    {
      path: "/dashboard-default",
      name: "Dashboard",
      component: Dashboard,
    },

];

export default routes;
