/// <reference lib="webworker" />
import {
  cleanupOutdatedCaches,
  createHandlerBoundToURL,
  precacheAndRoute,
} from "workbox-precaching";
import { clientsClaim } from "workbox-core";
import { NavigationRoute, registerRoute } from "workbox-routing";

declare let self: ServiceWorkerGlobalScope;

// self.__WB_MANIFEST is the default injection point
precacheAndRoute(self.__WB_MANIFEST);

// clean old assets
cleanupOutdatedCaches();

let allowlist: RegExp[] | undefined;
// in dev mode, we disable precaching to avoid caching issues
if (import.meta.env.DEV) allowlist = [/^\/$/];

// to allow work offline
registerRoute(
  new NavigationRoute(createHandlerBoundToURL("index.html"), { allowlist })
);

self.addEventListener("message", (event) => {
  if (!event.data && event.data.action === "triggerPush") return;

  const triggerPush = () => {
    const icon = event.data.icon || "";
    self.registration.showNotification("Alerta! - Redline X9", {
      body: "Os alertas: evento crítico zerado e taxa de acordo em queda estão ativos",
      icon,
      badge: icon,
      requireInteraction: true,
      //@ts-ignore
      actions: [
        {
          action: "something",
          title: "potato",
          icon: icon,
        },
      ],
    });
  };

  if (event.data.withSchedule) {
    const t = setTimeout(() => {
      triggerPush();
      clearTimeout(t);
    }, 5000);
  } else {
    triggerPush();
  }
});

self.skipWaiting();
clientsClaim();
