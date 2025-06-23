import { useEffect, useState } from "react";

export function PWATest() {
  const [pwaStatus, setPwaStatus] = useState<{
    isInstalled: boolean;
    canInstall: boolean;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    deferredPrompt: any;
    requirements: {
      https: boolean;
      manifest: boolean;
      serviceWorker: boolean;
      icons: boolean;
    };
  }>({
    isInstalled: false,
    canInstall: false,
    deferredPrompt: null,
    requirements: {
      https: false,
      manifest: false,
      serviceWorker: false,
      icons: false,
    },
  });

  useEffect(() => {
    // Check if app is already installed
    const isInstalled = window.matchMedia("(display-mode: standalone)").matches;

    // Check HTTPS
    const isHttps = window.location.protocol === "https:";

    // Check manifest
    const manifest = document.querySelector('link[rel="manifest"]');
    const hasManifest = !!manifest;

    // Check service worker
    const hasServiceWorker = "serviceWorker" in navigator;

    // Check icons
    const icons = document.querySelectorAll(
      'link[rel="icon"], link[rel="apple-touch-icon"]'
    );
    const hasIcons = icons.length > 0;

    setPwaStatus((prev) => ({
      ...prev,
      isInstalled,
      requirements: {
        https: isHttps,
        manifest: hasManifest,
        serviceWorker: hasServiceWorker,
        icons: hasIcons,
      },
    }));

    // Listen for install prompt
    window.addEventListener("beforeinstallprompt", (e) => {
      e.preventDefault();
      setPwaStatus((prev) => ({
        ...prev,
        canInstall: true,
        deferredPrompt: e,
      }));
    });

    // Listen for app installed
    window.addEventListener("appinstalled", () => {
      setPwaStatus((prev) => ({
        ...prev,
        isInstalled: true,
        canInstall: false,
      }));
    });
  }, []);

  const handleInstall = async () => {
    if (pwaStatus.deferredPrompt) {
      pwaStatus.deferredPrompt.prompt();
      const { outcome } = await pwaStatus.deferredPrompt.userChoice;
      if (outcome === "accepted") {
        setPwaStatus((prev) => ({
          ...prev,
          canInstall: false,
        }));
      }
    }
  };

  if (pwaStatus.isInstalled) {
    return (
      <div className="p-4 bg-green-100 border border-green-400 text-green-700 rounded">
        ✅ PWA is already installed!
      </div>
    );
  }

  return (
    <div className="p-4 bg-blue-100 border border-blue-400 text-blue-700 rounded">
      <h3 className="font-bold mb-2">PWA Installation Status</h3>

      <div className="space-y-1 text-sm">
        <div>🔒 HTTPS: {pwaStatus.requirements.https ? "✅" : "❌"}</div>
        <div>📄 Manifest: {pwaStatus.requirements.manifest ? "✅" : "❌"}</div>
        <div>
          ⚙️ Service Worker:{" "}
          {pwaStatus.requirements.serviceWorker ? "✅" : "❌"}
        </div>
        <div>🖼️ Icons: {pwaStatus.requirements.icons ? "✅" : "❌"}</div>
      </div>

      {pwaStatus.canInstall && (
        <button
          onClick={handleInstall}
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Install PWA
        </button>
      )}

      {!pwaStatus.canInstall && !pwaStatus.isInstalled && (
        <div className="mt-2 text-sm">
          ℹ️ Install prompt will appear when all requirements are met and user
          interacts with the app.
        </div>
      )}
    </div>
  );
}
