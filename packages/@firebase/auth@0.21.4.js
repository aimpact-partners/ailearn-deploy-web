System.register(["@firebase/util@1.9.3","@firebase/component@0.6.4","@firebase/logger@0.4.0","idb@7.0.1","@firebase/app@0.9.4","tslib@2.5.0"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["@firebase/util","1.9.3"],["@firebase/component","0.6.4"],["@firebase/logger","0.4.0"],["idb","7.0.1"],["@firebase/app","0.9.4"],["tslib","2.5.0"],["@firebase/auth","0.21.4"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('@firebase/util@1.9.3', dep), dep => dependencies.set('@firebase/component@0.6.4', dep), dep => dependencies.set('@firebase/logger@0.4.0', dep), dep => dependencies.set('idb@7.0.1', dep), dep => dependencies.set('@firebase/app@0.9.4', dep), dep => dependencies.set('tslib@2.5.0', dep)],
execute: function() {
// Prevent esbuild from considering the context to be amd
const define = void 0;
const module = {};

const code = (module, require) => {
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name2 in all) __defProp(target, name2, {
    get: all[name2],
    enumerable: true
  });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from)) if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
      get: () => from[key],
      enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
    });
  }
  return to;
};
var __toCommonJS = mod => __copyProps(__defProp({}, "__esModule", {
  value: true
}), mod);

// .beyond/uimport/temp/@firebase/auth.0.21.4.js
var auth_0_21_4_exports = {};
__export(auth_0_21_4_exports, {
  ActionCodeOperation: () => ActionCodeOperation,
  ActionCodeURL: () => ActionCodeURL,
  AuthCredential: () => AuthCredential,
  AuthErrorCodes: () => AUTH_ERROR_CODES_MAP_DO_NOT_USE_INTERNALLY,
  EmailAuthCredential: () => EmailAuthCredential,
  EmailAuthProvider: () => EmailAuthProvider,
  FacebookAuthProvider: () => FacebookAuthProvider,
  FactorId: () => FactorId,
  GithubAuthProvider: () => GithubAuthProvider,
  GoogleAuthProvider: () => GoogleAuthProvider,
  OAuthCredential: () => OAuthCredential,
  OAuthProvider: () => OAuthProvider,
  OperationType: () => OperationType,
  PhoneAuthCredential: () => PhoneAuthCredential,
  PhoneAuthProvider: () => PhoneAuthProvider,
  PhoneMultiFactorGenerator: () => PhoneMultiFactorGenerator,
  ProviderId: () => ProviderId,
  RecaptchaVerifier: () => RecaptchaVerifier,
  SAMLAuthProvider: () => SAMLAuthProvider,
  SignInMethod: () => SignInMethod,
  TwitterAuthProvider: () => TwitterAuthProvider,
  applyActionCode: () => applyActionCode,
  beforeAuthStateChanged: () => beforeAuthStateChanged,
  browserLocalPersistence: () => browserLocalPersistence,
  browserPopupRedirectResolver: () => browserPopupRedirectResolver,
  browserSessionPersistence: () => browserSessionPersistence,
  checkActionCode: () => checkActionCode,
  confirmPasswordReset: () => confirmPasswordReset,
  connectAuthEmulator: () => connectAuthEmulator,
  createUserWithEmailAndPassword: () => createUserWithEmailAndPassword,
  debugErrorMap: () => debugErrorMap,
  deleteUser: () => deleteUser,
  fetchSignInMethodsForEmail: () => fetchSignInMethodsForEmail,
  getAdditionalUserInfo: () => getAdditionalUserInfo,
  getAuth: () => getAuth,
  getIdToken: () => getIdToken,
  getIdTokenResult: () => getIdTokenResult,
  getMultiFactorResolver: () => getMultiFactorResolver,
  getRedirectResult: () => getRedirectResult,
  inMemoryPersistence: () => inMemoryPersistence,
  indexedDBLocalPersistence: () => indexedDBLocalPersistence,
  initializeAuth: () => initializeAuth,
  isSignInWithEmailLink: () => isSignInWithEmailLink,
  linkWithCredential: () => linkWithCredential,
  linkWithPhoneNumber: () => linkWithPhoneNumber,
  linkWithPopup: () => linkWithPopup,
  linkWithRedirect: () => linkWithRedirect,
  multiFactor: () => multiFactor,
  onAuthStateChanged: () => onAuthStateChanged,
  onIdTokenChanged: () => onIdTokenChanged,
  parseActionCodeURL: () => parseActionCodeURL,
  prodErrorMap: () => prodErrorMap,
  reauthenticateWithCredential: () => reauthenticateWithCredential,
  reauthenticateWithPhoneNumber: () => reauthenticateWithPhoneNumber,
  reauthenticateWithPopup: () => reauthenticateWithPopup,
  reauthenticateWithRedirect: () => reauthenticateWithRedirect,
  reload: () => reload,
  sendEmailVerification: () => sendEmailVerification,
  sendPasswordResetEmail: () => sendPasswordResetEmail,
  sendSignInLinkToEmail: () => sendSignInLinkToEmail,
  setPersistence: () => setPersistence,
  signInAnonymously: () => signInAnonymously,
  signInWithCredential: () => signInWithCredential,
  signInWithCustomToken: () => signInWithCustomToken,
  signInWithEmailAndPassword: () => signInWithEmailAndPassword,
  signInWithEmailLink: () => signInWithEmailLink,
  signInWithPhoneNumber: () => signInWithPhoneNumber,
  signInWithPopup: () => signInWithPopup,
  signInWithRedirect: () => signInWithRedirect,
  signOut: () => signOut,
  unlink: () => unlink,
  updateCurrentUser: () => updateCurrentUser,
  updateEmail: () => updateEmail,
  updatePassword: () => updatePassword,
  updatePhoneNumber: () => updatePhoneNumber,
  updateProfile: () => updateProfile,
  useDeviceLanguage: () => useDeviceLanguage,
  verifyBeforeUpdateEmail: () => verifyBeforeUpdateEmail,
  verifyPasswordResetCode: () => verifyPasswordResetCode
});
module.exports = __toCommonJS(auth_0_21_4_exports);

// node_modules/@firebase/auth/dist/esm2017/index-e3f1fbba.js
var import_util = require("@firebase/util@1.9.3");
var import_app = require("@firebase/app@0.9.4");
var import_logger = require("@firebase/logger@0.4.0");
var import_tslib = require("tslib@2.5.0");
var import_component = require("@firebase/component@0.6.4");
var FactorId = {
  PHONE: "phone"
};
var ProviderId = {
  FACEBOOK: "facebook.com",
  GITHUB: "github.com",
  GOOGLE: "google.com",
  PASSWORD: "password",
  PHONE: "phone",
  TWITTER: "twitter.com"
};
var SignInMethod = {
  EMAIL_LINK: "emailLink",
  EMAIL_PASSWORD: "password",
  FACEBOOK: "facebook.com",
  GITHUB: "github.com",
  GOOGLE: "google.com",
  PHONE: "phone",
  TWITTER: "twitter.com"
};
var OperationType = {
  LINK: "link",
  REAUTHENTICATE: "reauthenticate",
  SIGN_IN: "signIn"
};
var ActionCodeOperation = {
  EMAIL_SIGNIN: "EMAIL_SIGNIN",
  PASSWORD_RESET: "PASSWORD_RESET",
  RECOVER_EMAIL: "RECOVER_EMAIL",
  REVERT_SECOND_FACTOR_ADDITION: "REVERT_SECOND_FACTOR_ADDITION",
  VERIFY_AND_CHANGE_EMAIL: "VERIFY_AND_CHANGE_EMAIL",
  VERIFY_EMAIL: "VERIFY_EMAIL"
};
function _debugErrorMap() {
  return {
    ["admin-restricted-operation"]: "This operation is restricted to administrators only.",
    ["argument-error"]: "",
    ["app-not-authorized"]: "This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.",
    ["app-not-installed"]: "The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.",
    ["captcha-check-failed"]: "The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.",
    ["code-expired"]: "The SMS code has expired. Please re-send the verification code to try again.",
    ["cordova-not-ready"]: "Cordova framework is not ready.",
    ["cors-unsupported"]: "This browser is not supported.",
    ["credential-already-in-use"]: "This credential is already associated with a different user account.",
    ["custom-token-mismatch"]: "The custom token corresponds to a different audience.",
    ["requires-recent-login"]: "This operation is sensitive and requires recent authentication. Log in again before retrying this request.",
    ["dependent-sdk-initialized-before-auth"]: "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.",
    ["dynamic-link-not-activated"]: "Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.",
    ["email-change-needs-verification"]: "Multi-factor users must always have a verified email.",
    ["email-already-in-use"]: "The email address is already in use by another account.",
    ["emulator-config-failed"]: 'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',
    ["expired-action-code"]: "The action code has expired.",
    ["cancelled-popup-request"]: "This operation has been cancelled due to another conflicting popup being opened.",
    ["internal-error"]: "An internal AuthError has occurred.",
    ["invalid-app-credential"]: "The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.",
    ["invalid-app-id"]: "The mobile app identifier is not registed for the current project.",
    ["invalid-user-token"]: "This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.",
    ["invalid-auth-event"]: "An internal AuthError has occurred.",
    ["invalid-verification-code"]: "The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.",
    ["invalid-continue-uri"]: "The continue URL provided in the request is invalid.",
    ["invalid-cordova-configuration"]: "The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.",
    ["invalid-custom-token"]: "The custom token format is incorrect. Please check the documentation.",
    ["invalid-dynamic-link-domain"]: "The provided dynamic link domain is not configured or authorized for the current project.",
    ["invalid-email"]: "The email address is badly formatted.",
    ["invalid-emulator-scheme"]: "Emulator URL must start with a valid scheme (http:// or https://).",
    ["invalid-api-key"]: "Your API key is invalid, please check you have copied it correctly.",
    ["invalid-cert-hash"]: "The SHA-1 certificate hash provided is invalid.",
    ["invalid-credential"]: "The supplied auth credential is malformed or has expired.",
    ["invalid-message-payload"]: "The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.",
    ["invalid-multi-factor-session"]: "The request does not contain a valid proof of first factor successful sign-in.",
    ["invalid-oauth-provider"]: "EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.",
    ["invalid-oauth-client-id"]: "The OAuth client ID provided is either invalid or does not match the specified API key.",
    ["unauthorized-domain"]: "This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.",
    ["invalid-action-code"]: "The action code is invalid. This can happen if the code is malformed, expired, or has already been used.",
    ["wrong-password"]: "The password is invalid or the user does not have a password.",
    ["invalid-persistence-type"]: "The specified persistence type is invalid. It can only be local, session or none.",
    ["invalid-phone-number"]: "The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].",
    ["invalid-provider-id"]: "The specified provider ID is invalid.",
    ["invalid-recipient-email"]: "The email corresponding to this action failed to send as the provided recipient email address is invalid.",
    ["invalid-sender"]: "The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.",
    ["invalid-verification-id"]: "The verification ID used to create the phone auth credential is invalid.",
    ["invalid-tenant-id"]: "The Auth instance's tenant ID is invalid.",
    ["login-blocked"]: "Login blocked by user-provided method: {$originalMessage}",
    ["missing-android-pkg-name"]: "An Android Package Name must be provided if the Android App is required to be installed.",
    ["auth-domain-config-required"]: "Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.",
    ["missing-app-credential"]: "The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.",
    ["missing-verification-code"]: "The phone auth credential was created with an empty SMS verification code.",
    ["missing-continue-uri"]: "A continue URL must be provided in the request.",
    ["missing-iframe-start"]: "An internal AuthError has occurred.",
    ["missing-ios-bundle-id"]: "An iOS Bundle ID must be provided if an App Store ID is provided.",
    ["missing-or-invalid-nonce"]: "The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.",
    ["missing-multi-factor-info"]: "No second factor identifier is provided.",
    ["missing-multi-factor-session"]: "The request is missing proof of first factor successful sign-in.",
    ["missing-phone-number"]: "To send verification codes, provide a phone number for the recipient.",
    ["missing-verification-id"]: "The phone auth credential was created with an empty verification ID.",
    ["app-deleted"]: "This instance of FirebaseApp has been deleted.",
    ["multi-factor-info-not-found"]: "The user does not have a second factor matching the identifier provided.",
    ["multi-factor-auth-required"]: "Proof of ownership of a second factor is required to complete sign-in.",
    ["account-exists-with-different-credential"]: "An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.",
    ["network-request-failed"]: "A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.",
    ["no-auth-event"]: "An internal AuthError has occurred.",
    ["no-such-provider"]: "User was not linked to an account with the given provider.",
    ["null-user"]: "A null user object was provided as the argument for an operation which requires a non-null user object.",
    ["operation-not-allowed"]: "The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.",
    ["operation-not-supported-in-this-environment"]: 'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',
    ["popup-blocked"]: "Unable to establish a connection with the popup. It may have been blocked by the browser.",
    ["popup-closed-by-user"]: "The popup has been closed by the user before finalizing the operation.",
    ["provider-already-linked"]: "User can only be linked to one identity for the given provider.",
    ["quota-exceeded"]: "The project's quota for this operation has been exceeded.",
    ["redirect-cancelled-by-user"]: "The redirect operation has been cancelled by the user before finalizing.",
    ["redirect-operation-pending"]: "A redirect sign-in operation is already pending.",
    ["rejected-credential"]: "The request contains malformed or mismatching credentials.",
    ["second-factor-already-in-use"]: "The second factor is already enrolled on this account.",
    ["maximum-second-factor-count-exceeded"]: "The maximum allowed number of second factors on a user has been exceeded.",
    ["tenant-id-mismatch"]: "The provided tenant ID does not match the Auth instance's tenant ID",
    ["timeout"]: "The operation has timed out.",
    ["user-token-expired"]: "The user's credential is no longer valid. The user must sign in again.",
    ["too-many-requests"]: "We have blocked all requests from this device due to unusual activity. Try again later.",
    ["unauthorized-continue-uri"]: "The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.",
    ["unsupported-first-factor"]: "Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.",
    ["unsupported-persistence-type"]: "The current environment does not support the specified persistence type.",
    ["unsupported-tenant-operation"]: "This operation is not supported in a multi-tenant context.",
    ["unverified-email"]: "The operation requires a verified email.",
    ["user-cancelled"]: "The user did not grant your application the permissions it requested.",
    ["user-not-found"]: "There is no user record corresponding to this identifier. The user may have been deleted.",
    ["user-disabled"]: "The user account has been disabled by an administrator.",
    ["user-mismatch"]: "The supplied credentials do not correspond to the previously signed in user.",
    ["user-signed-out"]: "",
    ["weak-password"]: "The password must be 6 characters long or more.",
    ["web-storage-unsupported"]: "This browser is not supported or 3rd party cookies and data may be disabled.",
    ["already-initialized"]: "initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance."
  };
}
function _prodErrorMap() {
  return {
    ["dependent-sdk-initialized-before-auth"]: "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."
  };
}
var debugErrorMap = _debugErrorMap;
var prodErrorMap = _prodErrorMap;
var _DEFAULT_AUTH_ERROR_FACTORY = new import_util.ErrorFactory("auth", "Firebase", _prodErrorMap());
var AUTH_ERROR_CODES_MAP_DO_NOT_USE_INTERNALLY = {
  ADMIN_ONLY_OPERATION: "auth/admin-restricted-operation",
  ARGUMENT_ERROR: "auth/argument-error",
  APP_NOT_AUTHORIZED: "auth/app-not-authorized",
  APP_NOT_INSTALLED: "auth/app-not-installed",
  CAPTCHA_CHECK_FAILED: "auth/captcha-check-failed",
  CODE_EXPIRED: "auth/code-expired",
  CORDOVA_NOT_READY: "auth/cordova-not-ready",
  CORS_UNSUPPORTED: "auth/cors-unsupported",
  CREDENTIAL_ALREADY_IN_USE: "auth/credential-already-in-use",
  CREDENTIAL_MISMATCH: "auth/custom-token-mismatch",
  CREDENTIAL_TOO_OLD_LOGIN_AGAIN: "auth/requires-recent-login",
  DEPENDENT_SDK_INIT_BEFORE_AUTH: "auth/dependent-sdk-initialized-before-auth",
  DYNAMIC_LINK_NOT_ACTIVATED: "auth/dynamic-link-not-activated",
  EMAIL_CHANGE_NEEDS_VERIFICATION: "auth/email-change-needs-verification",
  EMAIL_EXISTS: "auth/email-already-in-use",
  EMULATOR_CONFIG_FAILED: "auth/emulator-config-failed",
  EXPIRED_OOB_CODE: "auth/expired-action-code",
  EXPIRED_POPUP_REQUEST: "auth/cancelled-popup-request",
  INTERNAL_ERROR: "auth/internal-error",
  INVALID_API_KEY: "auth/invalid-api-key",
  INVALID_APP_CREDENTIAL: "auth/invalid-app-credential",
  INVALID_APP_ID: "auth/invalid-app-id",
  INVALID_AUTH: "auth/invalid-user-token",
  INVALID_AUTH_EVENT: "auth/invalid-auth-event",
  INVALID_CERT_HASH: "auth/invalid-cert-hash",
  INVALID_CODE: "auth/invalid-verification-code",
  INVALID_CONTINUE_URI: "auth/invalid-continue-uri",
  INVALID_CORDOVA_CONFIGURATION: "auth/invalid-cordova-configuration",
  INVALID_CUSTOM_TOKEN: "auth/invalid-custom-token",
  INVALID_DYNAMIC_LINK_DOMAIN: "auth/invalid-dynamic-link-domain",
  INVALID_EMAIL: "auth/invalid-email",
  INVALID_EMULATOR_SCHEME: "auth/invalid-emulator-scheme",
  INVALID_IDP_RESPONSE: "auth/invalid-credential",
  INVALID_MESSAGE_PAYLOAD: "auth/invalid-message-payload",
  INVALID_MFA_SESSION: "auth/invalid-multi-factor-session",
  INVALID_OAUTH_CLIENT_ID: "auth/invalid-oauth-client-id",
  INVALID_OAUTH_PROVIDER: "auth/invalid-oauth-provider",
  INVALID_OOB_CODE: "auth/invalid-action-code",
  INVALID_ORIGIN: "auth/unauthorized-domain",
  INVALID_PASSWORD: "auth/wrong-password",
  INVALID_PERSISTENCE: "auth/invalid-persistence-type",
  INVALID_PHONE_NUMBER: "auth/invalid-phone-number",
  INVALID_PROVIDER_ID: "auth/invalid-provider-id",
  INVALID_RECIPIENT_EMAIL: "auth/invalid-recipient-email",
  INVALID_SENDER: "auth/invalid-sender",
  INVALID_SESSION_INFO: "auth/invalid-verification-id",
  INVALID_TENANT_ID: "auth/invalid-tenant-id",
  MFA_INFO_NOT_FOUND: "auth/multi-factor-info-not-found",
  MFA_REQUIRED: "auth/multi-factor-auth-required",
  MISSING_ANDROID_PACKAGE_NAME: "auth/missing-android-pkg-name",
  MISSING_APP_CREDENTIAL: "auth/missing-app-credential",
  MISSING_AUTH_DOMAIN: "auth/auth-domain-config-required",
  MISSING_CODE: "auth/missing-verification-code",
  MISSING_CONTINUE_URI: "auth/missing-continue-uri",
  MISSING_IFRAME_START: "auth/missing-iframe-start",
  MISSING_IOS_BUNDLE_ID: "auth/missing-ios-bundle-id",
  MISSING_OR_INVALID_NONCE: "auth/missing-or-invalid-nonce",
  MISSING_MFA_INFO: "auth/missing-multi-factor-info",
  MISSING_MFA_SESSION: "auth/missing-multi-factor-session",
  MISSING_PHONE_NUMBER: "auth/missing-phone-number",
  MISSING_SESSION_INFO: "auth/missing-verification-id",
  MODULE_DESTROYED: "auth/app-deleted",
  NEED_CONFIRMATION: "auth/account-exists-with-different-credential",
  NETWORK_REQUEST_FAILED: "auth/network-request-failed",
  NULL_USER: "auth/null-user",
  NO_AUTH_EVENT: "auth/no-auth-event",
  NO_SUCH_PROVIDER: "auth/no-such-provider",
  OPERATION_NOT_ALLOWED: "auth/operation-not-allowed",
  OPERATION_NOT_SUPPORTED: "auth/operation-not-supported-in-this-environment",
  POPUP_BLOCKED: "auth/popup-blocked",
  POPUP_CLOSED_BY_USER: "auth/popup-closed-by-user",
  PROVIDER_ALREADY_LINKED: "auth/provider-already-linked",
  QUOTA_EXCEEDED: "auth/quota-exceeded",
  REDIRECT_CANCELLED_BY_USER: "auth/redirect-cancelled-by-user",
  REDIRECT_OPERATION_PENDING: "auth/redirect-operation-pending",
  REJECTED_CREDENTIAL: "auth/rejected-credential",
  SECOND_FACTOR_ALREADY_ENROLLED: "auth/second-factor-already-in-use",
  SECOND_FACTOR_LIMIT_EXCEEDED: "auth/maximum-second-factor-count-exceeded",
  TENANT_ID_MISMATCH: "auth/tenant-id-mismatch",
  TIMEOUT: "auth/timeout",
  TOKEN_EXPIRED: "auth/user-token-expired",
  TOO_MANY_ATTEMPTS_TRY_LATER: "auth/too-many-requests",
  UNAUTHORIZED_DOMAIN: "auth/unauthorized-continue-uri",
  UNSUPPORTED_FIRST_FACTOR: "auth/unsupported-first-factor",
  UNSUPPORTED_PERSISTENCE: "auth/unsupported-persistence-type",
  UNSUPPORTED_TENANT_OPERATION: "auth/unsupported-tenant-operation",
  UNVERIFIED_EMAIL: "auth/unverified-email",
  USER_CANCELLED: "auth/user-cancelled",
  USER_DELETED: "auth/user-not-found",
  USER_DISABLED: "auth/user-disabled",
  USER_MISMATCH: "auth/user-mismatch",
  USER_SIGNED_OUT: "auth/user-signed-out",
  WEAK_PASSWORD: "auth/weak-password",
  WEB_STORAGE_UNSUPPORTED: "auth/web-storage-unsupported",
  ALREADY_INITIALIZED: "auth/already-initialized"
};
var logClient = new import_logger.Logger("@firebase/auth");
function _logError(msg, ...args) {
  if (logClient.logLevel <= import_logger.LogLevel.ERROR) {
    logClient.error(`Auth (${import_app.SDK_VERSION}): ${msg}`, ...args);
  }
}
function _fail(authOrCode, ...rest) {
  throw createErrorInternal(authOrCode, ...rest);
}
function _createError(authOrCode, ...rest) {
  return createErrorInternal(authOrCode, ...rest);
}
function _errorWithCustomMessage(auth, code, message) {
  const errorMap = Object.assign(Object.assign({}, prodErrorMap()), {
    [code]: message
  });
  const factory = new import_util.ErrorFactory("auth", "Firebase", errorMap);
  return factory.create(code, {
    appName: auth.name
  });
}
function _assertInstanceOf(auth, object, instance) {
  const constructorInstance = instance;
  if (!(object instanceof constructorInstance)) {
    if (constructorInstance.name !== object.constructor.name) {
      _fail(auth, "argument-error");
    }
    throw _errorWithCustomMessage(auth, "argument-error", `Type of ${object.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`);
  }
}
function createErrorInternal(authOrCode, ...rest) {
  if (typeof authOrCode !== "string") {
    const code = rest[0];
    const fullParams = [...rest.slice(1)];
    if (fullParams[0]) {
      fullParams[0].appName = authOrCode.name;
    }
    return authOrCode._errorFactory.create(code, ...fullParams);
  }
  return _DEFAULT_AUTH_ERROR_FACTORY.create(authOrCode, ...rest);
}
function _assert(assertion, authOrCode, ...rest) {
  if (!assertion) {
    throw createErrorInternal(authOrCode, ...rest);
  }
}
function debugFail(failure) {
  const message = `INTERNAL ASSERTION FAILED: ` + failure;
  _logError(message);
  throw new Error(message);
}
function debugAssert(assertion, message) {
  if (!assertion) {
    debugFail(message);
  }
}
var instanceCache = /* @__PURE__ */new Map();
function _getInstance(cls) {
  debugAssert(cls instanceof Function, "Expected a class definition");
  let instance = instanceCache.get(cls);
  if (instance) {
    debugAssert(instance instanceof cls, "Instance stored in cache mismatched with class");
    return instance;
  }
  instance = new cls();
  instanceCache.set(cls, instance);
  return instance;
}
function initializeAuth(app, deps) {
  const provider = (0, import_app._getProvider)(app, "auth");
  if (provider.isInitialized()) {
    const auth2 = provider.getImmediate();
    const initialOptions = provider.getOptions();
    if ((0, import_util.deepEqual)(initialOptions, deps !== null && deps !== void 0 ? deps : {})) {
      return auth2;
    } else {
      _fail(auth2, "already-initialized");
    }
  }
  const auth = provider.initialize({
    options: deps
  });
  return auth;
}
function _initializeAuthInstance(auth, deps) {
  const persistence = (deps === null || deps === void 0 ? void 0 : deps.persistence) || [];
  const hierarchy = (Array.isArray(persistence) ? persistence : [persistence]).map(_getInstance);
  if (deps === null || deps === void 0 ? void 0 : deps.errorMap) {
    auth._updateErrorMap(deps.errorMap);
  }
  auth._initializeWithPersistence(hierarchy, deps === null || deps === void 0 ? void 0 : deps.popupRedirectResolver);
}
function _getCurrentUrl() {
  var _a;
  return typeof self !== "undefined" && ((_a = self.location) === null || _a === void 0 ? void 0 : _a.href) || "";
}
function _isHttpOrHttps() {
  return _getCurrentScheme() === "http:" || _getCurrentScheme() === "https:";
}
function _getCurrentScheme() {
  var _a;
  return typeof self !== "undefined" && ((_a = self.location) === null || _a === void 0 ? void 0 : _a.protocol) || null;
}
function _isOnline() {
  if (typeof navigator !== "undefined" && navigator && "onLine" in navigator && typeof navigator.onLine === "boolean" && (_isHttpOrHttps() || (0, import_util.isBrowserExtension)() || "connection" in navigator)) {
    return navigator.onLine;
  }
  return true;
}
function _getUserLanguage() {
  if (typeof navigator === "undefined") {
    return null;
  }
  const navigatorLanguage = navigator;
  return navigatorLanguage.languages && navigatorLanguage.languages[0] || navigatorLanguage.language || null;
}
var Delay = class {
  constructor(shortDelay, longDelay) {
    this.shortDelay = shortDelay;
    this.longDelay = longDelay;
    debugAssert(longDelay > shortDelay, "Short delay should be less than long delay!");
    this.isMobile = (0, import_util.isMobileCordova)() || (0, import_util.isReactNative)();
  }
  get() {
    if (!_isOnline()) {
      return Math.min(5e3, this.shortDelay);
    }
    return this.isMobile ? this.longDelay : this.shortDelay;
  }
};
function _emulatorUrl(config, path) {
  debugAssert(config.emulator, "Emulator should always be set here");
  const {
    url
  } = config.emulator;
  if (!path) {
    return url;
  }
  return `${url}${path.startsWith("/") ? path.slice(1) : path}`;
}
var FetchProvider = class {
  static initialize(fetchImpl, headersImpl, responseImpl) {
    this.fetchImpl = fetchImpl;
    if (headersImpl) {
      this.headersImpl = headersImpl;
    }
    if (responseImpl) {
      this.responseImpl = responseImpl;
    }
  }
  static fetch() {
    if (this.fetchImpl) {
      return this.fetchImpl;
    }
    if (typeof self !== "undefined" && "fetch" in self) {
      return self.fetch;
    }
    debugFail("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill");
  }
  static headers() {
    if (this.headersImpl) {
      return this.headersImpl;
    }
    if (typeof self !== "undefined" && "Headers" in self) {
      return self.Headers;
    }
    debugFail("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill");
  }
  static response() {
    if (this.responseImpl) {
      return this.responseImpl;
    }
    if (typeof self !== "undefined" && "Response" in self) {
      return self.Response;
    }
    debugFail("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill");
  }
};
var SERVER_ERROR_MAP = {
  ["CREDENTIAL_MISMATCH"]: "custom-token-mismatch",
  ["MISSING_CUSTOM_TOKEN"]: "internal-error",
  ["INVALID_IDENTIFIER"]: "invalid-email",
  ["MISSING_CONTINUE_URI"]: "internal-error",
  ["INVALID_PASSWORD"]: "wrong-password",
  ["MISSING_PASSWORD"]: "internal-error",
  ["EMAIL_EXISTS"]: "email-already-in-use",
  ["PASSWORD_LOGIN_DISABLED"]: "operation-not-allowed",
  ["INVALID_IDP_RESPONSE"]: "invalid-credential",
  ["INVALID_PENDING_TOKEN"]: "invalid-credential",
  ["FEDERATED_USER_ID_ALREADY_LINKED"]: "credential-already-in-use",
  ["MISSING_REQ_TYPE"]: "internal-error",
  ["EMAIL_NOT_FOUND"]: "user-not-found",
  ["RESET_PASSWORD_EXCEED_LIMIT"]: "too-many-requests",
  ["EXPIRED_OOB_CODE"]: "expired-action-code",
  ["INVALID_OOB_CODE"]: "invalid-action-code",
  ["MISSING_OOB_CODE"]: "internal-error",
  ["CREDENTIAL_TOO_OLD_LOGIN_AGAIN"]: "requires-recent-login",
  ["INVALID_ID_TOKEN"]: "invalid-user-token",
  ["TOKEN_EXPIRED"]: "user-token-expired",
  ["USER_NOT_FOUND"]: "user-token-expired",
  ["TOO_MANY_ATTEMPTS_TRY_LATER"]: "too-many-requests",
  ["INVALID_CODE"]: "invalid-verification-code",
  ["INVALID_SESSION_INFO"]: "invalid-verification-id",
  ["INVALID_TEMPORARY_PROOF"]: "invalid-credential",
  ["MISSING_SESSION_INFO"]: "missing-verification-id",
  ["SESSION_EXPIRED"]: "code-expired",
  ["MISSING_ANDROID_PACKAGE_NAME"]: "missing-android-pkg-name",
  ["UNAUTHORIZED_DOMAIN"]: "unauthorized-continue-uri",
  ["INVALID_OAUTH_CLIENT_ID"]: "invalid-oauth-client-id",
  ["ADMIN_ONLY_OPERATION"]: "admin-restricted-operation",
  ["INVALID_MFA_PENDING_CREDENTIAL"]: "invalid-multi-factor-session",
  ["MFA_ENROLLMENT_NOT_FOUND"]: "multi-factor-info-not-found",
  ["MISSING_MFA_ENROLLMENT_ID"]: "missing-multi-factor-info",
  ["MISSING_MFA_PENDING_CREDENTIAL"]: "missing-multi-factor-session",
  ["SECOND_FACTOR_EXISTS"]: "second-factor-already-in-use",
  ["SECOND_FACTOR_LIMIT_EXCEEDED"]: "maximum-second-factor-count-exceeded",
  ["BLOCKING_FUNCTION_ERROR_RESPONSE"]: "internal-error"
};
var DEFAULT_API_TIMEOUT_MS = new Delay(3e4, 6e4);
function _addTidIfNecessary(auth, request) {
  if (auth.tenantId && !request.tenantId) {
    return Object.assign(Object.assign({}, request), {
      tenantId: auth.tenantId
    });
  }
  return request;
}
async function _performApiRequest(auth, method, path, request, customErrorMap = {}) {
  return _performFetchWithErrorHandling(auth, customErrorMap, async () => {
    let body = {};
    let params = {};
    if (request) {
      if (method === "GET") {
        params = request;
      } else {
        body = {
          body: JSON.stringify(request)
        };
      }
    }
    const query = (0, import_util.querystring)(Object.assign({
      key: auth.config.apiKey
    }, params)).slice(1);
    const headers = await auth._getAdditionalHeaders();
    headers["Content-Type"] = "application/json";
    if (auth.languageCode) {
      headers["X-Firebase-Locale"] = auth.languageCode;
    }
    return FetchProvider.fetch()(_getFinalTarget(auth, auth.config.apiHost, path, query), Object.assign({
      method,
      headers,
      referrerPolicy: "no-referrer"
    }, body));
  });
}
async function _performFetchWithErrorHandling(auth, customErrorMap, fetchFn) {
  auth._canInitEmulator = false;
  const errorMap = Object.assign(Object.assign({}, SERVER_ERROR_MAP), customErrorMap);
  try {
    const networkTimeout = new NetworkTimeout(auth);
    const response = await Promise.race([fetchFn(), networkTimeout.promise]);
    networkTimeout.clearNetworkTimeout();
    const json = await response.json();
    if ("needConfirmation" in json) {
      throw _makeTaggedError(auth, "account-exists-with-different-credential", json);
    }
    if (response.ok && !("errorMessage" in json)) {
      return json;
    } else {
      const errorMessage = response.ok ? json.errorMessage : json.error.message;
      const [serverErrorCode, serverErrorMessage] = errorMessage.split(" : ");
      if (serverErrorCode === "FEDERATED_USER_ID_ALREADY_LINKED") {
        throw _makeTaggedError(auth, "credential-already-in-use", json);
      } else if (serverErrorCode === "EMAIL_EXISTS") {
        throw _makeTaggedError(auth, "email-already-in-use", json);
      } else if (serverErrorCode === "USER_DISABLED") {
        throw _makeTaggedError(auth, "user-disabled", json);
      }
      const authError = errorMap[serverErrorCode] || serverErrorCode.toLowerCase().replace(/[_\s]+/g, "-");
      if (serverErrorMessage) {
        throw _errorWithCustomMessage(auth, authError, serverErrorMessage);
      } else {
        _fail(auth, authError);
      }
    }
  } catch (e) {
    if (e instanceof import_util.FirebaseError) {
      throw e;
    }
    _fail(auth, "internal-error", {
      "message": String(e)
    });
  }
}
async function _performSignInRequest(auth, method, path, request, customErrorMap = {}) {
  const serverResponse = await _performApiRequest(auth, method, path, request, customErrorMap);
  if ("mfaPendingCredential" in serverResponse) {
    _fail(auth, "multi-factor-auth-required", {
      _serverResponse: serverResponse
    });
  }
  return serverResponse;
}
function _getFinalTarget(auth, host, path, query) {
  const base = `${host}${path}?${query}`;
  if (!auth.config.emulator) {
    return `${auth.config.apiScheme}://${base}`;
  }
  return _emulatorUrl(auth.config, base);
}
var NetworkTimeout = class {
  constructor(auth) {
    this.auth = auth;
    this.timer = null;
    this.promise = new Promise((_, reject) => {
      this.timer = setTimeout(() => {
        return reject(_createError(this.auth, "network-request-failed"));
      }, DEFAULT_API_TIMEOUT_MS.get());
    });
  }
  clearNetworkTimeout() {
    clearTimeout(this.timer);
  }
};
function _makeTaggedError(auth, code, response) {
  const errorParams = {
    appName: auth.name
  };
  if (response.email) {
    errorParams.email = response.email;
  }
  if (response.phoneNumber) {
    errorParams.phoneNumber = response.phoneNumber;
  }
  const error = _createError(auth, code, errorParams);
  error.customData._tokenResponse = response;
  return error;
}
async function deleteAccount(auth, request) {
  return _performApiRequest(auth, "POST", "/v1/accounts:delete", request);
}
async function deleteLinkedAccounts(auth, request) {
  return _performApiRequest(auth, "POST", "/v1/accounts:update", request);
}
async function getAccountInfo(auth, request) {
  return _performApiRequest(auth, "POST", "/v1/accounts:lookup", request);
}
function utcTimestampToDateString(utcTimestamp) {
  if (!utcTimestamp) {
    return void 0;
  }
  try {
    const date = new Date(Number(utcTimestamp));
    if (!isNaN(date.getTime())) {
      return date.toUTCString();
    }
  } catch (e) {}
  return void 0;
}
function getIdToken(user, forceRefresh = false) {
  return (0, import_util.getModularInstance)(user).getIdToken(forceRefresh);
}
async function getIdTokenResult(user, forceRefresh = false) {
  const userInternal = (0, import_util.getModularInstance)(user);
  const token = await userInternal.getIdToken(forceRefresh);
  const claims = _parseToken(token);
  _assert(claims && claims.exp && claims.auth_time && claims.iat, userInternal.auth, "internal-error");
  const firebase = typeof claims.firebase === "object" ? claims.firebase : void 0;
  const signInProvider = firebase === null || firebase === void 0 ? void 0 : firebase["sign_in_provider"];
  return {
    claims,
    token,
    authTime: utcTimestampToDateString(secondsStringToMilliseconds(claims.auth_time)),
    issuedAtTime: utcTimestampToDateString(secondsStringToMilliseconds(claims.iat)),
    expirationTime: utcTimestampToDateString(secondsStringToMilliseconds(claims.exp)),
    signInProvider: signInProvider || null,
    signInSecondFactor: (firebase === null || firebase === void 0 ? void 0 : firebase["sign_in_second_factor"]) || null
  };
}
function secondsStringToMilliseconds(seconds) {
  return Number(seconds) * 1e3;
}
function _parseToken(token) {
  const [algorithm, payload, signature] = token.split(".");
  if (algorithm === void 0 || payload === void 0 || signature === void 0) {
    _logError("JWT malformed, contained fewer than 3 sections");
    return null;
  }
  try {
    const decoded = (0, import_util.base64Decode)(payload);
    if (!decoded) {
      _logError("Failed to decode base64 JWT payload");
      return null;
    }
    return JSON.parse(decoded);
  } catch (e) {
    _logError("Caught error parsing JWT payload as JSON", e === null || e === void 0 ? void 0 : e.toString());
    return null;
  }
}
function _tokenExpiresIn(token) {
  const parsedToken = _parseToken(token);
  _assert(parsedToken, "internal-error");
  _assert(typeof parsedToken.exp !== "undefined", "internal-error");
  _assert(typeof parsedToken.iat !== "undefined", "internal-error");
  return Number(parsedToken.exp) - Number(parsedToken.iat);
}
async function _logoutIfInvalidated(user, promise, bypassAuthState = false) {
  if (bypassAuthState) {
    return promise;
  }
  try {
    return await promise;
  } catch (e) {
    if (e instanceof import_util.FirebaseError && isUserInvalidated(e)) {
      if (user.auth.currentUser === user) {
        await user.auth.signOut();
      }
    }
    throw e;
  }
}
function isUserInvalidated({
  code
}) {
  return code === `auth/${"user-disabled"}` || code === `auth/${"user-token-expired"}`;
}
var ProactiveRefresh = class {
  constructor(user) {
    this.user = user;
    this.isRunning = false;
    this.timerId = null;
    this.errorBackoff = 3e4;
  }
  _start() {
    if (this.isRunning) {
      return;
    }
    this.isRunning = true;
    this.schedule();
  }
  _stop() {
    if (!this.isRunning) {
      return;
    }
    this.isRunning = false;
    if (this.timerId !== null) {
      clearTimeout(this.timerId);
    }
  }
  getInterval(wasError) {
    var _a;
    if (wasError) {
      const interval = this.errorBackoff;
      this.errorBackoff = Math.min(this.errorBackoff * 2, 96e4);
      return interval;
    } else {
      this.errorBackoff = 3e4;
      const expTime = (_a = this.user.stsTokenManager.expirationTime) !== null && _a !== void 0 ? _a : 0;
      const interval = expTime - Date.now() - 3e5;
      return Math.max(0, interval);
    }
  }
  schedule(wasError = false) {
    if (!this.isRunning) {
      return;
    }
    const interval = this.getInterval(wasError);
    this.timerId = setTimeout(async () => {
      await this.iteration();
    }, interval);
  }
  async iteration() {
    try {
      await this.user.getIdToken(true);
    } catch (e) {
      if ((e === null || e === void 0 ? void 0 : e.code) === `auth/${"network-request-failed"}`) {
        this.schedule(true);
      }
      return;
    }
    this.schedule();
  }
};
var UserMetadata = class {
  constructor(createdAt, lastLoginAt) {
    this.createdAt = createdAt;
    this.lastLoginAt = lastLoginAt;
    this._initializeTime();
  }
  _initializeTime() {
    this.lastSignInTime = utcTimestampToDateString(this.lastLoginAt);
    this.creationTime = utcTimestampToDateString(this.createdAt);
  }
  _copy(metadata) {
    this.createdAt = metadata.createdAt;
    this.lastLoginAt = metadata.lastLoginAt;
    this._initializeTime();
  }
  toJSON() {
    return {
      createdAt: this.createdAt,
      lastLoginAt: this.lastLoginAt
    };
  }
};
async function _reloadWithoutSaving(user) {
  var _a;
  const auth = user.auth;
  const idToken = await user.getIdToken();
  const response = await _logoutIfInvalidated(user, getAccountInfo(auth, {
    idToken
  }));
  _assert(response === null || response === void 0 ? void 0 : response.users.length, auth, "internal-error");
  const coreAccount = response.users[0];
  user._notifyReloadListener(coreAccount);
  const newProviderData = ((_a = coreAccount.providerUserInfo) === null || _a === void 0 ? void 0 : _a.length) ? extractProviderData(coreAccount.providerUserInfo) : [];
  const providerData = mergeProviderData(user.providerData, newProviderData);
  const oldIsAnonymous = user.isAnonymous;
  const newIsAnonymous = !(user.email && coreAccount.passwordHash) && !(providerData === null || providerData === void 0 ? void 0 : providerData.length);
  const isAnonymous = !oldIsAnonymous ? false : newIsAnonymous;
  const updates = {
    uid: coreAccount.localId,
    displayName: coreAccount.displayName || null,
    photoURL: coreAccount.photoUrl || null,
    email: coreAccount.email || null,
    emailVerified: coreAccount.emailVerified || false,
    phoneNumber: coreAccount.phoneNumber || null,
    tenantId: coreAccount.tenantId || null,
    providerData,
    metadata: new UserMetadata(coreAccount.createdAt, coreAccount.lastLoginAt),
    isAnonymous
  };
  Object.assign(user, updates);
}
async function reload(user) {
  const userInternal = (0, import_util.getModularInstance)(user);
  await _reloadWithoutSaving(userInternal);
  await userInternal.auth._persistUserIfCurrent(userInternal);
  userInternal.auth._notifyListenersIfCurrent(userInternal);
}
function mergeProviderData(original, newData) {
  const deduped = original.filter(o => !newData.some(n => n.providerId === o.providerId));
  return [...deduped, ...newData];
}
function extractProviderData(providers) {
  return providers.map(_a => {
    var {
        providerId
      } = _a,
      provider = (0, import_tslib.__rest)(_a, ["providerId"]);
    return {
      providerId,
      uid: provider.rawId || "",
      displayName: provider.displayName || null,
      email: provider.email || null,
      phoneNumber: provider.phoneNumber || null,
      photoURL: provider.photoUrl || null
    };
  });
}
async function requestStsToken(auth, refreshToken) {
  const response = await _performFetchWithErrorHandling(auth, {}, async () => {
    const body = (0, import_util.querystring)({
      "grant_type": "refresh_token",
      "refresh_token": refreshToken
    }).slice(1);
    const {
      tokenApiHost,
      apiKey
    } = auth.config;
    const url = _getFinalTarget(auth, tokenApiHost, "/v1/token", `key=${apiKey}`);
    const headers = await auth._getAdditionalHeaders();
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    return FetchProvider.fetch()(url, {
      method: "POST",
      headers,
      body
    });
  });
  return {
    accessToken: response.access_token,
    expiresIn: response.expires_in,
    refreshToken: response.refresh_token
  };
}
var StsTokenManager = class {
  constructor() {
    this.refreshToken = null;
    this.accessToken = null;
    this.expirationTime = null;
  }
  get isExpired() {
    return !this.expirationTime || Date.now() > this.expirationTime - 3e4;
  }
  updateFromServerResponse(response) {
    _assert(response.idToken, "internal-error");
    _assert(typeof response.idToken !== "undefined", "internal-error");
    _assert(typeof response.refreshToken !== "undefined", "internal-error");
    const expiresIn = "expiresIn" in response && typeof response.expiresIn !== "undefined" ? Number(response.expiresIn) : _tokenExpiresIn(response.idToken);
    this.updateTokensAndExpiration(response.idToken, response.refreshToken, expiresIn);
  }
  async getToken(auth, forceRefresh = false) {
    _assert(!this.accessToken || this.refreshToken, auth, "user-token-expired");
    if (!forceRefresh && this.accessToken && !this.isExpired) {
      return this.accessToken;
    }
    if (this.refreshToken) {
      await this.refresh(auth, this.refreshToken);
      return this.accessToken;
    }
    return null;
  }
  clearRefreshToken() {
    this.refreshToken = null;
  }
  async refresh(auth, oldToken) {
    const {
      accessToken,
      refreshToken,
      expiresIn
    } = await requestStsToken(auth, oldToken);
    this.updateTokensAndExpiration(accessToken, refreshToken, Number(expiresIn));
  }
  updateTokensAndExpiration(accessToken, refreshToken, expiresInSec) {
    this.refreshToken = refreshToken || null;
    this.accessToken = accessToken || null;
    this.expirationTime = Date.now() + expiresInSec * 1e3;
  }
  static fromJSON(appName, object) {
    const {
      refreshToken,
      accessToken,
      expirationTime
    } = object;
    const manager = new StsTokenManager();
    if (refreshToken) {
      _assert(typeof refreshToken === "string", "internal-error", {
        appName
      });
      manager.refreshToken = refreshToken;
    }
    if (accessToken) {
      _assert(typeof accessToken === "string", "internal-error", {
        appName
      });
      manager.accessToken = accessToken;
    }
    if (expirationTime) {
      _assert(typeof expirationTime === "number", "internal-error", {
        appName
      });
      manager.expirationTime = expirationTime;
    }
    return manager;
  }
  toJSON() {
    return {
      refreshToken: this.refreshToken,
      accessToken: this.accessToken,
      expirationTime: this.expirationTime
    };
  }
  _assign(stsTokenManager) {
    this.accessToken = stsTokenManager.accessToken;
    this.refreshToken = stsTokenManager.refreshToken;
    this.expirationTime = stsTokenManager.expirationTime;
  }
  _clone() {
    return Object.assign(new StsTokenManager(), this.toJSON());
  }
  _performRefresh() {
    return debugFail("not implemented");
  }
};
function assertStringOrUndefined(assertion, appName) {
  _assert(typeof assertion === "string" || typeof assertion === "undefined", "internal-error", {
    appName
  });
}
var UserImpl = class {
  constructor(_a) {
    var {
        uid,
        auth,
        stsTokenManager
      } = _a,
      opt = (0, import_tslib.__rest)(_a, ["uid", "auth", "stsTokenManager"]);
    this.providerId = "firebase";
    this.proactiveRefresh = new ProactiveRefresh(this);
    this.reloadUserInfo = null;
    this.reloadListener = null;
    this.uid = uid;
    this.auth = auth;
    this.stsTokenManager = stsTokenManager;
    this.accessToken = stsTokenManager.accessToken;
    this.displayName = opt.displayName || null;
    this.email = opt.email || null;
    this.emailVerified = opt.emailVerified || false;
    this.phoneNumber = opt.phoneNumber || null;
    this.photoURL = opt.photoURL || null;
    this.isAnonymous = opt.isAnonymous || false;
    this.tenantId = opt.tenantId || null;
    this.providerData = opt.providerData ? [...opt.providerData] : [];
    this.metadata = new UserMetadata(opt.createdAt || void 0, opt.lastLoginAt || void 0);
  }
  async getIdToken(forceRefresh) {
    const accessToken = await _logoutIfInvalidated(this, this.stsTokenManager.getToken(this.auth, forceRefresh));
    _assert(accessToken, this.auth, "internal-error");
    if (this.accessToken !== accessToken) {
      this.accessToken = accessToken;
      await this.auth._persistUserIfCurrent(this);
      this.auth._notifyListenersIfCurrent(this);
    }
    return accessToken;
  }
  getIdTokenResult(forceRefresh) {
    return getIdTokenResult(this, forceRefresh);
  }
  reload() {
    return reload(this);
  }
  _assign(user) {
    if (this === user) {
      return;
    }
    _assert(this.uid === user.uid, this.auth, "internal-error");
    this.displayName = user.displayName;
    this.photoURL = user.photoURL;
    this.email = user.email;
    this.emailVerified = user.emailVerified;
    this.phoneNumber = user.phoneNumber;
    this.isAnonymous = user.isAnonymous;
    this.tenantId = user.tenantId;
    this.providerData = user.providerData.map(userInfo => Object.assign({}, userInfo));
    this.metadata._copy(user.metadata);
    this.stsTokenManager._assign(user.stsTokenManager);
  }
  _clone(auth) {
    return new UserImpl(Object.assign(Object.assign({}, this), {
      auth,
      stsTokenManager: this.stsTokenManager._clone()
    }));
  }
  _onReload(callback) {
    _assert(!this.reloadListener, this.auth, "internal-error");
    this.reloadListener = callback;
    if (this.reloadUserInfo) {
      this._notifyReloadListener(this.reloadUserInfo);
      this.reloadUserInfo = null;
    }
  }
  _notifyReloadListener(userInfo) {
    if (this.reloadListener) {
      this.reloadListener(userInfo);
    } else {
      this.reloadUserInfo = userInfo;
    }
  }
  _startProactiveRefresh() {
    this.proactiveRefresh._start();
  }
  _stopProactiveRefresh() {
    this.proactiveRefresh._stop();
  }
  async _updateTokensIfNecessary(response, reload2 = false) {
    let tokensRefreshed = false;
    if (response.idToken && response.idToken !== this.stsTokenManager.accessToken) {
      this.stsTokenManager.updateFromServerResponse(response);
      tokensRefreshed = true;
    }
    if (reload2) {
      await _reloadWithoutSaving(this);
    }
    await this.auth._persistUserIfCurrent(this);
    if (tokensRefreshed) {
      this.auth._notifyListenersIfCurrent(this);
    }
  }
  async delete() {
    const idToken = await this.getIdToken();
    await _logoutIfInvalidated(this, deleteAccount(this.auth, {
      idToken
    }));
    this.stsTokenManager.clearRefreshToken();
    return this.auth.signOut();
  }
  toJSON() {
    return Object.assign(Object.assign({
      uid: this.uid,
      email: this.email || void 0,
      emailVerified: this.emailVerified,
      displayName: this.displayName || void 0,
      isAnonymous: this.isAnonymous,
      photoURL: this.photoURL || void 0,
      phoneNumber: this.phoneNumber || void 0,
      tenantId: this.tenantId || void 0,
      providerData: this.providerData.map(userInfo => Object.assign({}, userInfo)),
      stsTokenManager: this.stsTokenManager.toJSON(),
      _redirectEventId: this._redirectEventId
    }, this.metadata.toJSON()), {
      apiKey: this.auth.config.apiKey,
      appName: this.auth.name
    });
  }
  get refreshToken() {
    return this.stsTokenManager.refreshToken || "";
  }
  static _fromJSON(auth, object) {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    const displayName = (_a = object.displayName) !== null && _a !== void 0 ? _a : void 0;
    const email = (_b = object.email) !== null && _b !== void 0 ? _b : void 0;
    const phoneNumber = (_c = object.phoneNumber) !== null && _c !== void 0 ? _c : void 0;
    const photoURL = (_d = object.photoURL) !== null && _d !== void 0 ? _d : void 0;
    const tenantId = (_e = object.tenantId) !== null && _e !== void 0 ? _e : void 0;
    const _redirectEventId = (_f = object._redirectEventId) !== null && _f !== void 0 ? _f : void 0;
    const createdAt = (_g = object.createdAt) !== null && _g !== void 0 ? _g : void 0;
    const lastLoginAt = (_h = object.lastLoginAt) !== null && _h !== void 0 ? _h : void 0;
    const {
      uid,
      emailVerified,
      isAnonymous,
      providerData,
      stsTokenManager: plainObjectTokenManager
    } = object;
    _assert(uid && plainObjectTokenManager, auth, "internal-error");
    const stsTokenManager = StsTokenManager.fromJSON(this.name, plainObjectTokenManager);
    _assert(typeof uid === "string", auth, "internal-error");
    assertStringOrUndefined(displayName, auth.name);
    assertStringOrUndefined(email, auth.name);
    _assert(typeof emailVerified === "boolean", auth, "internal-error");
    _assert(typeof isAnonymous === "boolean", auth, "internal-error");
    assertStringOrUndefined(phoneNumber, auth.name);
    assertStringOrUndefined(photoURL, auth.name);
    assertStringOrUndefined(tenantId, auth.name);
    assertStringOrUndefined(_redirectEventId, auth.name);
    assertStringOrUndefined(createdAt, auth.name);
    assertStringOrUndefined(lastLoginAt, auth.name);
    const user = new UserImpl({
      uid,
      auth,
      email,
      emailVerified,
      displayName,
      isAnonymous,
      photoURL,
      phoneNumber,
      tenantId,
      stsTokenManager,
      createdAt,
      lastLoginAt
    });
    if (providerData && Array.isArray(providerData)) {
      user.providerData = providerData.map(userInfo => Object.assign({}, userInfo));
    }
    if (_redirectEventId) {
      user._redirectEventId = _redirectEventId;
    }
    return user;
  }
  static async _fromIdTokenResponse(auth, idTokenResponse, isAnonymous = false) {
    const stsTokenManager = new StsTokenManager();
    stsTokenManager.updateFromServerResponse(idTokenResponse);
    const user = new UserImpl({
      uid: idTokenResponse.localId,
      auth,
      stsTokenManager,
      isAnonymous
    });
    await _reloadWithoutSaving(user);
    return user;
  }
};
var InMemoryPersistence = class {
  constructor() {
    this.type = "NONE";
    this.storage = {};
  }
  async _isAvailable() {
    return true;
  }
  async _set(key, value) {
    this.storage[key] = value;
  }
  async _get(key) {
    const value = this.storage[key];
    return value === void 0 ? null : value;
  }
  async _remove(key) {
    delete this.storage[key];
  }
  _addListener(_key, _listener) {
    return;
  }
  _removeListener(_key, _listener) {
    return;
  }
};
InMemoryPersistence.type = "NONE";
var inMemoryPersistence = InMemoryPersistence;
function _persistenceKeyName(key, apiKey, appName) {
  return `${"firebase"}:${key}:${apiKey}:${appName}`;
}
var PersistenceUserManager = class {
  constructor(persistence, auth, userKey) {
    this.persistence = persistence;
    this.auth = auth;
    this.userKey = userKey;
    const {
      config,
      name: name2
    } = this.auth;
    this.fullUserKey = _persistenceKeyName(this.userKey, config.apiKey, name2);
    this.fullPersistenceKey = _persistenceKeyName("persistence", config.apiKey, name2);
    this.boundEventHandler = auth._onStorageEvent.bind(auth);
    this.persistence._addListener(this.fullUserKey, this.boundEventHandler);
  }
  setCurrentUser(user) {
    return this.persistence._set(this.fullUserKey, user.toJSON());
  }
  async getCurrentUser() {
    const blob = await this.persistence._get(this.fullUserKey);
    return blob ? UserImpl._fromJSON(this.auth, blob) : null;
  }
  removeCurrentUser() {
    return this.persistence._remove(this.fullUserKey);
  }
  savePersistenceForRedirect() {
    return this.persistence._set(this.fullPersistenceKey, this.persistence.type);
  }
  async setPersistence(newPersistence) {
    if (this.persistence === newPersistence) {
      return;
    }
    const currentUser = await this.getCurrentUser();
    await this.removeCurrentUser();
    this.persistence = newPersistence;
    if (currentUser) {
      return this.setCurrentUser(currentUser);
    }
  }
  delete() {
    this.persistence._removeListener(this.fullUserKey, this.boundEventHandler);
  }
  static async create(auth, persistenceHierarchy, userKey = "authUser") {
    if (!persistenceHierarchy.length) {
      return new PersistenceUserManager(_getInstance(inMemoryPersistence), auth, userKey);
    }
    const availablePersistences = (await Promise.all(persistenceHierarchy.map(async persistence => {
      if (await persistence._isAvailable()) {
        return persistence;
      }
      return void 0;
    }))).filter(persistence => persistence);
    let selectedPersistence = availablePersistences[0] || _getInstance(inMemoryPersistence);
    const key = _persistenceKeyName(userKey, auth.config.apiKey, auth.name);
    let userToMigrate = null;
    for (const persistence of persistenceHierarchy) {
      try {
        const blob = await persistence._get(key);
        if (blob) {
          const user = UserImpl._fromJSON(auth, blob);
          if (persistence !== selectedPersistence) {
            userToMigrate = user;
          }
          selectedPersistence = persistence;
          break;
        }
      } catch (_a) {}
    }
    const migrationHierarchy = availablePersistences.filter(p => p._shouldAllowMigration);
    if (!selectedPersistence._shouldAllowMigration || !migrationHierarchy.length) {
      return new PersistenceUserManager(selectedPersistence, auth, userKey);
    }
    selectedPersistence = migrationHierarchy[0];
    if (userToMigrate) {
      await selectedPersistence._set(key, userToMigrate.toJSON());
    }
    await Promise.all(persistenceHierarchy.map(async persistence => {
      if (persistence !== selectedPersistence) {
        try {
          await persistence._remove(key);
        } catch (_a) {}
      }
    }));
    return new PersistenceUserManager(selectedPersistence, auth, userKey);
  }
};
function _getBrowserName(userAgent) {
  const ua = userAgent.toLowerCase();
  if (ua.includes("opera/") || ua.includes("opr/") || ua.includes("opios/")) {
    return "Opera";
  } else if (_isIEMobile(ua)) {
    return "IEMobile";
  } else if (ua.includes("msie") || ua.includes("trident/")) {
    return "IE";
  } else if (ua.includes("edge/")) {
    return "Edge";
  } else if (_isFirefox(ua)) {
    return "Firefox";
  } else if (ua.includes("silk/")) {
    return "Silk";
  } else if (_isBlackBerry(ua)) {
    return "Blackberry";
  } else if (_isWebOS(ua)) {
    return "Webos";
  } else if (_isSafari(ua)) {
    return "Safari";
  } else if ((ua.includes("chrome/") || _isChromeIOS(ua)) && !ua.includes("edge/")) {
    return "Chrome";
  } else if (_isAndroid(ua)) {
    return "Android";
  } else {
    const re = /([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/;
    const matches = userAgent.match(re);
    if ((matches === null || matches === void 0 ? void 0 : matches.length) === 2) {
      return matches[1];
    }
  }
  return "Other";
}
function _isFirefox(ua = (0, import_util.getUA)()) {
  return /firefox\//i.test(ua);
}
function _isSafari(userAgent = (0, import_util.getUA)()) {
  const ua = userAgent.toLowerCase();
  return ua.includes("safari/") && !ua.includes("chrome/") && !ua.includes("crios/") && !ua.includes("android");
}
function _isChromeIOS(ua = (0, import_util.getUA)()) {
  return /crios\//i.test(ua);
}
function _isIEMobile(ua = (0, import_util.getUA)()) {
  return /iemobile/i.test(ua);
}
function _isAndroid(ua = (0, import_util.getUA)()) {
  return /android/i.test(ua);
}
function _isBlackBerry(ua = (0, import_util.getUA)()) {
  return /blackberry/i.test(ua);
}
function _isWebOS(ua = (0, import_util.getUA)()) {
  return /webos/i.test(ua);
}
function _isIOS(ua = (0, import_util.getUA)()) {
  return /iphone|ipad|ipod/i.test(ua) || /macintosh/i.test(ua) && /mobile/i.test(ua);
}
function _isIOS7Or8(ua = (0, import_util.getUA)()) {
  return /(iPad|iPhone|iPod).*OS 7_\d/i.test(ua) || /(iPad|iPhone|iPod).*OS 8_\d/i.test(ua);
}
function _isIOSStandalone(ua = (0, import_util.getUA)()) {
  var _a;
  return _isIOS(ua) && !!((_a = window.navigator) === null || _a === void 0 ? void 0 : _a.standalone);
}
function _isIE10() {
  return (0, import_util.isIE)() && document.documentMode === 10;
}
function _isMobileBrowser(ua = (0, import_util.getUA)()) {
  return _isIOS(ua) || _isAndroid(ua) || _isWebOS(ua) || _isBlackBerry(ua) || /windows phone/i.test(ua) || _isIEMobile(ua);
}
function _isIframe() {
  try {
    return !!(window && window !== window.top);
  } catch (e) {
    return false;
  }
}
function _getClientVersion(clientPlatform, frameworks = []) {
  let reportedPlatform;
  switch (clientPlatform) {
    case "Browser":
      reportedPlatform = _getBrowserName((0, import_util.getUA)());
      break;
    case "Worker":
      reportedPlatform = `${_getBrowserName((0, import_util.getUA)())}-${clientPlatform}`;
      break;
    default:
      reportedPlatform = clientPlatform;
  }
  const reportedFrameworks = frameworks.length ? frameworks.join(",") : "FirebaseCore-web";
  return `${reportedPlatform}/${"JsCore"}/${import_app.SDK_VERSION}/${reportedFrameworks}`;
}
var AuthMiddlewareQueue = class {
  constructor(auth) {
    this.auth = auth;
    this.queue = [];
  }
  pushCallback(callback, onAbort) {
    const wrappedCallback = user => new Promise((resolve, reject) => {
      try {
        const result = callback(user);
        resolve(result);
      } catch (e) {
        reject(e);
      }
    });
    wrappedCallback.onAbort = onAbort;
    this.queue.push(wrappedCallback);
    const index = this.queue.length - 1;
    return () => {
      this.queue[index] = () => Promise.resolve();
    };
  }
  async runMiddleware(nextUser) {
    if (this.auth.currentUser === nextUser) {
      return;
    }
    const onAbortStack = [];
    try {
      for (const beforeStateCallback of this.queue) {
        await beforeStateCallback(nextUser);
        if (beforeStateCallback.onAbort) {
          onAbortStack.push(beforeStateCallback.onAbort);
        }
      }
    } catch (e) {
      onAbortStack.reverse();
      for (const onAbort of onAbortStack) {
        try {
          onAbort();
        } catch (_) {}
      }
      throw this.auth._errorFactory.create("login-blocked", {
        originalMessage: e === null || e === void 0 ? void 0 : e.message
      });
    }
  }
};
var AuthImpl = class {
  constructor(app, heartbeatServiceProvider, config) {
    this.app = app;
    this.heartbeatServiceProvider = heartbeatServiceProvider;
    this.config = config;
    this.currentUser = null;
    this.emulatorConfig = null;
    this.operations = Promise.resolve();
    this.authStateSubscription = new Subscription(this);
    this.idTokenSubscription = new Subscription(this);
    this.beforeStateQueue = new AuthMiddlewareQueue(this);
    this.redirectUser = null;
    this.isProactiveRefreshEnabled = false;
    this._canInitEmulator = true;
    this._isInitialized = false;
    this._deleted = false;
    this._initializationPromise = null;
    this._popupRedirectResolver = null;
    this._errorFactory = _DEFAULT_AUTH_ERROR_FACTORY;
    this.lastNotifiedUid = void 0;
    this.languageCode = null;
    this.tenantId = null;
    this.settings = {
      appVerificationDisabledForTesting: false
    };
    this.frameworks = [];
    this.name = app.name;
    this.clientVersion = config.sdkClientVersion;
  }
  _initializeWithPersistence(persistenceHierarchy, popupRedirectResolver) {
    if (popupRedirectResolver) {
      this._popupRedirectResolver = _getInstance(popupRedirectResolver);
    }
    this._initializationPromise = this.queue(async () => {
      var _a, _b;
      if (this._deleted) {
        return;
      }
      this.persistenceManager = await PersistenceUserManager.create(this, persistenceHierarchy);
      if (this._deleted) {
        return;
      }
      if ((_a = this._popupRedirectResolver) === null || _a === void 0 ? void 0 : _a._shouldInitProactively) {
        try {
          await this._popupRedirectResolver._initialize(this);
        } catch (e) {}
      }
      await this.initializeCurrentUser(popupRedirectResolver);
      this.lastNotifiedUid = ((_b = this.currentUser) === null || _b === void 0 ? void 0 : _b.uid) || null;
      if (this._deleted) {
        return;
      }
      this._isInitialized = true;
    });
    return this._initializationPromise;
  }
  async _onStorageEvent() {
    if (this._deleted) {
      return;
    }
    const user = await this.assertedPersistence.getCurrentUser();
    if (!this.currentUser && !user) {
      return;
    }
    if (this.currentUser && user && this.currentUser.uid === user.uid) {
      this._currentUser._assign(user);
      await this.currentUser.getIdToken();
      return;
    }
    await this._updateCurrentUser(user, true);
  }
  async initializeCurrentUser(popupRedirectResolver) {
    var _a;
    const previouslyStoredUser = await this.assertedPersistence.getCurrentUser();
    let futureCurrentUser = previouslyStoredUser;
    let needsTocheckMiddleware = false;
    if (popupRedirectResolver && this.config.authDomain) {
      await this.getOrInitRedirectPersistenceManager();
      const redirectUserEventId = (_a = this.redirectUser) === null || _a === void 0 ? void 0 : _a._redirectEventId;
      const storedUserEventId = futureCurrentUser === null || futureCurrentUser === void 0 ? void 0 : futureCurrentUser._redirectEventId;
      const result = await this.tryRedirectSignIn(popupRedirectResolver);
      if ((!redirectUserEventId || redirectUserEventId === storedUserEventId) && (result === null || result === void 0 ? void 0 : result.user)) {
        futureCurrentUser = result.user;
        needsTocheckMiddleware = true;
      }
    }
    if (!futureCurrentUser) {
      return this.directlySetCurrentUser(null);
    }
    if (!futureCurrentUser._redirectEventId) {
      if (needsTocheckMiddleware) {
        try {
          await this.beforeStateQueue.runMiddleware(futureCurrentUser);
        } catch (e) {
          futureCurrentUser = previouslyStoredUser;
          this._popupRedirectResolver._overrideRedirectResult(this, () => Promise.reject(e));
        }
      }
      if (futureCurrentUser) {
        return this.reloadAndSetCurrentUserOrClear(futureCurrentUser);
      } else {
        return this.directlySetCurrentUser(null);
      }
    }
    _assert(this._popupRedirectResolver, this, "argument-error");
    await this.getOrInitRedirectPersistenceManager();
    if (this.redirectUser && this.redirectUser._redirectEventId === futureCurrentUser._redirectEventId) {
      return this.directlySetCurrentUser(futureCurrentUser);
    }
    return this.reloadAndSetCurrentUserOrClear(futureCurrentUser);
  }
  async tryRedirectSignIn(redirectResolver) {
    let result = null;
    try {
      result = await this._popupRedirectResolver._completeRedirectFn(this, redirectResolver, true);
    } catch (e) {
      await this._setRedirectUser(null);
    }
    return result;
  }
  async reloadAndSetCurrentUserOrClear(user) {
    try {
      await _reloadWithoutSaving(user);
    } catch (e) {
      if ((e === null || e === void 0 ? void 0 : e.code) !== `auth/${"network-request-failed"}`) {
        return this.directlySetCurrentUser(null);
      }
    }
    return this.directlySetCurrentUser(user);
  }
  useDeviceLanguage() {
    this.languageCode = _getUserLanguage();
  }
  async _delete() {
    this._deleted = true;
  }
  async updateCurrentUser(userExtern) {
    const user = userExtern ? (0, import_util.getModularInstance)(userExtern) : null;
    if (user) {
      _assert(user.auth.config.apiKey === this.config.apiKey, this, "invalid-user-token");
    }
    return this._updateCurrentUser(user && user._clone(this));
  }
  async _updateCurrentUser(user, skipBeforeStateCallbacks = false) {
    if (this._deleted) {
      return;
    }
    if (user) {
      _assert(this.tenantId === user.tenantId, this, "tenant-id-mismatch");
    }
    if (!skipBeforeStateCallbacks) {
      await this.beforeStateQueue.runMiddleware(user);
    }
    return this.queue(async () => {
      await this.directlySetCurrentUser(user);
      this.notifyAuthListeners();
    });
  }
  async signOut() {
    await this.beforeStateQueue.runMiddleware(null);
    if (this.redirectPersistenceManager || this._popupRedirectResolver) {
      await this._setRedirectUser(null);
    }
    return this._updateCurrentUser(null, true);
  }
  setPersistence(persistence) {
    return this.queue(async () => {
      await this.assertedPersistence.setPersistence(_getInstance(persistence));
    });
  }
  _getPersistence() {
    return this.assertedPersistence.persistence.type;
  }
  _updateErrorMap(errorMap) {
    this._errorFactory = new import_util.ErrorFactory("auth", "Firebase", errorMap());
  }
  onAuthStateChanged(nextOrObserver, error, completed) {
    return this.registerStateListener(this.authStateSubscription, nextOrObserver, error, completed);
  }
  beforeAuthStateChanged(callback, onAbort) {
    return this.beforeStateQueue.pushCallback(callback, onAbort);
  }
  onIdTokenChanged(nextOrObserver, error, completed) {
    return this.registerStateListener(this.idTokenSubscription, nextOrObserver, error, completed);
  }
  toJSON() {
    var _a;
    return {
      apiKey: this.config.apiKey,
      authDomain: this.config.authDomain,
      appName: this.name,
      currentUser: (_a = this._currentUser) === null || _a === void 0 ? void 0 : _a.toJSON()
    };
  }
  async _setRedirectUser(user, popupRedirectResolver) {
    const redirectManager = await this.getOrInitRedirectPersistenceManager(popupRedirectResolver);
    return user === null ? redirectManager.removeCurrentUser() : redirectManager.setCurrentUser(user);
  }
  async getOrInitRedirectPersistenceManager(popupRedirectResolver) {
    if (!this.redirectPersistenceManager) {
      const resolver = popupRedirectResolver && _getInstance(popupRedirectResolver) || this._popupRedirectResolver;
      _assert(resolver, this, "argument-error");
      this.redirectPersistenceManager = await PersistenceUserManager.create(this, [_getInstance(resolver._redirectPersistence)], "redirectUser");
      this.redirectUser = await this.redirectPersistenceManager.getCurrentUser();
    }
    return this.redirectPersistenceManager;
  }
  async _redirectUserForId(id) {
    var _a, _b;
    if (this._isInitialized) {
      await this.queue(async () => {});
    }
    if (((_a = this._currentUser) === null || _a === void 0 ? void 0 : _a._redirectEventId) === id) {
      return this._currentUser;
    }
    if (((_b = this.redirectUser) === null || _b === void 0 ? void 0 : _b._redirectEventId) === id) {
      return this.redirectUser;
    }
    return null;
  }
  async _persistUserIfCurrent(user) {
    if (user === this.currentUser) {
      return this.queue(async () => this.directlySetCurrentUser(user));
    }
  }
  _notifyListenersIfCurrent(user) {
    if (user === this.currentUser) {
      this.notifyAuthListeners();
    }
  }
  _key() {
    return `${this.config.authDomain}:${this.config.apiKey}:${this.name}`;
  }
  _startProactiveRefresh() {
    this.isProactiveRefreshEnabled = true;
    if (this.currentUser) {
      this._currentUser._startProactiveRefresh();
    }
  }
  _stopProactiveRefresh() {
    this.isProactiveRefreshEnabled = false;
    if (this.currentUser) {
      this._currentUser._stopProactiveRefresh();
    }
  }
  get _currentUser() {
    return this.currentUser;
  }
  notifyAuthListeners() {
    var _a, _b;
    if (!this._isInitialized) {
      return;
    }
    this.idTokenSubscription.next(this.currentUser);
    const currentUid = (_b = (_a = this.currentUser) === null || _a === void 0 ? void 0 : _a.uid) !== null && _b !== void 0 ? _b : null;
    if (this.lastNotifiedUid !== currentUid) {
      this.lastNotifiedUid = currentUid;
      this.authStateSubscription.next(this.currentUser);
    }
  }
  registerStateListener(subscription, nextOrObserver, error, completed) {
    if (this._deleted) {
      return () => {};
    }
    const cb = typeof nextOrObserver === "function" ? nextOrObserver : nextOrObserver.next.bind(nextOrObserver);
    const promise = this._isInitialized ? Promise.resolve() : this._initializationPromise;
    _assert(promise, this, "internal-error");
    promise.then(() => cb(this.currentUser));
    if (typeof nextOrObserver === "function") {
      return subscription.addObserver(nextOrObserver, error, completed);
    } else {
      return subscription.addObserver(nextOrObserver);
    }
  }
  async directlySetCurrentUser(user) {
    if (this.currentUser && this.currentUser !== user) {
      this._currentUser._stopProactiveRefresh();
    }
    if (user && this.isProactiveRefreshEnabled) {
      user._startProactiveRefresh();
    }
    this.currentUser = user;
    if (user) {
      await this.assertedPersistence.setCurrentUser(user);
    } else {
      await this.assertedPersistence.removeCurrentUser();
    }
  }
  queue(action) {
    this.operations = this.operations.then(action, action);
    return this.operations;
  }
  get assertedPersistence() {
    _assert(this.persistenceManager, this, "internal-error");
    return this.persistenceManager;
  }
  _logFramework(framework) {
    if (!framework || this.frameworks.includes(framework)) {
      return;
    }
    this.frameworks.push(framework);
    this.frameworks.sort();
    this.clientVersion = _getClientVersion(this.config.clientPlatform, this._getFrameworks());
  }
  _getFrameworks() {
    return this.frameworks;
  }
  async _getAdditionalHeaders() {
    var _a;
    const headers = {
      ["X-Client-Version"]: this.clientVersion
    };
    if (this.app.options.appId) {
      headers["X-Firebase-gmpid"] = this.app.options.appId;
    }
    const heartbeatsHeader = await ((_a = this.heartbeatServiceProvider.getImmediate({
      optional: true
    })) === null || _a === void 0 ? void 0 : _a.getHeartbeatsHeader());
    if (heartbeatsHeader) {
      headers["X-Firebase-Client"] = heartbeatsHeader;
    }
    return headers;
  }
};
function _castAuth(auth) {
  return (0, import_util.getModularInstance)(auth);
}
var Subscription = class {
  constructor(auth) {
    this.auth = auth;
    this.observer = null;
    this.addObserver = (0, import_util.createSubscribe)(observer => this.observer = observer);
  }
  get next() {
    _assert(this.observer, this.auth, "internal-error");
    return this.observer.next.bind(this.observer);
  }
};
function connectAuthEmulator(auth, url, options) {
  const authInternal = _castAuth(auth);
  _assert(authInternal._canInitEmulator, authInternal, "emulator-config-failed");
  _assert(/^https?:\/\//.test(url), authInternal, "invalid-emulator-scheme");
  const disableWarnings = !!(options === null || options === void 0 ? void 0 : options.disableWarnings);
  const protocol = extractProtocol(url);
  const {
    host,
    port
  } = extractHostAndPort(url);
  const portStr = port === null ? "" : `:${port}`;
  authInternal.config.emulator = {
    url: `${protocol}//${host}${portStr}/`
  };
  authInternal.settings.appVerificationDisabledForTesting = true;
  authInternal.emulatorConfig = Object.freeze({
    host,
    port,
    protocol: protocol.replace(":", ""),
    options: Object.freeze({
      disableWarnings
    })
  });
  if (!disableWarnings) {
    emitEmulatorWarning();
  }
}
function extractProtocol(url) {
  const protocolEnd = url.indexOf(":");
  return protocolEnd < 0 ? "" : url.substr(0, protocolEnd + 1);
}
function extractHostAndPort(url) {
  const protocol = extractProtocol(url);
  const authority = /(\/\/)?([^?#/]+)/.exec(url.substr(protocol.length));
  if (!authority) {
    return {
      host: "",
      port: null
    };
  }
  const hostAndPort = authority[2].split("@").pop() || "";
  const bracketedIPv6 = /^(\[[^\]]+\])(:|$)/.exec(hostAndPort);
  if (bracketedIPv6) {
    const host = bracketedIPv6[1];
    return {
      host,
      port: parsePort(hostAndPort.substr(host.length + 1))
    };
  } else {
    const [host, port] = hostAndPort.split(":");
    return {
      host,
      port: parsePort(port)
    };
  }
}
function parsePort(portStr) {
  if (!portStr) {
    return null;
  }
  const port = Number(portStr);
  if (isNaN(port)) {
    return null;
  }
  return port;
}
function emitEmulatorWarning() {
  function attachBanner() {
    const el = document.createElement("p");
    const sty = el.style;
    el.innerText = "Running in emulator mode. Do not use with production credentials.";
    sty.position = "fixed";
    sty.width = "100%";
    sty.backgroundColor = "#ffffff";
    sty.border = ".1em solid #000000";
    sty.color = "#b50000";
    sty.bottom = "0px";
    sty.left = "0px";
    sty.margin = "0px";
    sty.zIndex = "10000";
    sty.textAlign = "center";
    el.classList.add("firebase-emulator-warning");
    document.body.appendChild(el);
  }
  if (typeof console !== "undefined" && typeof console.info === "function") {
    console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");
  }
  if (typeof window !== "undefined" && typeof document !== "undefined") {
    if (document.readyState === "loading") {
      window.addEventListener("DOMContentLoaded", attachBanner);
    } else {
      attachBanner();
    }
  }
}
var AuthCredential = class {
  constructor(providerId, signInMethod) {
    this.providerId = providerId;
    this.signInMethod = signInMethod;
  }
  toJSON() {
    return debugFail("not implemented");
  }
  _getIdTokenResponse(_auth) {
    return debugFail("not implemented");
  }
  _linkToIdToken(_auth, _idToken) {
    return debugFail("not implemented");
  }
  _getReauthenticationResolver(_auth) {
    return debugFail("not implemented");
  }
};
async function resetPassword(auth, request) {
  return _performApiRequest(auth, "POST", "/v1/accounts:resetPassword", _addTidIfNecessary(auth, request));
}
async function updateEmailPassword(auth, request) {
  return _performApiRequest(auth, "POST", "/v1/accounts:update", request);
}
async function applyActionCode$1(auth, request) {
  return _performApiRequest(auth, "POST", "/v1/accounts:update", _addTidIfNecessary(auth, request));
}
async function signInWithPassword(auth, request) {
  return _performSignInRequest(auth, "POST", "/v1/accounts:signInWithPassword", _addTidIfNecessary(auth, request));
}
async function sendOobCode(auth, request) {
  return _performApiRequest(auth, "POST", "/v1/accounts:sendOobCode", _addTidIfNecessary(auth, request));
}
async function sendEmailVerification$1(auth, request) {
  return sendOobCode(auth, request);
}
async function sendPasswordResetEmail$1(auth, request) {
  return sendOobCode(auth, request);
}
async function sendSignInLinkToEmail$1(auth, request) {
  return sendOobCode(auth, request);
}
async function verifyAndChangeEmail(auth, request) {
  return sendOobCode(auth, request);
}
async function signInWithEmailLink$1(auth, request) {
  return _performSignInRequest(auth, "POST", "/v1/accounts:signInWithEmailLink", _addTidIfNecessary(auth, request));
}
async function signInWithEmailLinkForLinking(auth, request) {
  return _performSignInRequest(auth, "POST", "/v1/accounts:signInWithEmailLink", _addTidIfNecessary(auth, request));
}
var EmailAuthCredential = class extends AuthCredential {
  constructor(_email, _password, signInMethod, _tenantId = null) {
    super("password", signInMethod);
    this._email = _email;
    this._password = _password;
    this._tenantId = _tenantId;
  }
  static _fromEmailAndPassword(email, password) {
    return new EmailAuthCredential(email, password, "password");
  }
  static _fromEmailAndCode(email, oobCode, tenantId = null) {
    return new EmailAuthCredential(email, oobCode, "emailLink", tenantId);
  }
  toJSON() {
    return {
      email: this._email,
      password: this._password,
      signInMethod: this.signInMethod,
      tenantId: this._tenantId
    };
  }
  static fromJSON(json) {
    const obj = typeof json === "string" ? JSON.parse(json) : json;
    if ((obj === null || obj === void 0 ? void 0 : obj.email) && (obj === null || obj === void 0 ? void 0 : obj.password)) {
      if (obj.signInMethod === "password") {
        return this._fromEmailAndPassword(obj.email, obj.password);
      } else if (obj.signInMethod === "emailLink") {
        return this._fromEmailAndCode(obj.email, obj.password, obj.tenantId);
      }
    }
    return null;
  }
  async _getIdTokenResponse(auth) {
    switch (this.signInMethod) {
      case "password":
        return signInWithPassword(auth, {
          returnSecureToken: true,
          email: this._email,
          password: this._password
        });
      case "emailLink":
        return signInWithEmailLink$1(auth, {
          email: this._email,
          oobCode: this._password
        });
      default:
        _fail(auth, "internal-error");
    }
  }
  async _linkToIdToken(auth, idToken) {
    switch (this.signInMethod) {
      case "password":
        return updateEmailPassword(auth, {
          idToken,
          returnSecureToken: true,
          email: this._email,
          password: this._password
        });
      case "emailLink":
        return signInWithEmailLinkForLinking(auth, {
          idToken,
          email: this._email,
          oobCode: this._password
        });
      default:
        _fail(auth, "internal-error");
    }
  }
  _getReauthenticationResolver(auth) {
    return this._getIdTokenResponse(auth);
  }
};
async function signInWithIdp(auth, request) {
  return _performSignInRequest(auth, "POST", "/v1/accounts:signInWithIdp", _addTidIfNecessary(auth, request));
}
var IDP_REQUEST_URI$1 = "http://localhost";
var OAuthCredential = class extends AuthCredential {
  constructor() {
    super(...arguments);
    this.pendingToken = null;
  }
  static _fromParams(params) {
    const cred = new OAuthCredential(params.providerId, params.signInMethod);
    if (params.idToken || params.accessToken) {
      if (params.idToken) {
        cred.idToken = params.idToken;
      }
      if (params.accessToken) {
        cred.accessToken = params.accessToken;
      }
      if (params.nonce && !params.pendingToken) {
        cred.nonce = params.nonce;
      }
      if (params.pendingToken) {
        cred.pendingToken = params.pendingToken;
      }
    } else if (params.oauthToken && params.oauthTokenSecret) {
      cred.accessToken = params.oauthToken;
      cred.secret = params.oauthTokenSecret;
    } else {
      _fail("argument-error");
    }
    return cred;
  }
  toJSON() {
    return {
      idToken: this.idToken,
      accessToken: this.accessToken,
      secret: this.secret,
      nonce: this.nonce,
      pendingToken: this.pendingToken,
      providerId: this.providerId,
      signInMethod: this.signInMethod
    };
  }
  static fromJSON(json) {
    const obj = typeof json === "string" ? JSON.parse(json) : json;
    const {
        providerId,
        signInMethod
      } = obj,
      rest = (0, import_tslib.__rest)(obj, ["providerId", "signInMethod"]);
    if (!providerId || !signInMethod) {
      return null;
    }
    const cred = new OAuthCredential(providerId, signInMethod);
    cred.idToken = rest.idToken || void 0;
    cred.accessToken = rest.accessToken || void 0;
    cred.secret = rest.secret;
    cred.nonce = rest.nonce;
    cred.pendingToken = rest.pendingToken || null;
    return cred;
  }
  _getIdTokenResponse(auth) {
    const request = this.buildRequest();
    return signInWithIdp(auth, request);
  }
  _linkToIdToken(auth, idToken) {
    const request = this.buildRequest();
    request.idToken = idToken;
    return signInWithIdp(auth, request);
  }
  _getReauthenticationResolver(auth) {
    const request = this.buildRequest();
    request.autoCreate = false;
    return signInWithIdp(auth, request);
  }
  buildRequest() {
    const request = {
      requestUri: IDP_REQUEST_URI$1,
      returnSecureToken: true
    };
    if (this.pendingToken) {
      request.pendingToken = this.pendingToken;
    } else {
      const postBody = {};
      if (this.idToken) {
        postBody["id_token"] = this.idToken;
      }
      if (this.accessToken) {
        postBody["access_token"] = this.accessToken;
      }
      if (this.secret) {
        postBody["oauth_token_secret"] = this.secret;
      }
      postBody["providerId"] = this.providerId;
      if (this.nonce && !this.pendingToken) {
        postBody["nonce"] = this.nonce;
      }
      request.postBody = (0, import_util.querystring)(postBody);
    }
    return request;
  }
};
async function sendPhoneVerificationCode(auth, request) {
  return _performApiRequest(auth, "POST", "/v1/accounts:sendVerificationCode", _addTidIfNecessary(auth, request));
}
async function signInWithPhoneNumber$1(auth, request) {
  return _performSignInRequest(auth, "POST", "/v1/accounts:signInWithPhoneNumber", _addTidIfNecessary(auth, request));
}
async function linkWithPhoneNumber$1(auth, request) {
  const response = await _performSignInRequest(auth, "POST", "/v1/accounts:signInWithPhoneNumber", _addTidIfNecessary(auth, request));
  if (response.temporaryProof) {
    throw _makeTaggedError(auth, "account-exists-with-different-credential", response);
  }
  return response;
}
var VERIFY_PHONE_NUMBER_FOR_EXISTING_ERROR_MAP_ = {
  ["USER_NOT_FOUND"]: "user-not-found"
};
async function verifyPhoneNumberForExisting(auth, request) {
  const apiRequest = Object.assign(Object.assign({}, request), {
    operation: "REAUTH"
  });
  return _performSignInRequest(auth, "POST", "/v1/accounts:signInWithPhoneNumber", _addTidIfNecessary(auth, apiRequest), VERIFY_PHONE_NUMBER_FOR_EXISTING_ERROR_MAP_);
}
var PhoneAuthCredential = class extends AuthCredential {
  constructor(params) {
    super("phone", "phone");
    this.params = params;
  }
  static _fromVerification(verificationId, verificationCode) {
    return new PhoneAuthCredential({
      verificationId,
      verificationCode
    });
  }
  static _fromTokenResponse(phoneNumber, temporaryProof) {
    return new PhoneAuthCredential({
      phoneNumber,
      temporaryProof
    });
  }
  _getIdTokenResponse(auth) {
    return signInWithPhoneNumber$1(auth, this._makeVerificationRequest());
  }
  _linkToIdToken(auth, idToken) {
    return linkWithPhoneNumber$1(auth, Object.assign({
      idToken
    }, this._makeVerificationRequest()));
  }
  _getReauthenticationResolver(auth) {
    return verifyPhoneNumberForExisting(auth, this._makeVerificationRequest());
  }
  _makeVerificationRequest() {
    const {
      temporaryProof,
      phoneNumber,
      verificationId,
      verificationCode
    } = this.params;
    if (temporaryProof && phoneNumber) {
      return {
        temporaryProof,
        phoneNumber
      };
    }
    return {
      sessionInfo: verificationId,
      code: verificationCode
    };
  }
  toJSON() {
    const obj = {
      providerId: this.providerId
    };
    if (this.params.phoneNumber) {
      obj.phoneNumber = this.params.phoneNumber;
    }
    if (this.params.temporaryProof) {
      obj.temporaryProof = this.params.temporaryProof;
    }
    if (this.params.verificationCode) {
      obj.verificationCode = this.params.verificationCode;
    }
    if (this.params.verificationId) {
      obj.verificationId = this.params.verificationId;
    }
    return obj;
  }
  static fromJSON(json) {
    if (typeof json === "string") {
      json = JSON.parse(json);
    }
    const {
      verificationId,
      verificationCode,
      phoneNumber,
      temporaryProof
    } = json;
    if (!verificationCode && !verificationId && !phoneNumber && !temporaryProof) {
      return null;
    }
    return new PhoneAuthCredential({
      verificationId,
      verificationCode,
      phoneNumber,
      temporaryProof
    });
  }
};
function parseMode(mode) {
  switch (mode) {
    case "recoverEmail":
      return "RECOVER_EMAIL";
    case "resetPassword":
      return "PASSWORD_RESET";
    case "signIn":
      return "EMAIL_SIGNIN";
    case "verifyEmail":
      return "VERIFY_EMAIL";
    case "verifyAndChangeEmail":
      return "VERIFY_AND_CHANGE_EMAIL";
    case "revertSecondFactorAddition":
      return "REVERT_SECOND_FACTOR_ADDITION";
    default:
      return null;
  }
}
function parseDeepLink(url) {
  const link = (0, import_util.querystringDecode)((0, import_util.extractQuerystring)(url))["link"];
  const doubleDeepLink = link ? (0, import_util.querystringDecode)((0, import_util.extractQuerystring)(link))["deep_link_id"] : null;
  const iOSDeepLink = (0, import_util.querystringDecode)((0, import_util.extractQuerystring)(url))["deep_link_id"];
  const iOSDoubleDeepLink = iOSDeepLink ? (0, import_util.querystringDecode)((0, import_util.extractQuerystring)(iOSDeepLink))["link"] : null;
  return iOSDoubleDeepLink || iOSDeepLink || doubleDeepLink || link || url;
}
var ActionCodeURL = class {
  constructor(actionLink) {
    var _a, _b, _c, _d, _e, _f;
    const searchParams = (0, import_util.querystringDecode)((0, import_util.extractQuerystring)(actionLink));
    const apiKey = (_a = searchParams["apiKey"]) !== null && _a !== void 0 ? _a : null;
    const code = (_b = searchParams["oobCode"]) !== null && _b !== void 0 ? _b : null;
    const operation = parseMode((_c = searchParams["mode"]) !== null && _c !== void 0 ? _c : null);
    _assert(apiKey && code && operation, "argument-error");
    this.apiKey = apiKey;
    this.operation = operation;
    this.code = code;
    this.continueUrl = (_d = searchParams["continueUrl"]) !== null && _d !== void 0 ? _d : null;
    this.languageCode = (_e = searchParams["languageCode"]) !== null && _e !== void 0 ? _e : null;
    this.tenantId = (_f = searchParams["tenantId"]) !== null && _f !== void 0 ? _f : null;
  }
  static parseLink(link) {
    const actionLink = parseDeepLink(link);
    try {
      return new ActionCodeURL(actionLink);
    } catch (_a) {
      return null;
    }
  }
};
function parseActionCodeURL(link) {
  return ActionCodeURL.parseLink(link);
}
var EmailAuthProvider = class {
  constructor() {
    this.providerId = EmailAuthProvider.PROVIDER_ID;
  }
  static credential(email, password) {
    return EmailAuthCredential._fromEmailAndPassword(email, password);
  }
  static credentialWithLink(email, emailLink) {
    const actionCodeUrl = ActionCodeURL.parseLink(emailLink);
    _assert(actionCodeUrl, "argument-error");
    return EmailAuthCredential._fromEmailAndCode(email, actionCodeUrl.code, actionCodeUrl.tenantId);
  }
};
EmailAuthProvider.PROVIDER_ID = "password";
EmailAuthProvider.EMAIL_PASSWORD_SIGN_IN_METHOD = "password";
EmailAuthProvider.EMAIL_LINK_SIGN_IN_METHOD = "emailLink";
var FederatedAuthProvider = class {
  constructor(providerId) {
    this.providerId = providerId;
    this.defaultLanguageCode = null;
    this.customParameters = {};
  }
  setDefaultLanguage(languageCode) {
    this.defaultLanguageCode = languageCode;
  }
  setCustomParameters(customOAuthParameters) {
    this.customParameters = customOAuthParameters;
    return this;
  }
  getCustomParameters() {
    return this.customParameters;
  }
};
var BaseOAuthProvider = class extends FederatedAuthProvider {
  constructor() {
    super(...arguments);
    this.scopes = [];
  }
  addScope(scope) {
    if (!this.scopes.includes(scope)) {
      this.scopes.push(scope);
    }
    return this;
  }
  getScopes() {
    return [...this.scopes];
  }
};
var OAuthProvider = class extends BaseOAuthProvider {
  static credentialFromJSON(json) {
    const obj = typeof json === "string" ? JSON.parse(json) : json;
    _assert("providerId" in obj && "signInMethod" in obj, "argument-error");
    return OAuthCredential._fromParams(obj);
  }
  credential(params) {
    return this._credential(Object.assign(Object.assign({}, params), {
      nonce: params.rawNonce
    }));
  }
  _credential(params) {
    _assert(params.idToken || params.accessToken, "argument-error");
    return OAuthCredential._fromParams(Object.assign(Object.assign({}, params), {
      providerId: this.providerId,
      signInMethod: this.providerId
    }));
  }
  static credentialFromResult(userCredential) {
    return OAuthProvider.oauthCredentialFromTaggedObject(userCredential);
  }
  static credentialFromError(error) {
    return OAuthProvider.oauthCredentialFromTaggedObject(error.customData || {});
  }
  static oauthCredentialFromTaggedObject({
    _tokenResponse: tokenResponse
  }) {
    if (!tokenResponse) {
      return null;
    }
    const {
      oauthIdToken,
      oauthAccessToken,
      oauthTokenSecret,
      pendingToken,
      nonce,
      providerId
    } = tokenResponse;
    if (!oauthAccessToken && !oauthTokenSecret && !oauthIdToken && !pendingToken) {
      return null;
    }
    if (!providerId) {
      return null;
    }
    try {
      return new OAuthProvider(providerId)._credential({
        idToken: oauthIdToken,
        accessToken: oauthAccessToken,
        nonce,
        pendingToken
      });
    } catch (e) {
      return null;
    }
  }
};
var FacebookAuthProvider = class extends BaseOAuthProvider {
  constructor() {
    super("facebook.com");
  }
  static credential(accessToken) {
    return OAuthCredential._fromParams({
      providerId: FacebookAuthProvider.PROVIDER_ID,
      signInMethod: FacebookAuthProvider.FACEBOOK_SIGN_IN_METHOD,
      accessToken
    });
  }
  static credentialFromResult(userCredential) {
    return FacebookAuthProvider.credentialFromTaggedObject(userCredential);
  }
  static credentialFromError(error) {
    return FacebookAuthProvider.credentialFromTaggedObject(error.customData || {});
  }
  static credentialFromTaggedObject({
    _tokenResponse: tokenResponse
  }) {
    if (!tokenResponse || !("oauthAccessToken" in tokenResponse)) {
      return null;
    }
    if (!tokenResponse.oauthAccessToken) {
      return null;
    }
    try {
      return FacebookAuthProvider.credential(tokenResponse.oauthAccessToken);
    } catch (_a) {
      return null;
    }
  }
};
FacebookAuthProvider.FACEBOOK_SIGN_IN_METHOD = "facebook.com";
FacebookAuthProvider.PROVIDER_ID = "facebook.com";
var GoogleAuthProvider = class extends BaseOAuthProvider {
  constructor() {
    super("google.com");
    this.addScope("profile");
  }
  static credential(idToken, accessToken) {
    return OAuthCredential._fromParams({
      providerId: GoogleAuthProvider.PROVIDER_ID,
      signInMethod: GoogleAuthProvider.GOOGLE_SIGN_IN_METHOD,
      idToken,
      accessToken
    });
  }
  static credentialFromResult(userCredential) {
    return GoogleAuthProvider.credentialFromTaggedObject(userCredential);
  }
  static credentialFromError(error) {
    return GoogleAuthProvider.credentialFromTaggedObject(error.customData || {});
  }
  static credentialFromTaggedObject({
    _tokenResponse: tokenResponse
  }) {
    if (!tokenResponse) {
      return null;
    }
    const {
      oauthIdToken,
      oauthAccessToken
    } = tokenResponse;
    if (!oauthIdToken && !oauthAccessToken) {
      return null;
    }
    try {
      return GoogleAuthProvider.credential(oauthIdToken, oauthAccessToken);
    } catch (_a) {
      return null;
    }
  }
};
GoogleAuthProvider.GOOGLE_SIGN_IN_METHOD = "google.com";
GoogleAuthProvider.PROVIDER_ID = "google.com";
var GithubAuthProvider = class extends BaseOAuthProvider {
  constructor() {
    super("github.com");
  }
  static credential(accessToken) {
    return OAuthCredential._fromParams({
      providerId: GithubAuthProvider.PROVIDER_ID,
      signInMethod: GithubAuthProvider.GITHUB_SIGN_IN_METHOD,
      accessToken
    });
  }
  static credentialFromResult(userCredential) {
    return GithubAuthProvider.credentialFromTaggedObject(userCredential);
  }
  static credentialFromError(error) {
    return GithubAuthProvider.credentialFromTaggedObject(error.customData || {});
  }
  static credentialFromTaggedObject({
    _tokenResponse: tokenResponse
  }) {
    if (!tokenResponse || !("oauthAccessToken" in tokenResponse)) {
      return null;
    }
    if (!tokenResponse.oauthAccessToken) {
      return null;
    }
    try {
      return GithubAuthProvider.credential(tokenResponse.oauthAccessToken);
    } catch (_a) {
      return null;
    }
  }
};
GithubAuthProvider.GITHUB_SIGN_IN_METHOD = "github.com";
GithubAuthProvider.PROVIDER_ID = "github.com";
var IDP_REQUEST_URI = "http://localhost";
var SAMLAuthCredential = class extends AuthCredential {
  constructor(providerId, pendingToken) {
    super(providerId, providerId);
    this.pendingToken = pendingToken;
  }
  _getIdTokenResponse(auth) {
    const request = this.buildRequest();
    return signInWithIdp(auth, request);
  }
  _linkToIdToken(auth, idToken) {
    const request = this.buildRequest();
    request.idToken = idToken;
    return signInWithIdp(auth, request);
  }
  _getReauthenticationResolver(auth) {
    const request = this.buildRequest();
    request.autoCreate = false;
    return signInWithIdp(auth, request);
  }
  toJSON() {
    return {
      signInMethod: this.signInMethod,
      providerId: this.providerId,
      pendingToken: this.pendingToken
    };
  }
  static fromJSON(json) {
    const obj = typeof json === "string" ? JSON.parse(json) : json;
    const {
      providerId,
      signInMethod,
      pendingToken
    } = obj;
    if (!providerId || !signInMethod || !pendingToken || providerId !== signInMethod) {
      return null;
    }
    return new SAMLAuthCredential(providerId, pendingToken);
  }
  static _create(providerId, pendingToken) {
    return new SAMLAuthCredential(providerId, pendingToken);
  }
  buildRequest() {
    return {
      requestUri: IDP_REQUEST_URI,
      returnSecureToken: true,
      pendingToken: this.pendingToken
    };
  }
};
var SAML_PROVIDER_PREFIX = "saml.";
var SAMLAuthProvider = class extends FederatedAuthProvider {
  constructor(providerId) {
    _assert(providerId.startsWith(SAML_PROVIDER_PREFIX), "argument-error");
    super(providerId);
  }
  static credentialFromResult(userCredential) {
    return SAMLAuthProvider.samlCredentialFromTaggedObject(userCredential);
  }
  static credentialFromError(error) {
    return SAMLAuthProvider.samlCredentialFromTaggedObject(error.customData || {});
  }
  static credentialFromJSON(json) {
    const credential = SAMLAuthCredential.fromJSON(json);
    _assert(credential, "argument-error");
    return credential;
  }
  static samlCredentialFromTaggedObject({
    _tokenResponse: tokenResponse
  }) {
    if (!tokenResponse) {
      return null;
    }
    const {
      pendingToken,
      providerId
    } = tokenResponse;
    if (!pendingToken || !providerId) {
      return null;
    }
    try {
      return SAMLAuthCredential._create(providerId, pendingToken);
    } catch (e) {
      return null;
    }
  }
};
var TwitterAuthProvider = class extends BaseOAuthProvider {
  constructor() {
    super("twitter.com");
  }
  static credential(token, secret) {
    return OAuthCredential._fromParams({
      providerId: TwitterAuthProvider.PROVIDER_ID,
      signInMethod: TwitterAuthProvider.TWITTER_SIGN_IN_METHOD,
      oauthToken: token,
      oauthTokenSecret: secret
    });
  }
  static credentialFromResult(userCredential) {
    return TwitterAuthProvider.credentialFromTaggedObject(userCredential);
  }
  static credentialFromError(error) {
    return TwitterAuthProvider.credentialFromTaggedObject(error.customData || {});
  }
  static credentialFromTaggedObject({
    _tokenResponse: tokenResponse
  }) {
    if (!tokenResponse) {
      return null;
    }
    const {
      oauthAccessToken,
      oauthTokenSecret
    } = tokenResponse;
    if (!oauthAccessToken || !oauthTokenSecret) {
      return null;
    }
    try {
      return TwitterAuthProvider.credential(oauthAccessToken, oauthTokenSecret);
    } catch (_a) {
      return null;
    }
  }
};
TwitterAuthProvider.TWITTER_SIGN_IN_METHOD = "twitter.com";
TwitterAuthProvider.PROVIDER_ID = "twitter.com";
async function signUp(auth, request) {
  return _performSignInRequest(auth, "POST", "/v1/accounts:signUp", _addTidIfNecessary(auth, request));
}
var UserCredentialImpl = class {
  constructor(params) {
    this.user = params.user;
    this.providerId = params.providerId;
    this._tokenResponse = params._tokenResponse;
    this.operationType = params.operationType;
  }
  static async _fromIdTokenResponse(auth, operationType, idTokenResponse, isAnonymous = false) {
    const user = await UserImpl._fromIdTokenResponse(auth, idTokenResponse, isAnonymous);
    const providerId = providerIdForResponse(idTokenResponse);
    const userCred = new UserCredentialImpl({
      user,
      providerId,
      _tokenResponse: idTokenResponse,
      operationType
    });
    return userCred;
  }
  static async _forOperation(user, operationType, response) {
    await user._updateTokensIfNecessary(response, true);
    const providerId = providerIdForResponse(response);
    return new UserCredentialImpl({
      user,
      providerId,
      _tokenResponse: response,
      operationType
    });
  }
};
function providerIdForResponse(response) {
  if (response.providerId) {
    return response.providerId;
  }
  if ("phoneNumber" in response) {
    return "phone";
  }
  return null;
}
async function signInAnonymously(auth) {
  var _a;
  const authInternal = _castAuth(auth);
  await authInternal._initializationPromise;
  if ((_a = authInternal.currentUser) === null || _a === void 0 ? void 0 : _a.isAnonymous) {
    return new UserCredentialImpl({
      user: authInternal.currentUser,
      providerId: null,
      operationType: "signIn"
    });
  }
  const response = await signUp(authInternal, {
    returnSecureToken: true
  });
  const userCredential = await UserCredentialImpl._fromIdTokenResponse(authInternal, "signIn", response, true);
  await authInternal._updateCurrentUser(userCredential.user);
  return userCredential;
}
var MultiFactorError = class extends import_util.FirebaseError {
  constructor(auth, error, operationType, user) {
    var _a;
    super(error.code, error.message);
    this.operationType = operationType;
    this.user = user;
    Object.setPrototypeOf(this, MultiFactorError.prototype);
    this.customData = {
      appName: auth.name,
      tenantId: (_a = auth.tenantId) !== null && _a !== void 0 ? _a : void 0,
      _serverResponse: error.customData._serverResponse,
      operationType
    };
  }
  static _fromErrorAndOperation(auth, error, operationType, user) {
    return new MultiFactorError(auth, error, operationType, user);
  }
};
function _processCredentialSavingMfaContextIfNecessary(auth, operationType, credential, user) {
  const idTokenProvider = operationType === "reauthenticate" ? credential._getReauthenticationResolver(auth) : credential._getIdTokenResponse(auth);
  return idTokenProvider.catch(error => {
    if (error.code === `auth/${"multi-factor-auth-required"}`) {
      throw MultiFactorError._fromErrorAndOperation(auth, error, operationType, user);
    }
    throw error;
  });
}
function providerDataAsNames(providerData) {
  return new Set(providerData.map(({
    providerId
  }) => providerId).filter(pid => !!pid));
}
async function unlink(user, providerId) {
  const userInternal = (0, import_util.getModularInstance)(user);
  await _assertLinkedStatus(true, userInternal, providerId);
  const {
    providerUserInfo
  } = await deleteLinkedAccounts(userInternal.auth, {
    idToken: await userInternal.getIdToken(),
    deleteProvider: [providerId]
  });
  const providersLeft = providerDataAsNames(providerUserInfo || []);
  userInternal.providerData = userInternal.providerData.filter(pd => providersLeft.has(pd.providerId));
  if (!providersLeft.has("phone")) {
    userInternal.phoneNumber = null;
  }
  await userInternal.auth._persistUserIfCurrent(userInternal);
  return userInternal;
}
async function _link$1(user, credential, bypassAuthState = false) {
  const response = await _logoutIfInvalidated(user, credential._linkToIdToken(user.auth, await user.getIdToken()), bypassAuthState);
  return UserCredentialImpl._forOperation(user, "link", response);
}
async function _assertLinkedStatus(expected, user, provider) {
  await _reloadWithoutSaving(user);
  const providerIds = providerDataAsNames(user.providerData);
  const code = expected === false ? "provider-already-linked" : "no-such-provider";
  _assert(providerIds.has(provider) === expected, user.auth, code);
}
async function _reauthenticate(user, credential, bypassAuthState = false) {
  const {
    auth
  } = user;
  const operationType = "reauthenticate";
  try {
    const response = await _logoutIfInvalidated(user, _processCredentialSavingMfaContextIfNecessary(auth, operationType, credential, user), bypassAuthState);
    _assert(response.idToken, auth, "internal-error");
    const parsed = _parseToken(response.idToken);
    _assert(parsed, auth, "internal-error");
    const {
      sub: localId
    } = parsed;
    _assert(user.uid === localId, auth, "user-mismatch");
    return UserCredentialImpl._forOperation(user, operationType, response);
  } catch (e) {
    if ((e === null || e === void 0 ? void 0 : e.code) === `auth/${"user-not-found"}`) {
      _fail(auth, "user-mismatch");
    }
    throw e;
  }
}
async function _signInWithCredential(auth, credential, bypassAuthState = false) {
  const operationType = "signIn";
  const response = await _processCredentialSavingMfaContextIfNecessary(auth, operationType, credential);
  const userCredential = await UserCredentialImpl._fromIdTokenResponse(auth, operationType, response);
  if (!bypassAuthState) {
    await auth._updateCurrentUser(userCredential.user);
  }
  return userCredential;
}
async function signInWithCredential(auth, credential) {
  return _signInWithCredential(_castAuth(auth), credential);
}
async function linkWithCredential(user, credential) {
  const userInternal = (0, import_util.getModularInstance)(user);
  await _assertLinkedStatus(false, userInternal, credential.providerId);
  return _link$1(userInternal, credential);
}
async function reauthenticateWithCredential(user, credential) {
  return _reauthenticate((0, import_util.getModularInstance)(user), credential);
}
async function signInWithCustomToken$1(auth, request) {
  return _performSignInRequest(auth, "POST", "/v1/accounts:signInWithCustomToken", _addTidIfNecessary(auth, request));
}
async function signInWithCustomToken(auth, customToken) {
  const authInternal = _castAuth(auth);
  const response = await signInWithCustomToken$1(authInternal, {
    token: customToken,
    returnSecureToken: true
  });
  const cred = await UserCredentialImpl._fromIdTokenResponse(authInternal, "signIn", response);
  await authInternal._updateCurrentUser(cred.user);
  return cred;
}
var MultiFactorInfoImpl = class {
  constructor(factorId, response) {
    this.factorId = factorId;
    this.uid = response.mfaEnrollmentId;
    this.enrollmentTime = new Date(response.enrolledAt).toUTCString();
    this.displayName = response.displayName;
  }
  static _fromServerResponse(auth, enrollment) {
    if ("phoneInfo" in enrollment) {
      return PhoneMultiFactorInfoImpl._fromServerResponse(auth, enrollment);
    }
    return _fail(auth, "internal-error");
  }
};
var PhoneMultiFactorInfoImpl = class extends MultiFactorInfoImpl {
  constructor(response) {
    super("phone", response);
    this.phoneNumber = response.phoneInfo;
  }
  static _fromServerResponse(_auth, enrollment) {
    return new PhoneMultiFactorInfoImpl(enrollment);
  }
};
function _setActionCodeSettingsOnRequest(auth, request, actionCodeSettings) {
  var _a;
  _assert(((_a = actionCodeSettings.url) === null || _a === void 0 ? void 0 : _a.length) > 0, auth, "invalid-continue-uri");
  _assert(typeof actionCodeSettings.dynamicLinkDomain === "undefined" || actionCodeSettings.dynamicLinkDomain.length > 0, auth, "invalid-dynamic-link-domain");
  request.continueUrl = actionCodeSettings.url;
  request.dynamicLinkDomain = actionCodeSettings.dynamicLinkDomain;
  request.canHandleCodeInApp = actionCodeSettings.handleCodeInApp;
  if (actionCodeSettings.iOS) {
    _assert(actionCodeSettings.iOS.bundleId.length > 0, auth, "missing-ios-bundle-id");
    request.iOSBundleId = actionCodeSettings.iOS.bundleId;
  }
  if (actionCodeSettings.android) {
    _assert(actionCodeSettings.android.packageName.length > 0, auth, "missing-android-pkg-name");
    request.androidInstallApp = actionCodeSettings.android.installApp;
    request.androidMinimumVersionCode = actionCodeSettings.android.minimumVersion;
    request.androidPackageName = actionCodeSettings.android.packageName;
  }
}
async function sendPasswordResetEmail(auth, email, actionCodeSettings) {
  const authModular = (0, import_util.getModularInstance)(auth);
  const request = {
    requestType: "PASSWORD_RESET",
    email
  };
  if (actionCodeSettings) {
    _setActionCodeSettingsOnRequest(authModular, request, actionCodeSettings);
  }
  await sendPasswordResetEmail$1(authModular, request);
}
async function confirmPasswordReset(auth, oobCode, newPassword) {
  await resetPassword((0, import_util.getModularInstance)(auth), {
    oobCode,
    newPassword
  });
}
async function applyActionCode(auth, oobCode) {
  await applyActionCode$1((0, import_util.getModularInstance)(auth), {
    oobCode
  });
}
async function checkActionCode(auth, oobCode) {
  const authModular = (0, import_util.getModularInstance)(auth);
  const response = await resetPassword(authModular, {
    oobCode
  });
  const operation = response.requestType;
  _assert(operation, authModular, "internal-error");
  switch (operation) {
    case "EMAIL_SIGNIN":
      break;
    case "VERIFY_AND_CHANGE_EMAIL":
      _assert(response.newEmail, authModular, "internal-error");
      break;
    case "REVERT_SECOND_FACTOR_ADDITION":
      _assert(response.mfaInfo, authModular, "internal-error");
    default:
      _assert(response.email, authModular, "internal-error");
  }
  let multiFactorInfo = null;
  if (response.mfaInfo) {
    multiFactorInfo = MultiFactorInfoImpl._fromServerResponse(_castAuth(authModular), response.mfaInfo);
  }
  return {
    data: {
      email: (response.requestType === "VERIFY_AND_CHANGE_EMAIL" ? response.newEmail : response.email) || null,
      previousEmail: (response.requestType === "VERIFY_AND_CHANGE_EMAIL" ? response.email : response.newEmail) || null,
      multiFactorInfo
    },
    operation
  };
}
async function verifyPasswordResetCode(auth, code) {
  const {
    data
  } = await checkActionCode((0, import_util.getModularInstance)(auth), code);
  return data.email;
}
async function createUserWithEmailAndPassword(auth, email, password) {
  const authInternal = _castAuth(auth);
  const response = await signUp(authInternal, {
    returnSecureToken: true,
    email,
    password
  });
  const userCredential = await UserCredentialImpl._fromIdTokenResponse(authInternal, "signIn", response);
  await authInternal._updateCurrentUser(userCredential.user);
  return userCredential;
}
function signInWithEmailAndPassword(auth, email, password) {
  return signInWithCredential((0, import_util.getModularInstance)(auth), EmailAuthProvider.credential(email, password));
}
async function sendSignInLinkToEmail(auth, email, actionCodeSettings) {
  const authModular = (0, import_util.getModularInstance)(auth);
  const request = {
    requestType: "EMAIL_SIGNIN",
    email
  };
  _assert(actionCodeSettings.handleCodeInApp, authModular, "argument-error");
  if (actionCodeSettings) {
    _setActionCodeSettingsOnRequest(authModular, request, actionCodeSettings);
  }
  await sendSignInLinkToEmail$1(authModular, request);
}
function isSignInWithEmailLink(auth, emailLink) {
  const actionCodeUrl = ActionCodeURL.parseLink(emailLink);
  return (actionCodeUrl === null || actionCodeUrl === void 0 ? void 0 : actionCodeUrl.operation) === "EMAIL_SIGNIN";
}
async function signInWithEmailLink(auth, email, emailLink) {
  const authModular = (0, import_util.getModularInstance)(auth);
  const credential = EmailAuthProvider.credentialWithLink(email, emailLink || _getCurrentUrl());
  _assert(credential._tenantId === (authModular.tenantId || null), authModular, "tenant-id-mismatch");
  return signInWithCredential(authModular, credential);
}
async function createAuthUri(auth, request) {
  return _performApiRequest(auth, "POST", "/v1/accounts:createAuthUri", _addTidIfNecessary(auth, request));
}
async function fetchSignInMethodsForEmail(auth, email) {
  const continueUri = _isHttpOrHttps() ? _getCurrentUrl() : "http://localhost";
  const request = {
    identifier: email,
    continueUri
  };
  const {
    signinMethods
  } = await createAuthUri((0, import_util.getModularInstance)(auth), request);
  return signinMethods || [];
}
async function sendEmailVerification(user, actionCodeSettings) {
  const userInternal = (0, import_util.getModularInstance)(user);
  const idToken = await user.getIdToken();
  const request = {
    requestType: "VERIFY_EMAIL",
    idToken
  };
  if (actionCodeSettings) {
    _setActionCodeSettingsOnRequest(userInternal.auth, request, actionCodeSettings);
  }
  const {
    email
  } = await sendEmailVerification$1(userInternal.auth, request);
  if (email !== user.email) {
    await user.reload();
  }
}
async function verifyBeforeUpdateEmail(user, newEmail, actionCodeSettings) {
  const userInternal = (0, import_util.getModularInstance)(user);
  const idToken = await user.getIdToken();
  const request = {
    requestType: "VERIFY_AND_CHANGE_EMAIL",
    idToken,
    newEmail
  };
  if (actionCodeSettings) {
    _setActionCodeSettingsOnRequest(userInternal.auth, request, actionCodeSettings);
  }
  const {
    email
  } = await verifyAndChangeEmail(userInternal.auth, request);
  if (email !== user.email) {
    await user.reload();
  }
}
async function updateProfile$1(auth, request) {
  return _performApiRequest(auth, "POST", "/v1/accounts:update", request);
}
async function updateProfile(user, {
  displayName,
  photoURL: photoUrl
}) {
  if (displayName === void 0 && photoUrl === void 0) {
    return;
  }
  const userInternal = (0, import_util.getModularInstance)(user);
  const idToken = await userInternal.getIdToken();
  const profileRequest = {
    idToken,
    displayName,
    photoUrl,
    returnSecureToken: true
  };
  const response = await _logoutIfInvalidated(userInternal, updateProfile$1(userInternal.auth, profileRequest));
  userInternal.displayName = response.displayName || null;
  userInternal.photoURL = response.photoUrl || null;
  const passwordProvider = userInternal.providerData.find(({
    providerId
  }) => providerId === "password");
  if (passwordProvider) {
    passwordProvider.displayName = userInternal.displayName;
    passwordProvider.photoURL = userInternal.photoURL;
  }
  await userInternal._updateTokensIfNecessary(response);
}
function updateEmail(user, newEmail) {
  return updateEmailOrPassword((0, import_util.getModularInstance)(user), newEmail, null);
}
function updatePassword(user, newPassword) {
  return updateEmailOrPassword((0, import_util.getModularInstance)(user), null, newPassword);
}
async function updateEmailOrPassword(user, email, password) {
  const {
    auth
  } = user;
  const idToken = await user.getIdToken();
  const request = {
    idToken,
    returnSecureToken: true
  };
  if (email) {
    request.email = email;
  }
  if (password) {
    request.password = password;
  }
  const response = await _logoutIfInvalidated(user, updateEmailPassword(auth, request));
  await user._updateTokensIfNecessary(response, true);
}
function _fromIdTokenResponse(idTokenResponse) {
  var _a, _b;
  if (!idTokenResponse) {
    return null;
  }
  const {
    providerId
  } = idTokenResponse;
  const profile = idTokenResponse.rawUserInfo ? JSON.parse(idTokenResponse.rawUserInfo) : {};
  const isNewUser = idTokenResponse.isNewUser || idTokenResponse.kind === "identitytoolkit#SignupNewUserResponse";
  if (!providerId && (idTokenResponse === null || idTokenResponse === void 0 ? void 0 : idTokenResponse.idToken)) {
    const signInProvider = (_b = (_a = _parseToken(idTokenResponse.idToken)) === null || _a === void 0 ? void 0 : _a.firebase) === null || _b === void 0 ? void 0 : _b["sign_in_provider"];
    if (signInProvider) {
      const filteredProviderId = signInProvider !== "anonymous" && signInProvider !== "custom" ? signInProvider : null;
      return new GenericAdditionalUserInfo(isNewUser, filteredProviderId);
    }
  }
  if (!providerId) {
    return null;
  }
  switch (providerId) {
    case "facebook.com":
      return new FacebookAdditionalUserInfo(isNewUser, profile);
    case "github.com":
      return new GithubAdditionalUserInfo(isNewUser, profile);
    case "google.com":
      return new GoogleAdditionalUserInfo(isNewUser, profile);
    case "twitter.com":
      return new TwitterAdditionalUserInfo(isNewUser, profile, idTokenResponse.screenName || null);
    case "custom":
    case "anonymous":
      return new GenericAdditionalUserInfo(isNewUser, null);
    default:
      return new GenericAdditionalUserInfo(isNewUser, providerId, profile);
  }
}
var GenericAdditionalUserInfo = class {
  constructor(isNewUser, providerId, profile = {}) {
    this.isNewUser = isNewUser;
    this.providerId = providerId;
    this.profile = profile;
  }
};
var FederatedAdditionalUserInfoWithUsername = class extends GenericAdditionalUserInfo {
  constructor(isNewUser, providerId, profile, username) {
    super(isNewUser, providerId, profile);
    this.username = username;
  }
};
var FacebookAdditionalUserInfo = class extends GenericAdditionalUserInfo {
  constructor(isNewUser, profile) {
    super(isNewUser, "facebook.com", profile);
  }
};
var GithubAdditionalUserInfo = class extends FederatedAdditionalUserInfoWithUsername {
  constructor(isNewUser, profile) {
    super(isNewUser, "github.com", profile, typeof (profile === null || profile === void 0 ? void 0 : profile.login) === "string" ? profile === null || profile === void 0 ? void 0 : profile.login : null);
  }
};
var GoogleAdditionalUserInfo = class extends GenericAdditionalUserInfo {
  constructor(isNewUser, profile) {
    super(isNewUser, "google.com", profile);
  }
};
var TwitterAdditionalUserInfo = class extends FederatedAdditionalUserInfoWithUsername {
  constructor(isNewUser, profile, screenName) {
    super(isNewUser, "twitter.com", profile, screenName);
  }
};
function getAdditionalUserInfo(userCredential) {
  const {
    user,
    _tokenResponse
  } = userCredential;
  if (user.isAnonymous && !_tokenResponse) {
    return {
      providerId: null,
      isNewUser: false,
      profile: null
    };
  }
  return _fromIdTokenResponse(_tokenResponse);
}
function setPersistence(auth, persistence) {
  return (0, import_util.getModularInstance)(auth).setPersistence(persistence);
}
function onIdTokenChanged(auth, nextOrObserver, error, completed) {
  return (0, import_util.getModularInstance)(auth).onIdTokenChanged(nextOrObserver, error, completed);
}
function beforeAuthStateChanged(auth, callback, onAbort) {
  return (0, import_util.getModularInstance)(auth).beforeAuthStateChanged(callback, onAbort);
}
function onAuthStateChanged(auth, nextOrObserver, error, completed) {
  return (0, import_util.getModularInstance)(auth).onAuthStateChanged(nextOrObserver, error, completed);
}
function useDeviceLanguage(auth) {
  (0, import_util.getModularInstance)(auth).useDeviceLanguage();
}
function updateCurrentUser(auth, user) {
  return (0, import_util.getModularInstance)(auth).updateCurrentUser(user);
}
function signOut(auth) {
  return (0, import_util.getModularInstance)(auth).signOut();
}
async function deleteUser(user) {
  return (0, import_util.getModularInstance)(user).delete();
}
var MultiFactorSessionImpl = class {
  constructor(type, credential, auth) {
    this.type = type;
    this.credential = credential;
    this.auth = auth;
  }
  static _fromIdtoken(idToken, auth) {
    return new MultiFactorSessionImpl("enroll", idToken, auth);
  }
  static _fromMfaPendingCredential(mfaPendingCredential) {
    return new MultiFactorSessionImpl("signin", mfaPendingCredential);
  }
  toJSON() {
    const key = this.type === "enroll" ? "idToken" : "pendingCredential";
    return {
      multiFactorSession: {
        [key]: this.credential
      }
    };
  }
  static fromJSON(obj) {
    var _a, _b;
    if (obj === null || obj === void 0 ? void 0 : obj.multiFactorSession) {
      if ((_a = obj.multiFactorSession) === null || _a === void 0 ? void 0 : _a.pendingCredential) {
        return MultiFactorSessionImpl._fromMfaPendingCredential(obj.multiFactorSession.pendingCredential);
      } else if ((_b = obj.multiFactorSession) === null || _b === void 0 ? void 0 : _b.idToken) {
        return MultiFactorSessionImpl._fromIdtoken(obj.multiFactorSession.idToken);
      }
    }
    return null;
  }
};
var MultiFactorResolverImpl = class {
  constructor(session, hints, signInResolver) {
    this.session = session;
    this.hints = hints;
    this.signInResolver = signInResolver;
  }
  static _fromError(authExtern, error) {
    const auth = _castAuth(authExtern);
    const serverResponse = error.customData._serverResponse;
    const hints = (serverResponse.mfaInfo || []).map(enrollment => MultiFactorInfoImpl._fromServerResponse(auth, enrollment));
    _assert(serverResponse.mfaPendingCredential, auth, "internal-error");
    const session = MultiFactorSessionImpl._fromMfaPendingCredential(serverResponse.mfaPendingCredential);
    return new MultiFactorResolverImpl(session, hints, async assertion => {
      const mfaResponse = await assertion._process(auth, session);
      delete serverResponse.mfaInfo;
      delete serverResponse.mfaPendingCredential;
      const idTokenResponse = Object.assign(Object.assign({}, serverResponse), {
        idToken: mfaResponse.idToken,
        refreshToken: mfaResponse.refreshToken
      });
      switch (error.operationType) {
        case "signIn":
          const userCredential = await UserCredentialImpl._fromIdTokenResponse(auth, error.operationType, idTokenResponse);
          await auth._updateCurrentUser(userCredential.user);
          return userCredential;
        case "reauthenticate":
          _assert(error.user, auth, "internal-error");
          return UserCredentialImpl._forOperation(error.user, error.operationType, idTokenResponse);
        default:
          _fail(auth, "internal-error");
      }
    });
  }
  async resolveSignIn(assertionExtern) {
    const assertion = assertionExtern;
    return this.signInResolver(assertion);
  }
};
function getMultiFactorResolver(auth, error) {
  var _a;
  const authModular = (0, import_util.getModularInstance)(auth);
  const errorInternal = error;
  _assert(error.customData.operationType, authModular, "argument-error");
  _assert((_a = errorInternal.customData._serverResponse) === null || _a === void 0 ? void 0 : _a.mfaPendingCredential, authModular, "argument-error");
  return MultiFactorResolverImpl._fromError(authModular, errorInternal);
}
function startEnrollPhoneMfa(auth, request) {
  return _performApiRequest(auth, "POST", "/v2/accounts/mfaEnrollment:start", _addTidIfNecessary(auth, request));
}
function finalizeEnrollPhoneMfa(auth, request) {
  return _performApiRequest(auth, "POST", "/v2/accounts/mfaEnrollment:finalize", _addTidIfNecessary(auth, request));
}
function withdrawMfa(auth, request) {
  return _performApiRequest(auth, "POST", "/v2/accounts/mfaEnrollment:withdraw", _addTidIfNecessary(auth, request));
}
var MultiFactorUserImpl = class {
  constructor(user) {
    this.user = user;
    this.enrolledFactors = [];
    user._onReload(userInfo => {
      if (userInfo.mfaInfo) {
        this.enrolledFactors = userInfo.mfaInfo.map(enrollment => MultiFactorInfoImpl._fromServerResponse(user.auth, enrollment));
      }
    });
  }
  static _fromUser(user) {
    return new MultiFactorUserImpl(user);
  }
  async getSession() {
    return MultiFactorSessionImpl._fromIdtoken(await this.user.getIdToken(), this.user.auth);
  }
  async enroll(assertionExtern, displayName) {
    const assertion = assertionExtern;
    const session = await this.getSession();
    const finalizeMfaResponse = await _logoutIfInvalidated(this.user, assertion._process(this.user.auth, session, displayName));
    await this.user._updateTokensIfNecessary(finalizeMfaResponse);
    return this.user.reload();
  }
  async unenroll(infoOrUid) {
    const mfaEnrollmentId = typeof infoOrUid === "string" ? infoOrUid : infoOrUid.uid;
    const idToken = await this.user.getIdToken();
    try {
      const idTokenResponse = await _logoutIfInvalidated(this.user, withdrawMfa(this.user.auth, {
        idToken,
        mfaEnrollmentId
      }));
      this.enrolledFactors = this.enrolledFactors.filter(({
        uid
      }) => uid !== mfaEnrollmentId);
      await this.user._updateTokensIfNecessary(idTokenResponse);
      await this.user.reload();
    } catch (e) {
      throw e;
    }
  }
};
var multiFactorUserCache = /* @__PURE__ */new WeakMap();
function multiFactor(user) {
  const userModular = (0, import_util.getModularInstance)(user);
  if (!multiFactorUserCache.has(userModular)) {
    multiFactorUserCache.set(userModular, MultiFactorUserImpl._fromUser(userModular));
  }
  return multiFactorUserCache.get(userModular);
}
var STORAGE_AVAILABLE_KEY = "__sak";
var BrowserPersistenceClass = class {
  constructor(storageRetriever, type) {
    this.storageRetriever = storageRetriever;
    this.type = type;
  }
  _isAvailable() {
    try {
      if (!this.storage) {
        return Promise.resolve(false);
      }
      this.storage.setItem(STORAGE_AVAILABLE_KEY, "1");
      this.storage.removeItem(STORAGE_AVAILABLE_KEY);
      return Promise.resolve(true);
    } catch (_a) {
      return Promise.resolve(false);
    }
  }
  _set(key, value) {
    this.storage.setItem(key, JSON.stringify(value));
    return Promise.resolve();
  }
  _get(key) {
    const json = this.storage.getItem(key);
    return Promise.resolve(json ? JSON.parse(json) : null);
  }
  _remove(key) {
    this.storage.removeItem(key);
    return Promise.resolve();
  }
  get storage() {
    return this.storageRetriever();
  }
};
function _iframeCannotSyncWebStorage() {
  const ua = (0, import_util.getUA)();
  return _isSafari(ua) || _isIOS(ua);
}
var _POLLING_INTERVAL_MS$1 = 1e3;
var IE10_LOCAL_STORAGE_SYNC_DELAY = 10;
var BrowserLocalPersistence = class extends BrowserPersistenceClass {
  constructor() {
    super(() => window.localStorage, "LOCAL");
    this.boundEventHandler = (event, poll) => this.onStorageEvent(event, poll);
    this.listeners = {};
    this.localCache = {};
    this.pollTimer = null;
    this.safariLocalStorageNotSynced = _iframeCannotSyncWebStorage() && _isIframe();
    this.fallbackToPolling = _isMobileBrowser();
    this._shouldAllowMigration = true;
  }
  forAllChangedKeys(cb) {
    for (const key of Object.keys(this.listeners)) {
      const newValue = this.storage.getItem(key);
      const oldValue = this.localCache[key];
      if (newValue !== oldValue) {
        cb(key, oldValue, newValue);
      }
    }
  }
  onStorageEvent(event, poll = false) {
    if (!event.key) {
      this.forAllChangedKeys((key2, _oldValue, newValue) => {
        this.notifyListeners(key2, newValue);
      });
      return;
    }
    const key = event.key;
    if (poll) {
      this.detachListener();
    } else {
      this.stopPolling();
    }
    if (this.safariLocalStorageNotSynced) {
      const storedValue2 = this.storage.getItem(key);
      if (event.newValue !== storedValue2) {
        if (event.newValue !== null) {
          this.storage.setItem(key, event.newValue);
        } else {
          this.storage.removeItem(key);
        }
      } else if (this.localCache[key] === event.newValue && !poll) {
        return;
      }
    }
    const triggerListeners = () => {
      const storedValue2 = this.storage.getItem(key);
      if (!poll && this.localCache[key] === storedValue2) {
        return;
      }
      this.notifyListeners(key, storedValue2);
    };
    const storedValue = this.storage.getItem(key);
    if (_isIE10() && storedValue !== event.newValue && event.newValue !== event.oldValue) {
      setTimeout(triggerListeners, IE10_LOCAL_STORAGE_SYNC_DELAY);
    } else {
      triggerListeners();
    }
  }
  notifyListeners(key, value) {
    this.localCache[key] = value;
    const listeners = this.listeners[key];
    if (listeners) {
      for (const listener of Array.from(listeners)) {
        listener(value ? JSON.parse(value) : value);
      }
    }
  }
  startPolling() {
    this.stopPolling();
    this.pollTimer = setInterval(() => {
      this.forAllChangedKeys((key, oldValue, newValue) => {
        this.onStorageEvent(new StorageEvent("storage", {
          key,
          oldValue,
          newValue
        }), true);
      });
    }, _POLLING_INTERVAL_MS$1);
  }
  stopPolling() {
    if (this.pollTimer) {
      clearInterval(this.pollTimer);
      this.pollTimer = null;
    }
  }
  attachListener() {
    window.addEventListener("storage", this.boundEventHandler);
  }
  detachListener() {
    window.removeEventListener("storage", this.boundEventHandler);
  }
  _addListener(key, listener) {
    if (Object.keys(this.listeners).length === 0) {
      if (this.fallbackToPolling) {
        this.startPolling();
      } else {
        this.attachListener();
      }
    }
    if (!this.listeners[key]) {
      this.listeners[key] = /* @__PURE__ */new Set();
      this.localCache[key] = this.storage.getItem(key);
    }
    this.listeners[key].add(listener);
  }
  _removeListener(key, listener) {
    if (this.listeners[key]) {
      this.listeners[key].delete(listener);
      if (this.listeners[key].size === 0) {
        delete this.listeners[key];
      }
    }
    if (Object.keys(this.listeners).length === 0) {
      this.detachListener();
      this.stopPolling();
    }
  }
  async _set(key, value) {
    await super._set(key, value);
    this.localCache[key] = JSON.stringify(value);
  }
  async _get(key) {
    const value = await super._get(key);
    this.localCache[key] = JSON.stringify(value);
    return value;
  }
  async _remove(key) {
    await super._remove(key);
    delete this.localCache[key];
  }
};
BrowserLocalPersistence.type = "LOCAL";
var browserLocalPersistence = BrowserLocalPersistence;
var BrowserSessionPersistence = class extends BrowserPersistenceClass {
  constructor() {
    super(() => window.sessionStorage, "SESSION");
  }
  _addListener(_key, _listener) {
    return;
  }
  _removeListener(_key, _listener) {
    return;
  }
};
BrowserSessionPersistence.type = "SESSION";
var browserSessionPersistence = BrowserSessionPersistence;
function _allSettled(promises) {
  return Promise.all(promises.map(async promise => {
    try {
      const value = await promise;
      return {
        fulfilled: true,
        value
      };
    } catch (reason) {
      return {
        fulfilled: false,
        reason
      };
    }
  }));
}
var Receiver = class {
  constructor(eventTarget) {
    this.eventTarget = eventTarget;
    this.handlersMap = {};
    this.boundEventHandler = this.handleEvent.bind(this);
  }
  static _getInstance(eventTarget) {
    const existingInstance = this.receivers.find(receiver => receiver.isListeningto(eventTarget));
    if (existingInstance) {
      return existingInstance;
    }
    const newInstance = new Receiver(eventTarget);
    this.receivers.push(newInstance);
    return newInstance;
  }
  isListeningto(eventTarget) {
    return this.eventTarget === eventTarget;
  }
  async handleEvent(event) {
    const messageEvent = event;
    const {
      eventId,
      eventType,
      data
    } = messageEvent.data;
    const handlers = this.handlersMap[eventType];
    if (!(handlers === null || handlers === void 0 ? void 0 : handlers.size)) {
      return;
    }
    messageEvent.ports[0].postMessage({
      status: "ack",
      eventId,
      eventType
    });
    const promises = Array.from(handlers).map(async handler => handler(messageEvent.origin, data));
    const response = await _allSettled(promises);
    messageEvent.ports[0].postMessage({
      status: "done",
      eventId,
      eventType,
      response
    });
  }
  _subscribe(eventType, eventHandler) {
    if (Object.keys(this.handlersMap).length === 0) {
      this.eventTarget.addEventListener("message", this.boundEventHandler);
    }
    if (!this.handlersMap[eventType]) {
      this.handlersMap[eventType] = /* @__PURE__ */new Set();
    }
    this.handlersMap[eventType].add(eventHandler);
  }
  _unsubscribe(eventType, eventHandler) {
    if (this.handlersMap[eventType] && eventHandler) {
      this.handlersMap[eventType].delete(eventHandler);
    }
    if (!eventHandler || this.handlersMap[eventType].size === 0) {
      delete this.handlersMap[eventType];
    }
    if (Object.keys(this.handlersMap).length === 0) {
      this.eventTarget.removeEventListener("message", this.boundEventHandler);
    }
  }
};
Receiver.receivers = [];
function _generateEventId(prefix = "", digits = 10) {
  let random = "";
  for (let i = 0; i < digits; i++) {
    random += Math.floor(Math.random() * 10);
  }
  return prefix + random;
}
var Sender = class {
  constructor(target) {
    this.target = target;
    this.handlers = /* @__PURE__ */new Set();
  }
  removeMessageHandler(handler) {
    if (handler.messageChannel) {
      handler.messageChannel.port1.removeEventListener("message", handler.onMessage);
      handler.messageChannel.port1.close();
    }
    this.handlers.delete(handler);
  }
  async _send(eventType, data, timeout = 50) {
    const messageChannel = typeof MessageChannel !== "undefined" ? new MessageChannel() : null;
    if (!messageChannel) {
      throw new Error("connection_unavailable");
    }
    let completionTimer;
    let handler;
    return new Promise((resolve, reject) => {
      const eventId = _generateEventId("", 20);
      messageChannel.port1.start();
      const ackTimer = setTimeout(() => {
        reject(new Error("unsupported_event"));
      }, timeout);
      handler = {
        messageChannel,
        onMessage(event) {
          const messageEvent = event;
          if (messageEvent.data.eventId !== eventId) {
            return;
          }
          switch (messageEvent.data.status) {
            case "ack":
              clearTimeout(ackTimer);
              completionTimer = setTimeout(() => {
                reject(new Error("timeout"));
              }, 3e3);
              break;
            case "done":
              clearTimeout(completionTimer);
              resolve(messageEvent.data.response);
              break;
            default:
              clearTimeout(ackTimer);
              clearTimeout(completionTimer);
              reject(new Error("invalid_response"));
              break;
          }
        }
      };
      this.handlers.add(handler);
      messageChannel.port1.addEventListener("message", handler.onMessage);
      this.target.postMessage({
        eventType,
        eventId,
        data
      }, [messageChannel.port2]);
    }).finally(() => {
      if (handler) {
        this.removeMessageHandler(handler);
      }
    });
  }
};
function _window() {
  return window;
}
function _setWindowLocation(url) {
  _window().location.href = url;
}
function _isWorker() {
  return typeof _window()["WorkerGlobalScope"] !== "undefined" && typeof _window()["importScripts"] === "function";
}
async function _getActiveServiceWorker() {
  if (!(navigator === null || navigator === void 0 ? void 0 : navigator.serviceWorker)) {
    return null;
  }
  try {
    const registration = await navigator.serviceWorker.ready;
    return registration.active;
  } catch (_a) {
    return null;
  }
}
function _getServiceWorkerController() {
  var _a;
  return ((_a = navigator === null || navigator === void 0 ? void 0 : navigator.serviceWorker) === null || _a === void 0 ? void 0 : _a.controller) || null;
}
function _getWorkerGlobalScope() {
  return _isWorker() ? self : null;
}
var DB_NAME = "firebaseLocalStorageDb";
var DB_VERSION = 1;
var DB_OBJECTSTORE_NAME = "firebaseLocalStorage";
var DB_DATA_KEYPATH = "fbase_key";
var DBPromise = class {
  constructor(request) {
    this.request = request;
  }
  toPromise() {
    return new Promise((resolve, reject) => {
      this.request.addEventListener("success", () => {
        resolve(this.request.result);
      });
      this.request.addEventListener("error", () => {
        reject(this.request.error);
      });
    });
  }
};
function getObjectStore(db, isReadWrite) {
  return db.transaction([DB_OBJECTSTORE_NAME], isReadWrite ? "readwrite" : "readonly").objectStore(DB_OBJECTSTORE_NAME);
}
function _deleteDatabase() {
  const request = indexedDB.deleteDatabase(DB_NAME);
  return new DBPromise(request).toPromise();
}
function _openDatabase() {
  const request = indexedDB.open(DB_NAME, DB_VERSION);
  return new Promise((resolve, reject) => {
    request.addEventListener("error", () => {
      reject(request.error);
    });
    request.addEventListener("upgradeneeded", () => {
      const db = request.result;
      try {
        db.createObjectStore(DB_OBJECTSTORE_NAME, {
          keyPath: DB_DATA_KEYPATH
        });
      } catch (e) {
        reject(e);
      }
    });
    request.addEventListener("success", async () => {
      const db = request.result;
      if (!db.objectStoreNames.contains(DB_OBJECTSTORE_NAME)) {
        db.close();
        await _deleteDatabase();
        resolve(await _openDatabase());
      } else {
        resolve(db);
      }
    });
  });
}
async function _putObject(db, key, value) {
  const request = getObjectStore(db, true).put({
    [DB_DATA_KEYPATH]: key,
    value
  });
  return new DBPromise(request).toPromise();
}
async function getObject(db, key) {
  const request = getObjectStore(db, false).get(key);
  const data = await new DBPromise(request).toPromise();
  return data === void 0 ? null : data.value;
}
function _deleteObject(db, key) {
  const request = getObjectStore(db, true).delete(key);
  return new DBPromise(request).toPromise();
}
var _POLLING_INTERVAL_MS = 800;
var _TRANSACTION_RETRY_COUNT = 3;
var IndexedDBLocalPersistence = class {
  constructor() {
    this.type = "LOCAL";
    this._shouldAllowMigration = true;
    this.listeners = {};
    this.localCache = {};
    this.pollTimer = null;
    this.pendingWrites = 0;
    this.receiver = null;
    this.sender = null;
    this.serviceWorkerReceiverAvailable = false;
    this.activeServiceWorker = null;
    this._workerInitializationPromise = this.initializeServiceWorkerMessaging().then(() => {}, () => {});
  }
  async _openDb() {
    if (this.db) {
      return this.db;
    }
    this.db = await _openDatabase();
    return this.db;
  }
  async _withRetries(op) {
    let numAttempts = 0;
    while (true) {
      try {
        const db = await this._openDb();
        return await op(db);
      } catch (e) {
        if (numAttempts++ > _TRANSACTION_RETRY_COUNT) {
          throw e;
        }
        if (this.db) {
          this.db.close();
          this.db = void 0;
        }
      }
    }
  }
  async initializeServiceWorkerMessaging() {
    return _isWorker() ? this.initializeReceiver() : this.initializeSender();
  }
  async initializeReceiver() {
    this.receiver = Receiver._getInstance(_getWorkerGlobalScope());
    this.receiver._subscribe("keyChanged", async (_origin, data) => {
      const keys = await this._poll();
      return {
        keyProcessed: keys.includes(data.key)
      };
    });
    this.receiver._subscribe("ping", async (_origin, _data) => {
      return ["keyChanged"];
    });
  }
  async initializeSender() {
    var _a, _b;
    this.activeServiceWorker = await _getActiveServiceWorker();
    if (!this.activeServiceWorker) {
      return;
    }
    this.sender = new Sender(this.activeServiceWorker);
    const results = await this.sender._send("ping", {}, 800);
    if (!results) {
      return;
    }
    if (((_a = results[0]) === null || _a === void 0 ? void 0 : _a.fulfilled) && ((_b = results[0]) === null || _b === void 0 ? void 0 : _b.value.includes("keyChanged"))) {
      this.serviceWorkerReceiverAvailable = true;
    }
  }
  async notifyServiceWorker(key) {
    if (!this.sender || !this.activeServiceWorker || _getServiceWorkerController() !== this.activeServiceWorker) {
      return;
    }
    try {
      await this.sender._send("keyChanged", {
        key
      }, this.serviceWorkerReceiverAvailable ? 800 : 50);
    } catch (_a) {}
  }
  async _isAvailable() {
    try {
      if (!indexedDB) {
        return false;
      }
      const db = await _openDatabase();
      await _putObject(db, STORAGE_AVAILABLE_KEY, "1");
      await _deleteObject(db, STORAGE_AVAILABLE_KEY);
      return true;
    } catch (_a) {}
    return false;
  }
  async _withPendingWrite(write) {
    this.pendingWrites++;
    try {
      await write();
    } finally {
      this.pendingWrites--;
    }
  }
  async _set(key, value) {
    return this._withPendingWrite(async () => {
      await this._withRetries(db => _putObject(db, key, value));
      this.localCache[key] = value;
      return this.notifyServiceWorker(key);
    });
  }
  async _get(key) {
    const obj = await this._withRetries(db => getObject(db, key));
    this.localCache[key] = obj;
    return obj;
  }
  async _remove(key) {
    return this._withPendingWrite(async () => {
      await this._withRetries(db => _deleteObject(db, key));
      delete this.localCache[key];
      return this.notifyServiceWorker(key);
    });
  }
  async _poll() {
    const result = await this._withRetries(db => {
      const getAllRequest = getObjectStore(db, false).getAll();
      return new DBPromise(getAllRequest).toPromise();
    });
    if (!result) {
      return [];
    }
    if (this.pendingWrites !== 0) {
      return [];
    }
    const keys = [];
    const keysInResult = /* @__PURE__ */new Set();
    for (const {
      fbase_key: key,
      value
    } of result) {
      keysInResult.add(key);
      if (JSON.stringify(this.localCache[key]) !== JSON.stringify(value)) {
        this.notifyListeners(key, value);
        keys.push(key);
      }
    }
    for (const localKey of Object.keys(this.localCache)) {
      if (this.localCache[localKey] && !keysInResult.has(localKey)) {
        this.notifyListeners(localKey, null);
        keys.push(localKey);
      }
    }
    return keys;
  }
  notifyListeners(key, newValue) {
    this.localCache[key] = newValue;
    const listeners = this.listeners[key];
    if (listeners) {
      for (const listener of Array.from(listeners)) {
        listener(newValue);
      }
    }
  }
  startPolling() {
    this.stopPolling();
    this.pollTimer = setInterval(async () => this._poll(), _POLLING_INTERVAL_MS);
  }
  stopPolling() {
    if (this.pollTimer) {
      clearInterval(this.pollTimer);
      this.pollTimer = null;
    }
  }
  _addListener(key, listener) {
    if (Object.keys(this.listeners).length === 0) {
      this.startPolling();
    }
    if (!this.listeners[key]) {
      this.listeners[key] = /* @__PURE__ */new Set();
      void this._get(key);
    }
    this.listeners[key].add(listener);
  }
  _removeListener(key, listener) {
    if (this.listeners[key]) {
      this.listeners[key].delete(listener);
      if (this.listeners[key].size === 0) {
        delete this.listeners[key];
      }
    }
    if (Object.keys(this.listeners).length === 0) {
      this.stopPolling();
    }
  }
};
IndexedDBLocalPersistence.type = "LOCAL";
var indexedDBLocalPersistence = IndexedDBLocalPersistence;
function startSignInPhoneMfa(auth, request) {
  return _performApiRequest(auth, "POST", "/v2/accounts/mfaSignIn:start", _addTidIfNecessary(auth, request));
}
function finalizeSignInPhoneMfa(auth, request) {
  return _performApiRequest(auth, "POST", "/v2/accounts/mfaSignIn:finalize", _addTidIfNecessary(auth, request));
}
async function getRecaptchaParams(auth) {
  return (await _performApiRequest(auth, "GET", "/v1/recaptchaParams")).recaptchaSiteKey || "";
}
function getScriptParentElement() {
  var _a, _b;
  return (_b = (_a = document.getElementsByTagName("head")) === null || _a === void 0 ? void 0 : _a[0]) !== null && _b !== void 0 ? _b : document;
}
function _loadJS(url) {
  return new Promise((resolve, reject) => {
    const el = document.createElement("script");
    el.setAttribute("src", url);
    el.onload = resolve;
    el.onerror = e => {
      const error = _createError("internal-error");
      error.customData = e;
      reject(error);
    };
    el.type = "text/javascript";
    el.charset = "UTF-8";
    getScriptParentElement().appendChild(el);
  });
}
function _generateCallbackName(prefix) {
  return `__${prefix}${Math.floor(Math.random() * 1e6)}`;
}
var _SOLVE_TIME_MS = 500;
var _EXPIRATION_TIME_MS = 6e4;
var _WIDGET_ID_START = 1e12;
var MockReCaptcha = class {
  constructor(auth) {
    this.auth = auth;
    this.counter = _WIDGET_ID_START;
    this._widgets = /* @__PURE__ */new Map();
  }
  render(container, parameters) {
    const id = this.counter;
    this._widgets.set(id, new MockWidget(container, this.auth.name, parameters || {}));
    this.counter++;
    return id;
  }
  reset(optWidgetId) {
    var _a;
    const id = optWidgetId || _WIDGET_ID_START;
    void ((_a = this._widgets.get(id)) === null || _a === void 0 ? void 0 : _a.delete());
    this._widgets.delete(id);
  }
  getResponse(optWidgetId) {
    var _a;
    const id = optWidgetId || _WIDGET_ID_START;
    return ((_a = this._widgets.get(id)) === null || _a === void 0 ? void 0 : _a.getResponse()) || "";
  }
  async execute(optWidgetId) {
    var _a;
    const id = optWidgetId || _WIDGET_ID_START;
    void ((_a = this._widgets.get(id)) === null || _a === void 0 ? void 0 : _a.execute());
    return "";
  }
};
var MockWidget = class {
  constructor(containerOrId, appName, params) {
    this.params = params;
    this.timerId = null;
    this.deleted = false;
    this.responseToken = null;
    this.clickHandler = () => {
      this.execute();
    };
    const container = typeof containerOrId === "string" ? document.getElementById(containerOrId) : containerOrId;
    _assert(container, "argument-error", {
      appName
    });
    this.container = container;
    this.isVisible = this.params.size !== "invisible";
    if (this.isVisible) {
      this.execute();
    } else {
      this.container.addEventListener("click", this.clickHandler);
    }
  }
  getResponse() {
    this.checkIfDeleted();
    return this.responseToken;
  }
  delete() {
    this.checkIfDeleted();
    this.deleted = true;
    if (this.timerId) {
      clearTimeout(this.timerId);
      this.timerId = null;
    }
    this.container.removeEventListener("click", this.clickHandler);
  }
  execute() {
    this.checkIfDeleted();
    if (this.timerId) {
      return;
    }
    this.timerId = window.setTimeout(() => {
      this.responseToken = generateRandomAlphaNumericString(50);
      const {
        callback,
        "expired-callback": expiredCallback
      } = this.params;
      if (callback) {
        try {
          callback(this.responseToken);
        } catch (e) {}
      }
      this.timerId = window.setTimeout(() => {
        this.timerId = null;
        this.responseToken = null;
        if (expiredCallback) {
          try {
            expiredCallback();
          } catch (e) {}
        }
        if (this.isVisible) {
          this.execute();
        }
      }, _EXPIRATION_TIME_MS);
    }, _SOLVE_TIME_MS);
  }
  checkIfDeleted() {
    if (this.deleted) {
      throw new Error("reCAPTCHA mock was already deleted!");
    }
  }
};
function generateRandomAlphaNumericString(len) {
  const chars = [];
  const allowedChars = "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  for (let i = 0; i < len; i++) {
    chars.push(allowedChars.charAt(Math.floor(Math.random() * allowedChars.length)));
  }
  return chars.join("");
}
var _JSLOAD_CALLBACK = _generateCallbackName("rcb");
var NETWORK_TIMEOUT_DELAY = new Delay(3e4, 6e4);
var RECAPTCHA_BASE = "https://www.google.com/recaptcha/api.js?";
var ReCaptchaLoaderImpl = class {
  constructor() {
    var _a;
    this.hostLanguage = "";
    this.counter = 0;
    this.librarySeparatelyLoaded = !!((_a = _window().grecaptcha) === null || _a === void 0 ? void 0 : _a.render);
  }
  load(auth, hl = "") {
    _assert(isHostLanguageValid(hl), auth, "argument-error");
    if (this.shouldResolveImmediately(hl)) {
      return Promise.resolve(_window().grecaptcha);
    }
    return new Promise((resolve, reject) => {
      const networkTimeout = _window().setTimeout(() => {
        reject(_createError(auth, "network-request-failed"));
      }, NETWORK_TIMEOUT_DELAY.get());
      _window()[_JSLOAD_CALLBACK] = () => {
        _window().clearTimeout(networkTimeout);
        delete _window()[_JSLOAD_CALLBACK];
        const recaptcha = _window().grecaptcha;
        if (!recaptcha) {
          reject(_createError(auth, "internal-error"));
          return;
        }
        const render = recaptcha.render;
        recaptcha.render = (container, params) => {
          const widgetId = render(container, params);
          this.counter++;
          return widgetId;
        };
        this.hostLanguage = hl;
        resolve(recaptcha);
      };
      const url = `${RECAPTCHA_BASE}?${(0, import_util.querystring)({
        onload: _JSLOAD_CALLBACK,
        render: "explicit",
        hl
      })}`;
      _loadJS(url).catch(() => {
        clearTimeout(networkTimeout);
        reject(_createError(auth, "internal-error"));
      });
    });
  }
  clearedOneInstance() {
    this.counter--;
  }
  shouldResolveImmediately(hl) {
    var _a;
    return !!((_a = _window().grecaptcha) === null || _a === void 0 ? void 0 : _a.render) && (hl === this.hostLanguage || this.counter > 0 || this.librarySeparatelyLoaded);
  }
};
function isHostLanguageValid(hl) {
  return hl.length <= 6 && /^\s*[a-zA-Z0-9\-]*\s*$/.test(hl);
}
var MockReCaptchaLoaderImpl = class {
  async load(auth) {
    return new MockReCaptcha(auth);
  }
  clearedOneInstance() {}
};
var RECAPTCHA_VERIFIER_TYPE = "recaptcha";
var DEFAULT_PARAMS = {
  theme: "light",
  type: "image"
};
var RecaptchaVerifier = class {
  constructor(containerOrId, parameters = Object.assign({}, DEFAULT_PARAMS), authExtern) {
    this.parameters = parameters;
    this.type = RECAPTCHA_VERIFIER_TYPE;
    this.destroyed = false;
    this.widgetId = null;
    this.tokenChangeListeners = /* @__PURE__ */new Set();
    this.renderPromise = null;
    this.recaptcha = null;
    this.auth = _castAuth(authExtern);
    this.isInvisible = this.parameters.size === "invisible";
    _assert(typeof document !== "undefined", this.auth, "operation-not-supported-in-this-environment");
    const container = typeof containerOrId === "string" ? document.getElementById(containerOrId) : containerOrId;
    _assert(container, this.auth, "argument-error");
    this.container = container;
    this.parameters.callback = this.makeTokenCallback(this.parameters.callback);
    this._recaptchaLoader = this.auth.settings.appVerificationDisabledForTesting ? new MockReCaptchaLoaderImpl() : new ReCaptchaLoaderImpl();
    this.validateStartingState();
  }
  async verify() {
    this.assertNotDestroyed();
    const id = await this.render();
    const recaptcha = this.getAssertedRecaptcha();
    const response = recaptcha.getResponse(id);
    if (response) {
      return response;
    }
    return new Promise(resolve => {
      const tokenChange = token => {
        if (!token) {
          return;
        }
        this.tokenChangeListeners.delete(tokenChange);
        resolve(token);
      };
      this.tokenChangeListeners.add(tokenChange);
      if (this.isInvisible) {
        recaptcha.execute(id);
      }
    });
  }
  render() {
    try {
      this.assertNotDestroyed();
    } catch (e) {
      return Promise.reject(e);
    }
    if (this.renderPromise) {
      return this.renderPromise;
    }
    this.renderPromise = this.makeRenderPromise().catch(e => {
      this.renderPromise = null;
      throw e;
    });
    return this.renderPromise;
  }
  _reset() {
    this.assertNotDestroyed();
    if (this.widgetId !== null) {
      this.getAssertedRecaptcha().reset(this.widgetId);
    }
  }
  clear() {
    this.assertNotDestroyed();
    this.destroyed = true;
    this._recaptchaLoader.clearedOneInstance();
    if (!this.isInvisible) {
      this.container.childNodes.forEach(node => {
        this.container.removeChild(node);
      });
    }
  }
  validateStartingState() {
    _assert(!this.parameters.sitekey, this.auth, "argument-error");
    _assert(this.isInvisible || !this.container.hasChildNodes(), this.auth, "argument-error");
    _assert(typeof document !== "undefined", this.auth, "operation-not-supported-in-this-environment");
  }
  makeTokenCallback(existing) {
    return token => {
      this.tokenChangeListeners.forEach(listener => listener(token));
      if (typeof existing === "function") {
        existing(token);
      } else if (typeof existing === "string") {
        const globalFunc = _window()[existing];
        if (typeof globalFunc === "function") {
          globalFunc(token);
        }
      }
    };
  }
  assertNotDestroyed() {
    _assert(!this.destroyed, this.auth, "internal-error");
  }
  async makeRenderPromise() {
    await this.init();
    if (!this.widgetId) {
      let container = this.container;
      if (!this.isInvisible) {
        const guaranteedEmpty = document.createElement("div");
        container.appendChild(guaranteedEmpty);
        container = guaranteedEmpty;
      }
      this.widgetId = this.getAssertedRecaptcha().render(container, this.parameters);
    }
    return this.widgetId;
  }
  async init() {
    _assert(_isHttpOrHttps() && !_isWorker(), this.auth, "internal-error");
    await domReady();
    this.recaptcha = await this._recaptchaLoader.load(this.auth, this.auth.languageCode || void 0);
    const siteKey = await getRecaptchaParams(this.auth);
    _assert(siteKey, this.auth, "internal-error");
    this.parameters.sitekey = siteKey;
  }
  getAssertedRecaptcha() {
    _assert(this.recaptcha, this.auth, "internal-error");
    return this.recaptcha;
  }
};
function domReady() {
  let resolver = null;
  return new Promise(resolve => {
    if (document.readyState === "complete") {
      resolve();
      return;
    }
    resolver = () => resolve();
    window.addEventListener("load", resolver);
  }).catch(e => {
    if (resolver) {
      window.removeEventListener("load", resolver);
    }
    throw e;
  });
}
var ConfirmationResultImpl = class {
  constructor(verificationId, onConfirmation) {
    this.verificationId = verificationId;
    this.onConfirmation = onConfirmation;
  }
  confirm(verificationCode) {
    const authCredential = PhoneAuthCredential._fromVerification(this.verificationId, verificationCode);
    return this.onConfirmation(authCredential);
  }
};
async function signInWithPhoneNumber(auth, phoneNumber, appVerifier) {
  const authInternal = _castAuth(auth);
  const verificationId = await _verifyPhoneNumber(authInternal, phoneNumber, (0, import_util.getModularInstance)(appVerifier));
  return new ConfirmationResultImpl(verificationId, cred => signInWithCredential(authInternal, cred));
}
async function linkWithPhoneNumber(user, phoneNumber, appVerifier) {
  const userInternal = (0, import_util.getModularInstance)(user);
  await _assertLinkedStatus(false, userInternal, "phone");
  const verificationId = await _verifyPhoneNumber(userInternal.auth, phoneNumber, (0, import_util.getModularInstance)(appVerifier));
  return new ConfirmationResultImpl(verificationId, cred => linkWithCredential(userInternal, cred));
}
async function reauthenticateWithPhoneNumber(user, phoneNumber, appVerifier) {
  const userInternal = (0, import_util.getModularInstance)(user);
  const verificationId = await _verifyPhoneNumber(userInternal.auth, phoneNumber, (0, import_util.getModularInstance)(appVerifier));
  return new ConfirmationResultImpl(verificationId, cred => reauthenticateWithCredential(userInternal, cred));
}
async function _verifyPhoneNumber(auth, options, verifier) {
  var _a;
  const recaptchaToken = await verifier.verify();
  try {
    _assert(typeof recaptchaToken === "string", auth, "argument-error");
    _assert(verifier.type === RECAPTCHA_VERIFIER_TYPE, auth, "argument-error");
    let phoneInfoOptions;
    if (typeof options === "string") {
      phoneInfoOptions = {
        phoneNumber: options
      };
    } else {
      phoneInfoOptions = options;
    }
    if ("session" in phoneInfoOptions) {
      const session = phoneInfoOptions.session;
      if ("phoneNumber" in phoneInfoOptions) {
        _assert(session.type === "enroll", auth, "internal-error");
        const response = await startEnrollPhoneMfa(auth, {
          idToken: session.credential,
          phoneEnrollmentInfo: {
            phoneNumber: phoneInfoOptions.phoneNumber,
            recaptchaToken
          }
        });
        return response.phoneSessionInfo.sessionInfo;
      } else {
        _assert(session.type === "signin", auth, "internal-error");
        const mfaEnrollmentId = ((_a = phoneInfoOptions.multiFactorHint) === null || _a === void 0 ? void 0 : _a.uid) || phoneInfoOptions.multiFactorUid;
        _assert(mfaEnrollmentId, auth, "missing-multi-factor-info");
        const response = await startSignInPhoneMfa(auth, {
          mfaPendingCredential: session.credential,
          mfaEnrollmentId,
          phoneSignInInfo: {
            recaptchaToken
          }
        });
        return response.phoneResponseInfo.sessionInfo;
      }
    } else {
      const {
        sessionInfo
      } = await sendPhoneVerificationCode(auth, {
        phoneNumber: phoneInfoOptions.phoneNumber,
        recaptchaToken
      });
      return sessionInfo;
    }
  } finally {
    verifier._reset();
  }
}
async function updatePhoneNumber(user, credential) {
  await _link$1((0, import_util.getModularInstance)(user), credential);
}
var PhoneAuthProvider = class {
  constructor(auth) {
    this.providerId = PhoneAuthProvider.PROVIDER_ID;
    this.auth = _castAuth(auth);
  }
  verifyPhoneNumber(phoneOptions, applicationVerifier) {
    return _verifyPhoneNumber(this.auth, phoneOptions, (0, import_util.getModularInstance)(applicationVerifier));
  }
  static credential(verificationId, verificationCode) {
    return PhoneAuthCredential._fromVerification(verificationId, verificationCode);
  }
  static credentialFromResult(userCredential) {
    const credential = userCredential;
    return PhoneAuthProvider.credentialFromTaggedObject(credential);
  }
  static credentialFromError(error) {
    return PhoneAuthProvider.credentialFromTaggedObject(error.customData || {});
  }
  static credentialFromTaggedObject({
    _tokenResponse: tokenResponse
  }) {
    if (!tokenResponse) {
      return null;
    }
    const {
      phoneNumber,
      temporaryProof
    } = tokenResponse;
    if (phoneNumber && temporaryProof) {
      return PhoneAuthCredential._fromTokenResponse(phoneNumber, temporaryProof);
    }
    return null;
  }
};
PhoneAuthProvider.PROVIDER_ID = "phone";
PhoneAuthProvider.PHONE_SIGN_IN_METHOD = "phone";
function _withDefaultResolver(auth, resolverOverride) {
  if (resolverOverride) {
    return _getInstance(resolverOverride);
  }
  _assert(auth._popupRedirectResolver, auth, "argument-error");
  return auth._popupRedirectResolver;
}
var IdpCredential = class extends AuthCredential {
  constructor(params) {
    super("custom", "custom");
    this.params = params;
  }
  _getIdTokenResponse(auth) {
    return signInWithIdp(auth, this._buildIdpRequest());
  }
  _linkToIdToken(auth, idToken) {
    return signInWithIdp(auth, this._buildIdpRequest(idToken));
  }
  _getReauthenticationResolver(auth) {
    return signInWithIdp(auth, this._buildIdpRequest());
  }
  _buildIdpRequest(idToken) {
    const request = {
      requestUri: this.params.requestUri,
      sessionId: this.params.sessionId,
      postBody: this.params.postBody,
      tenantId: this.params.tenantId,
      pendingToken: this.params.pendingToken,
      returnSecureToken: true,
      returnIdpCredential: true
    };
    if (idToken) {
      request.idToken = idToken;
    }
    return request;
  }
};
function _signIn(params) {
  return _signInWithCredential(params.auth, new IdpCredential(params), params.bypassAuthState);
}
function _reauth(params) {
  const {
    auth,
    user
  } = params;
  _assert(user, auth, "internal-error");
  return _reauthenticate(user, new IdpCredential(params), params.bypassAuthState);
}
async function _link(params) {
  const {
    auth,
    user
  } = params;
  _assert(user, auth, "internal-error");
  return _link$1(user, new IdpCredential(params), params.bypassAuthState);
}
var AbstractPopupRedirectOperation = class {
  constructor(auth, filter, resolver, user, bypassAuthState = false) {
    this.auth = auth;
    this.resolver = resolver;
    this.user = user;
    this.bypassAuthState = bypassAuthState;
    this.pendingPromise = null;
    this.eventManager = null;
    this.filter = Array.isArray(filter) ? filter : [filter];
  }
  execute() {
    return new Promise(async (resolve, reject) => {
      this.pendingPromise = {
        resolve,
        reject
      };
      try {
        this.eventManager = await this.resolver._initialize(this.auth);
        await this.onExecution();
        this.eventManager.registerConsumer(this);
      } catch (e) {
        this.reject(e);
      }
    });
  }
  async onAuthEvent(event) {
    const {
      urlResponse,
      sessionId,
      postBody,
      tenantId,
      error,
      type
    } = event;
    if (error) {
      this.reject(error);
      return;
    }
    const params = {
      auth: this.auth,
      requestUri: urlResponse,
      sessionId,
      tenantId: tenantId || void 0,
      postBody: postBody || void 0,
      user: this.user,
      bypassAuthState: this.bypassAuthState
    };
    try {
      this.resolve(await this.getIdpTask(type)(params));
    } catch (e) {
      this.reject(e);
    }
  }
  onError(error) {
    this.reject(error);
  }
  getIdpTask(type) {
    switch (type) {
      case "signInViaPopup":
      case "signInViaRedirect":
        return _signIn;
      case "linkViaPopup":
      case "linkViaRedirect":
        return _link;
      case "reauthViaPopup":
      case "reauthViaRedirect":
        return _reauth;
      default:
        _fail(this.auth, "internal-error");
    }
  }
  resolve(cred) {
    debugAssert(this.pendingPromise, "Pending promise was never set");
    this.pendingPromise.resolve(cred);
    this.unregisterAndCleanUp();
  }
  reject(error) {
    debugAssert(this.pendingPromise, "Pending promise was never set");
    this.pendingPromise.reject(error);
    this.unregisterAndCleanUp();
  }
  unregisterAndCleanUp() {
    if (this.eventManager) {
      this.eventManager.unregisterConsumer(this);
    }
    this.pendingPromise = null;
    this.cleanUp();
  }
};
var _POLL_WINDOW_CLOSE_TIMEOUT = new Delay(2e3, 1e4);
async function signInWithPopup(auth, provider, resolver) {
  const authInternal = _castAuth(auth);
  _assertInstanceOf(auth, provider, FederatedAuthProvider);
  const resolverInternal = _withDefaultResolver(authInternal, resolver);
  const action = new PopupOperation(authInternal, "signInViaPopup", provider, resolverInternal);
  return action.executeNotNull();
}
async function reauthenticateWithPopup(user, provider, resolver) {
  const userInternal = (0, import_util.getModularInstance)(user);
  _assertInstanceOf(userInternal.auth, provider, FederatedAuthProvider);
  const resolverInternal = _withDefaultResolver(userInternal.auth, resolver);
  const action = new PopupOperation(userInternal.auth, "reauthViaPopup", provider, resolverInternal, userInternal);
  return action.executeNotNull();
}
async function linkWithPopup(user, provider, resolver) {
  const userInternal = (0, import_util.getModularInstance)(user);
  _assertInstanceOf(userInternal.auth, provider, FederatedAuthProvider);
  const resolverInternal = _withDefaultResolver(userInternal.auth, resolver);
  const action = new PopupOperation(userInternal.auth, "linkViaPopup", provider, resolverInternal, userInternal);
  return action.executeNotNull();
}
var PopupOperation = class extends AbstractPopupRedirectOperation {
  constructor(auth, filter, provider, resolver, user) {
    super(auth, filter, resolver, user);
    this.provider = provider;
    this.authWindow = null;
    this.pollId = null;
    if (PopupOperation.currentPopupAction) {
      PopupOperation.currentPopupAction.cancel();
    }
    PopupOperation.currentPopupAction = this;
  }
  async executeNotNull() {
    const result = await this.execute();
    _assert(result, this.auth, "internal-error");
    return result;
  }
  async onExecution() {
    debugAssert(this.filter.length === 1, "Popup operations only handle one event");
    const eventId = _generateEventId();
    this.authWindow = await this.resolver._openPopup(this.auth, this.provider, this.filter[0], eventId);
    this.authWindow.associatedEvent = eventId;
    this.resolver._originValidation(this.auth).catch(e => {
      this.reject(e);
    });
    this.resolver._isIframeWebStorageSupported(this.auth, isSupported => {
      if (!isSupported) {
        this.reject(_createError(this.auth, "web-storage-unsupported"));
      }
    });
    this.pollUserCancellation();
  }
  get eventId() {
    var _a;
    return ((_a = this.authWindow) === null || _a === void 0 ? void 0 : _a.associatedEvent) || null;
  }
  cancel() {
    this.reject(_createError(this.auth, "cancelled-popup-request"));
  }
  cleanUp() {
    if (this.authWindow) {
      this.authWindow.close();
    }
    if (this.pollId) {
      window.clearTimeout(this.pollId);
    }
    this.authWindow = null;
    this.pollId = null;
    PopupOperation.currentPopupAction = null;
  }
  pollUserCancellation() {
    const poll = () => {
      var _a, _b;
      if ((_b = (_a = this.authWindow) === null || _a === void 0 ? void 0 : _a.window) === null || _b === void 0 ? void 0 : _b.closed) {
        this.pollId = window.setTimeout(() => {
          this.pollId = null;
          this.reject(_createError(this.auth, "popup-closed-by-user"));
        }, 2e3);
        return;
      }
      this.pollId = window.setTimeout(poll, _POLL_WINDOW_CLOSE_TIMEOUT.get());
    };
    poll();
  }
};
PopupOperation.currentPopupAction = null;
var PENDING_REDIRECT_KEY = "pendingRedirect";
var redirectOutcomeMap = /* @__PURE__ */new Map();
var RedirectAction = class extends AbstractPopupRedirectOperation {
  constructor(auth, resolver, bypassAuthState = false) {
    super(auth, ["signInViaRedirect", "linkViaRedirect", "reauthViaRedirect", "unknown"], resolver, void 0, bypassAuthState);
    this.eventId = null;
  }
  async execute() {
    let readyOutcome = redirectOutcomeMap.get(this.auth._key());
    if (!readyOutcome) {
      try {
        const hasPendingRedirect = await _getAndClearPendingRedirectStatus(this.resolver, this.auth);
        const result = hasPendingRedirect ? await super.execute() : null;
        readyOutcome = () => Promise.resolve(result);
      } catch (e) {
        readyOutcome = () => Promise.reject(e);
      }
      redirectOutcomeMap.set(this.auth._key(), readyOutcome);
    }
    if (!this.bypassAuthState) {
      redirectOutcomeMap.set(this.auth._key(), () => Promise.resolve(null));
    }
    return readyOutcome();
  }
  async onAuthEvent(event) {
    if (event.type === "signInViaRedirect") {
      return super.onAuthEvent(event);
    } else if (event.type === "unknown") {
      this.resolve(null);
      return;
    }
    if (event.eventId) {
      const user = await this.auth._redirectUserForId(event.eventId);
      if (user) {
        this.user = user;
        return super.onAuthEvent(event);
      } else {
        this.resolve(null);
      }
    }
  }
  async onExecution() {}
  cleanUp() {}
};
async function _getAndClearPendingRedirectStatus(resolver, auth) {
  const key = pendingRedirectKey(auth);
  const persistence = resolverPersistence(resolver);
  if (!(await persistence._isAvailable())) {
    return false;
  }
  const hasPendingRedirect = (await persistence._get(key)) === "true";
  await persistence._remove(key);
  return hasPendingRedirect;
}
async function _setPendingRedirectStatus(resolver, auth) {
  return resolverPersistence(resolver)._set(pendingRedirectKey(auth), "true");
}
function _clearRedirectOutcomes() {
  redirectOutcomeMap.clear();
}
function _overrideRedirectResult(auth, result) {
  redirectOutcomeMap.set(auth._key(), result);
}
function resolverPersistence(resolver) {
  return _getInstance(resolver._redirectPersistence);
}
function pendingRedirectKey(auth) {
  return _persistenceKeyName(PENDING_REDIRECT_KEY, auth.config.apiKey, auth.name);
}
function signInWithRedirect(auth, provider, resolver) {
  return _signInWithRedirect(auth, provider, resolver);
}
async function _signInWithRedirect(auth, provider, resolver) {
  const authInternal = _castAuth(auth);
  _assertInstanceOf(auth, provider, FederatedAuthProvider);
  await authInternal._initializationPromise;
  const resolverInternal = _withDefaultResolver(authInternal, resolver);
  await _setPendingRedirectStatus(resolverInternal, authInternal);
  return resolverInternal._openRedirect(authInternal, provider, "signInViaRedirect");
}
function reauthenticateWithRedirect(user, provider, resolver) {
  return _reauthenticateWithRedirect(user, provider, resolver);
}
async function _reauthenticateWithRedirect(user, provider, resolver) {
  const userInternal = (0, import_util.getModularInstance)(user);
  _assertInstanceOf(userInternal.auth, provider, FederatedAuthProvider);
  await userInternal.auth._initializationPromise;
  const resolverInternal = _withDefaultResolver(userInternal.auth, resolver);
  await _setPendingRedirectStatus(resolverInternal, userInternal.auth);
  const eventId = await prepareUserForRedirect(userInternal);
  return resolverInternal._openRedirect(userInternal.auth, provider, "reauthViaRedirect", eventId);
}
function linkWithRedirect(user, provider, resolver) {
  return _linkWithRedirect(user, provider, resolver);
}
async function _linkWithRedirect(user, provider, resolver) {
  const userInternal = (0, import_util.getModularInstance)(user);
  _assertInstanceOf(userInternal.auth, provider, FederatedAuthProvider);
  await userInternal.auth._initializationPromise;
  const resolverInternal = _withDefaultResolver(userInternal.auth, resolver);
  await _assertLinkedStatus(false, userInternal, provider.providerId);
  await _setPendingRedirectStatus(resolverInternal, userInternal.auth);
  const eventId = await prepareUserForRedirect(userInternal);
  return resolverInternal._openRedirect(userInternal.auth, provider, "linkViaRedirect", eventId);
}
async function getRedirectResult(auth, resolver) {
  await _castAuth(auth)._initializationPromise;
  return _getRedirectResult(auth, resolver, false);
}
async function _getRedirectResult(auth, resolverExtern, bypassAuthState = false) {
  const authInternal = _castAuth(auth);
  const resolver = _withDefaultResolver(authInternal, resolverExtern);
  const action = new RedirectAction(authInternal, resolver, bypassAuthState);
  const result = await action.execute();
  if (result && !bypassAuthState) {
    delete result.user._redirectEventId;
    await authInternal._persistUserIfCurrent(result.user);
    await authInternal._setRedirectUser(null, resolverExtern);
  }
  return result;
}
async function prepareUserForRedirect(user) {
  const eventId = _generateEventId(`${user.uid}:::`);
  user._redirectEventId = eventId;
  await user.auth._setRedirectUser(user);
  await user.auth._persistUserIfCurrent(user);
  return eventId;
}
var EVENT_DUPLICATION_CACHE_DURATION_MS = 10 * 60 * 1e3;
var AuthEventManager = class {
  constructor(auth) {
    this.auth = auth;
    this.cachedEventUids = /* @__PURE__ */new Set();
    this.consumers = /* @__PURE__ */new Set();
    this.queuedRedirectEvent = null;
    this.hasHandledPotentialRedirect = false;
    this.lastProcessedEventTime = Date.now();
  }
  registerConsumer(authEventConsumer) {
    this.consumers.add(authEventConsumer);
    if (this.queuedRedirectEvent && this.isEventForConsumer(this.queuedRedirectEvent, authEventConsumer)) {
      this.sendToConsumer(this.queuedRedirectEvent, authEventConsumer);
      this.saveEventToCache(this.queuedRedirectEvent);
      this.queuedRedirectEvent = null;
    }
  }
  unregisterConsumer(authEventConsumer) {
    this.consumers.delete(authEventConsumer);
  }
  onEvent(event) {
    if (this.hasEventBeenHandled(event)) {
      return false;
    }
    let handled = false;
    this.consumers.forEach(consumer => {
      if (this.isEventForConsumer(event, consumer)) {
        handled = true;
        this.sendToConsumer(event, consumer);
        this.saveEventToCache(event);
      }
    });
    if (this.hasHandledPotentialRedirect || !isRedirectEvent(event)) {
      return handled;
    }
    this.hasHandledPotentialRedirect = true;
    if (!handled) {
      this.queuedRedirectEvent = event;
      handled = true;
    }
    return handled;
  }
  sendToConsumer(event, consumer) {
    var _a;
    if (event.error && !isNullRedirectEvent(event)) {
      const code = ((_a = event.error.code) === null || _a === void 0 ? void 0 : _a.split("auth/")[1]) || "internal-error";
      consumer.onError(_createError(this.auth, code));
    } else {
      consumer.onAuthEvent(event);
    }
  }
  isEventForConsumer(event, consumer) {
    const eventIdMatches = consumer.eventId === null || !!event.eventId && event.eventId === consumer.eventId;
    return consumer.filter.includes(event.type) && eventIdMatches;
  }
  hasEventBeenHandled(event) {
    if (Date.now() - this.lastProcessedEventTime >= EVENT_DUPLICATION_CACHE_DURATION_MS) {
      this.cachedEventUids.clear();
    }
    return this.cachedEventUids.has(eventUid(event));
  }
  saveEventToCache(event) {
    this.cachedEventUids.add(eventUid(event));
    this.lastProcessedEventTime = Date.now();
  }
};
function eventUid(e) {
  return [e.type, e.eventId, e.sessionId, e.tenantId].filter(v => v).join("-");
}
function isNullRedirectEvent({
  type,
  error
}) {
  return type === "unknown" && (error === null || error === void 0 ? void 0 : error.code) === `auth/${"no-auth-event"}`;
}
function isRedirectEvent(event) {
  switch (event.type) {
    case "signInViaRedirect":
    case "linkViaRedirect":
    case "reauthViaRedirect":
      return true;
    case "unknown":
      return isNullRedirectEvent(event);
    default:
      return false;
  }
}
async function _getProjectConfig(auth, request = {}) {
  return _performApiRequest(auth, "GET", "/v1/projects", request);
}
var IP_ADDRESS_REGEX = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/;
var HTTP_REGEX = /^https?/;
async function _validateOrigin(auth) {
  if (auth.config.emulator) {
    return;
  }
  const {
    authorizedDomains
  } = await _getProjectConfig(auth);
  for (const domain of authorizedDomains) {
    try {
      if (matchDomain(domain)) {
        return;
      }
    } catch (_a) {}
  }
  _fail(auth, "unauthorized-domain");
}
function matchDomain(expected) {
  const currentUrl = _getCurrentUrl();
  const {
    protocol,
    hostname
  } = new URL(currentUrl);
  if (expected.startsWith("chrome-extension://")) {
    const ceUrl = new URL(expected);
    if (ceUrl.hostname === "" && hostname === "") {
      return protocol === "chrome-extension:" && expected.replace("chrome-extension://", "") === currentUrl.replace("chrome-extension://", "");
    }
    return protocol === "chrome-extension:" && ceUrl.hostname === hostname;
  }
  if (!HTTP_REGEX.test(protocol)) {
    return false;
  }
  if (IP_ADDRESS_REGEX.test(expected)) {
    return hostname === expected;
  }
  const escapedDomainPattern = expected.replace(/\./g, "\\.");
  const re = new RegExp("^(.+\\." + escapedDomainPattern + "|" + escapedDomainPattern + ")$", "i");
  return re.test(hostname);
}
var NETWORK_TIMEOUT = new Delay(3e4, 6e4);
function resetUnloadedGapiModules() {
  const beacon = _window().___jsl;
  if (beacon === null || beacon === void 0 ? void 0 : beacon.H) {
    for (const hint of Object.keys(beacon.H)) {
      beacon.H[hint].r = beacon.H[hint].r || [];
      beacon.H[hint].L = beacon.H[hint].L || [];
      beacon.H[hint].r = [...beacon.H[hint].L];
      if (beacon.CP) {
        for (let i = 0; i < beacon.CP.length; i++) {
          beacon.CP[i] = null;
        }
      }
    }
  }
}
function loadGapi(auth) {
  return new Promise((resolve, reject) => {
    var _a, _b, _c;
    function loadGapiIframe() {
      resetUnloadedGapiModules();
      gapi.load("gapi.iframes", {
        callback: () => {
          resolve(gapi.iframes.getContext());
        },
        ontimeout: () => {
          resetUnloadedGapiModules();
          reject(_createError(auth, "network-request-failed"));
        },
        timeout: NETWORK_TIMEOUT.get()
      });
    }
    if ((_b = (_a = _window().gapi) === null || _a === void 0 ? void 0 : _a.iframes) === null || _b === void 0 ? void 0 : _b.Iframe) {
      resolve(gapi.iframes.getContext());
    } else if (!!((_c = _window().gapi) === null || _c === void 0 ? void 0 : _c.load)) {
      loadGapiIframe();
    } else {
      const cbName = _generateCallbackName("iframefcb");
      _window()[cbName] = () => {
        if (!!gapi.load) {
          loadGapiIframe();
        } else {
          reject(_createError(auth, "network-request-failed"));
        }
      };
      return _loadJS(`https://apis.google.com/js/api.js?onload=${cbName}`).catch(e => reject(e));
    }
  }).catch(error => {
    cachedGApiLoader = null;
    throw error;
  });
}
var cachedGApiLoader = null;
function _loadGapi(auth) {
  cachedGApiLoader = cachedGApiLoader || loadGapi(auth);
  return cachedGApiLoader;
}
var PING_TIMEOUT = new Delay(5e3, 15e3);
var IFRAME_PATH = "__/auth/iframe";
var EMULATED_IFRAME_PATH = "emulator/auth/iframe";
var IFRAME_ATTRIBUTES = {
  style: {
    position: "absolute",
    top: "-100px",
    width: "1px",
    height: "1px"
  },
  "aria-hidden": "true",
  tabindex: "-1"
};
var EID_FROM_APIHOST = /* @__PURE__ */new Map([["identitytoolkit.googleapis.com", "p"], ["staging-identitytoolkit.sandbox.googleapis.com", "s"], ["test-identitytoolkit.sandbox.googleapis.com", "t"]]);
function getIframeUrl(auth) {
  const config = auth.config;
  _assert(config.authDomain, auth, "auth-domain-config-required");
  const url = config.emulator ? _emulatorUrl(config, EMULATED_IFRAME_PATH) : `https://${auth.config.authDomain}/${IFRAME_PATH}`;
  const params = {
    apiKey: config.apiKey,
    appName: auth.name,
    v: import_app.SDK_VERSION
  };
  const eid = EID_FROM_APIHOST.get(auth.config.apiHost);
  if (eid) {
    params.eid = eid;
  }
  const frameworks = auth._getFrameworks();
  if (frameworks.length) {
    params.fw = frameworks.join(",");
  }
  return `${url}?${(0, import_util.querystring)(params).slice(1)}`;
}
async function _openIframe(auth) {
  const context = await _loadGapi(auth);
  const gapi2 = _window().gapi;
  _assert(gapi2, auth, "internal-error");
  return context.open({
    where: document.body,
    url: getIframeUrl(auth),
    messageHandlersFilter: gapi2.iframes.CROSS_ORIGIN_IFRAMES_FILTER,
    attributes: IFRAME_ATTRIBUTES,
    dontclear: true
  }, iframe => new Promise(async (resolve, reject) => {
    await iframe.restyle({
      setHideOnLeave: false
    });
    const networkError = _createError(auth, "network-request-failed");
    const networkErrorTimer = _window().setTimeout(() => {
      reject(networkError);
    }, PING_TIMEOUT.get());
    function clearTimerAndResolve() {
      _window().clearTimeout(networkErrorTimer);
      resolve(iframe);
    }
    iframe.ping(clearTimerAndResolve).then(clearTimerAndResolve, () => {
      reject(networkError);
    });
  }));
}
var BASE_POPUP_OPTIONS = {
  location: "yes",
  resizable: "yes",
  statusbar: "yes",
  toolbar: "no"
};
var DEFAULT_WIDTH = 500;
var DEFAULT_HEIGHT = 600;
var TARGET_BLANK = "_blank";
var FIREFOX_EMPTY_URL = "http://localhost";
var AuthPopup = class {
  constructor(window2) {
    this.window = window2;
    this.associatedEvent = null;
  }
  close() {
    if (this.window) {
      try {
        this.window.close();
      } catch (e) {}
    }
  }
};
function _open(auth, url, name2, width = DEFAULT_WIDTH, height = DEFAULT_HEIGHT) {
  const top = Math.max((window.screen.availHeight - height) / 2, 0).toString();
  const left = Math.max((window.screen.availWidth - width) / 2, 0).toString();
  let target = "";
  const options = Object.assign(Object.assign({}, BASE_POPUP_OPTIONS), {
    width: width.toString(),
    height: height.toString(),
    top,
    left
  });
  const ua = (0, import_util.getUA)().toLowerCase();
  if (name2) {
    target = _isChromeIOS(ua) ? TARGET_BLANK : name2;
  }
  if (_isFirefox(ua)) {
    url = url || FIREFOX_EMPTY_URL;
    options.scrollbars = "yes";
  }
  const optionsString = Object.entries(options).reduce((accum, [key, value]) => `${accum}${key}=${value},`, "");
  if (_isIOSStandalone(ua) && target !== "_self") {
    openAsNewWindowIOS(url || "", target);
    return new AuthPopup(null);
  }
  const newWin = window.open(url || "", target, optionsString);
  _assert(newWin, auth, "popup-blocked");
  try {
    newWin.focus();
  } catch (e) {}
  return new AuthPopup(newWin);
}
function openAsNewWindowIOS(url, target) {
  const el = document.createElement("a");
  el.href = url;
  el.target = target;
  const click = document.createEvent("MouseEvent");
  click.initMouseEvent("click", true, true, window, 1, 0, 0, 0, 0, false, false, false, false, 1, null);
  el.dispatchEvent(click);
}
var WIDGET_PATH = "__/auth/handler";
var EMULATOR_WIDGET_PATH = "emulator/auth/handler";
function _getRedirectUrl(auth, provider, authType, redirectUrl, eventId, additionalParams) {
  _assert(auth.config.authDomain, auth, "auth-domain-config-required");
  _assert(auth.config.apiKey, auth, "invalid-api-key");
  const params = {
    apiKey: auth.config.apiKey,
    appName: auth.name,
    authType,
    redirectUrl,
    v: import_app.SDK_VERSION,
    eventId
  };
  if (provider instanceof FederatedAuthProvider) {
    provider.setDefaultLanguage(auth.languageCode);
    params.providerId = provider.providerId || "";
    if (!(0, import_util.isEmpty)(provider.getCustomParameters())) {
      params.customParameters = JSON.stringify(provider.getCustomParameters());
    }
    for (const [key, value] of Object.entries(additionalParams || {})) {
      params[key] = value;
    }
  }
  if (provider instanceof BaseOAuthProvider) {
    const scopes = provider.getScopes().filter(scope => scope !== "");
    if (scopes.length > 0) {
      params.scopes = scopes.join(",");
    }
  }
  if (auth.tenantId) {
    params.tid = auth.tenantId;
  }
  const paramsDict = params;
  for (const key of Object.keys(paramsDict)) {
    if (paramsDict[key] === void 0) {
      delete paramsDict[key];
    }
  }
  return `${getHandlerBase(auth)}?${(0, import_util.querystring)(paramsDict).slice(1)}`;
}
function getHandlerBase({
  config
}) {
  if (!config.emulator) {
    return `https://${config.authDomain}/${WIDGET_PATH}`;
  }
  return _emulatorUrl(config, EMULATOR_WIDGET_PATH);
}
var WEB_STORAGE_SUPPORT_KEY = "webStorageSupport";
var BrowserPopupRedirectResolver = class {
  constructor() {
    this.eventManagers = {};
    this.iframes = {};
    this.originValidationPromises = {};
    this._redirectPersistence = browserSessionPersistence;
    this._completeRedirectFn = _getRedirectResult;
    this._overrideRedirectResult = _overrideRedirectResult;
  }
  async _openPopup(auth, provider, authType, eventId) {
    var _a;
    debugAssert((_a = this.eventManagers[auth._key()]) === null || _a === void 0 ? void 0 : _a.manager, "_initialize() not called before _openPopup()");
    const url = _getRedirectUrl(auth, provider, authType, _getCurrentUrl(), eventId);
    return _open(auth, url, _generateEventId());
  }
  async _openRedirect(auth, provider, authType, eventId) {
    await this._originValidation(auth);
    _setWindowLocation(_getRedirectUrl(auth, provider, authType, _getCurrentUrl(), eventId));
    return new Promise(() => {});
  }
  _initialize(auth) {
    const key = auth._key();
    if (this.eventManagers[key]) {
      const {
        manager,
        promise: promise2
      } = this.eventManagers[key];
      if (manager) {
        return Promise.resolve(manager);
      } else {
        debugAssert(promise2, "If manager is not set, promise should be");
        return promise2;
      }
    }
    const promise = this.initAndGetManager(auth);
    this.eventManagers[key] = {
      promise
    };
    promise.catch(() => {
      delete this.eventManagers[key];
    });
    return promise;
  }
  async initAndGetManager(auth) {
    const iframe = await _openIframe(auth);
    const manager = new AuthEventManager(auth);
    iframe.register("authEvent", iframeEvent => {
      _assert(iframeEvent === null || iframeEvent === void 0 ? void 0 : iframeEvent.authEvent, auth, "invalid-auth-event");
      const handled = manager.onEvent(iframeEvent.authEvent);
      return {
        status: handled ? "ACK" : "ERROR"
      };
    }, gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER);
    this.eventManagers[auth._key()] = {
      manager
    };
    this.iframes[auth._key()] = iframe;
    return manager;
  }
  _isIframeWebStorageSupported(auth, cb) {
    const iframe = this.iframes[auth._key()];
    iframe.send(WEB_STORAGE_SUPPORT_KEY, {
      type: WEB_STORAGE_SUPPORT_KEY
    }, result => {
      var _a;
      const isSupported = (_a = result === null || result === void 0 ? void 0 : result[0]) === null || _a === void 0 ? void 0 : _a[WEB_STORAGE_SUPPORT_KEY];
      if (isSupported !== void 0) {
        cb(!!isSupported);
      }
      _fail(auth, "internal-error");
    }, gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER);
  }
  _originValidation(auth) {
    const key = auth._key();
    if (!this.originValidationPromises[key]) {
      this.originValidationPromises[key] = _validateOrigin(auth);
    }
    return this.originValidationPromises[key];
  }
  get _shouldInitProactively() {
    return _isMobileBrowser() || _isSafari() || _isIOS();
  }
};
var browserPopupRedirectResolver = BrowserPopupRedirectResolver;
var MultiFactorAssertionImpl = class {
  constructor(factorId) {
    this.factorId = factorId;
  }
  _process(auth, session, displayName) {
    switch (session.type) {
      case "enroll":
        return this._finalizeEnroll(auth, session.credential, displayName);
      case "signin":
        return this._finalizeSignIn(auth, session.credential);
      default:
        return debugFail("unexpected MultiFactorSessionType");
    }
  }
};
var PhoneMultiFactorAssertionImpl = class extends MultiFactorAssertionImpl {
  constructor(credential) {
    super("phone");
    this.credential = credential;
  }
  static _fromCredential(credential) {
    return new PhoneMultiFactorAssertionImpl(credential);
  }
  _finalizeEnroll(auth, idToken, displayName) {
    return finalizeEnrollPhoneMfa(auth, {
      idToken,
      displayName,
      phoneVerificationInfo: this.credential._makeVerificationRequest()
    });
  }
  _finalizeSignIn(auth, mfaPendingCredential) {
    return finalizeSignInPhoneMfa(auth, {
      mfaPendingCredential,
      phoneVerificationInfo: this.credential._makeVerificationRequest()
    });
  }
};
var PhoneMultiFactorGenerator = class {
  constructor() {}
  static assertion(credential) {
    return PhoneMultiFactorAssertionImpl._fromCredential(credential);
  }
};
PhoneMultiFactorGenerator.FACTOR_ID = "phone";
var name = "@firebase/auth";
var version = "0.21.4";
var AuthInterop = class {
  constructor(auth) {
    this.auth = auth;
    this.internalListeners = /* @__PURE__ */new Map();
  }
  getUid() {
    var _a;
    this.assertAuthConfigured();
    return ((_a = this.auth.currentUser) === null || _a === void 0 ? void 0 : _a.uid) || null;
  }
  async getToken(forceRefresh) {
    this.assertAuthConfigured();
    await this.auth._initializationPromise;
    if (!this.auth.currentUser) {
      return null;
    }
    const accessToken = await this.auth.currentUser.getIdToken(forceRefresh);
    return {
      accessToken
    };
  }
  addAuthTokenListener(listener) {
    this.assertAuthConfigured();
    if (this.internalListeners.has(listener)) {
      return;
    }
    const unsubscribe = this.auth.onIdTokenChanged(user => {
      listener((user === null || user === void 0 ? void 0 : user.stsTokenManager.accessToken) || null);
    });
    this.internalListeners.set(listener, unsubscribe);
    this.updateProactiveRefresh();
  }
  removeAuthTokenListener(listener) {
    this.assertAuthConfigured();
    const unsubscribe = this.internalListeners.get(listener);
    if (!unsubscribe) {
      return;
    }
    this.internalListeners.delete(listener);
    unsubscribe();
    this.updateProactiveRefresh();
  }
  assertAuthConfigured() {
    _assert(this.auth._initializationPromise, "dependent-sdk-initialized-before-auth");
  }
  updateProactiveRefresh() {
    if (this.internalListeners.size > 0) {
      this.auth._startProactiveRefresh();
    } else {
      this.auth._stopProactiveRefresh();
    }
  }
};
function getVersionForPlatform(clientPlatform) {
  switch (clientPlatform) {
    case "Node":
      return "node";
    case "ReactNative":
      return "rn";
    case "Worker":
      return "webworker";
    case "Cordova":
      return "cordova";
    default:
      return void 0;
  }
}
function registerAuth(clientPlatform) {
  (0, import_app._registerComponent)(new import_component.Component("auth", (container, {
    options: deps
  }) => {
    const app = container.getProvider("app").getImmediate();
    const heartbeatServiceProvider = container.getProvider("heartbeat");
    const {
      apiKey,
      authDomain
    } = app.options;
    return ((app2, heartbeatServiceProvider2) => {
      _assert(apiKey && !apiKey.includes(":"), "invalid-api-key", {
        appName: app2.name
      });
      _assert(!(authDomain === null || authDomain === void 0 ? void 0 : authDomain.includes(":")), "argument-error", {
        appName: app2.name
      });
      const config = {
        apiKey,
        authDomain,
        clientPlatform,
        apiHost: "identitytoolkit.googleapis.com",
        tokenApiHost: "securetoken.googleapis.com",
        apiScheme: "https",
        sdkClientVersion: _getClientVersion(clientPlatform)
      };
      const authInstance = new AuthImpl(app2, heartbeatServiceProvider2, config);
      _initializeAuthInstance(authInstance, deps);
      return authInstance;
    })(app, heartbeatServiceProvider);
  }, "PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((container, _instanceIdentifier, _instance) => {
    const authInternalProvider = container.getProvider("auth-internal");
    authInternalProvider.initialize();
  }));
  (0, import_app._registerComponent)(new import_component.Component("auth-internal", container => {
    const auth = _castAuth(container.getProvider("auth").getImmediate());
    return (auth2 => new AuthInterop(auth2))(auth);
  }, "PRIVATE").setInstantiationMode("EXPLICIT"));
  (0, import_app.registerVersion)(name, version, getVersionForPlatform(clientPlatform));
  (0, import_app.registerVersion)(name, version, "esm2017");
}
var DEFAULT_ID_TOKEN_MAX_AGE = 5 * 60;
var authIdTokenMaxAge = (0, import_util.getExperimentalSetting)("authIdTokenMaxAge") || DEFAULT_ID_TOKEN_MAX_AGE;
var lastPostedIdToken = null;
var mintCookieFactory = url => async user => {
  const idTokenResult = user && (await user.getIdTokenResult());
  const idTokenAge = idTokenResult && (new Date().getTime() - Date.parse(idTokenResult.issuedAtTime)) / 1e3;
  if (idTokenAge && idTokenAge > authIdTokenMaxAge) {
    return;
  }
  const idToken = idTokenResult === null || idTokenResult === void 0 ? void 0 : idTokenResult.token;
  if (lastPostedIdToken === idToken) {
    return;
  }
  lastPostedIdToken = idToken;
  await fetch(url, {
    method: idToken ? "POST" : "DELETE",
    headers: idToken ? {
      "Authorization": `Bearer ${idToken}`
    } : {}
  });
};
function getAuth(app = (0, import_app.getApp)()) {
  const provider = (0, import_app._getProvider)(app, "auth");
  if (provider.isInitialized()) {
    return provider.getImmediate();
  }
  const auth = initializeAuth(app, {
    popupRedirectResolver: browserPopupRedirectResolver,
    persistence: [indexedDBLocalPersistence, browserLocalPersistence, browserSessionPersistence]
  });
  const authTokenSyncUrl = (0, import_util.getExperimentalSetting)("authTokenSyncURL");
  if (authTokenSyncUrl) {
    const mintCookie = mintCookieFactory(authTokenSyncUrl);
    beforeAuthStateChanged(auth, mintCookie, () => mintCookie(auth.currentUser));
    onIdTokenChanged(auth, user => mintCookie(user));
  }
  const authEmulatorHost = (0, import_util.getDefaultEmulatorHost)("auth");
  if (authEmulatorHost) {
    connectAuthEmulator(auth, `http://${authEmulatorHost}`);
  }
  return auth;
}
registerAuth("Browser");

// node_modules/@firebase/auth/dist/esm2017/index.js
var import_util2 = require("@firebase/util@1.9.3");
var import_app2 = require("@firebase/app@0.9.4");
var import_logger2 = require("@firebase/logger@0.4.0");
var import_tslib2 = require("tslib@2.5.0");
var import_component2 = require("@firebase/component@0.6.4");
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL0BmaXJlYmFzZS9hdXRoLjAuMjEuNC5qcyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvbW9kZWwvZW51bV9tYXBzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL2Vycm9ycy50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91dGlsL2xvZy50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91dGlsL2Fzc2VydC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91dGlsL2luc3RhbnRpYXRvci50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9hdXRoL2luaXRpYWxpemUudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvdXRpbC9sb2NhdGlvbi50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91dGlsL25hdmlnYXRvci50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91dGlsL2RlbGF5LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3V0aWwvZW11bGF0b3IudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvdXRpbC9mZXRjaF9wcm92aWRlci50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvYXBpL2Vycm9ycy50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvYXBpL2luZGV4LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9hcGkvYWNjb3VudF9tYW5hZ2VtZW50L2FjY291bnQudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvdXRpbC90aW1lLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3VzZXIvaWRfdG9rZW5fcmVzdWx0LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3VzZXIvaW52YWxpZGF0aW9uLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3VzZXIvcHJvYWN0aXZlX3JlZnJlc2gudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvdXNlci91c2VyX21ldGFkYXRhLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3VzZXIvcmVsb2FkLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9hcGkvYXV0aGVudGljYXRpb24vdG9rZW4udHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvdXNlci90b2tlbl9tYW5hZ2VyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3VzZXIvdXNlcl9pbXBsLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3BlcnNpc3RlbmNlL2luX21lbW9yeS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9wZXJzaXN0ZW5jZS9wZXJzaXN0ZW5jZV91c2VyX21hbmFnZXIudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvdXRpbC9icm93c2VyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3V0aWwvdmVyc2lvbi50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9hdXRoL21pZGRsZXdhcmUudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvYXV0aC9hdXRoX2ltcGwudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvYXV0aC9lbXVsYXRvci50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9jcmVkZW50aWFscy9hdXRoX2NyZWRlbnRpYWwudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2FwaS9hY2NvdW50X21hbmFnZW1lbnQvZW1haWxfYW5kX3Bhc3N3b3JkLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9hcGkvYXV0aGVudGljYXRpb24vZW1haWxfYW5kX3Bhc3N3b3JkLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9hcGkvYXV0aGVudGljYXRpb24vZW1haWxfbGluay50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9jcmVkZW50aWFscy9lbWFpbC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvYXBpL2F1dGhlbnRpY2F0aW9uL2lkcC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9jcmVkZW50aWFscy9vYXV0aC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvYXBpL2F1dGhlbnRpY2F0aW9uL3Ntcy50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9jcmVkZW50aWFscy9waG9uZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9hY3Rpb25fY29kZV91cmwudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvcHJvdmlkZXJzL2VtYWlsLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3Byb3ZpZGVycy9mZWRlcmF0ZWQudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvcHJvdmlkZXJzL29hdXRoLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3Byb3ZpZGVycy9mYWNlYm9vay50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9wcm92aWRlcnMvZ29vZ2xlLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3Byb3ZpZGVycy9naXRodWIudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvY3JlZGVudGlhbHMvc2FtbC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9wcm92aWRlcnMvc2FtbC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9wcm92aWRlcnMvdHdpdHRlci50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvYXBpL2F1dGhlbnRpY2F0aW9uL3NpZ25fdXAudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvdXNlci91c2VyX2NyZWRlbnRpYWxfaW1wbC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9zdHJhdGVnaWVzL2Fub255bW91cy50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvbWZhL21mYV9lcnJvci50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91dGlsL3Byb3ZpZGVycy50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91c2VyL2xpbmtfdW5saW5rLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3VzZXIvcmVhdXRoZW50aWNhdGUudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvc3RyYXRlZ2llcy9jcmVkZW50aWFsLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9hcGkvYXV0aGVudGljYXRpb24vY3VzdG9tX3Rva2VuLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3N0cmF0ZWdpZXMvY3VzdG9tX3Rva2VuLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9tZmEvbWZhX2luZm8udHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvc3RyYXRlZ2llcy9hY3Rpb25fY29kZV9zZXR0aW5ncy50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9zdHJhdGVnaWVzL2VtYWlsX2FuZF9wYXNzd29yZC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9zdHJhdGVnaWVzL2VtYWlsX2xpbmsudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2FwaS9hdXRoZW50aWNhdGlvbi9jcmVhdGVfYXV0aF91cmkudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvc3RyYXRlZ2llcy9lbWFpbC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvYXBpL2FjY291bnRfbWFuYWdlbWVudC9wcm9maWxlLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3VzZXIvYWNjb3VudF9pbmZvLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3VzZXIvYWRkaXRpb25hbF91c2VyX2luZm8udHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvaW5kZXgudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL21mYS9tZmFfc2Vzc2lvbi50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvbWZhL21mYV9yZXNvbHZlci50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvYXBpL2FjY291bnRfbWFuYWdlbWVudC9tZmEudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL21mYS9tZmFfdXNlci50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9wZXJzaXN0ZW5jZS9pbmRleC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvcGxhdGZvcm1fYnJvd3Nlci9wZXJzaXN0ZW5jZS9icm93c2VyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9wbGF0Zm9ybV9icm93c2VyL3BlcnNpc3RlbmNlL2xvY2FsX3N0b3JhZ2UudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL3BsYXRmb3JtX2Jyb3dzZXIvcGVyc2lzdGVuY2Uvc2Vzc2lvbl9zdG9yYWdlLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9wbGF0Zm9ybV9icm93c2VyL21lc3NhZ2VjaGFubmVsL3Byb21pc2UudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL3BsYXRmb3JtX2Jyb3dzZXIvbWVzc2FnZWNoYW5uZWwvcmVjZWl2ZXIudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvdXRpbC9ldmVudF9pZC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvcGxhdGZvcm1fYnJvd3Nlci9tZXNzYWdlY2hhbm5lbC9zZW5kZXIudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL3BsYXRmb3JtX2Jyb3dzZXIvYXV0aF93aW5kb3cudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL3BsYXRmb3JtX2Jyb3dzZXIvdXRpbC93b3JrZXIudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL3BsYXRmb3JtX2Jyb3dzZXIvcGVyc2lzdGVuY2UvaW5kZXhlZF9kYi50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvYXBpL2F1dGhlbnRpY2F0aW9uL21mYS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvYXBpL2F1dGhlbnRpY2F0aW9uL3JlY2FwdGNoYS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvcGxhdGZvcm1fYnJvd3Nlci9sb2FkX2pzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9wbGF0Zm9ybV9icm93c2VyL3JlY2FwdGNoYS9yZWNhcHRjaGFfbW9jay50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvcGxhdGZvcm1fYnJvd3Nlci9yZWNhcHRjaGEvcmVjYXB0Y2hhX2xvYWRlci50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvcGxhdGZvcm1fYnJvd3Nlci9yZWNhcHRjaGEvcmVjYXB0Y2hhX3ZlcmlmaWVyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9wbGF0Zm9ybV9icm93c2VyL3N0cmF0ZWdpZXMvcGhvbmUudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL3BsYXRmb3JtX2Jyb3dzZXIvcHJvdmlkZXJzL3Bob25lLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3V0aWwvcmVzb2x2ZXIudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvc3RyYXRlZ2llcy9pZHAudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvc3RyYXRlZ2llcy9hYnN0cmFjdF9wb3B1cF9yZWRpcmVjdF9vcGVyYXRpb24udHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL3BsYXRmb3JtX2Jyb3dzZXIvc3RyYXRlZ2llcy9wb3B1cC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9zdHJhdGVnaWVzL3JlZGlyZWN0LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9wbGF0Zm9ybV9icm93c2VyL3N0cmF0ZWdpZXMvcmVkaXJlY3QudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvYXV0aC9hdXRoX2V2ZW50X21hbmFnZXIudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2FwaS9wcm9qZWN0X2NvbmZpZy9nZXRfcHJvamVjdF9jb25maWcudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvdXRpbC92YWxpZGF0ZV9vcmlnaW4udHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL3BsYXRmb3JtX2Jyb3dzZXIvaWZyYW1lL2dhcGkudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL3BsYXRmb3JtX2Jyb3dzZXIvaWZyYW1lL2lmcmFtZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvcGxhdGZvcm1fYnJvd3Nlci91dGlsL3BvcHVwLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3V0aWwvaGFuZGxlci50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvcGxhdGZvcm1fYnJvd3Nlci9wb3B1cF9yZWRpcmVjdC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvbWZhL21mYV9hc3NlcnRpb24udHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL3BsYXRmb3JtX2Jyb3dzZXIvbWZhL2Fzc2VydGlvbnMvcGhvbmUudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvYXV0aC9maXJlYmFzZV9pbnRlcm5hbC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9hdXRoL3JlZ2lzdGVyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9wbGF0Zm9ybV9icm93c2VyL2luZGV4LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL2Rpc3QvZXNtMjAxNy9pbmRleC5qcyJdLCJuYW1lcyI6WyJhdXRoXzBfMjFfNF9leHBvcnRzIiwiX19leHBvcnQiLCJBY3Rpb25Db2RlT3BlcmF0aW9uIiwiQWN0aW9uQ29kZVVSTCIsIkF1dGhDcmVkZW50aWFsIiwiQXV0aEVycm9yQ29kZXMiLCJBVVRIX0VSUk9SX0NPREVTX01BUF9ET19OT1RfVVNFX0lOVEVSTkFMTFkiLCJFbWFpbEF1dGhDcmVkZW50aWFsIiwiRW1haWxBdXRoUHJvdmlkZXIiLCJGYWNlYm9va0F1dGhQcm92aWRlciIsIkZhY3RvcklkIiwiR2l0aHViQXV0aFByb3ZpZGVyIiwiR29vZ2xlQXV0aFByb3ZpZGVyIiwiT0F1dGhDcmVkZW50aWFsIiwiT0F1dGhQcm92aWRlciIsIk9wZXJhdGlvblR5cGUiLCJQaG9uZUF1dGhDcmVkZW50aWFsIiwiUGhvbmVBdXRoUHJvdmlkZXIiLCJQaG9uZU11bHRpRmFjdG9yR2VuZXJhdG9yIiwiUHJvdmlkZXJJZCIsIlJlY2FwdGNoYVZlcmlmaWVyIiwiU0FNTEF1dGhQcm92aWRlciIsIlNpZ25Jbk1ldGhvZCIsIlR3aXR0ZXJBdXRoUHJvdmlkZXIiLCJhcHBseUFjdGlvbkNvZGUiLCJiZWZvcmVBdXRoU3RhdGVDaGFuZ2VkIiwiYnJvd3NlckxvY2FsUGVyc2lzdGVuY2UiLCJicm93c2VyUG9wdXBSZWRpcmVjdFJlc29sdmVyIiwiYnJvd3NlclNlc3Npb25QZXJzaXN0ZW5jZSIsImNoZWNrQWN0aW9uQ29kZSIsImNvbmZpcm1QYXNzd29yZFJlc2V0IiwiY29ubmVjdEF1dGhFbXVsYXRvciIsImNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZCIsImRlYnVnRXJyb3JNYXAiLCJkZWxldGVVc2VyIiwiZmV0Y2hTaWduSW5NZXRob2RzRm9yRW1haWwiLCJnZXRBZGRpdGlvbmFsVXNlckluZm8iLCJnZXRBdXRoIiwiZ2V0SWRUb2tlbiIsImdldElkVG9rZW5SZXN1bHQiLCJnZXRNdWx0aUZhY3RvclJlc29sdmVyIiwiZ2V0UmVkaXJlY3RSZXN1bHQiLCJpbk1lbW9yeVBlcnNpc3RlbmNlIiwiaW5kZXhlZERCTG9jYWxQZXJzaXN0ZW5jZSIsImluaXRpYWxpemVBdXRoIiwiaXNTaWduSW5XaXRoRW1haWxMaW5rIiwibGlua1dpdGhDcmVkZW50aWFsIiwibGlua1dpdGhQaG9uZU51bWJlciIsImxpbmtXaXRoUG9wdXAiLCJsaW5rV2l0aFJlZGlyZWN0IiwibXVsdGlGYWN0b3IiLCJvbkF1dGhTdGF0ZUNoYW5nZWQiLCJvbklkVG9rZW5DaGFuZ2VkIiwicGFyc2VBY3Rpb25Db2RlVVJMIiwicHJvZEVycm9yTWFwIiwicmVhdXRoZW50aWNhdGVXaXRoQ3JlZGVudGlhbCIsInJlYXV0aGVudGljYXRlV2l0aFBob25lTnVtYmVyIiwicmVhdXRoZW50aWNhdGVXaXRoUG9wdXAiLCJyZWF1dGhlbnRpY2F0ZVdpdGhSZWRpcmVjdCIsInJlbG9hZCIsInNlbmRFbWFpbFZlcmlmaWNhdGlvbiIsInNlbmRQYXNzd29yZFJlc2V0RW1haWwiLCJzZW5kU2lnbkluTGlua1RvRW1haWwiLCJzZXRQZXJzaXN0ZW5jZSIsInNpZ25JbkFub255bW91c2x5Iiwic2lnbkluV2l0aENyZWRlbnRpYWwiLCJzaWduSW5XaXRoQ3VzdG9tVG9rZW4iLCJzaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZCIsInNpZ25JbldpdGhFbWFpbExpbmsiLCJzaWduSW5XaXRoUGhvbmVOdW1iZXIiLCJzaWduSW5XaXRoUG9wdXAiLCJzaWduSW5XaXRoUmVkaXJlY3QiLCJzaWduT3V0IiwidW5saW5rIiwidXBkYXRlQ3VycmVudFVzZXIiLCJ1cGRhdGVFbWFpbCIsInVwZGF0ZVBhc3N3b3JkIiwidXBkYXRlUGhvbmVOdW1iZXIiLCJ1cGRhdGVQcm9maWxlIiwidXNlRGV2aWNlTGFuZ3VhZ2UiLCJ2ZXJpZnlCZWZvcmVVcGRhdGVFbWFpbCIsInZlcmlmeVBhc3N3b3JkUmVzZXRDb2RlIiwibW9kdWxlIiwiZXhwb3J0cyIsIl9fdG9Db21tb25KUyIsIlBIT05FIiwiRkFDRUJPT0siLCJHSVRIVUIiLCJHT09HTEUiLCJQQVNTV09SRCIsIlRXSVRURVIiLCJFTUFJTF9MSU5LIiwiRU1BSUxfUEFTU1dPUkQiLCJMSU5LIiwiUkVBVVRIRU5USUNBVEUiLCJTSUdOX0lOIiwiRU1BSUxfU0lHTklOIiwiUEFTU1dPUkRfUkVTRVQiLCJSRUNPVkVSX0VNQUlMIiwiUkVWRVJUX1NFQ09ORF9GQUNUT1JfQURESVRJT04iLCJWRVJJRllfQU5EX0NIQU5HRV9FTUFJTCIsIlZFUklGWV9FTUFJTCIsIl9kZWJ1Z0Vycm9yTWFwIiwiX3Byb2RFcnJvck1hcCIsIl9ERUZBVUxUX0FVVEhfRVJST1JfRkFDVE9SWSIsImltcG9ydF91dGlsIiwiRXJyb3JGYWN0b3J5IiwiQURNSU5fT05MWV9PUEVSQVRJT04iLCJBUkdVTUVOVF9FUlJPUiIsIkFQUF9OT1RfQVVUSE9SSVpFRCIsIkFQUF9OT1RfSU5TVEFMTEVEIiwiQ0FQVENIQV9DSEVDS19GQUlMRUQiLCJDT0RFX0VYUElSRUQiLCJDT1JET1ZBX05PVF9SRUFEWSIsIkNPUlNfVU5TVVBQT1JURUQiLCJDUkVERU5USUFMX0FMUkVBRFlfSU5fVVNFIiwiQ1JFREVOVElBTF9NSVNNQVRDSCIsIkNSRURFTlRJQUxfVE9PX09MRF9MT0dJTl9BR0FJTiIsIkRFUEVOREVOVF9TREtfSU5JVF9CRUZPUkVfQVVUSCIsIkRZTkFNSUNfTElOS19OT1RfQUNUSVZBVEVEIiwiRU1BSUxfQ0hBTkdFX05FRURTX1ZFUklGSUNBVElPTiIsIkVNQUlMX0VYSVNUUyIsIkVNVUxBVE9SX0NPTkZJR19GQUlMRUQiLCJFWFBJUkVEX09PQl9DT0RFIiwiRVhQSVJFRF9QT1BVUF9SRVFVRVNUIiwiSU5URVJOQUxfRVJST1IiLCJJTlZBTElEX0FQSV9LRVkiLCJJTlZBTElEX0FQUF9DUkVERU5USUFMIiwiSU5WQUxJRF9BUFBfSUQiLCJJTlZBTElEX0FVVEgiLCJJTlZBTElEX0FVVEhfRVZFTlQiLCJJTlZBTElEX0NFUlRfSEFTSCIsIklOVkFMSURfQ09ERSIsIklOVkFMSURfQ09OVElOVUVfVVJJIiwiSU5WQUxJRF9DT1JET1ZBX0NPTkZJR1VSQVRJT04iLCJJTlZBTElEX0NVU1RPTV9UT0tFTiIsIklOVkFMSURfRFlOQU1JQ19MSU5LX0RPTUFJTiIsIklOVkFMSURfRU1BSUwiLCJJTlZBTElEX0VNVUxBVE9SX1NDSEVNRSIsIklOVkFMSURfSURQX1JFU1BPTlNFIiwiSU5WQUxJRF9NRVNTQUdFX1BBWUxPQUQiLCJJTlZBTElEX01GQV9TRVNTSU9OIiwiSU5WQUxJRF9PQVVUSF9DTElFTlRfSUQiLCJJTlZBTElEX09BVVRIX1BST1ZJREVSIiwiSU5WQUxJRF9PT0JfQ09ERSIsIklOVkFMSURfT1JJR0lOIiwiSU5WQUxJRF9QQVNTV09SRCIsIklOVkFMSURfUEVSU0lTVEVOQ0UiLCJJTlZBTElEX1BIT05FX05VTUJFUiIsIklOVkFMSURfUFJPVklERVJfSUQiLCJJTlZBTElEX1JFQ0lQSUVOVF9FTUFJTCIsIklOVkFMSURfU0VOREVSIiwiSU5WQUxJRF9TRVNTSU9OX0lORk8iLCJJTlZBTElEX1RFTkFOVF9JRCIsIk1GQV9JTkZPX05PVF9GT1VORCIsIk1GQV9SRVFVSVJFRCIsIk1JU1NJTkdfQU5EUk9JRF9QQUNLQUdFX05BTUUiLCJNSVNTSU5HX0FQUF9DUkVERU5USUFMIiwiTUlTU0lOR19BVVRIX0RPTUFJTiIsIk1JU1NJTkdfQ09ERSIsIk1JU1NJTkdfQ09OVElOVUVfVVJJIiwiTUlTU0lOR19JRlJBTUVfU1RBUlQiLCJNSVNTSU5HX0lPU19CVU5ETEVfSUQiLCJNSVNTSU5HX09SX0lOVkFMSURfTk9OQ0UiLCJNSVNTSU5HX01GQV9JTkZPIiwiTUlTU0lOR19NRkFfU0VTU0lPTiIsIk1JU1NJTkdfUEhPTkVfTlVNQkVSIiwiTUlTU0lOR19TRVNTSU9OX0lORk8iLCJNT0RVTEVfREVTVFJPWUVEIiwiTkVFRF9DT05GSVJNQVRJT04iLCJORVRXT1JLX1JFUVVFU1RfRkFJTEVEIiwiTlVMTF9VU0VSIiwiTk9fQVVUSF9FVkVOVCIsIk5PX1NVQ0hfUFJPVklERVIiLCJPUEVSQVRJT05fTk9UX0FMTE9XRUQiLCJPUEVSQVRJT05fTk9UX1NVUFBPUlRFRCIsIlBPUFVQX0JMT0NLRUQiLCJQT1BVUF9DTE9TRURfQllfVVNFUiIsIlBST1ZJREVSX0FMUkVBRFlfTElOS0VEIiwiUVVPVEFfRVhDRUVERUQiLCJSRURJUkVDVF9DQU5DRUxMRURfQllfVVNFUiIsIlJFRElSRUNUX09QRVJBVElPTl9QRU5ESU5HIiwiUkVKRUNURURfQ1JFREVOVElBTCIsIlNFQ09ORF9GQUNUT1JfQUxSRUFEWV9FTlJPTExFRCIsIlNFQ09ORF9GQUNUT1JfTElNSVRfRVhDRUVERUQiLCJURU5BTlRfSURfTUlTTUFUQ0giLCJUSU1FT1VUIiwiVE9LRU5fRVhQSVJFRCIsIlRPT19NQU5ZX0FUVEVNUFRTX1RSWV9MQVRFUiIsIlVOQVVUSE9SSVpFRF9ET01BSU4iLCJVTlNVUFBPUlRFRF9GSVJTVF9GQUNUT1IiLCJVTlNVUFBPUlRFRF9QRVJTSVNURU5DRSIsIlVOU1VQUE9SVEVEX1RFTkFOVF9PUEVSQVRJT04iLCJVTlZFUklGSUVEX0VNQUlMIiwiVVNFUl9DQU5DRUxMRUQiLCJVU0VSX0RFTEVURUQiLCJVU0VSX0RJU0FCTEVEIiwiVVNFUl9NSVNNQVRDSCIsIlVTRVJfU0lHTkVEX09VVCIsIldFQUtfUEFTU1dPUkQiLCJXRUJfU1RPUkFHRV9VTlNVUFBPUlRFRCIsIkFMUkVBRFlfSU5JVElBTElaRUQiLCJsb2dDbGllbnQiLCJpbXBvcnRfbG9nZ2VyIiwiTG9nZ2VyIiwiX2xvZ0Vycm9yIiwibXNnIiwiYXJncyIsImxvZ0xldmVsIiwiTG9nTGV2ZWwiLCJFUlJPUiIsImVycm9yIiwiaW1wb3J0X2FwcCIsIlNES19WRVJTSU9OIiwiX2ZhaWwiLCJhdXRoT3JDb2RlIiwicmVzdCIsImNyZWF0ZUVycm9ySW50ZXJuYWwiLCJfY3JlYXRlRXJyb3IiLCJfZXJyb3JXaXRoQ3VzdG9tTWVzc2FnZSIsImF1dGgiLCJjb2RlIiwibWVzc2FnZSIsImVycm9yTWFwIiwiT2JqZWN0IiwiYXNzaWduIiwiZmFjdG9yeSIsImNyZWF0ZSIsImFwcE5hbWUiLCJuYW1lIiwiX2Fzc2VydEluc3RhbmNlT2YiLCJvYmplY3QiLCJpbnN0YW5jZSIsImNvbnN0cnVjdG9ySW5zdGFuY2UiLCJjb25zdHJ1Y3RvciIsImZ1bGxQYXJhbXMiLCJzbGljZSIsIl9lcnJvckZhY3RvcnkiLCJfYXNzZXJ0IiwiYXNzZXJ0aW9uIiwiZGVidWdGYWlsIiwiZmFpbHVyZSIsIkVycm9yIiwiZGVidWdBc3NlcnQiLCJpbnN0YW5jZUNhY2hlIiwiTWFwIiwiX2dldEluc3RhbmNlIiwiY2xzIiwiRnVuY3Rpb24iLCJnZXQiLCJzZXQiLCJhcHAiLCJkZXBzIiwicHJvdmlkZXIiLCJfZ2V0UHJvdmlkZXIiLCJpc0luaXRpYWxpemVkIiwiYXV0aDIiLCJnZXRJbW1lZGlhdGUiLCJpbml0aWFsT3B0aW9ucyIsImdldE9wdGlvbnMiLCJkZWVwRXF1YWwiLCJpbml0aWFsaXplIiwib3B0aW9ucyIsIl9pbml0aWFsaXplQXV0aEluc3RhbmNlIiwicGVyc2lzdGVuY2UiLCJoaWVyYXJjaHkiLCJBcnJheSIsImlzQXJyYXkiLCJtYXAiLCJfdXBkYXRlRXJyb3JNYXAiLCJfaW5pdGlhbGl6ZVdpdGhQZXJzaXN0ZW5jZSIsInBvcHVwUmVkaXJlY3RSZXNvbHZlciIsIl9nZXRDdXJyZW50VXJsIiwic2VsZiIsIl9hIiwibG9jYXRpb24iLCJocmVmIiwiX2lzSHR0cE9ySHR0cHMiLCJfZ2V0Q3VycmVudFNjaGVtZSIsInByb3RvY29sIiwiX2lzT25saW5lIiwibmF2aWdhdG9yIiwib25MaW5lIiwiaXNCcm93c2VyRXh0ZW5zaW9uIiwiX2dldFVzZXJMYW5ndWFnZSIsIm5hdmlnYXRvckxhbmd1YWdlIiwibGFuZ3VhZ2VzIiwibGFuZ3VhZ2UiLCJEZWxheSIsInNob3J0RGVsYXkiLCJsb25nRGVsYXkiLCJpc01vYmlsZSIsImlzTW9iaWxlQ29yZG92YSIsImlzUmVhY3ROYXRpdmUiLCJNYXRoIiwibWluIiwiX2VtdWxhdG9yVXJsIiwiY29uZmlnIiwicGF0aCIsImVtdWxhdG9yIiwidXJsIiwic3RhcnRzV2l0aCIsIkZldGNoUHJvdmlkZXIiLCJmZXRjaEltcGwiLCJoZWFkZXJzSW1wbCIsInJlc3BvbnNlSW1wbCIsImZldGNoIiwiaGVhZGVycyIsIkhlYWRlcnMiLCJyZXNwb25zZSIsIlJlc3BvbnNlIiwiU0VSVkVSX0VSUk9SX01BUCIsIkRFRkFVTFRfQVBJX1RJTUVPVVRfTVMiLCJfYWRkVGlkSWZOZWNlc3NhcnkiLCJyZXF1ZXN0IiwidGVuYW50SWQiLCJfcGVyZm9ybUFwaVJlcXVlc3QiLCJtZXRob2QiLCJjdXN0b21FcnJvck1hcCIsIl9wZXJmb3JtRmV0Y2hXaXRoRXJyb3JIYW5kbGluZyIsImJvZHkiLCJwYXJhbXMiLCJKU09OIiwic3RyaW5naWZ5IiwicXVlcnkiLCJxdWVyeXN0cmluZyIsImtleSIsImFwaUtleSIsIl9nZXRBZGRpdGlvbmFsSGVhZGVycyIsImxhbmd1YWdlQ29kZSIsIl9nZXRGaW5hbFRhcmdldCIsImFwaUhvc3QiLCJyZWZlcnJlclBvbGljeSIsImZldGNoRm4iLCJfY2FuSW5pdEVtdWxhdG9yIiwibmV0d29ya1RpbWVvdXQiLCJOZXR3b3JrVGltZW91dCIsIlByb21pc2UiLCJyYWNlIiwicHJvbWlzZSIsImNsZWFyTmV0d29ya1RpbWVvdXQiLCJqc29uIiwiX21ha2VUYWdnZWRFcnJvciIsIm9rIiwiZXJyb3JNZXNzYWdlIiwic2VydmVyRXJyb3JDb2RlIiwic2VydmVyRXJyb3JNZXNzYWdlIiwic3BsaXQiLCJhdXRoRXJyb3IiLCJ0b0xvd2VyQ2FzZSIsInJlcGxhY2UiLCJlIiwiRmlyZWJhc2VFcnJvciIsIlN0cmluZyIsIl9wZXJmb3JtU2lnbkluUmVxdWVzdCIsInNlcnZlclJlc3BvbnNlIiwiX3NlcnZlclJlc3BvbnNlIiwiaG9zdCIsImJhc2UiLCJhcGlTY2hlbWUiLCJ0aW1lciIsIl8iLCJyZWplY3QiLCJzZXRUaW1lb3V0IiwiY2xlYXJUaW1lb3V0IiwiZXJyb3JQYXJhbXMiLCJlbWFpbCIsInBob25lTnVtYmVyIiwiY3VzdG9tRGF0YSIsIl90b2tlblJlc3BvbnNlIiwiZGVsZXRlQWNjb3VudCIsImRlbGV0ZUxpbmtlZEFjY291bnRzIiwiZ2V0QWNjb3VudEluZm8iLCJ1dGNUaW1lc3RhbXBUb0RhdGVTdHJpbmciLCJ1dGNUaW1lc3RhbXAiLCJkYXRlIiwiRGF0ZSIsIk51bWJlciIsImlzTmFOIiwiZ2V0VGltZSIsInRvVVRDU3RyaW5nIiwidXNlciIsImZvcmNlUmVmcmVzaCIsImdldE1vZHVsYXJJbnN0YW5jZSIsInVzZXJJbnRlcm5hbCIsInRva2VuIiwiY2xhaW1zIiwiX3BhcnNlVG9rZW4iLCJleHAiLCJhdXRoX3RpbWUiLCJpYXQiLCJmaXJlYmFzZSIsInNpZ25JblByb3ZpZGVyIiwiYXV0aFRpbWUiLCJzZWNvbmRzU3RyaW5nVG9NaWxsaXNlY29uZHMiLCJpc3N1ZWRBdFRpbWUiLCJleHBpcmF0aW9uVGltZSIsInNpZ25JblNlY29uZEZhY3RvciIsInNlY29uZHMiLCJhbGdvcml0aG0iLCJwYXlsb2FkIiwic2lnbmF0dXJlIiwiZGVjb2RlZCIsImJhc2U2NERlY29kZSIsInBhcnNlIiwidG9TdHJpbmciLCJfdG9rZW5FeHBpcmVzSW4iLCJwYXJzZWRUb2tlbiIsIl9sb2dvdXRJZkludmFsaWRhdGVkIiwiYnlwYXNzQXV0aFN0YXRlIiwiaXNVc2VySW52YWxpZGF0ZWQiLCJjdXJyZW50VXNlciIsIlByb2FjdGl2ZVJlZnJlc2giLCJpc1J1bm5pbmciLCJ0aW1lcklkIiwiZXJyb3JCYWNrb2ZmIiwiX3N0YXJ0Iiwic2NoZWR1bGUiLCJfc3RvcCIsImdldEludGVydmFsIiwid2FzRXJyb3IiLCJpbnRlcnZhbCIsImV4cFRpbWUiLCJzdHNUb2tlbk1hbmFnZXIiLCJub3ciLCJtYXgiLCJpdGVyYXRpb24iLCJVc2VyTWV0YWRhdGEiLCJjcmVhdGVkQXQiLCJsYXN0TG9naW5BdCIsIl9pbml0aWFsaXplVGltZSIsImxhc3RTaWduSW5UaW1lIiwiY3JlYXRpb25UaW1lIiwiX2NvcHkiLCJtZXRhZGF0YSIsInRvSlNPTiIsIl9yZWxvYWRXaXRob3V0U2F2aW5nIiwiaWRUb2tlbiIsInVzZXJzIiwibGVuZ3RoIiwiY29yZUFjY291bnQiLCJfbm90aWZ5UmVsb2FkTGlzdGVuZXIiLCJuZXdQcm92aWRlckRhdGEiLCJwcm92aWRlclVzZXJJbmZvIiwiZXh0cmFjdFByb3ZpZGVyRGF0YSIsInByb3ZpZGVyRGF0YSIsIm1lcmdlUHJvdmlkZXJEYXRhIiwib2xkSXNBbm9ueW1vdXMiLCJpc0Fub255bW91cyIsIm5ld0lzQW5vbnltb3VzIiwicGFzc3dvcmRIYXNoIiwidXBkYXRlcyIsInVpZCIsImxvY2FsSWQiLCJkaXNwbGF5TmFtZSIsInBob3RvVVJMIiwicGhvdG9VcmwiLCJlbWFpbFZlcmlmaWVkIiwiX3BlcnNpc3RVc2VySWZDdXJyZW50IiwiX25vdGlmeUxpc3RlbmVyc0lmQ3VycmVudCIsIm9yaWdpbmFsIiwibmV3RGF0YSIsImRlZHVwZWQiLCJmaWx0ZXIiLCJvIiwic29tZSIsIm4iLCJwcm92aWRlcklkIiwicHJvdmlkZXJzIiwiaW1wb3J0X3RzbGliIiwiX19yZXN0IiwicmF3SWQiLCJyZXF1ZXN0U3RzVG9rZW4iLCJyZWZyZXNoVG9rZW4iLCJ0b2tlbkFwaUhvc3QiLCJhY2Nlc3NUb2tlbiIsImFjY2Vzc190b2tlbiIsImV4cGlyZXNJbiIsImV4cGlyZXNfaW4iLCJyZWZyZXNoX3Rva2VuIiwiU3RzVG9rZW5NYW5hZ2VyIiwiaXNFeHBpcmVkIiwidXBkYXRlRnJvbVNlcnZlclJlc3BvbnNlIiwidXBkYXRlVG9rZW5zQW5kRXhwaXJhdGlvbiIsImdldFRva2VuIiwicmVmcmVzaCIsImNsZWFyUmVmcmVzaFRva2VuIiwib2xkVG9rZW4iLCJleHBpcmVzSW5TZWMiLCJmcm9tSlNPTiIsIm1hbmFnZXIiLCJfYXNzaWduIiwiX2Nsb25lIiwiX3BlcmZvcm1SZWZyZXNoIiwiYXNzZXJ0U3RyaW5nT3JVbmRlZmluZWQiLCJVc2VySW1wbCIsIm9wdCIsInByb2FjdGl2ZVJlZnJlc2giLCJyZWxvYWRVc2VySW5mbyIsInJlbG9hZExpc3RlbmVyIiwidXNlckluZm8iLCJfb25SZWxvYWQiLCJjYWxsYmFjayIsIl9zdGFydFByb2FjdGl2ZVJlZnJlc2giLCJfc3RvcFByb2FjdGl2ZVJlZnJlc2giLCJfdXBkYXRlVG9rZW5zSWZOZWNlc3NhcnkiLCJyZWxvYWQyIiwidG9rZW5zUmVmcmVzaGVkIiwiZGVsZXRlIiwiX3JlZGlyZWN0RXZlbnRJZCIsIl9mcm9tSlNPTiIsIl9iIiwiX2MiLCJfZCIsIl9lIiwiX2YiLCJfZyIsIl9oIiwicGxhaW5PYmplY3RUb2tlbk1hbmFnZXIiLCJfZnJvbUlkVG9rZW5SZXNwb25zZSIsImlkVG9rZW5SZXNwb25zZSIsIkluTWVtb3J5UGVyc2lzdGVuY2UiLCJ0eXBlIiwic3RvcmFnZSIsIl9pc0F2YWlsYWJsZSIsIl9zZXQiLCJ2YWx1ZSIsIl9nZXQiLCJfcmVtb3ZlIiwiX2FkZExpc3RlbmVyIiwiX2tleSIsIl9saXN0ZW5lciIsIl9yZW1vdmVMaXN0ZW5lciIsIl9wZXJzaXN0ZW5jZUtleU5hbWUiLCJQZXJzaXN0ZW5jZVVzZXJNYW5hZ2VyIiwidXNlcktleSIsIm5hbWUyIiwiZnVsbFVzZXJLZXkiLCJmdWxsUGVyc2lzdGVuY2VLZXkiLCJib3VuZEV2ZW50SGFuZGxlciIsIl9vblN0b3JhZ2VFdmVudCIsImJpbmQiLCJzZXRDdXJyZW50VXNlciIsImdldEN1cnJlbnRVc2VyIiwiYmxvYiIsInJlbW92ZUN1cnJlbnRVc2VyIiwic2F2ZVBlcnNpc3RlbmNlRm9yUmVkaXJlY3QiLCJuZXdQZXJzaXN0ZW5jZSIsInBlcnNpc3RlbmNlSGllcmFyY2h5IiwiYXZhaWxhYmxlUGVyc2lzdGVuY2VzIiwiYWxsIiwic2VsZWN0ZWRQZXJzaXN0ZW5jZSIsInVzZXJUb01pZ3JhdGUiLCJtaWdyYXRpb25IaWVyYXJjaHkiLCJwIiwiX3Nob3VsZEFsbG93TWlncmF0aW9uIiwiX2dldEJyb3dzZXJOYW1lIiwidXNlckFnZW50IiwidWEiLCJpbmNsdWRlcyIsIl9pc0lFTW9iaWxlIiwiX2lzRmlyZWZveCIsIl9pc0JsYWNrQmVycnkiLCJfaXNXZWJPUyIsIl9pc1NhZmFyaSIsIl9pc0Nocm9tZUlPUyIsIl9pc0FuZHJvaWQiLCJyZSIsIm1hdGNoZXMiLCJtYXRjaCIsImdldFVBIiwidGVzdCIsIl9pc0lPUyIsIl9pc0lPUzdPcjgiLCJfaXNJT1NTdGFuZGFsb25lIiwid2luZG93Iiwic3RhbmRhbG9uZSIsIl9pc0lFMTAiLCJpc0lFIiwiZG9jdW1lbnQiLCJkb2N1bWVudE1vZGUiLCJfaXNNb2JpbGVCcm93c2VyIiwiX2lzSWZyYW1lIiwidG9wIiwiX2dldENsaWVudFZlcnNpb24iLCJjbGllbnRQbGF0Zm9ybSIsImZyYW1ld29ya3MiLCJyZXBvcnRlZFBsYXRmb3JtIiwicmVwb3J0ZWRGcmFtZXdvcmtzIiwiam9pbiIsIkF1dGhNaWRkbGV3YXJlUXVldWUiLCJxdWV1ZSIsInB1c2hDYWxsYmFjayIsIm9uQWJvcnQiLCJ3cmFwcGVkQ2FsbGJhY2siLCJyZXNvbHZlIiwicmVzdWx0IiwicHVzaCIsImluZGV4IiwicnVuTWlkZGxld2FyZSIsIm5leHRVc2VyIiwib25BYm9ydFN0YWNrIiwiYmVmb3JlU3RhdGVDYWxsYmFjayIsInJldmVyc2UiLCJvcmlnaW5hbE1lc3NhZ2UiLCJBdXRoSW1wbCIsImhlYXJ0YmVhdFNlcnZpY2VQcm92aWRlciIsImVtdWxhdG9yQ29uZmlnIiwib3BlcmF0aW9ucyIsImF1dGhTdGF0ZVN1YnNjcmlwdGlvbiIsIlN1YnNjcmlwdGlvbiIsImlkVG9rZW5TdWJzY3JpcHRpb24iLCJiZWZvcmVTdGF0ZVF1ZXVlIiwicmVkaXJlY3RVc2VyIiwiaXNQcm9hY3RpdmVSZWZyZXNoRW5hYmxlZCIsIl9pc0luaXRpYWxpemVkIiwiX2RlbGV0ZWQiLCJfaW5pdGlhbGl6YXRpb25Qcm9taXNlIiwiX3BvcHVwUmVkaXJlY3RSZXNvbHZlciIsImxhc3ROb3RpZmllZFVpZCIsInNldHRpbmdzIiwiYXBwVmVyaWZpY2F0aW9uRGlzYWJsZWRGb3JUZXN0aW5nIiwiY2xpZW50VmVyc2lvbiIsInNka0NsaWVudFZlcnNpb24iLCJwZXJzaXN0ZW5jZU1hbmFnZXIiLCJfc2hvdWxkSW5pdFByb2FjdGl2ZWx5IiwiX2luaXRpYWxpemUiLCJpbml0aWFsaXplQ3VycmVudFVzZXIiLCJhc3NlcnRlZFBlcnNpc3RlbmNlIiwiX2N1cnJlbnRVc2VyIiwiX3VwZGF0ZUN1cnJlbnRVc2VyIiwicHJldmlvdXNseVN0b3JlZFVzZXIiLCJmdXR1cmVDdXJyZW50VXNlciIsIm5lZWRzVG9jaGVja01pZGRsZXdhcmUiLCJhdXRoRG9tYWluIiwiZ2V0T3JJbml0UmVkaXJlY3RQZXJzaXN0ZW5jZU1hbmFnZXIiLCJyZWRpcmVjdFVzZXJFdmVudElkIiwic3RvcmVkVXNlckV2ZW50SWQiLCJ0cnlSZWRpcmVjdFNpZ25JbiIsImRpcmVjdGx5U2V0Q3VycmVudFVzZXIiLCJfb3ZlcnJpZGVSZWRpcmVjdFJlc3VsdCIsInJlbG9hZEFuZFNldEN1cnJlbnRVc2VyT3JDbGVhciIsInJlZGlyZWN0UmVzb2x2ZXIiLCJfY29tcGxldGVSZWRpcmVjdEZuIiwiX3NldFJlZGlyZWN0VXNlciIsIl9kZWxldGUiLCJ1c2VyRXh0ZXJuIiwic2tpcEJlZm9yZVN0YXRlQ2FsbGJhY2tzIiwibm90aWZ5QXV0aExpc3RlbmVycyIsInJlZGlyZWN0UGVyc2lzdGVuY2VNYW5hZ2VyIiwiX2dldFBlcnNpc3RlbmNlIiwibmV4dE9yT2JzZXJ2ZXIiLCJjb21wbGV0ZWQiLCJyZWdpc3RlclN0YXRlTGlzdGVuZXIiLCJyZWRpcmVjdE1hbmFnZXIiLCJyZXNvbHZlciIsIl9yZWRpcmVjdFBlcnNpc3RlbmNlIiwiX3JlZGlyZWN0VXNlckZvcklkIiwiaWQiLCJuZXh0IiwiY3VycmVudFVpZCIsInN1YnNjcmlwdGlvbiIsImNiIiwidGhlbiIsImFkZE9ic2VydmVyIiwiYWN0aW9uIiwiX2xvZ0ZyYW1ld29yayIsImZyYW1ld29yayIsInNvcnQiLCJfZ2V0RnJhbWV3b3JrcyIsImFwcElkIiwiaGVhcnRiZWF0c0hlYWRlciIsIm9wdGlvbmFsIiwiZ2V0SGVhcnRiZWF0c0hlYWRlciIsIl9jYXN0QXV0aCIsIm9ic2VydmVyIiwiY3JlYXRlU3Vic2NyaWJlIiwiYXV0aEludGVybmFsIiwiZGlzYWJsZVdhcm5pbmdzIiwiZXh0cmFjdFByb3RvY29sIiwicG9ydCIsImV4dHJhY3RIb3N0QW5kUG9ydCIsInBvcnRTdHIiLCJmcmVlemUiLCJlbWl0RW11bGF0b3JXYXJuaW5nIiwicHJvdG9jb2xFbmQiLCJpbmRleE9mIiwic3Vic3RyIiwiYXV0aG9yaXR5IiwiZXhlYyIsImhvc3RBbmRQb3J0IiwicG9wIiwiYnJhY2tldGVkSVB2NiIsInBhcnNlUG9ydCIsImF0dGFjaEJhbm5lciIsImVsIiwiY3JlYXRlRWxlbWVudCIsInN0eSIsInN0eWxlIiwiaW5uZXJUZXh0IiwicG9zaXRpb24iLCJ3aWR0aCIsImJhY2tncm91bmRDb2xvciIsImJvcmRlciIsImNvbG9yIiwiYm90dG9tIiwibGVmdCIsIm1hcmdpbiIsInpJbmRleCIsInRleHRBbGlnbiIsImNsYXNzTGlzdCIsImFkZCIsImFwcGVuZENoaWxkIiwiY29uc29sZSIsImluZm8iLCJyZWFkeVN0YXRlIiwiYWRkRXZlbnRMaXN0ZW5lciIsInNpZ25Jbk1ldGhvZCIsIl9nZXRJZFRva2VuUmVzcG9uc2UiLCJfYXV0aCIsIl9saW5rVG9JZFRva2VuIiwiX2lkVG9rZW4iLCJfZ2V0UmVhdXRoZW50aWNhdGlvblJlc29sdmVyIiwicmVzZXRQYXNzd29yZCIsInVwZGF0ZUVtYWlsUGFzc3dvcmQiLCJhcHBseUFjdGlvbkNvZGUkMSIsInNpZ25JbldpdGhQYXNzd29yZCIsInNlbmRPb2JDb2RlIiwic2VuZEVtYWlsVmVyaWZpY2F0aW9uJDEiLCJzZW5kUGFzc3dvcmRSZXNldEVtYWlsJDEiLCJzZW5kU2lnbkluTGlua1RvRW1haWwkMSIsInZlcmlmeUFuZENoYW5nZUVtYWlsIiwic2lnbkluV2l0aEVtYWlsTGluayQxIiwic2lnbkluV2l0aEVtYWlsTGlua0ZvckxpbmtpbmciLCJfZW1haWwiLCJfcGFzc3dvcmQiLCJfdGVuYW50SWQiLCJfZnJvbUVtYWlsQW5kUGFzc3dvcmQiLCJwYXNzd29yZCIsIl9mcm9tRW1haWxBbmRDb2RlIiwib29iQ29kZSIsIm9iaiIsInJldHVyblNlY3VyZVRva2VuIiwic2lnbkluV2l0aElkcCIsIklEUF9SRVFVRVNUX1VSSSQxIiwicGVuZGluZ1Rva2VuIiwiX2Zyb21QYXJhbXMiLCJjcmVkIiwibm9uY2UiLCJvYXV0aFRva2VuIiwib2F1dGhUb2tlblNlY3JldCIsInNlY3JldCIsImJ1aWxkUmVxdWVzdCIsImF1dG9DcmVhdGUiLCJyZXF1ZXN0VXJpIiwicG9zdEJvZHkiLCJzZW5kUGhvbmVWZXJpZmljYXRpb25Db2RlIiwic2lnbkluV2l0aFBob25lTnVtYmVyJDEiLCJsaW5rV2l0aFBob25lTnVtYmVyJDEiLCJ0ZW1wb3JhcnlQcm9vZiIsIlZFUklGWV9QSE9ORV9OVU1CRVJfRk9SX0VYSVNUSU5HX0VSUk9SX01BUF8iLCJ2ZXJpZnlQaG9uZU51bWJlckZvckV4aXN0aW5nIiwiYXBpUmVxdWVzdCIsIm9wZXJhdGlvbiIsIl9mcm9tVmVyaWZpY2F0aW9uIiwidmVyaWZpY2F0aW9uSWQiLCJ2ZXJpZmljYXRpb25Db2RlIiwiX2Zyb21Ub2tlblJlc3BvbnNlIiwiX21ha2VWZXJpZmljYXRpb25SZXF1ZXN0Iiwic2Vzc2lvbkluZm8iLCJwYXJzZU1vZGUiLCJtb2RlIiwicGFyc2VEZWVwTGluayIsImxpbmsiLCJxdWVyeXN0cmluZ0RlY29kZSIsImV4dHJhY3RRdWVyeXN0cmluZyIsImRvdWJsZURlZXBMaW5rIiwiaU9TRGVlcExpbmsiLCJpT1NEb3VibGVEZWVwTGluayIsImFjdGlvbkxpbmsiLCJzZWFyY2hQYXJhbXMiLCJjb250aW51ZVVybCIsInBhcnNlTGluayIsIlBST1ZJREVSX0lEIiwiY3JlZGVudGlhbCIsImNyZWRlbnRpYWxXaXRoTGluayIsImVtYWlsTGluayIsImFjdGlvbkNvZGVVcmwiLCJFTUFJTF9QQVNTV09SRF9TSUdOX0lOX01FVEhPRCIsIkVNQUlMX0xJTktfU0lHTl9JTl9NRVRIT0QiLCJGZWRlcmF0ZWRBdXRoUHJvdmlkZXIiLCJkZWZhdWx0TGFuZ3VhZ2VDb2RlIiwiY3VzdG9tUGFyYW1ldGVycyIsInNldERlZmF1bHRMYW5ndWFnZSIsInNldEN1c3RvbVBhcmFtZXRlcnMiLCJjdXN0b21PQXV0aFBhcmFtZXRlcnMiLCJnZXRDdXN0b21QYXJhbWV0ZXJzIiwiQmFzZU9BdXRoUHJvdmlkZXIiLCJzY29wZXMiLCJhZGRTY29wZSIsInNjb3BlIiwiZ2V0U2NvcGVzIiwiY3JlZGVudGlhbEZyb21KU09OIiwiX2NyZWRlbnRpYWwiLCJyYXdOb25jZSIsImNyZWRlbnRpYWxGcm9tUmVzdWx0IiwidXNlckNyZWRlbnRpYWwiLCJvYXV0aENyZWRlbnRpYWxGcm9tVGFnZ2VkT2JqZWN0IiwiY3JlZGVudGlhbEZyb21FcnJvciIsInRva2VuUmVzcG9uc2UiLCJvYXV0aElkVG9rZW4iLCJvYXV0aEFjY2Vzc1Rva2VuIiwiRkFDRUJPT0tfU0lHTl9JTl9NRVRIT0QiLCJjcmVkZW50aWFsRnJvbVRhZ2dlZE9iamVjdCIsIkdPT0dMRV9TSUdOX0lOX01FVEhPRCIsIkdJVEhVQl9TSUdOX0lOX01FVEhPRCIsIklEUF9SRVFVRVNUX1VSSSIsIlNBTUxBdXRoQ3JlZGVudGlhbCIsIl9jcmVhdGUiLCJTQU1MX1BST1ZJREVSX1BSRUZJWCIsInNhbWxDcmVkZW50aWFsRnJvbVRhZ2dlZE9iamVjdCIsIlRXSVRURVJfU0lHTl9JTl9NRVRIT0QiLCJzaWduVXAiLCJVc2VyQ3JlZGVudGlhbEltcGwiLCJvcGVyYXRpb25UeXBlIiwicHJvdmlkZXJJZEZvclJlc3BvbnNlIiwidXNlckNyZWQiLCJfZm9yT3BlcmF0aW9uIiwiTXVsdGlGYWN0b3JFcnJvciIsInNldFByb3RvdHlwZU9mIiwicHJvdG90eXBlIiwiX2Zyb21FcnJvckFuZE9wZXJhdGlvbiIsIl9wcm9jZXNzQ3JlZGVudGlhbFNhdmluZ01mYUNvbnRleHRJZk5lY2Vzc2FyeSIsImlkVG9rZW5Qcm92aWRlciIsImNhdGNoIiwicHJvdmlkZXJEYXRhQXNOYW1lcyIsIlNldCIsInBpZCIsIl9hc3NlcnRMaW5rZWRTdGF0dXMiLCJkZWxldGVQcm92aWRlciIsInByb3ZpZGVyc0xlZnQiLCJwZCIsImhhcyIsIl9saW5rJDEiLCJleHBlY3RlZCIsInByb3ZpZGVySWRzIiwiX3JlYXV0aGVudGljYXRlIiwicGFyc2VkIiwic3ViIiwiX3NpZ25JbldpdGhDcmVkZW50aWFsIiwic2lnbkluV2l0aEN1c3RvbVRva2VuJDEiLCJjdXN0b21Ub2tlbiIsIk11bHRpRmFjdG9ySW5mb0ltcGwiLCJmYWN0b3JJZCIsIm1mYUVucm9sbG1lbnRJZCIsImVucm9sbG1lbnRUaW1lIiwiZW5yb2xsZWRBdCIsIl9mcm9tU2VydmVyUmVzcG9uc2UiLCJlbnJvbGxtZW50IiwiUGhvbmVNdWx0aUZhY3RvckluZm9JbXBsIiwicGhvbmVJbmZvIiwiX3NldEFjdGlvbkNvZGVTZXR0aW5nc09uUmVxdWVzdCIsImFjdGlvbkNvZGVTZXR0aW5ncyIsImR5bmFtaWNMaW5rRG9tYWluIiwiY2FuSGFuZGxlQ29kZUluQXBwIiwiaGFuZGxlQ29kZUluQXBwIiwiaU9TIiwiYnVuZGxlSWQiLCJpT1NCdW5kbGVJZCIsImFuZHJvaWQiLCJwYWNrYWdlTmFtZSIsImFuZHJvaWRJbnN0YWxsQXBwIiwiaW5zdGFsbEFwcCIsImFuZHJvaWRNaW5pbXVtVmVyc2lvbkNvZGUiLCJtaW5pbXVtVmVyc2lvbiIsImFuZHJvaWRQYWNrYWdlTmFtZSIsImF1dGhNb2R1bGFyIiwicmVxdWVzdFR5cGUiLCJuZXdQYXNzd29yZCIsIm5ld0VtYWlsIiwibWZhSW5mbyIsIm11bHRpRmFjdG9ySW5mbyIsImRhdGEiLCJwcmV2aW91c0VtYWlsIiwiY3JlYXRlQXV0aFVyaSIsImNvbnRpbnVlVXJpIiwiaWRlbnRpZmllciIsInNpZ25pbk1ldGhvZHMiLCJ1cGRhdGVQcm9maWxlJDEiLCJwcm9maWxlUmVxdWVzdCIsInBhc3N3b3JkUHJvdmlkZXIiLCJmaW5kIiwidXBkYXRlRW1haWxPclBhc3N3b3JkIiwicHJvZmlsZSIsInJhd1VzZXJJbmZvIiwiaXNOZXdVc2VyIiwia2luZCIsImZpbHRlcmVkUHJvdmlkZXJJZCIsIkdlbmVyaWNBZGRpdGlvbmFsVXNlckluZm8iLCJGYWNlYm9va0FkZGl0aW9uYWxVc2VySW5mbyIsIkdpdGh1YkFkZGl0aW9uYWxVc2VySW5mbyIsIkdvb2dsZUFkZGl0aW9uYWxVc2VySW5mbyIsIlR3aXR0ZXJBZGRpdGlvbmFsVXNlckluZm8iLCJzY3JlZW5OYW1lIiwiRmVkZXJhdGVkQWRkaXRpb25hbFVzZXJJbmZvV2l0aFVzZXJuYW1lIiwidXNlcm5hbWUiLCJsb2dpbiIsIk11bHRpRmFjdG9yU2Vzc2lvbkltcGwiLCJfZnJvbUlkdG9rZW4iLCJfZnJvbU1mYVBlbmRpbmdDcmVkZW50aWFsIiwibWZhUGVuZGluZ0NyZWRlbnRpYWwiLCJtdWx0aUZhY3RvclNlc3Npb24iLCJwZW5kaW5nQ3JlZGVudGlhbCIsIk11bHRpRmFjdG9yUmVzb2x2ZXJJbXBsIiwic2Vzc2lvbiIsImhpbnRzIiwic2lnbkluUmVzb2x2ZXIiLCJfZnJvbUVycm9yIiwiYXV0aEV4dGVybiIsIm1mYVJlc3BvbnNlIiwiX3Byb2Nlc3MiLCJyZXNvbHZlU2lnbkluIiwiYXNzZXJ0aW9uRXh0ZXJuIiwiZXJyb3JJbnRlcm5hbCIsInN0YXJ0RW5yb2xsUGhvbmVNZmEiLCJmaW5hbGl6ZUVucm9sbFBob25lTWZhIiwid2l0aGRyYXdNZmEiLCJNdWx0aUZhY3RvclVzZXJJbXBsIiwiZW5yb2xsZWRGYWN0b3JzIiwiX2Zyb21Vc2VyIiwiZ2V0U2Vzc2lvbiIsImVucm9sbCIsImZpbmFsaXplTWZhUmVzcG9uc2UiLCJ1bmVucm9sbCIsImluZm9PclVpZCIsIm11bHRpRmFjdG9yVXNlckNhY2hlIiwiV2Vha01hcCIsInVzZXJNb2R1bGFyIiwiU1RPUkFHRV9BVkFJTEFCTEVfS0VZIiwiQnJvd3NlclBlcnNpc3RlbmNlQ2xhc3MiLCJzdG9yYWdlUmV0cmlldmVyIiwic2V0SXRlbSIsInJlbW92ZUl0ZW0iLCJnZXRJdGVtIiwiX2lmcmFtZUNhbm5vdFN5bmNXZWJTdG9yYWdlIiwiX1BPTExJTkdfSU5URVJWQUxfTVMkMSIsIklFMTBfTE9DQUxfU1RPUkFHRV9TWU5DX0RFTEFZIiwiQnJvd3NlckxvY2FsUGVyc2lzdGVuY2UiLCJsb2NhbFN0b3JhZ2UiLCJldmVudCIsInBvbGwiLCJvblN0b3JhZ2VFdmVudCIsImxpc3RlbmVycyIsImxvY2FsQ2FjaGUiLCJwb2xsVGltZXIiLCJzYWZhcmlMb2NhbFN0b3JhZ2VOb3RTeW5jZWQiLCJmYWxsYmFja1RvUG9sbGluZyIsImZvckFsbENoYW5nZWRLZXlzIiwia2V5cyIsIm5ld1ZhbHVlIiwib2xkVmFsdWUiLCJrZXkyIiwiX29sZFZhbHVlIiwibm90aWZ5TGlzdGVuZXJzIiwiZGV0YWNoTGlzdGVuZXIiLCJzdG9wUG9sbGluZyIsInN0b3JlZFZhbHVlMiIsInRyaWdnZXJMaXN0ZW5lcnMiLCJzdG9yZWRWYWx1ZSIsImxpc3RlbmVyIiwiZnJvbSIsInN0YXJ0UG9sbGluZyIsInNldEludGVydmFsIiwiU3RvcmFnZUV2ZW50IiwiY2xlYXJJbnRlcnZhbCIsImF0dGFjaExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInNpemUiLCJCcm93c2VyU2Vzc2lvblBlcnNpc3RlbmNlIiwic2Vzc2lvblN0b3JhZ2UiLCJfYWxsU2V0dGxlZCIsInByb21pc2VzIiwiZnVsZmlsbGVkIiwicmVhc29uIiwiUmVjZWl2ZXIiLCJldmVudFRhcmdldCIsImhhbmRsZXJzTWFwIiwiaGFuZGxlRXZlbnQiLCJleGlzdGluZ0luc3RhbmNlIiwicmVjZWl2ZXJzIiwicmVjZWl2ZXIiLCJpc0xpc3RlbmluZ3RvIiwibmV3SW5zdGFuY2UiLCJtZXNzYWdlRXZlbnQiLCJldmVudElkIiwiZXZlbnRUeXBlIiwiaGFuZGxlcnMiLCJwb3J0cyIsInBvc3RNZXNzYWdlIiwic3RhdHVzIiwiaGFuZGxlciIsIm9yaWdpbiIsIl9zdWJzY3JpYmUiLCJldmVudEhhbmRsZXIiLCJfdW5zdWJzY3JpYmUiLCJfZ2VuZXJhdGVFdmVudElkIiwicHJlZml4IiwiZGlnaXRzIiwicmFuZG9tIiwiaSIsImZsb29yIiwiU2VuZGVyIiwidGFyZ2V0IiwicmVtb3ZlTWVzc2FnZUhhbmRsZXIiLCJtZXNzYWdlQ2hhbm5lbCIsInBvcnQxIiwib25NZXNzYWdlIiwiY2xvc2UiLCJfc2VuZCIsInRpbWVvdXQiLCJNZXNzYWdlQ2hhbm5lbCIsImNvbXBsZXRpb25UaW1lciIsInN0YXJ0IiwiYWNrVGltZXIiLCJwb3J0MiIsImZpbmFsbHkiLCJfd2luZG93IiwiX3NldFdpbmRvd0xvY2F0aW9uIiwiX2lzV29ya2VyIiwiX2dldEFjdGl2ZVNlcnZpY2VXb3JrZXIiLCJzZXJ2aWNlV29ya2VyIiwicmVnaXN0cmF0aW9uIiwicmVhZHkiLCJhY3RpdmUiLCJfZ2V0U2VydmljZVdvcmtlckNvbnRyb2xsZXIiLCJjb250cm9sbGVyIiwiX2dldFdvcmtlckdsb2JhbFNjb3BlIiwiREJfTkFNRSIsIkRCX1ZFUlNJT04iLCJEQl9PQkpFQ1RTVE9SRV9OQU1FIiwiREJfREFUQV9LRVlQQVRIIiwiREJQcm9taXNlIiwidG9Qcm9taXNlIiwiZ2V0T2JqZWN0U3RvcmUiLCJkYiIsImlzUmVhZFdyaXRlIiwidHJhbnNhY3Rpb24iLCJvYmplY3RTdG9yZSIsIl9kZWxldGVEYXRhYmFzZSIsImluZGV4ZWREQiIsImRlbGV0ZURhdGFiYXNlIiwiX29wZW5EYXRhYmFzZSIsIm9wZW4iLCJjcmVhdGVPYmplY3RTdG9yZSIsImtleVBhdGgiLCJvYmplY3RTdG9yZU5hbWVzIiwiY29udGFpbnMiLCJfcHV0T2JqZWN0IiwicHV0IiwiZ2V0T2JqZWN0IiwiX2RlbGV0ZU9iamVjdCIsIl9QT0xMSU5HX0lOVEVSVkFMX01TIiwiX1RSQU5TQUNUSU9OX1JFVFJZX0NPVU5UIiwiSW5kZXhlZERCTG9jYWxQZXJzaXN0ZW5jZSIsInBlbmRpbmdXcml0ZXMiLCJzZW5kZXIiLCJzZXJ2aWNlV29ya2VyUmVjZWl2ZXJBdmFpbGFibGUiLCJhY3RpdmVTZXJ2aWNlV29ya2VyIiwiX3dvcmtlckluaXRpYWxpemF0aW9uUHJvbWlzZSIsImluaXRpYWxpemVTZXJ2aWNlV29ya2VyTWVzc2FnaW5nIiwiX29wZW5EYiIsIl93aXRoUmV0cmllcyIsIm9wIiwibnVtQXR0ZW1wdHMiLCJpbml0aWFsaXplUmVjZWl2ZXIiLCJpbml0aWFsaXplU2VuZGVyIiwiX29yaWdpbiIsIl9wb2xsIiwia2V5UHJvY2Vzc2VkIiwiX2RhdGEiLCJyZXN1bHRzIiwibm90aWZ5U2VydmljZVdvcmtlciIsIl93aXRoUGVuZGluZ1dyaXRlIiwid3JpdGUiLCJnZXRBbGxSZXF1ZXN0IiwiZ2V0QWxsIiwia2V5c0luUmVzdWx0IiwiZmJhc2Vfa2V5IiwibG9jYWxLZXkiLCJzdGFydFNpZ25JblBob25lTWZhIiwiZmluYWxpemVTaWduSW5QaG9uZU1mYSIsImdldFJlY2FwdGNoYVBhcmFtcyIsInJlY2FwdGNoYVNpdGVLZXkiLCJnZXRTY3JpcHRQYXJlbnRFbGVtZW50IiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJfbG9hZEpTIiwic2V0QXR0cmlidXRlIiwib25sb2FkIiwib25lcnJvciIsImNoYXJzZXQiLCJfZ2VuZXJhdGVDYWxsYmFja05hbWUiLCJfU09MVkVfVElNRV9NUyIsIl9FWFBJUkFUSU9OX1RJTUVfTVMiLCJfV0lER0VUX0lEX1NUQVJUIiwiTW9ja1JlQ2FwdGNoYSIsImNvdW50ZXIiLCJfd2lkZ2V0cyIsInJlbmRlciIsImNvbnRhaW5lciIsInBhcmFtZXRlcnMiLCJNb2NrV2lkZ2V0IiwicmVzZXQiLCJvcHRXaWRnZXRJZCIsImdldFJlc3BvbnNlIiwiZXhlY3V0ZSIsImNvbnRhaW5lck9ySWQiLCJkZWxldGVkIiwicmVzcG9uc2VUb2tlbiIsImNsaWNrSGFuZGxlciIsImdldEVsZW1lbnRCeUlkIiwiaXNWaXNpYmxlIiwiY2hlY2tJZkRlbGV0ZWQiLCJnZW5lcmF0ZVJhbmRvbUFscGhhTnVtZXJpY1N0cmluZyIsImV4cGlyZWRDYWxsYmFjayIsImxlbiIsImNoYXJzIiwiYWxsb3dlZENoYXJzIiwiY2hhckF0IiwiX0pTTE9BRF9DQUxMQkFDSyIsIk5FVFdPUktfVElNRU9VVF9ERUxBWSIsIlJFQ0FQVENIQV9CQVNFIiwiUmVDYXB0Y2hhTG9hZGVySW1wbCIsImhvc3RMYW5ndWFnZSIsImxpYnJhcnlTZXBhcmF0ZWx5TG9hZGVkIiwiZ3JlY2FwdGNoYSIsImxvYWQiLCJobCIsImlzSG9zdExhbmd1YWdlVmFsaWQiLCJzaG91bGRSZXNvbHZlSW1tZWRpYXRlbHkiLCJyZWNhcHRjaGEiLCJ3aWRnZXRJZCIsImNsZWFyZWRPbmVJbnN0YW5jZSIsIk1vY2tSZUNhcHRjaGFMb2FkZXJJbXBsIiwiUkVDQVBUQ0hBX1ZFUklGSUVSX1RZUEUiLCJERUZBVUxUX1BBUkFNUyIsInRoZW1lIiwiZGVzdHJveWVkIiwidG9rZW5DaGFuZ2VMaXN0ZW5lcnMiLCJyZW5kZXJQcm9taXNlIiwiaXNJbnZpc2libGUiLCJtYWtlVG9rZW5DYWxsYmFjayIsIl9yZWNhcHRjaGFMb2FkZXIiLCJ2YWxpZGF0ZVN0YXJ0aW5nU3RhdGUiLCJ2ZXJpZnkiLCJhc3NlcnROb3REZXN0cm95ZWQiLCJnZXRBc3NlcnRlZFJlY2FwdGNoYSIsInRva2VuQ2hhbmdlIiwibWFrZVJlbmRlclByb21pc2UiLCJfcmVzZXQiLCJjbGVhciIsImNoaWxkTm9kZXMiLCJmb3JFYWNoIiwibm9kZSIsInJlbW92ZUNoaWxkIiwic2l0ZWtleSIsImhhc0NoaWxkTm9kZXMiLCJleGlzdGluZyIsImdsb2JhbEZ1bmMiLCJpbml0IiwiZ3VhcmFudGVlZEVtcHR5IiwiZG9tUmVhZHkiLCJzaXRlS2V5IiwiQ29uZmlybWF0aW9uUmVzdWx0SW1wbCIsIm9uQ29uZmlybWF0aW9uIiwiY29uZmlybSIsImF1dGhDcmVkZW50aWFsIiwiYXBwVmVyaWZpZXIiLCJfdmVyaWZ5UGhvbmVOdW1iZXIiLCJ2ZXJpZmllciIsInJlY2FwdGNoYVRva2VuIiwicGhvbmVJbmZvT3B0aW9ucyIsInBob25lRW5yb2xsbWVudEluZm8iLCJwaG9uZVNlc3Npb25JbmZvIiwibXVsdGlGYWN0b3JIaW50IiwibXVsdGlGYWN0b3JVaWQiLCJwaG9uZVNpZ25JbkluZm8iLCJwaG9uZVJlc3BvbnNlSW5mbyIsInZlcmlmeVBob25lTnVtYmVyIiwicGhvbmVPcHRpb25zIiwiYXBwbGljYXRpb25WZXJpZmllciIsIlBIT05FX1NJR05fSU5fTUVUSE9EIiwiX3dpdGhEZWZhdWx0UmVzb2x2ZXIiLCJyZXNvbHZlck92ZXJyaWRlIiwiSWRwQ3JlZGVudGlhbCIsIl9idWlsZElkcFJlcXVlc3QiLCJzZXNzaW9uSWQiLCJyZXR1cm5JZHBDcmVkZW50aWFsIiwiX3NpZ25JbiIsIl9yZWF1dGgiLCJfbGluayIsIkFic3RyYWN0UG9wdXBSZWRpcmVjdE9wZXJhdGlvbiIsInBlbmRpbmdQcm9taXNlIiwiZXZlbnRNYW5hZ2VyIiwib25FeGVjdXRpb24iLCJyZWdpc3RlckNvbnN1bWVyIiwib25BdXRoRXZlbnQiLCJ1cmxSZXNwb25zZSIsImdldElkcFRhc2siLCJvbkVycm9yIiwidW5yZWdpc3RlckFuZENsZWFuVXAiLCJ1bnJlZ2lzdGVyQ29uc3VtZXIiLCJjbGVhblVwIiwiX1BPTExfV0lORE9XX0NMT1NFX1RJTUVPVVQiLCJyZXNvbHZlckludGVybmFsIiwiUG9wdXBPcGVyYXRpb24iLCJleGVjdXRlTm90TnVsbCIsImF1dGhXaW5kb3ciLCJwb2xsSWQiLCJjdXJyZW50UG9wdXBBY3Rpb24iLCJjYW5jZWwiLCJfb3BlblBvcHVwIiwiYXNzb2NpYXRlZEV2ZW50IiwiX29yaWdpblZhbGlkYXRpb24iLCJfaXNJZnJhbWVXZWJTdG9yYWdlU3VwcG9ydGVkIiwiaXNTdXBwb3J0ZWQiLCJwb2xsVXNlckNhbmNlbGxhdGlvbiIsImNsb3NlZCIsIlBFTkRJTkdfUkVESVJFQ1RfS0VZIiwicmVkaXJlY3RPdXRjb21lTWFwIiwiUmVkaXJlY3RBY3Rpb24iLCJyZWFkeU91dGNvbWUiLCJoYXNQZW5kaW5nUmVkaXJlY3QiLCJfZ2V0QW5kQ2xlYXJQZW5kaW5nUmVkaXJlY3RTdGF0dXMiLCJwZW5kaW5nUmVkaXJlY3RLZXkiLCJyZXNvbHZlclBlcnNpc3RlbmNlIiwiX3NldFBlbmRpbmdSZWRpcmVjdFN0YXR1cyIsIl9jbGVhclJlZGlyZWN0T3V0Y29tZXMiLCJfc2lnbkluV2l0aFJlZGlyZWN0IiwiX29wZW5SZWRpcmVjdCIsIl9yZWF1dGhlbnRpY2F0ZVdpdGhSZWRpcmVjdCIsInByZXBhcmVVc2VyRm9yUmVkaXJlY3QiLCJfbGlua1dpdGhSZWRpcmVjdCIsIl9nZXRSZWRpcmVjdFJlc3VsdCIsInJlc29sdmVyRXh0ZXJuIiwiRVZFTlRfRFVQTElDQVRJT05fQ0FDSEVfRFVSQVRJT05fTVMiLCJBdXRoRXZlbnRNYW5hZ2VyIiwiY2FjaGVkRXZlbnRVaWRzIiwiY29uc3VtZXJzIiwicXVldWVkUmVkaXJlY3RFdmVudCIsImhhc0hhbmRsZWRQb3RlbnRpYWxSZWRpcmVjdCIsImxhc3RQcm9jZXNzZWRFdmVudFRpbWUiLCJhdXRoRXZlbnRDb25zdW1lciIsImlzRXZlbnRGb3JDb25zdW1lciIsInNlbmRUb0NvbnN1bWVyIiwic2F2ZUV2ZW50VG9DYWNoZSIsIm9uRXZlbnQiLCJoYXNFdmVudEJlZW5IYW5kbGVkIiwiaGFuZGxlZCIsImNvbnN1bWVyIiwiaXNSZWRpcmVjdEV2ZW50IiwiaXNOdWxsUmVkaXJlY3RFdmVudCIsImV2ZW50SWRNYXRjaGVzIiwiZXZlbnRVaWQiLCJ2IiwiX2dldFByb2plY3RDb25maWciLCJJUF9BRERSRVNTX1JFR0VYIiwiSFRUUF9SRUdFWCIsIl92YWxpZGF0ZU9yaWdpbiIsImF1dGhvcml6ZWREb21haW5zIiwiZG9tYWluIiwibWF0Y2hEb21haW4iLCJjdXJyZW50VXJsIiwiaG9zdG5hbWUiLCJVUkwiLCJjZVVybCIsImVzY2FwZWREb21haW5QYXR0ZXJuIiwiUmVnRXhwIiwiTkVUV09SS19USU1FT1VUIiwicmVzZXRVbmxvYWRlZEdhcGlNb2R1bGVzIiwiYmVhY29uIiwiX19fanNsIiwiSCIsImhpbnQiLCJyIiwiTCIsIkNQIiwibG9hZEdhcGkiLCJsb2FkR2FwaUlmcmFtZSIsImdhcGkiLCJpZnJhbWVzIiwiZ2V0Q29udGV4dCIsIm9udGltZW91dCIsIklmcmFtZSIsImNiTmFtZSIsImNhY2hlZEdBcGlMb2FkZXIiLCJfbG9hZEdhcGkiLCJQSU5HX1RJTUVPVVQiLCJJRlJBTUVfUEFUSCIsIkVNVUxBVEVEX0lGUkFNRV9QQVRIIiwiSUZSQU1FX0FUVFJJQlVURVMiLCJoZWlnaHQiLCJ0YWJpbmRleCIsIkVJRF9GUk9NX0FQSUhPU1QiLCJnZXRJZnJhbWVVcmwiLCJlaWQiLCJmdyIsIl9vcGVuSWZyYW1lIiwiY29udGV4dCIsImdhcGkyIiwid2hlcmUiLCJtZXNzYWdlSGFuZGxlcnNGaWx0ZXIiLCJDUk9TU19PUklHSU5fSUZSQU1FU19GSUxURVIiLCJhdHRyaWJ1dGVzIiwiZG9udGNsZWFyIiwiaWZyYW1lIiwicmVzdHlsZSIsInNldEhpZGVPbkxlYXZlIiwibmV0d29ya0Vycm9yIiwibmV0d29ya0Vycm9yVGltZXIiLCJjbGVhclRpbWVyQW5kUmVzb2x2ZSIsInBpbmciLCJCQVNFX1BPUFVQX09QVElPTlMiLCJyZXNpemFibGUiLCJzdGF0dXNiYXIiLCJ0b29sYmFyIiwiREVGQVVMVF9XSURUSCIsIkRFRkFVTFRfSEVJR0hUIiwiVEFSR0VUX0JMQU5LIiwiRklSRUZPWF9FTVBUWV9VUkwiLCJBdXRoUG9wdXAiLCJ3aW5kb3cyIiwiX29wZW4iLCJzY3JlZW4iLCJhdmFpbEhlaWdodCIsImF2YWlsV2lkdGgiLCJzY3JvbGxiYXJzIiwib3B0aW9uc1N0cmluZyIsImVudHJpZXMiLCJyZWR1Y2UiLCJhY2N1bSIsIm9wZW5Bc05ld1dpbmRvd0lPUyIsIm5ld1dpbiIsImZvY3VzIiwiY2xpY2siLCJjcmVhdGVFdmVudCIsImluaXRNb3VzZUV2ZW50IiwiZGlzcGF0Y2hFdmVudCIsIldJREdFVF9QQVRIIiwiRU1VTEFUT1JfV0lER0VUX1BBVEgiLCJfZ2V0UmVkaXJlY3RVcmwiLCJhdXRoVHlwZSIsInJlZGlyZWN0VXJsIiwiYWRkaXRpb25hbFBhcmFtcyIsImlzRW1wdHkiLCJ0aWQiLCJwYXJhbXNEaWN0IiwiZ2V0SGFuZGxlckJhc2UiLCJXRUJfU1RPUkFHRV9TVVBQT1JUX0tFWSIsIkJyb3dzZXJQb3B1cFJlZGlyZWN0UmVzb2x2ZXIiLCJldmVudE1hbmFnZXJzIiwib3JpZ2luVmFsaWRhdGlvblByb21pc2VzIiwicHJvbWlzZTIiLCJpbml0QW5kR2V0TWFuYWdlciIsInJlZ2lzdGVyIiwiaWZyYW1lRXZlbnQiLCJhdXRoRXZlbnQiLCJzZW5kIiwiTXVsdGlGYWN0b3JBc3NlcnRpb25JbXBsIiwiX2ZpbmFsaXplRW5yb2xsIiwiX2ZpbmFsaXplU2lnbkluIiwiUGhvbmVNdWx0aUZhY3RvckFzc2VydGlvbkltcGwiLCJfZnJvbUNyZWRlbnRpYWwiLCJwaG9uZVZlcmlmaWNhdGlvbkluZm8iLCJGQUNUT1JfSUQiLCJBdXRoSW50ZXJvcCIsImludGVybmFsTGlzdGVuZXJzIiwiZ2V0VWlkIiwiYXNzZXJ0QXV0aENvbmZpZ3VyZWQiLCJhZGRBdXRoVG9rZW5MaXN0ZW5lciIsInVuc3Vic2NyaWJlIiwidXBkYXRlUHJvYWN0aXZlUmVmcmVzaCIsInJlbW92ZUF1dGhUb2tlbkxpc3RlbmVyIiwiZ2V0VmVyc2lvbkZvclBsYXRmb3JtIiwicmVnaXN0ZXJBdXRoIiwiX3JlZ2lzdGVyQ29tcG9uZW50IiwiaW1wb3J0X2NvbXBvbmVudCIsIkNvbXBvbmVudCIsImdldFByb3ZpZGVyIiwiYXBwMiIsImhlYXJ0YmVhdFNlcnZpY2VQcm92aWRlcjIiLCJhdXRoSW5zdGFuY2UiLCJzZXRJbnN0YW50aWF0aW9uTW9kZSIsInNldEluc3RhbmNlQ3JlYXRlZENhbGxiYWNrIiwiX2luc3RhbmNlSWRlbnRpZmllciIsIl9pbnN0YW5jZSIsImF1dGhJbnRlcm5hbFByb3ZpZGVyIiwicmVnaXN0ZXJWZXJzaW9uIiwidmVyc2lvbiIsIkRFRkFVTFRfSURfVE9LRU5fTUFYX0FHRSIsImF1dGhJZFRva2VuTWF4QWdlIiwiZ2V0RXhwZXJpbWVudGFsU2V0dGluZyIsImxhc3RQb3N0ZWRJZFRva2VuIiwibWludENvb2tpZUZhY3RvcnkiLCJpZFRva2VuUmVzdWx0IiwiaWRUb2tlbkFnZSIsImdldEFwcCIsImF1dGhUb2tlblN5bmNVcmwiLCJtaW50Q29va2llIiwiYXV0aEVtdWxhdG9ySG9zdCIsImdldERlZmF1bHRFbXVsYXRvckhvc3QiLCJpbXBvcnRfdXRpbDIiLCJyZXF1aXJlIiwiaW1wb3J0X2FwcDIiLCJpbXBvcnRfbG9nZ2VyMiIsImltcG9ydF90c2xpYjIiLCJpbXBvcnRfY29tcG9uZW50MiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsbUJBQUE7QUFBQUMsUUFBQSxDQUFBRCxtQkFBQTtFQUFBRSxtQkFBQSxFQUFBQSxDQUFBLEtBQUFBLG1CQUFBO0VBQUFDLGFBQUEsRUFBQUEsQ0FBQSxLQUFBQSxhQUFBO0VBQUFDLGNBQUEsRUFBQUEsQ0FBQSxLQUFBQSxjQUFBO0VBQUFDLGNBQUEsRUFBQUEsQ0FBQSxLQUFBQywwQ0FBQTtFQUFBQyxtQkFBQSxFQUFBQSxDQUFBLEtBQUFBLG1CQUFBO0VBQUFDLGlCQUFBLEVBQUFBLENBQUEsS0FBQUEsaUJBQUE7RUFBQUMsb0JBQUEsRUFBQUEsQ0FBQSxLQUFBQSxvQkFBQTtFQUFBQyxRQUFBLEVBQUFBLENBQUEsS0FBQUEsUUFBQTtFQUFBQyxrQkFBQSxFQUFBQSxDQUFBLEtBQUFBLGtCQUFBO0VBQUFDLGtCQUFBLEVBQUFBLENBQUEsS0FBQUEsa0JBQUE7RUFBQUMsZUFBQSxFQUFBQSxDQUFBLEtBQUFBLGVBQUE7RUFBQUMsYUFBQSxF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