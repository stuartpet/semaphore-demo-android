const webdriverio = require("webdriverio");
const androidOptions = require("../helpers/caps").androidOptions;
const assert = require("chai").assert;

describe("Create Android session", function () {
  let browser;
  const contexts = ["NATIVE_APP", "WEBVIEW_chrome"];

  it("should login", async function () {
    browser = await webdriverio.remote(androidOptions);
    browser.setTimeout({ implicit: 30000 });

    //await browser.fingerPrint(11);

    const signInButton = await browser.$("//*[contains(@text,'Sign in')]");
    await signInButton.click();

    await browser.switchContext(contexts[1]);

    const companyField = await browser.$("#create_session_company_slug");
    await companyField.setValue("smart");

    const usernameField = await browser.$("#create_session_login");
    await usernameField.setValue("email@mail.com");

    const passwordField = await browser.$("#create_session_password");
    await passwordField.setValue("PASSWORD");

    const signInButton2 = await browser.$("//*[@type='submit']");
    await signInButton2.click();
    await signInButton2.click();
  });
});
