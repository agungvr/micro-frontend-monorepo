import {
  registerApplication,
  start,
  addErrorHandler,
  getAppStatus,
  LOAD_ERROR,
} from "single-spa";
import {
  constructApplications,
  constructRoutes,
  constructLayoutEngine,
} from "single-spa-layout";
import PubSub from "pubsub-js";
import Layout from "./microfrontends-layout.html";

const publish = (event, data) => PubSub.publish(event, data);
const subscribe = (event, callback) => PubSub.subscribe(event, callback);

const routes = constructRoutes(Layout, {
  loaders: {},
  errors: {},
  props: {
    publish,
    subscribe,
  },
});

addErrorHandler((err) => {
  if (getAppStatus(err.appOrParcelName) === LOAD_ERROR) {
    System.delete(System.resolve(err.appOrParcelName));
  }
});

const applications = constructApplications({
  routes,
  loadApp: ({ name }) => System.import(name),
});

const layoutEngine = constructLayoutEngine({
  routes,
  applications,
  active: false,
});

applications.forEach(registerApplication);
layoutEngine.activate();
start();
