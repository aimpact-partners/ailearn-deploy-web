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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL0BmaXJlYmFzZS9hdXRoLjAuMjEuNC5qcyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvbW9kZWwvZW51bV9tYXBzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL2Vycm9ycy50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91dGlsL2xvZy50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91dGlsL2Fzc2VydC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91dGlsL2luc3RhbnRpYXRvci50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9hdXRoL2luaXRpYWxpemUudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvdXRpbC9sb2NhdGlvbi50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91dGlsL25hdmlnYXRvci50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91dGlsL2RlbGF5LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3V0aWwvZW11bGF0b3IudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvdXRpbC9mZXRjaF9wcm92aWRlci50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvYXBpL2Vycm9ycy50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvYXBpL2luZGV4LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9hcGkvYWNjb3VudF9tYW5hZ2VtZW50L2FjY291bnQudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvdXRpbC90aW1lLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3VzZXIvaWRfdG9rZW5fcmVzdWx0LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3VzZXIvaW52YWxpZGF0aW9uLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3VzZXIvcHJvYWN0aXZlX3JlZnJlc2gudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvdXNlci91c2VyX21ldGFkYXRhLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3VzZXIvcmVsb2FkLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9hcGkvYXV0aGVudGljYXRpb24vdG9rZW4udHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvdXNlci90b2tlbl9tYW5hZ2VyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3VzZXIvdXNlcl9pbXBsLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3BlcnNpc3RlbmNlL2luX21lbW9yeS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9wZXJzaXN0ZW5jZS9wZXJzaXN0ZW5jZV91c2VyX21hbmFnZXIudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvdXRpbC9icm93c2VyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3V0aWwvdmVyc2lvbi50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9hdXRoL21pZGRsZXdhcmUudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvYXV0aC9hdXRoX2ltcGwudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvYXV0aC9lbXVsYXRvci50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9jcmVkZW50aWFscy9hdXRoX2NyZWRlbnRpYWwudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2FwaS9hY2NvdW50X21hbmFnZW1lbnQvZW1haWxfYW5kX3Bhc3N3b3JkLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9hcGkvYXV0aGVudGljYXRpb24vZW1haWxfYW5kX3Bhc3N3b3JkLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9hcGkvYXV0aGVudGljYXRpb24vZW1haWxfbGluay50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9jcmVkZW50aWFscy9lbWFpbC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvYXBpL2F1dGhlbnRpY2F0aW9uL2lkcC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9jcmVkZW50aWFscy9vYXV0aC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvYXBpL2F1dGhlbnRpY2F0aW9uL3Ntcy50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9jcmVkZW50aWFscy9waG9uZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9hY3Rpb25fY29kZV91cmwudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvcHJvdmlkZXJzL2VtYWlsLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3Byb3ZpZGVycy9mZWRlcmF0ZWQudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvcHJvdmlkZXJzL29hdXRoLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3Byb3ZpZGVycy9mYWNlYm9vay50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9wcm92aWRlcnMvZ29vZ2xlLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3Byb3ZpZGVycy9naXRodWIudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvY3JlZGVudGlhbHMvc2FtbC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9wcm92aWRlcnMvc2FtbC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9wcm92aWRlcnMvdHdpdHRlci50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvYXBpL2F1dGhlbnRpY2F0aW9uL3NpZ25fdXAudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvdXNlci91c2VyX2NyZWRlbnRpYWxfaW1wbC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9zdHJhdGVnaWVzL2Fub255bW91cy50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvbWZhL21mYV9lcnJvci50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91dGlsL3Byb3ZpZGVycy50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91c2VyL2xpbmtfdW5saW5rLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3VzZXIvcmVhdXRoZW50aWNhdGUudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvc3RyYXRlZ2llcy9jcmVkZW50aWFsLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9hcGkvYXV0aGVudGljYXRpb24vY3VzdG9tX3Rva2VuLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3N0cmF0ZWdpZXMvY3VzdG9tX3Rva2VuLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9tZmEvbWZhX2luZm8udHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvc3RyYXRlZ2llcy9hY3Rpb25fY29kZV9zZXR0aW5ncy50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9zdHJhdGVnaWVzL2VtYWlsX2FuZF9wYXNzd29yZC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9zdHJhdGVnaWVzL2VtYWlsX2xpbmsudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2FwaS9hdXRoZW50aWNhdGlvbi9jcmVhdGVfYXV0aF91cmkudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvc3RyYXRlZ2llcy9lbWFpbC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvYXBpL2FjY291bnRfbWFuYWdlbWVudC9wcm9maWxlLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3VzZXIvYWNjb3VudF9pbmZvLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3VzZXIvYWRkaXRpb25hbF91c2VyX2luZm8udHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvaW5kZXgudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL21mYS9tZmFfc2Vzc2lvbi50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvbWZhL21mYV9yZXNvbHZlci50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvYXBpL2FjY291bnRfbWFuYWdlbWVudC9tZmEudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL21mYS9tZmFfdXNlci50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9wZXJzaXN0ZW5jZS9pbmRleC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvcGxhdGZvcm1fYnJvd3Nlci9wZXJzaXN0ZW5jZS9icm93c2VyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9wbGF0Zm9ybV9icm93c2VyL3BlcnNpc3RlbmNlL2xvY2FsX3N0b3JhZ2UudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL3BsYXRmb3JtX2Jyb3dzZXIvcGVyc2lzdGVuY2Uvc2Vzc2lvbl9zdG9yYWdlLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9wbGF0Zm9ybV9icm93c2VyL21lc3NhZ2VjaGFubmVsL3Byb21pc2UudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL3BsYXRmb3JtX2Jyb3dzZXIvbWVzc2FnZWNoYW5uZWwvcmVjZWl2ZXIudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvdXRpbC9ldmVudF9pZC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvcGxhdGZvcm1fYnJvd3Nlci9tZXNzYWdlY2hhbm5lbC9zZW5kZXIudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL3BsYXRmb3JtX2Jyb3dzZXIvYXV0aF93aW5kb3cudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL3BsYXRmb3JtX2Jyb3dzZXIvdXRpbC93b3JrZXIudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL3BsYXRmb3JtX2Jyb3dzZXIvcGVyc2lzdGVuY2UvaW5kZXhlZF9kYi50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvYXBpL2F1dGhlbnRpY2F0aW9uL21mYS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvYXBpL2F1dGhlbnRpY2F0aW9uL3JlY2FwdGNoYS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvcGxhdGZvcm1fYnJvd3Nlci9sb2FkX2pzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9wbGF0Zm9ybV9icm93c2VyL3JlY2FwdGNoYS9yZWNhcHRjaGFfbW9jay50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvcGxhdGZvcm1fYnJvd3Nlci9yZWNhcHRjaGEvcmVjYXB0Y2hhX2xvYWRlci50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvcGxhdGZvcm1fYnJvd3Nlci9yZWNhcHRjaGEvcmVjYXB0Y2hhX3ZlcmlmaWVyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9wbGF0Zm9ybV9icm93c2VyL3N0cmF0ZWdpZXMvcGhvbmUudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL3BsYXRmb3JtX2Jyb3dzZXIvcHJvdmlkZXJzL3Bob25lLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3V0aWwvcmVzb2x2ZXIudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvc3RyYXRlZ2llcy9pZHAudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvc3RyYXRlZ2llcy9hYnN0cmFjdF9wb3B1cF9yZWRpcmVjdF9vcGVyYXRpb24udHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL3BsYXRmb3JtX2Jyb3dzZXIvc3RyYXRlZ2llcy9wb3B1cC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9zdHJhdGVnaWVzL3JlZGlyZWN0LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9wbGF0Zm9ybV9icm93c2VyL3N0cmF0ZWdpZXMvcmVkaXJlY3QudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvYXV0aC9hdXRoX2V2ZW50X21hbmFnZXIudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2FwaS9wcm9qZWN0X2NvbmZpZy9nZXRfcHJvamVjdF9jb25maWcudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvdXRpbC92YWxpZGF0ZV9vcmlnaW4udHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL3BsYXRmb3JtX2Jyb3dzZXIvaWZyYW1lL2dhcGkudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL3BsYXRmb3JtX2Jyb3dzZXIvaWZyYW1lL2lmcmFtZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvcGxhdGZvcm1fYnJvd3Nlci91dGlsL3BvcHVwLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3V0aWwvaGFuZGxlci50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvcGxhdGZvcm1fYnJvd3Nlci9wb3B1cF9yZWRpcmVjdC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvbWZhL21mYV9hc3NlcnRpb24udHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL3BsYXRmb3JtX2Jyb3dzZXIvbWZhL2Fzc2VydGlvbnMvcGhvbmUudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvYXV0aC9maXJlYmFzZV9pbnRlcm5hbC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9hdXRoL3JlZ2lzdGVyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9wbGF0Zm9ybV9icm93c2VyL2luZGV4LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL2Rpc3QvZXNtMjAxNy9pbmRleC5qcyJdLCJuYW1lcyI6WyJfX2V4cG9ydCIsIkFjdGlvbkNvZGVPcGVyYXRpb24iLCJBY3Rpb25Db2RlVVJMIiwiQXV0aENyZWRlbnRpYWwiLCJBdXRoRXJyb3JDb2RlcyIsIkVtYWlsQXV0aENyZWRlbnRpYWwiLCJFbWFpbEF1dGhQcm92aWRlciIsIkZhY2Vib29rQXV0aFByb3ZpZGVyIiwiRmFjdG9ySWQiLCJHaXRodWJBdXRoUHJvdmlkZXIiLCJHb29nbGVBdXRoUHJvdmlkZXIiLCJPQXV0aENyZWRlbnRpYWwiLCJPQXV0aFByb3ZpZGVyIiwiT3BlcmF0aW9uVHlwZSIsIlBob25lQXV0aENyZWRlbnRpYWwiLCJQaG9uZUF1dGhQcm92aWRlciIsIlBob25lTXVsdGlGYWN0b3JHZW5lcmF0b3IiLCJQcm92aWRlcklkIiwiUmVjYXB0Y2hhVmVyaWZpZXIiLCJTQU1MQXV0aFByb3ZpZGVyIiwiU2lnbkluTWV0aG9kIiwiVHdpdHRlckF1dGhQcm92aWRlciIsImFwcGx5QWN0aW9uQ29kZSIsImJlZm9yZUF1dGhTdGF0ZUNoYW5nZWQiLCJicm93c2VyTG9jYWxQZXJzaXN0ZW5jZSIsImJyb3dzZXJQb3B1cFJlZGlyZWN0UmVzb2x2ZXIiLCJicm93c2VyU2Vzc2lvblBlcnNpc3RlbmNlIiwiY2hlY2tBY3Rpb25Db2RlIiwiY29uZmlybVBhc3N3b3JkUmVzZXQiLCJjb25uZWN0QXV0aEVtdWxhdG9yIiwiY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkIiwiZGVidWdFcnJvck1hcCIsImRlbGV0ZVVzZXIiLCJmZXRjaFNpZ25Jbk1ldGhvZHNGb3JFbWFpbCIsImdldEFkZGl0aW9uYWxVc2VySW5mbyIsImdldEF1dGgiLCJnZXRJZFRva2VuIiwiZ2V0SWRUb2tlblJlc3VsdCIsImdldE11bHRpRmFjdG9yUmVzb2x2ZXIiLCJnZXRSZWRpcmVjdFJlc3VsdCIsImluTWVtb3J5UGVyc2lzdGVuY2UiLCJpbmRleGVkREJMb2NhbFBlcnNpc3RlbmNlIiwiaW5pdGlhbGl6ZUF1dGgiLCJpc1NpZ25JbldpdGhFbWFpbExpbmsiLCJsaW5rV2l0aENyZWRlbnRpYWwiLCJsaW5rV2l0aFBob25lTnVtYmVyIiwibGlua1dpdGhQb3B1cCIsImxpbmtXaXRoUmVkaXJlY3QiLCJtdWx0aUZhY3RvciIsIm9uQXV0aFN0YXRlQ2hhbmdlZCIsIm9uSWRUb2tlbkNoYW5nZWQiLCJwYXJzZUFjdGlvbkNvZGVVUkwiLCJwcm9kRXJyb3JNYXAiLCJyZWF1dGhlbnRpY2F0ZVdpdGhDcmVkZW50aWFsIiwicmVhdXRoZW50aWNhdGVXaXRoUGhvbmVOdW1iZXIiLCJyZWF1dGhlbnRpY2F0ZVdpdGhQb3B1cCIsInJlYXV0aGVudGljYXRlV2l0aFJlZGlyZWN0IiwicmVsb2FkIiwic2VuZEVtYWlsVmVyaWZpY2F0aW9uIiwic2VuZFBhc3N3b3JkUmVzZXRFbWFpbCIsInNlbmRTaWduSW5MaW5rVG9FbWFpbCIsInNldFBlcnNpc3RlbmNlIiwic2lnbkluQW5vbnltb3VzbHkiLCJzaWduSW5XaXRoQ3JlZGVudGlhbCIsInNpZ25JbldpdGhDdXN0b21Ub2tlbiIsInNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkIiwic2lnbkluV2l0aEVtYWlsTGluayIsInNpZ25JbldpdGhQaG9uZU51bWJlciIsInNpZ25JbldpdGhQb3B1cCIsInNpZ25JbldpdGhSZWRpcmVjdCIsInNpZ25PdXQiLCJ1bmxpbmsiLCJ1cGRhdGVDdXJyZW50VXNlciIsInVwZGF0ZUVtYWlsIiwidXBkYXRlUGFzc3dvcmQiLCJ1cGRhdGVQaG9uZU51bWJlciIsInVwZGF0ZVByb2ZpbGUiLCJ1c2VEZXZpY2VMYW5ndWFnZSIsInZlcmlmeUJlZm9yZVVwZGF0ZUVtYWlsIiwidmVyaWZ5UGFzc3dvcmRSZXNldENvZGUiLCJtb2R1bGUiLCJQSE9ORSIsIkZBQ0VCT09LIiwiR0lUSFVCIiwiR09PR0xFIiwiUEFTU1dPUkQiLCJUV0lUVEVSIiwiRU1BSUxfTElOSyIsIkVNQUlMX1BBU1NXT1JEIiwiTElOSyIsIlJFQVVUSEVOVElDQVRFIiwiU0lHTl9JTiIsIkVNQUlMX1NJR05JTiIsIlBBU1NXT1JEX1JFU0VUIiwiUkVDT1ZFUl9FTUFJTCIsIlJFVkVSVF9TRUNPTkRfRkFDVE9SX0FERElUSU9OIiwiVkVSSUZZX0FORF9DSEFOR0VfRU1BSUwiLCJWRVJJRllfRU1BSUwiLCJfZGVidWdFcnJvck1hcCIsIl9wcm9kRXJyb3JNYXAiLCJfREVGQVVMVF9BVVRIX0VSUk9SX0ZBQ1RPUlkiLCJpbXBvcnRfdXRpbCIsIkFETUlOX09OTFlfT1BFUkFUSU9OIiwiQVJHVU1FTlRfRVJST1IiLCJBUFBfTk9UX0FVVEhPUklaRUQiLCJBUFBfTk9UX0lOU1RBTExFRCIsIkNBUFRDSEFfQ0hFQ0tfRkFJTEVEIiwiQ09ERV9FWFBJUkVEIiwiQ09SRE9WQV9OT1RfUkVBRFkiLCJDT1JTX1VOU1VQUE9SVEVEIiwiQ1JFREVOVElBTF9BTFJFQURZX0lOX1VTRSIsIkNSRURFTlRJQUxfTUlTTUFUQ0giLCJDUkVERU5USUFMX1RPT19PTERfTE9HSU5fQUdBSU4iLCJERVBFTkRFTlRfU0RLX0lOSVRfQkVGT1JFX0FVVEgiLCJEWU5BTUlDX0xJTktfTk9UX0FDVElWQVRFRCIsIkVNQUlMX0NIQU5HRV9ORUVEU19WRVJJRklDQVRJT04iLCJFTUFJTF9FWElTVFMiLCJFTVVMQVRPUl9DT05GSUdfRkFJTEVEIiwiRVhQSVJFRF9PT0JfQ09ERSIsIkVYUElSRURfUE9QVVBfUkVRVUVTVCIsIklOVEVSTkFMX0VSUk9SIiwiSU5WQUxJRF9BUElfS0VZIiwiSU5WQUxJRF9BUFBfQ1JFREVOVElBTCIsIklOVkFMSURfQVBQX0lEIiwiSU5WQUxJRF9BVVRIIiwiSU5WQUxJRF9BVVRIX0VWRU5UIiwiSU5WQUxJRF9DRVJUX0hBU0giLCJJTlZBTElEX0NPREUiLCJJTlZBTElEX0NPTlRJTlVFX1VSSSIsIklOVkFMSURfQ09SRE9WQV9DT05GSUdVUkFUSU9OIiwiSU5WQUxJRF9DVVNUT01fVE9LRU4iLCJJTlZBTElEX0RZTkFNSUNfTElOS19ET01BSU4iLCJJTlZBTElEX0VNQUlMIiwiSU5WQUxJRF9FTVVMQVRPUl9TQ0hFTUUiLCJJTlZBTElEX0lEUF9SRVNQT05TRSIsIklOVkFMSURfTUVTU0FHRV9QQVlMT0FEIiwiSU5WQUxJRF9NRkFfU0VTU0lPTiIsIklOVkFMSURfT0FVVEhfQ0xJRU5UX0lEIiwiSU5WQUxJRF9PQVVUSF9QUk9WSURFUiIsIklOVkFMSURfT09CX0NPREUiLCJJTlZBTElEX09SSUdJTiIsIklOVkFMSURfUEFTU1dPUkQiLCJJTlZBTElEX1BFUlNJU1RFTkNFIiwiSU5WQUxJRF9QSE9ORV9OVU1CRVIiLCJJTlZBTElEX1BST1ZJREVSX0lEIiwiSU5WQUxJRF9SRUNJUElFTlRfRU1BSUwiLCJJTlZBTElEX1NFTkRFUiIsIklOVkFMSURfU0VTU0lPTl9JTkZPIiwiSU5WQUxJRF9URU5BTlRfSUQiLCJNRkFfSU5GT19OT1RfRk9VTkQiLCJNRkFfUkVRVUlSRUQiLCJNSVNTSU5HX0FORFJPSURfUEFDS0FHRV9OQU1FIiwiTUlTU0lOR19BUFBfQ1JFREVOVElBTCIsIk1JU1NJTkdfQVVUSF9ET01BSU4iLCJNSVNTSU5HX0NPREUiLCJNSVNTSU5HX0NPTlRJTlVFX1VSSSIsIk1JU1NJTkdfSUZSQU1FX1NUQVJUIiwiTUlTU0lOR19JT1NfQlVORExFX0lEIiwiTUlTU0lOR19PUl9JTlZBTElEX05PTkNFIiwiTUlTU0lOR19NRkFfSU5GTyIsIk1JU1NJTkdfTUZBX1NFU1NJT04iLCJNSVNTSU5HX1BIT05FX05VTUJFUiIsIk1JU1NJTkdfU0VTU0lPTl9JTkZPIiwiTU9EVUxFX0RFU1RST1lFRCIsIk5FRURfQ09ORklSTUFUSU9OIiwiTkVUV09SS19SRVFVRVNUX0ZBSUxFRCIsIk5VTExfVVNFUiIsIk5PX0FVVEhfRVZFTlQiLCJOT19TVUNIX1BST1ZJREVSIiwiT1BFUkFUSU9OX05PVF9BTExPV0VEIiwiT1BFUkFUSU9OX05PVF9TVVBQT1JURUQiLCJQT1BVUF9CTE9DS0VEIiwiUE9QVVBfQ0xPU0VEX0JZX1VTRVIiLCJQUk9WSURFUl9BTFJFQURZX0xJTktFRCIsIlFVT1RBX0VYQ0VFREVEIiwiUkVESVJFQ1RfQ0FOQ0VMTEVEX0JZX1VTRVIiLCJSRURJUkVDVF9PUEVSQVRJT05fUEVORElORyIsIlJFSkVDVEVEX0NSRURFTlRJQUwiLCJTRUNPTkRfRkFDVE9SX0FMUkVBRFlfRU5ST0xMRUQiLCJTRUNPTkRfRkFDVE9SX0xJTUlUX0VYQ0VFREVEIiwiVEVOQU5UX0lEX01JU01BVENIIiwiVElNRU9VVCIsIlRPS0VOX0VYUElSRUQiLCJUT09fTUFOWV9BVFRFTVBUU19UUllfTEFURVIiLCJVTkFVVEhPUklaRURfRE9NQUlOIiwiVU5TVVBQT1JURURfRklSU1RfRkFDVE9SIiwiVU5TVVBQT1JURURfUEVSU0lTVEVOQ0UiLCJVTlNVUFBPUlRFRF9URU5BTlRfT1BFUkFUSU9OIiwiVU5WRVJJRklFRF9FTUFJTCIsIlVTRVJfQ0FOQ0VMTEVEIiwiVVNFUl9ERUxFVEVEIiwiVVNFUl9ESVNBQkxFRCIsIlVTRVJfTUlTTUFUQ0giLCJVU0VSX1NJR05FRF9PVVQiLCJXRUFLX1BBU1NXT1JEIiwiV0VCX1NUT1JBR0VfVU5TVVBQT1JURUQiLCJBTFJFQURZX0lOSVRJQUxJWkVEIiwibG9nQ2xpZW50IiwiaW1wb3J0X2xvZ2dlciIsIl9sb2dFcnJvciIsIm1zZyIsImFyZ3MiLCJsb2dMZXZlbCIsIkVSUk9SIiwiZXJyb3IiLCJpbXBvcnRfYXBwIiwiX2ZhaWwiLCJhdXRoT3JDb2RlIiwicmVzdCIsImNyZWF0ZUVycm9ySW50ZXJuYWwiLCJfY3JlYXRlRXJyb3IiLCJfZXJyb3JXaXRoQ3VzdG9tTWVzc2FnZSIsImF1dGgiLCJjb2RlIiwibWVzc2FnZSIsImVycm9yTWFwIiwiT2JqZWN0IiwiZmFjdG9yeSIsImNyZWF0ZSIsImFwcE5hbWUiLCJuYW1lIiwiX2Fzc2VydEluc3RhbmNlT2YiLCJvYmplY3QiLCJpbnN0YW5jZSIsImNvbnN0cnVjdG9ySW5zdGFuY2UiLCJjb25zdHJ1Y3RvciIsImZ1bGxQYXJhbXMiLCJzbGljZSIsIl9lcnJvckZhY3RvcnkiLCJfYXNzZXJ0IiwiYXNzZXJ0aW9uIiwiZGVidWdGYWlsIiwiZmFpbHVyZSIsIkVycm9yIiwiaW5zdGFuY2VDYWNoZSIsIk1hcCIsIl9nZXRJbnN0YW5jZSIsImNscyIsImRlYnVnQXNzZXJ0IiwiRnVuY3Rpb24iLCJnZXQiLCJzZXQiLCJhcHAiLCJkZXBzIiwicHJvdmlkZXIiLCJpc0luaXRpYWxpemVkIiwiZ2V0SW1tZWRpYXRlIiwiaW5pdGlhbE9wdGlvbnMiLCJnZXRPcHRpb25zIiwiaW5pdGlhbGl6ZSIsIm9wdGlvbnMiLCJwZXJzaXN0ZW5jZSIsImhpZXJhcmNoeSIsIkFycmF5IiwiaXNBcnJheSIsIm1hcCIsIl91cGRhdGVFcnJvck1hcCIsIl9pbml0aWFsaXplV2l0aFBlcnNpc3RlbmNlIiwicG9wdXBSZWRpcmVjdFJlc29sdmVyIiwiX2dldEN1cnJlbnRVcmwiLCJzZWxmIiwiX2EiLCJsb2NhdGlvbiIsImhyZWYiLCJfaXNIdHRwT3JIdHRwcyIsIl9nZXRDdXJyZW50U2NoZW1lIiwicHJvdG9jb2wiLCJfaXNPbmxpbmUiLCJuYXZpZ2F0b3IiLCJvbkxpbmUiLCJfZ2V0VXNlckxhbmd1YWdlIiwibmF2aWdhdG9yTGFuZ3VhZ2UiLCJsYW5ndWFnZXMiLCJsYW5ndWFnZSIsIkRlbGF5Iiwic2hvcnREZWxheSIsImxvbmdEZWxheSIsImlzTW9iaWxlIiwiTWF0aCIsIm1pbiIsImNvbmZpZyIsInBhdGgiLCJlbXVsYXRvciIsInVybCIsInN0YXJ0c1dpdGgiLCJGZXRjaFByb3ZpZGVyIiwiZmV0Y2hJbXBsIiwiaGVhZGVyc0ltcGwiLCJyZXNwb25zZUltcGwiLCJmZXRjaCIsImhlYWRlcnMiLCJIZWFkZXJzIiwicmVzcG9uc2UiLCJSZXNwb25zZSIsIlNFUlZFUl9FUlJPUl9NQVAiLCJERUZBVUxUX0FQSV9USU1FT1VUX01TIiwicmVxdWVzdCIsInRlbmFudElkIiwiX3BlcmZvcm1BcGlSZXF1ZXN0IiwibWV0aG9kIiwiY3VzdG9tRXJyb3JNYXAiLCJfcGVyZm9ybUZldGNoV2l0aEVycm9ySGFuZGxpbmciLCJib2R5IiwicGFyYW1zIiwiSlNPTiIsInN0cmluZ2lmeSIsInF1ZXJ5Iiwia2V5IiwiYXBpS2V5IiwiX2dldEFkZGl0aW9uYWxIZWFkZXJzIiwibGFuZ3VhZ2VDb2RlIiwiX2dldEZpbmFsVGFyZ2V0IiwiYXBpSG9zdCIsInJlZmVycmVyUG9saWN5IiwiZmV0Y2hGbiIsIl9jYW5Jbml0RW11bGF0b3IiLCJuZXR3b3JrVGltZW91dCIsIk5ldHdvcmtUaW1lb3V0IiwiUHJvbWlzZSIsInJhY2UiLCJwcm9taXNlIiwiY2xlYXJOZXR3b3JrVGltZW91dCIsImpzb24iLCJfbWFrZVRhZ2dlZEVycm9yIiwib2siLCJlcnJvck1lc3NhZ2UiLCJzZXJ2ZXJFcnJvckNvZGUiLCJzZXJ2ZXJFcnJvck1lc3NhZ2UiLCJzcGxpdCIsImF1dGhFcnJvciIsInRvTG93ZXJDYXNlIiwicmVwbGFjZSIsImUiLCJTdHJpbmciLCJfcGVyZm9ybVNpZ25JblJlcXVlc3QiLCJzZXJ2ZXJSZXNwb25zZSIsIl9zZXJ2ZXJSZXNwb25zZSIsImhvc3QiLCJiYXNlIiwiYXBpU2NoZW1lIiwiX2VtdWxhdG9yVXJsIiwidGltZXIiLCJfIiwicmVqZWN0Iiwic2V0VGltZW91dCIsImNsZWFyVGltZW91dCIsImVycm9yUGFyYW1zIiwiZW1haWwiLCJwaG9uZU51bWJlciIsImN1c3RvbURhdGEiLCJfdG9rZW5SZXNwb25zZSIsImRlbGV0ZUFjY291bnQiLCJkZWxldGVMaW5rZWRBY2NvdW50cyIsImdldEFjY291bnRJbmZvIiwidXRjVGltZXN0YW1wVG9EYXRlU3RyaW5nIiwidXRjVGltZXN0YW1wIiwiZGF0ZSIsIkRhdGUiLCJOdW1iZXIiLCJpc05hTiIsImdldFRpbWUiLCJ0b1VUQ1N0cmluZyIsInVzZXIiLCJmb3JjZVJlZnJlc2giLCJ1c2VySW50ZXJuYWwiLCJ0b2tlbiIsImNsYWltcyIsIl9wYXJzZVRva2VuIiwiZXhwIiwiYXV0aF90aW1lIiwiaWF0IiwiZmlyZWJhc2UiLCJzaWduSW5Qcm92aWRlciIsImF1dGhUaW1lIiwic2Vjb25kc1N0cmluZ1RvTWlsbGlzZWNvbmRzIiwiaXNzdWVkQXRUaW1lIiwiZXhwaXJhdGlvblRpbWUiLCJzaWduSW5TZWNvbmRGYWN0b3IiLCJzZWNvbmRzIiwiYWxnb3JpdGhtIiwicGF5bG9hZCIsInNpZ25hdHVyZSIsImRlY29kZWQiLCJwYXJzZSIsInRvU3RyaW5nIiwiX3Rva2VuRXhwaXJlc0luIiwicGFyc2VkVG9rZW4iLCJfbG9nb3V0SWZJbnZhbGlkYXRlZCIsImJ5cGFzc0F1dGhTdGF0ZSIsImlzVXNlckludmFsaWRhdGVkIiwiY3VycmVudFVzZXIiLCJQcm9hY3RpdmVSZWZyZXNoIiwiaXNSdW5uaW5nIiwidGltZXJJZCIsIl9zdGFydCIsInNjaGVkdWxlIiwiX3N0b3AiLCJnZXRJbnRlcnZhbCIsIndhc0Vycm9yIiwiaW50ZXJ2YWwiLCJlcnJvckJhY2tvZmYiLCJleHBUaW1lIiwic3RzVG9rZW5NYW5hZ2VyIiwibm93IiwibWF4IiwiaXRlcmF0aW9uIiwiVXNlck1ldGFkYXRhIiwiY3JlYXRlZEF0IiwibGFzdExvZ2luQXQiLCJfaW5pdGlhbGl6ZVRpbWUiLCJsYXN0U2lnbkluVGltZSIsImNyZWF0aW9uVGltZSIsIl9jb3B5IiwibWV0YWRhdGEiLCJ0b0pTT04iLCJfcmVsb2FkV2l0aG91dFNhdmluZyIsImlkVG9rZW4iLCJ1c2VycyIsImxlbmd0aCIsImNvcmVBY2NvdW50IiwiX25vdGlmeVJlbG9hZExpc3RlbmVyIiwibmV3UHJvdmlkZXJEYXRhIiwicHJvdmlkZXJVc2VySW5mbyIsImV4dHJhY3RQcm92aWRlckRhdGEiLCJwcm92aWRlckRhdGEiLCJtZXJnZVByb3ZpZGVyRGF0YSIsIm9sZElzQW5vbnltb3VzIiwiaXNBbm9ueW1vdXMiLCJuZXdJc0Fub255bW91cyIsInBhc3N3b3JkSGFzaCIsInVwZGF0ZXMiLCJ1aWQiLCJsb2NhbElkIiwiZGlzcGxheU5hbWUiLCJwaG90b1VSTCIsInBob3RvVXJsIiwiZW1haWxWZXJpZmllZCIsImFzc2lnbiIsIl9wZXJzaXN0VXNlcklmQ3VycmVudCIsIl9ub3RpZnlMaXN0ZW5lcnNJZkN1cnJlbnQiLCJvcmlnaW5hbCIsIm5ld0RhdGEiLCJkZWR1cGVkIiwiZmlsdGVyIiwibyIsInNvbWUiLCJuIiwicHJvdmlkZXJJZCIsInByb3ZpZGVycyIsImltcG9ydF90c2xpYiIsInJhd0lkIiwicmVxdWVzdFN0c1Rva2VuIiwicmVmcmVzaFRva2VuIiwidG9rZW5BcGlIb3N0IiwiYWNjZXNzVG9rZW4iLCJhY2Nlc3NfdG9rZW4iLCJleHBpcmVzSW4iLCJleHBpcmVzX2luIiwicmVmcmVzaF90b2tlbiIsIlN0c1Rva2VuTWFuYWdlciIsImlzRXhwaXJlZCIsInVwZGF0ZUZyb21TZXJ2ZXJSZXNwb25zZSIsInVwZGF0ZVRva2Vuc0FuZEV4cGlyYXRpb24iLCJnZXRUb2tlbiIsInJlZnJlc2giLCJjbGVhclJlZnJlc2hUb2tlbiIsIm9sZFRva2VuIiwiZXhwaXJlc0luU2VjIiwiZnJvbUpTT04iLCJtYW5hZ2VyIiwiX2Fzc2lnbiIsIl9jbG9uZSIsIl9wZXJmb3JtUmVmcmVzaCIsImFzc2VydFN0cmluZ09yVW5kZWZpbmVkIiwiVXNlckltcGwiLCJvcHQiLCJyZWxvYWRVc2VySW5mbyIsInJlbG9hZExpc3RlbmVyIiwidXNlckluZm8iLCJfb25SZWxvYWQiLCJjYWxsYmFjayIsIl9zdGFydFByb2FjdGl2ZVJlZnJlc2giLCJwcm9hY3RpdmVSZWZyZXNoIiwiX3N0b3BQcm9hY3RpdmVSZWZyZXNoIiwiX3VwZGF0ZVRva2Vuc0lmTmVjZXNzYXJ5IiwidG9rZW5zUmVmcmVzaGVkIiwiZGVsZXRlIiwiX3JlZGlyZWN0RXZlbnRJZCIsIl9mcm9tSlNPTiIsIl9iIiwiX2MiLCJfZCIsIl9lIiwiX2YiLCJfZyIsIl9oIiwicGxhaW5PYmplY3RUb2tlbk1hbmFnZXIiLCJfZnJvbUlkVG9rZW5SZXNwb25zZSIsImlkVG9rZW5SZXNwb25zZSIsIkluTWVtb3J5UGVyc2lzdGVuY2UiLCJzdG9yYWdlIiwiX2lzQXZhaWxhYmxlIiwiX3NldCIsInZhbHVlIiwiX2dldCIsIl9yZW1vdmUiLCJfYWRkTGlzdGVuZXIiLCJfa2V5IiwiX2xpc3RlbmVyIiwiX3JlbW92ZUxpc3RlbmVyIiwidHlwZSIsIl9wZXJzaXN0ZW5jZUtleU5hbWUiLCJQZXJzaXN0ZW5jZVVzZXJNYW5hZ2VyIiwidXNlcktleSIsImZ1bGxVc2VyS2V5IiwiZnVsbFBlcnNpc3RlbmNlS2V5IiwiYm91bmRFdmVudEhhbmRsZXIiLCJfb25TdG9yYWdlRXZlbnQiLCJiaW5kIiwic2V0Q3VycmVudFVzZXIiLCJnZXRDdXJyZW50VXNlciIsImJsb2IiLCJyZW1vdmVDdXJyZW50VXNlciIsInNhdmVQZXJzaXN0ZW5jZUZvclJlZGlyZWN0IiwibmV3UGVyc2lzdGVuY2UiLCJwZXJzaXN0ZW5jZUhpZXJhcmNoeSIsImF2YWlsYWJsZVBlcnNpc3RlbmNlcyIsImFsbCIsInNlbGVjdGVkUGVyc2lzdGVuY2UiLCJ1c2VyVG9NaWdyYXRlIiwibWlncmF0aW9uSGllcmFyY2h5IiwicCIsIl9zaG91bGRBbGxvd01pZ3JhdGlvbiIsIl9nZXRCcm93c2VyTmFtZSIsInVzZXJBZ2VudCIsInVhIiwiaW5jbHVkZXMiLCJfaXNJRU1vYmlsZSIsIl9pc0ZpcmVmb3giLCJfaXNCbGFja0JlcnJ5IiwiX2lzV2ViT1MiLCJfaXNTYWZhcmkiLCJfaXNDaHJvbWVJT1MiLCJfaXNBbmRyb2lkIiwicmUiLCJtYXRjaGVzIiwibWF0Y2giLCJ0ZXN0IiwiX2lzSU9TIiwiX2lzSU9TN09yOCIsIl9pc0lPU1N0YW5kYWxvbmUiLCJ3aW5kb3ciLCJfaXNJRTEwIiwiZG9jdW1lbnQiLCJkb2N1bWVudE1vZGUiLCJfaXNJZnJhbWUiLCJ0b3AiLCJfZ2V0Q2xpZW50VmVyc2lvbiIsImNsaWVudFBsYXRmb3JtIiwiZnJhbWV3b3JrcyIsInJlcG9ydGVkUGxhdGZvcm0iLCJyZXBvcnRlZEZyYW1ld29ya3MiLCJqb2luIiwiQXV0aE1pZGRsZXdhcmVRdWV1ZSIsInF1ZXVlIiwicHVzaENhbGxiYWNrIiwib25BYm9ydCIsIndyYXBwZWRDYWxsYmFjayIsInJlc29sdmUiLCJyZXN1bHQiLCJwdXNoIiwiaW5kZXgiLCJydW5NaWRkbGV3YXJlIiwibmV4dFVzZXIiLCJvbkFib3J0U3RhY2siLCJiZWZvcmVTdGF0ZUNhbGxiYWNrIiwicmV2ZXJzZSIsIm9yaWdpbmFsTWVzc2FnZSIsIkF1dGhJbXBsIiwiaGVhcnRiZWF0U2VydmljZVByb3ZpZGVyIiwiZW11bGF0b3JDb25maWciLCJTdWJzY3JpcHRpb24iLCJyZWRpcmVjdFVzZXIiLCJpc1Byb2FjdGl2ZVJlZnJlc2hFbmFibGVkIiwiX2lzSW5pdGlhbGl6ZWQiLCJfZGVsZXRlZCIsIl9pbml0aWFsaXphdGlvblByb21pc2UiLCJfcG9wdXBSZWRpcmVjdFJlc29sdmVyIiwibGFzdE5vdGlmaWVkVWlkIiwiYXBwVmVyaWZpY2F0aW9uRGlzYWJsZWRGb3JUZXN0aW5nIiwiY2xpZW50VmVyc2lvbiIsInNka0NsaWVudFZlcnNpb24iLCJwZXJzaXN0ZW5jZU1hbmFnZXIiLCJfc2hvdWxkSW5pdFByb2FjdGl2ZWx5IiwiX2luaXRpYWxpemUiLCJpbml0aWFsaXplQ3VycmVudFVzZXIiLCJhc3NlcnRlZFBlcnNpc3RlbmNlIiwiX2N1cnJlbnRVc2VyIiwiX3VwZGF0ZUN1cnJlbnRVc2VyIiwicHJldmlvdXNseVN0b3JlZFVzZXIiLCJmdXR1cmVDdXJyZW50VXNlciIsIm5lZWRzVG9jaGVja01pZGRsZXdhcmUiLCJhdXRoRG9tYWluIiwiZ2V0T3JJbml0UmVkaXJlY3RQZXJzaXN0ZW5jZU1hbmFnZXIiLCJyZWRpcmVjdFVzZXJFdmVudElkIiwic3RvcmVkVXNlckV2ZW50SWQiLCJ0cnlSZWRpcmVjdFNpZ25JbiIsImRpcmVjdGx5U2V0Q3VycmVudFVzZXIiLCJiZWZvcmVTdGF0ZVF1ZXVlIiwiX292ZXJyaWRlUmVkaXJlY3RSZXN1bHQiLCJyZWxvYWRBbmRTZXRDdXJyZW50VXNlck9yQ2xlYXIiLCJyZWRpcmVjdFJlc29sdmVyIiwiX2NvbXBsZXRlUmVkaXJlY3RGbiIsIl9zZXRSZWRpcmVjdFVzZXIiLCJfZGVsZXRlIiwidXNlckV4dGVybiIsInNraXBCZWZvcmVTdGF0ZUNhbGxiYWNrcyIsIm5vdGlmeUF1dGhMaXN0ZW5lcnMiLCJyZWRpcmVjdFBlcnNpc3RlbmNlTWFuYWdlciIsIl9nZXRQZXJzaXN0ZW5jZSIsIm5leHRPck9ic2VydmVyIiwiY29tcGxldGVkIiwicmVnaXN0ZXJTdGF0ZUxpc3RlbmVyIiwiYXV0aFN0YXRlU3Vic2NyaXB0aW9uIiwiaWRUb2tlblN1YnNjcmlwdGlvbiIsInJlZGlyZWN0TWFuYWdlciIsInJlc29sdmVyIiwiX3JlZGlyZWN0UGVyc2lzdGVuY2UiLCJfcmVkaXJlY3RVc2VyRm9ySWQiLCJpZCIsIm5leHQiLCJjdXJyZW50VWlkIiwic3Vic2NyaXB0aW9uIiwiY2IiLCJ0aGVuIiwiYWRkT2JzZXJ2ZXIiLCJhY3Rpb24iLCJvcGVyYXRpb25zIiwiX2xvZ0ZyYW1ld29yayIsImZyYW1ld29yayIsInNvcnQiLCJfZ2V0RnJhbWV3b3JrcyIsImFwcElkIiwiaGVhcnRiZWF0c0hlYWRlciIsIm9wdGlvbmFsIiwiX2Nhc3RBdXRoIiwib2JzZXJ2ZXIiLCJhdXRoSW50ZXJuYWwiLCJkaXNhYmxlV2FybmluZ3MiLCJleHRyYWN0UHJvdG9jb2wiLCJwb3J0IiwiZXh0cmFjdEhvc3RBbmRQb3J0IiwicG9ydFN0ciIsInNldHRpbmdzIiwiZnJlZXplIiwiZW1pdEVtdWxhdG9yV2FybmluZyIsInByb3RvY29sRW5kIiwiaW5kZXhPZiIsInN1YnN0ciIsImF1dGhvcml0eSIsImV4ZWMiLCJob3N0QW5kUG9ydCIsInBvcCIsImJyYWNrZXRlZElQdjYiLCJwYXJzZVBvcnQiLCJhdHRhY2hCYW5uZXIiLCJlbCIsImNyZWF0ZUVsZW1lbnQiLCJzdHkiLCJzdHlsZSIsImlubmVyVGV4dCIsInBvc2l0aW9uIiwid2lkdGgiLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3JkZXIiLCJjb2xvciIsImJvdHRvbSIsImxlZnQiLCJtYXJnaW4iLCJ6SW5kZXgiLCJ0ZXh0QWxpZ24iLCJjbGFzc0xpc3QiLCJhZGQiLCJhcHBlbmRDaGlsZCIsImNvbnNvbGUiLCJpbmZvIiwicmVhZHlTdGF0ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJzaWduSW5NZXRob2QiLCJfZ2V0SWRUb2tlblJlc3BvbnNlIiwiX2F1dGgiLCJfbGlua1RvSWRUb2tlbiIsIl9pZFRva2VuIiwiX2dldFJlYXV0aGVudGljYXRpb25SZXNvbHZlciIsInJlc2V0UGFzc3dvcmQiLCJ1cGRhdGVFbWFpbFBhc3N3b3JkIiwic2lnbkluV2l0aFBhc3N3b3JkIiwic2VuZE9vYkNvZGUiLCJ2ZXJpZnlBbmRDaGFuZ2VFbWFpbCIsInNpZ25JbldpdGhFbWFpbExpbmtGb3JMaW5raW5nIiwiX2VtYWlsIiwiX3Bhc3N3b3JkIiwiX3RlbmFudElkIiwiX2Zyb21FbWFpbEFuZFBhc3N3b3JkIiwicGFzc3dvcmQiLCJfZnJvbUVtYWlsQW5kQ29kZSIsIm9vYkNvZGUiLCJvYmoiLCJyZXR1cm5TZWN1cmVUb2tlbiIsInNpZ25JbldpdGhJZHAiLCJJRFBfUkVRVUVTVF9VUkkiLCJwZW5kaW5nVG9rZW4iLCJfZnJvbVBhcmFtcyIsImNyZWQiLCJub25jZSIsIm9hdXRoVG9rZW4iLCJvYXV0aFRva2VuU2VjcmV0Iiwic2VjcmV0IiwiYnVpbGRSZXF1ZXN0IiwiYXV0b0NyZWF0ZSIsInJlcXVlc3RVcmkiLCJwb3N0Qm9keSIsInNlbmRQaG9uZVZlcmlmaWNhdGlvbkNvZGUiLCJfYWRkVGlkSWZOZWNlc3NhcnkiLCJ0ZW1wb3JhcnlQcm9vZiIsIlZFUklGWV9QSE9ORV9OVU1CRVJfRk9SX0VYSVNUSU5HX0VSUk9SX01BUF8iLCJ2ZXJpZnlQaG9uZU51bWJlckZvckV4aXN0aW5nIiwiYXBpUmVxdWVzdCIsIm9wZXJhdGlvbiIsIl9mcm9tVmVyaWZpY2F0aW9uIiwidmVyaWZpY2F0aW9uSWQiLCJ2ZXJpZmljYXRpb25Db2RlIiwiX2Zyb21Ub2tlblJlc3BvbnNlIiwiX21ha2VWZXJpZmljYXRpb25SZXF1ZXN0Iiwic2Vzc2lvbkluZm8iLCJwYXJzZU1vZGUiLCJtb2RlIiwicGFyc2VEZWVwTGluayIsImxpbmsiLCJkb3VibGVEZWVwTGluayIsImlPU0RlZXBMaW5rIiwiaU9TRG91YmxlRGVlcExpbmsiLCJhY3Rpb25MaW5rIiwic2VhcmNoUGFyYW1zIiwiY29udGludWVVcmwiLCJwYXJzZUxpbmsiLCJQUk9WSURFUl9JRCIsImNyZWRlbnRpYWwiLCJjcmVkZW50aWFsV2l0aExpbmsiLCJlbWFpbExpbmsiLCJhY3Rpb25Db2RlVXJsIiwiRmVkZXJhdGVkQXV0aFByb3ZpZGVyIiwiZGVmYXVsdExhbmd1YWdlQ29kZSIsImN1c3RvbVBhcmFtZXRlcnMiLCJzZXREZWZhdWx0TGFuZ3VhZ2UiLCJzZXRDdXN0b21QYXJhbWV0ZXJzIiwiY3VzdG9tT0F1dGhQYXJhbWV0ZXJzIiwiZ2V0Q3VzdG9tUGFyYW1ldGVycyIsIkJhc2VPQXV0aFByb3ZpZGVyIiwic2NvcGVzIiwiYWRkU2NvcGUiLCJzY29wZSIsImdldFNjb3BlcyIsImNyZWRlbnRpYWxGcm9tSlNPTiIsIl9jcmVkZW50aWFsIiwicmF3Tm9uY2UiLCJjcmVkZW50aWFsRnJvbVJlc3VsdCIsInVzZXJDcmVkZW50aWFsIiwib2F1dGhDcmVkZW50aWFsRnJvbVRhZ2dlZE9iamVjdCIsImNyZWRlbnRpYWxGcm9tRXJyb3IiLCJ0b2tlblJlc3BvbnNlIiwib2F1dGhJZFRva2VuIiwib2F1dGhBY2Nlc3NUb2tlbiIsIkZBQ0VCT09LX1NJR05fSU5fTUVUSE9EIiwiY3JlZGVudGlhbEZyb21UYWdnZWRPYmplY3QiLCJHT09HTEVfU0lHTl9JTl9NRVRIT0QiLCJHSVRIVUJfU0lHTl9JTl9NRVRIT0QiLCJTQU1MQXV0aENyZWRlbnRpYWwiLCJfY3JlYXRlIiwiU0FNTF9QUk9WSURFUl9QUkVGSVgiLCJzYW1sQ3JlZGVudGlhbEZyb21UYWdnZWRPYmplY3QiLCJUV0lUVEVSX1NJR05fSU5fTUVUSE9EIiwic2lnblVwIiwiVXNlckNyZWRlbnRpYWxJbXBsIiwib3BlcmF0aW9uVHlwZSIsInByb3ZpZGVySWRGb3JSZXNwb25zZSIsInVzZXJDcmVkIiwiX2Zvck9wZXJhdGlvbiIsIk11bHRpRmFjdG9yRXJyb3IiLCJzZXRQcm90b3R5cGVPZiIsInByb3RvdHlwZSIsIl9mcm9tRXJyb3JBbmRPcGVyYXRpb24iLCJfcHJvY2Vzc0NyZWRlbnRpYWxTYXZpbmdNZmFDb250ZXh0SWZOZWNlc3NhcnkiLCJpZFRva2VuUHJvdmlkZXIiLCJjYXRjaCIsInByb3ZpZGVyRGF0YUFzTmFtZXMiLCJTZXQiLCJwaWQiLCJfYXNzZXJ0TGlua2VkU3RhdHVzIiwiZGVsZXRlUHJvdmlkZXIiLCJwcm92aWRlcnNMZWZ0IiwicGQiLCJoYXMiLCJfbGluayIsImV4cGVjdGVkIiwicHJvdmlkZXJJZHMiLCJfcmVhdXRoZW50aWNhdGUiLCJwYXJzZWQiLCJzdWIiLCJfc2lnbkluV2l0aENyZWRlbnRpYWwiLCJjdXN0b21Ub2tlbiIsImdldElkVG9rZW5SZXNwb25zZSIsIk11bHRpRmFjdG9ySW5mb0ltcGwiLCJmYWN0b3JJZCIsIm1mYUVucm9sbG1lbnRJZCIsImVucm9sbG1lbnRUaW1lIiwiZW5yb2xsZWRBdCIsIl9mcm9tU2VydmVyUmVzcG9uc2UiLCJlbnJvbGxtZW50IiwiUGhvbmVNdWx0aUZhY3RvckluZm9JbXBsIiwicGhvbmVJbmZvIiwiX3NldEFjdGlvbkNvZGVTZXR0aW5nc09uUmVxdWVzdCIsImFjdGlvbkNvZGVTZXR0aW5ncyIsImR5bmFtaWNMaW5rRG9tYWluIiwiY2FuSGFuZGxlQ29kZUluQXBwIiwiaGFuZGxlQ29kZUluQXBwIiwiaU9TIiwiYnVuZGxlSWQiLCJpT1NCdW5kbGVJZCIsImFuZHJvaWQiLCJwYWNrYWdlTmFtZSIsImFuZHJvaWRJbnN0YWxsQXBwIiwiaW5zdGFsbEFwcCIsImFuZHJvaWRNaW5pbXVtVmVyc2lvbkNvZGUiLCJtaW5pbXVtVmVyc2lvbiIsImFuZHJvaWRQYWNrYWdlTmFtZSIsImF1dGhNb2R1bGFyIiwicmVxdWVzdFR5cGUiLCJhdXRoZW50aWNhdGlvbi5zZW5kUGFzc3dvcmRSZXNldEVtYWlsIiwibmV3UGFzc3dvcmQiLCJhY2NvdW50LnJlc2V0UGFzc3dvcmQiLCJhY2NvdW50LmFwcGx5QWN0aW9uQ29kZSIsIm5ld0VtYWlsIiwibWZhSW5mbyIsIm11bHRpRmFjdG9ySW5mbyIsImRhdGEiLCJwcmV2aW91c0VtYWlsIiwiYXBpLnNlbmRTaWduSW5MaW5rVG9FbWFpbCIsImNyZWF0ZUF1dGhVcmkiLCJjb250aW51ZVVyaSIsImlkZW50aWZpZXIiLCJzaWduaW5NZXRob2RzIiwiYXBpLnNlbmRFbWFpbFZlcmlmaWNhdGlvbiIsImFwaS52ZXJpZnlBbmRDaGFuZ2VFbWFpbCIsInByb2ZpbGVSZXF1ZXN0IiwiYXBpVXBkYXRlUHJvZmlsZSIsInBhc3N3b3JkUHJvdmlkZXIiLCJmaW5kIiwidXBkYXRlRW1haWxPclBhc3N3b3JkIiwiYXBpVXBkYXRlRW1haWxQYXNzd29yZCIsInByb2ZpbGUiLCJyYXdVc2VySW5mbyIsImlzTmV3VXNlciIsImtpbmQiLCJmaWx0ZXJlZFByb3ZpZGVySWQiLCJHZW5lcmljQWRkaXRpb25hbFVzZXJJbmZvIiwiRmFjZWJvb2tBZGRpdGlvbmFsVXNlckluZm8iLCJHaXRodWJBZGRpdGlvbmFsVXNlckluZm8iLCJHb29nbGVBZGRpdGlvbmFsVXNlckluZm8iLCJUd2l0dGVyQWRkaXRpb25hbFVzZXJJbmZvIiwic2NyZWVuTmFtZSIsIkZlZGVyYXRlZEFkZGl0aW9uYWxVc2VySW5mb1dpdGhVc2VybmFtZSIsInVzZXJuYW1lIiwibG9naW4iLCJNdWx0aUZhY3RvclNlc3Npb25JbXBsIiwiX2Zyb21JZHRva2VuIiwiX2Zyb21NZmFQZW5kaW5nQ3JlZGVudGlhbCIsIm1mYVBlbmRpbmdDcmVkZW50aWFsIiwibXVsdGlGYWN0b3JTZXNzaW9uIiwicGVuZGluZ0NyZWRlbnRpYWwiLCJNdWx0aUZhY3RvclJlc29sdmVySW1wbCIsInNlc3Npb24iLCJoaW50cyIsInNpZ25JblJlc29sdmVyIiwiX2Zyb21FcnJvciIsImF1dGhFeHRlcm4iLCJtZmFSZXNwb25zZSIsIl9wcm9jZXNzIiwicmVzb2x2ZVNpZ25JbiIsImFzc2VydGlvbkV4dGVybiIsImVycm9ySW50ZXJuYWwiLCJNdWx0aUZhY3RvclVzZXJJbXBsIiwiZW5yb2xsZWRGYWN0b3JzIiwiX2Zyb21Vc2VyIiwiZ2V0U2Vzc2lvbiIsImVucm9sbCIsImZpbmFsaXplTWZhUmVzcG9uc2UiLCJ1bmVucm9sbCIsImluZm9PclVpZCIsIndpdGhkcmF3TWZhIiwibXVsdGlGYWN0b3JVc2VyQ2FjaGUiLCJXZWFrTWFwIiwidXNlck1vZHVsYXIiLCJTVE9SQUdFX0FWQUlMQUJMRV9LRVkiLCJCcm93c2VyUGVyc2lzdGVuY2VDbGFzcyIsInN0b3JhZ2VSZXRyaWV2ZXIiLCJzZXRJdGVtIiwicmVtb3ZlSXRlbSIsImdldEl0ZW0iLCJfaWZyYW1lQ2Fubm90U3luY1dlYlN0b3JhZ2UiLCJfUE9MTElOR19JTlRFUlZBTF9NUyIsIklFMTBfTE9DQUxfU1RPUkFHRV9TWU5DX0RFTEFZIiwiQnJvd3NlckxvY2FsUGVyc2lzdGVuY2UiLCJsb2NhbFN0b3JhZ2UiLCJldmVudCIsInBvbGwiLCJvblN0b3JhZ2VFdmVudCIsImxpc3RlbmVycyIsImxvY2FsQ2FjaGUiLCJwb2xsVGltZXIiLCJmYWxsYmFja1RvUG9sbGluZyIsIl9pc01vYmlsZUJyb3dzZXIiLCJmb3JBbGxDaGFuZ2VkS2V5cyIsImtleXMiLCJuZXdWYWx1ZSIsIm9sZFZhbHVlIiwiX29sZFZhbHVlIiwibm90aWZ5TGlzdGVuZXJzIiwiZGV0YWNoTGlzdGVuZXIiLCJzdG9wUG9sbGluZyIsInNhZmFyaUxvY2FsU3RvcmFnZU5vdFN5bmNlZCIsInN0b3JlZFZhbHVlIiwidHJpZ2dlckxpc3RlbmVycyIsImxpc3RlbmVyIiwiZnJvbSIsInN0YXJ0UG9sbGluZyIsInNldEludGVydmFsIiwiU3RvcmFnZUV2ZW50IiwiY2xlYXJJbnRlcnZhbCIsImF0dGFjaExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInNpemUiLCJCcm93c2VyU2Vzc2lvblBlcnNpc3RlbmNlIiwic2Vzc2lvblN0b3JhZ2UiLCJfYWxsU2V0dGxlZCIsInByb21pc2VzIiwiZnVsZmlsbGVkIiwicmVhc29uIiwiUmVjZWl2ZXIiLCJldmVudFRhcmdldCIsImhhbmRsZXJzTWFwIiwiaGFuZGxlRXZlbnQiLCJleGlzdGluZ0luc3RhbmNlIiwicmVjZWl2ZXJzIiwicmVjZWl2ZXIiLCJpc0xpc3RlbmluZ3RvIiwibmV3SW5zdGFuY2UiLCJtZXNzYWdlRXZlbnQiLCJldmVudElkIiwiZXZlbnRUeXBlIiwiaGFuZGxlcnMiLCJwb3J0cyIsInBvc3RNZXNzYWdlIiwic3RhdHVzIiwiaGFuZGxlciIsIm9yaWdpbiIsIl9zdWJzY3JpYmUiLCJldmVudEhhbmRsZXIiLCJfdW5zdWJzY3JpYmUiLCJfZ2VuZXJhdGVFdmVudElkIiwicHJlZml4IiwiZGlnaXRzIiwicmFuZG9tIiwiaSIsImZsb29yIiwiU2VuZGVyIiwidGFyZ2V0IiwicmVtb3ZlTWVzc2FnZUhhbmRsZXIiLCJtZXNzYWdlQ2hhbm5lbCIsInBvcnQxIiwib25NZXNzYWdlIiwiY2xvc2UiLCJfc2VuZCIsInRpbWVvdXQiLCJNZXNzYWdlQ2hhbm5lbCIsImNvbXBsZXRpb25UaW1lciIsInN0YXJ0IiwiYWNrVGltZXIiLCJwb3J0MiIsImZpbmFsbHkiLCJfd2luZG93IiwiX3NldFdpbmRvd0xvY2F0aW9uIiwiX2lzV29ya2VyIiwiX2dldEFjdGl2ZVNlcnZpY2VXb3JrZXIiLCJzZXJ2aWNlV29ya2VyIiwicmVnaXN0cmF0aW9uIiwicmVhZHkiLCJhY3RpdmUiLCJfZ2V0U2VydmljZVdvcmtlckNvbnRyb2xsZXIiLCJjb250cm9sbGVyIiwiX2dldFdvcmtlckdsb2JhbFNjb3BlIiwiREJfTkFNRSIsIkRCX1ZFUlNJT04iLCJEQl9PQkpFQ1RTVE9SRV9OQU1FIiwiREJfREFUQV9LRVlQQVRIIiwiREJQcm9taXNlIiwidG9Qcm9taXNlIiwiZ2V0T2JqZWN0U3RvcmUiLCJkYiIsImlzUmVhZFdyaXRlIiwidHJhbnNhY3Rpb24iLCJvYmplY3RTdG9yZSIsIl9kZWxldGVEYXRhYmFzZSIsImluZGV4ZWREQiIsImRlbGV0ZURhdGFiYXNlIiwiX29wZW5EYXRhYmFzZSIsIm9wZW4iLCJjcmVhdGVPYmplY3RTdG9yZSIsImtleVBhdGgiLCJvYmplY3RTdG9yZU5hbWVzIiwiY29udGFpbnMiLCJfcHV0T2JqZWN0IiwicHV0IiwiZ2V0T2JqZWN0IiwiX1RSQU5TQUNUSU9OX1JFVFJZX0NPVU5UIiwiSW5kZXhlZERCTG9jYWxQZXJzaXN0ZW5jZSIsInBlbmRpbmdXcml0ZXMiLCJzZW5kZXIiLCJzZXJ2aWNlV29ya2VyUmVjZWl2ZXJBdmFpbGFibGUiLCJhY3RpdmVTZXJ2aWNlV29ya2VyIiwiX3dvcmtlckluaXRpYWxpemF0aW9uUHJvbWlzZSIsImluaXRpYWxpemVTZXJ2aWNlV29ya2VyTWVzc2FnaW5nIiwiX29wZW5EYiIsIl93aXRoUmV0cmllcyIsIm9wIiwibnVtQXR0ZW1wdHMiLCJpbml0aWFsaXplUmVjZWl2ZXIiLCJpbml0aWFsaXplU2VuZGVyIiwiX29yaWdpbiIsIl9wb2xsIiwia2V5UHJvY2Vzc2VkIiwiX2RhdGEiLCJyZXN1bHRzIiwibm90aWZ5U2VydmljZVdvcmtlciIsIl9kZWxldGVPYmplY3QiLCJfd2l0aFBlbmRpbmdXcml0ZSIsIndyaXRlIiwiZ2V0QWxsUmVxdWVzdCIsImdldEFsbCIsImtleXNJblJlc3VsdCIsImZiYXNlX2tleSIsImxvY2FsS2V5IiwiZ2V0UmVjYXB0Y2hhUGFyYW1zIiwicmVjYXB0Y2hhU2l0ZUtleSIsImdldFNjcmlwdFBhcmVudEVsZW1lbnQiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsIl9sb2FkSlMiLCJzZXRBdHRyaWJ1dGUiLCJvbmxvYWQiLCJvbmVycm9yIiwiY2hhcnNldCIsIl9nZW5lcmF0ZUNhbGxiYWNrTmFtZSIsIl9TT0xWRV9USU1FX01TIiwiX0VYUElSQVRJT05fVElNRV9NUyIsIl9XSURHRVRfSURfU1RBUlQiLCJNb2NrUmVDYXB0Y2hhIiwiY291bnRlciIsInJlbmRlciIsImNvbnRhaW5lciIsInBhcmFtZXRlcnMiLCJfd2lkZ2V0cyIsIk1vY2tXaWRnZXQiLCJyZXNldCIsIm9wdFdpZGdldElkIiwiZ2V0UmVzcG9uc2UiLCJleGVjdXRlIiwiY29udGFpbmVyT3JJZCIsImRlbGV0ZWQiLCJyZXNwb25zZVRva2VuIiwiY2xpY2tIYW5kbGVyIiwiZ2V0RWxlbWVudEJ5SWQiLCJpc1Zpc2libGUiLCJjaGVja0lmRGVsZXRlZCIsImdlbmVyYXRlUmFuZG9tQWxwaGFOdW1lcmljU3RyaW5nIiwiZXhwaXJlZENhbGxiYWNrIiwibGVuIiwiY2hhcnMiLCJhbGxvd2VkQ2hhcnMiLCJjaGFyQXQiLCJfSlNMT0FEX0NBTExCQUNLIiwianNIZWxwZXJzLl9nZW5lcmF0ZUNhbGxiYWNrTmFtZSIsIk5FVFdPUktfVElNRU9VVF9ERUxBWSIsIlJFQ0FQVENIQV9CQVNFIiwiUmVDYXB0Y2hhTG9hZGVySW1wbCIsImhvc3RMYW5ndWFnZSIsImdyZWNhcHRjaGEiLCJsb2FkIiwiaGwiLCJpc0hvc3RMYW5ndWFnZVZhbGlkIiwic2hvdWxkUmVzb2x2ZUltbWVkaWF0ZWx5IiwicmVjYXB0Y2hhIiwid2lkZ2V0SWQiLCJqc0hlbHBlcnMuX2xvYWRKUyIsImNsZWFyZWRPbmVJbnN0YW5jZSIsImxpYnJhcnlTZXBhcmF0ZWx5TG9hZGVkIiwiTW9ja1JlQ2FwdGNoYUxvYWRlckltcGwiLCJSRUNBUFRDSEFfVkVSSUZJRVJfVFlQRSIsIkRFRkFVTFRfUEFSQU1TIiwidGhlbWUiLCJkZXN0cm95ZWQiLCJyZW5kZXJQcm9taXNlIiwiaXNJbnZpc2libGUiLCJtYWtlVG9rZW5DYWxsYmFjayIsIl9yZWNhcHRjaGFMb2FkZXIiLCJ2YWxpZGF0ZVN0YXJ0aW5nU3RhdGUiLCJ2ZXJpZnkiLCJhc3NlcnROb3REZXN0cm95ZWQiLCJnZXRBc3NlcnRlZFJlY2FwdGNoYSIsInRva2VuQ2hhbmdlIiwidG9rZW5DaGFuZ2VMaXN0ZW5lcnMiLCJtYWtlUmVuZGVyUHJvbWlzZSIsIl9yZXNldCIsImNsZWFyIiwiY2hpbGROb2RlcyIsImZvckVhY2giLCJub2RlIiwicmVtb3ZlQ2hpbGQiLCJzaXRla2V5IiwiaGFzQ2hpbGROb2RlcyIsImV4aXN0aW5nIiwiZ2xvYmFsRnVuYyIsImluaXQiLCJndWFyYW50ZWVkRW1wdHkiLCJkb21SZWFkeSIsInNpdGVLZXkiLCJDb25maXJtYXRpb25SZXN1bHRJbXBsIiwib25Db25maXJtYXRpb24iLCJjb25maXJtIiwiYXV0aENyZWRlbnRpYWwiLCJhcHBWZXJpZmllciIsIl92ZXJpZnlQaG9uZU51bWJlciIsInZlcmlmaWVyIiwicmVjYXB0Y2hhVG9rZW4iLCJwaG9uZUluZm9PcHRpb25zIiwic3RhcnRFbnJvbGxQaG9uZU1mYSIsInBob25lRW5yb2xsbWVudEluZm8iLCJwaG9uZVNlc3Npb25JbmZvIiwibXVsdGlGYWN0b3JIaW50IiwibXVsdGlGYWN0b3JVaWQiLCJzdGFydFNpZ25JblBob25lTWZhIiwicGhvbmVTaWduSW5JbmZvIiwicGhvbmVSZXNwb25zZUluZm8iLCJ2ZXJpZnlQaG9uZU51bWJlciIsInBob25lT3B0aW9ucyIsImFwcGxpY2F0aW9uVmVyaWZpZXIiLCJyZXNvbHZlck92ZXJyaWRlIiwiSWRwQ3JlZGVudGlhbCIsIl9idWlsZElkcFJlcXVlc3QiLCJzZXNzaW9uSWQiLCJyZXR1cm5JZHBDcmVkZW50aWFsIiwiX3NpZ25JbiIsIl9yZWF1dGgiLCJfbGlua1VzZXIiLCJBYnN0cmFjdFBvcHVwUmVkaXJlY3RPcGVyYXRpb24iLCJwZW5kaW5nUHJvbWlzZSIsImV2ZW50TWFuYWdlciIsIm9uRXhlY3V0aW9uIiwicmVnaXN0ZXJDb25zdW1lciIsIm9uQXV0aEV2ZW50IiwidXJsUmVzcG9uc2UiLCJnZXRJZHBUYXNrIiwib25FcnJvciIsInVucmVnaXN0ZXJBbmRDbGVhblVwIiwidW5yZWdpc3RlckNvbnN1bWVyIiwiY2xlYW5VcCIsIl9QT0xMX1dJTkRPV19DTE9TRV9USU1FT1VUIiwicmVzb2x2ZXJJbnRlcm5hbCIsIl93aXRoRGVmYXVsdFJlc29sdmVyIiwiUG9wdXBPcGVyYXRpb24iLCJleGVjdXRlTm90TnVsbCIsImF1dGhXaW5kb3ciLCJwb2xsSWQiLCJjdXJyZW50UG9wdXBBY3Rpb24iLCJjYW5jZWwiLCJfb3BlblBvcHVwIiwiYXNzb2NpYXRlZEV2ZW50IiwiX29yaWdpblZhbGlkYXRpb24iLCJfaXNJZnJhbWVXZWJTdG9yYWdlU3VwcG9ydGVkIiwiaXNTdXBwb3J0ZWQiLCJwb2xsVXNlckNhbmNlbGxhdGlvbiIsIlBFTkRJTkdfUkVESVJFQ1RfS0VZIiwicmVkaXJlY3RPdXRjb21lTWFwIiwiUmVkaXJlY3RBY3Rpb24iLCJyZWFkeU91dGNvbWUiLCJoYXNQZW5kaW5nUmVkaXJlY3QiLCJfZ2V0QW5kQ2xlYXJQZW5kaW5nUmVkaXJlY3RTdGF0dXMiLCJwZW5kaW5nUmVkaXJlY3RLZXkiLCJyZXNvbHZlclBlcnNpc3RlbmNlIiwiX3NldFBlbmRpbmdSZWRpcmVjdFN0YXR1cyIsIl9jbGVhclJlZGlyZWN0T3V0Y29tZXMiLCJfc2lnbkluV2l0aFJlZGlyZWN0IiwiX29wZW5SZWRpcmVjdCIsIl9yZWF1dGhlbnRpY2F0ZVdpdGhSZWRpcmVjdCIsInByZXBhcmVVc2VyRm9yUmVkaXJlY3QiLCJfbGlua1dpdGhSZWRpcmVjdCIsIl9nZXRSZWRpcmVjdFJlc3VsdCIsInJlc29sdmVyRXh0ZXJuIiwiRVZFTlRfRFVQTElDQVRJT05fQ0FDSEVfRFVSQVRJT05fTVMiLCJBdXRoRXZlbnRNYW5hZ2VyIiwicXVldWVkUmVkaXJlY3RFdmVudCIsImhhc0hhbmRsZWRQb3RlbnRpYWxSZWRpcmVjdCIsImF1dGhFdmVudENvbnN1bWVyIiwiY29uc3VtZXJzIiwiaXNFdmVudEZvckNvbnN1bWVyIiwic2VuZFRvQ29uc3VtZXIiLCJzYXZlRXZlbnRUb0NhY2hlIiwib25FdmVudCIsImhhc0V2ZW50QmVlbkhhbmRsZWQiLCJoYW5kbGVkIiwiY29uc3VtZXIiLCJpc1JlZGlyZWN0RXZlbnQiLCJpc051bGxSZWRpcmVjdEV2ZW50IiwiZXZlbnRJZE1hdGNoZXMiLCJsYXN0UHJvY2Vzc2VkRXZlbnRUaW1lIiwiY2FjaGVkRXZlbnRVaWRzIiwiZXZlbnRVaWQiLCJ2IiwiX2dldFByb2plY3RDb25maWciLCJJUF9BRERSRVNTX1JFR0VYIiwiSFRUUF9SRUdFWCIsIl92YWxpZGF0ZU9yaWdpbiIsImF1dGhvcml6ZWREb21haW5zIiwiZG9tYWluIiwibWF0Y2hEb21haW4iLCJjdXJyZW50VXJsIiwiaG9zdG5hbWUiLCJVUkwiLCJjZVVybCIsImVzY2FwZWREb21haW5QYXR0ZXJuIiwiUmVnRXhwIiwiTkVUV09SS19USU1FT1VUIiwicmVzZXRVbmxvYWRlZEdhcGlNb2R1bGVzIiwiYmVhY29uIiwiX19fanNsIiwiSCIsImhpbnQiLCJyIiwiTCIsIkNQIiwibG9hZEdhcGkiLCJsb2FkR2FwaUlmcmFtZSIsImdhcGkiLCJpZnJhbWVzIiwiZ2V0Q29udGV4dCIsIm9udGltZW91dCIsImNiTmFtZSIsImpzLl9nZW5lcmF0ZUNhbGxiYWNrTmFtZSIsImpzXHJcbiAgICAgICAgICAgICAgICAuX2xvYWRKUyIsImNhY2hlZEdBcGlMb2FkZXIiLCJfbG9hZEdhcGkiLCJQSU5HX1RJTUVPVVQiLCJJRlJBTUVfUEFUSCIsIkVNVUxBVEVEX0lGUkFNRV9QQVRIIiwiSUZSQU1FX0FUVFJJQlVURVMiLCJoZWlnaHQiLCJ0YWJpbmRleCIsIkVJRF9GUk9NX0FQSUhPU1QiLCJnZXRJZnJhbWVVcmwiLCJlaWQiLCJmdyIsIl9vcGVuSWZyYW1lIiwiY29udGV4dCIsImdhcGlMb2FkZXIuX2xvYWRHYXBpIiwid2hlcmUiLCJtZXNzYWdlSGFuZGxlcnNGaWx0ZXIiLCJDUk9TU19PUklHSU5fSUZSQU1FU19GSUxURVIiLCJhdHRyaWJ1dGVzIiwiZG9udGNsZWFyIiwiaWZyYW1lIiwicmVzdHlsZSIsInNldEhpZGVPbkxlYXZlIiwibmV0d29ya0Vycm9yIiwibmV0d29ya0Vycm9yVGltZXIiLCJjbGVhclRpbWVyQW5kUmVzb2x2ZSIsInBpbmciLCJCQVNFX1BPUFVQX09QVElPTlMiLCJyZXNpemFibGUiLCJzdGF0dXNiYXIiLCJ0b29sYmFyIiwiREVGQVVMVF9XSURUSCIsIkRFRkFVTFRfSEVJR0hUIiwiVEFSR0VUX0JMQU5LIiwiRklSRUZPWF9FTVBUWV9VUkwiLCJBdXRoUG9wdXAiLCJzY3JlZW4iLCJhdmFpbEhlaWdodCIsImF2YWlsV2lkdGgiLCJzY3JvbGxiYXJzIiwib3B0aW9uc1N0cmluZyIsImVudHJpZXMiLCJyZWR1Y2UiLCJhY2N1bSIsIm9wZW5Bc05ld1dpbmRvd0lPUyIsIm5ld1dpbiIsImZvY3VzIiwiY2xpY2siLCJjcmVhdGVFdmVudCIsImluaXRNb3VzZUV2ZW50IiwiZGlzcGF0Y2hFdmVudCIsIldJREdFVF9QQVRIIiwiRU1VTEFUT1JfV0lER0VUX1BBVEgiLCJhdXRoVHlwZSIsInJlZGlyZWN0VXJsIiwiYWRkaXRpb25hbFBhcmFtcyIsInRpZCIsInBhcmFtc0RpY3QiLCJnZXRIYW5kbGVyQmFzZSIsIldFQl9TVE9SQUdFX1NVUFBPUlRfS0VZIiwiQnJvd3NlclBvcHVwUmVkaXJlY3RSZXNvbHZlciIsImV2ZW50TWFuYWdlcnMiLCJvcmlnaW5WYWxpZGF0aW9uUHJvbWlzZXMiLCJfZ2V0UmVkaXJlY3RVcmwiLCJfb3BlbiIsImluaXRBbmRHZXRNYW5hZ2VyIiwicmVnaXN0ZXIiLCJpZnJhbWVFdmVudCIsImF1dGhFdmVudCIsInNlbmQiLCJNdWx0aUZhY3RvckFzc2VydGlvbkltcGwiLCJfZmluYWxpemVFbnJvbGwiLCJfZmluYWxpemVTaWduSW4iLCJQaG9uZU11bHRpRmFjdG9yQXNzZXJ0aW9uSW1wbCIsIl9mcm9tQ3JlZGVudGlhbCIsImZpbmFsaXplRW5yb2xsUGhvbmVNZmEiLCJwaG9uZVZlcmlmaWNhdGlvbkluZm8iLCJmaW5hbGl6ZVNpZ25JblBob25lTWZhIiwiRkFDVE9SX0lEIiwiQXV0aEludGVyb3AiLCJnZXRVaWQiLCJhc3NlcnRBdXRoQ29uZmlndXJlZCIsImFkZEF1dGhUb2tlbkxpc3RlbmVyIiwiaW50ZXJuYWxMaXN0ZW5lcnMiLCJ1bnN1YnNjcmliZSIsInVwZGF0ZVByb2FjdGl2ZVJlZnJlc2giLCJyZW1vdmVBdXRoVG9rZW5MaXN0ZW5lciIsImdldFZlcnNpb25Gb3JQbGF0Zm9ybSIsInJlZ2lzdGVyQXV0aCIsImltcG9ydF9jb21wb25lbnQiLCJnZXRQcm92aWRlciIsImF1dGhJbnN0YW5jZSIsIl9pbml0aWFsaXplQXV0aEluc3RhbmNlIiwic2V0SW5zdGFudGlhdGlvbk1vZGUiLCJzZXRJbnN0YW5jZUNyZWF0ZWRDYWxsYmFjayIsIl9pbnN0YW5jZUlkZW50aWZpZXIiLCJfaW5zdGFuY2UiLCJhdXRoSW50ZXJuYWxQcm92aWRlciIsInZlcnNpb24iLCJERUZBVUxUX0lEX1RPS0VOX01BWF9BR0UiLCJhdXRoSWRUb2tlbk1heEFnZSIsImxhc3RQb3N0ZWRJZFRva2VuIiwibWludENvb2tpZUZhY3RvcnkiLCJpZFRva2VuUmVzdWx0IiwiaWRUb2tlbkFnZSIsImF1dGhUb2tlblN5bmNVcmwiLCJtaW50Q29va2llIiwiYXV0aEVtdWxhdG9ySG9zdCIsInJlcXVpcmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUFBO0VBQUFDO0VBQUFDO0VBQUFDO0VBQUFDO0VBQUFDO0VBQUFDO0VBQUFDO0VBQUFDO0VBQUFDO0VBQUFDO0VBQUFDO0VBQUFDO0VBQUFDO0VBQUFDO0VBQUFDO0VBQUFDO0VBQUFDO0VBQUFDO0VBQUFDO0VBQUFDO0VBQUFDO0VBQUFDO0VBQUFDO0VBQUFDO0VBQUFDO0VBQUFDO0VBQUFDO0VBQUFDO0VBQUFDO0VBQUFDO0VBQUFDO0VBQUFDO0VBQUFDO0VBQUFDO0VBQUFDO0VBQUFDO0VBQUFDO0VB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