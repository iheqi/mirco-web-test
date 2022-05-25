import { registerApplication, start } from 'single-spa';

export const registerApp = (apps) => {
  apps.forEach(app => {
    registerApplication(app);
  });

  start();
} 