// Leave the Android platformVersion blank and set deviceName to a random string (Android deviceName is ignored by Appium but is still required)
// If we're using SauceLabs, set the Android deviceName and platformVersion to the latest supported SauceLabs device and version

var path = require("path");
const APP_ROOT_PATH = path.resolve(__dirname) + "/../";

const DEFAULT_ANDROID_DEVICE_NAME = process.env.SAUCE
    ? "Android GoogleAPI Emulator"
    : "emulator-5554";
const DEFAULT_ANDROID_PLATFORM_VERSION = process.env.SAUCE ? "7.1" : null;

const serverConfig = {
  path: "/wd/hub",
  host: process.env.APPIUM_HOST || "localhost",
  port: process.env.APPIUM_PORT || 4723,
  logLevel: "trace",
};

const androidOptions = Object.assign(
    {
      capabilities: {
        platformName: "Android",
        automationName: "UiAutomator2",
        deviceName:
            process.env.ANDROID_DEVICE_NAME || DEFAULT_ANDROID_DEVICE_NAME,
        platformVersion:
            process.env.ANDROID_PLATFORM_VERSION ||
            DEFAULT_ANDROID_PLATFORM_VERSION,
        app: APP_ROOT_PATH + "fingerprint_demo.apk",
      },
    },
    serverConfig
);

module.exports = {
  androidOptions,
};

