import React from "react";
import Home from "../pages/home/home";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import LaboratoryPage from "../pages/laboratory/laboratory-page";
import LaboratoryAbout from "../pages/laboratory/laboratorysAbout-page";
import ProjectPage from "../pages/projects/project-page";
import ProjectsAbout from "../pages/projects/projectsAbout-page";
import AboutPage from "../pages/about/about";

import Layout from "../components/layout/layout";
import PrivateRoute from "./private-route";

// Permission: "admin", "aluno", "orientador", "lider_lab", "parceiro"

const Routes = () => {
  const Routes = [
    {
      pathRota: "/",
      component: Home,
    },
    {
      pathRota: "/laboratorio/:id",
      component: LaboratoryPage,
    },
    {
      pathRota: "/laboratorios",
      component: LaboratoryAbout,
      //permission: ["lider_lab"],
    },
    {
      pathRota: "/projeto/:id",
      component: ProjectPage,
    },
    {
      pathRota: "/projeto",
      component: ProjectsAbout,
    },
    {
      pathRota: "/sobre",
      component: AboutPage,
    },
  ];
  return (
    <>
      <BrowserRouter basename="/">
        <Switch>
          <Layout>
            {Routes.map((rota) =>
              !rota.permission ? (
                <Route exact path={rota.pathRota} component={rota.component} />
              ) : (
                <PrivateRoute
                  rota={rota}
                  path={rota.pathRota}
                  component={rota.component}
                />
              )
            )}
          </Layout>
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default Routes;
