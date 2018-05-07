/// hapi-auth-cookie headers

import { Request, Plugin } from "hapi";

declare module 'hapi' {
  interface ServerAuth {
    strategy(name: string, scheme: 'cookie', options?: HapiAuthCookie.RegisterOptions): void;
  }
}

declare namespace HapiAuthCookie {
  interface RegisterOptions {
    cookie?: string;
    password: string;
    ttl?: number;
    domain?: string;
    path?: string;
    clearInvalid?: boolean;
    keepAlive?: boolean;
    isSameSite?: boolean;
    isSecure?: boolean;
    isHttpOnly?: boolean;
    redirectTo: string;
    appendNext?: boolean;
    redirectOnTry?: boolean;
    requestDecoratorName?: string;

    validateFunc?(request: Request, session: object): Promise<{
      valid: boolean;
      credentials: object;
    }>
  }
}

declare const HapiAuthCookie = Plugin<HapiAuthCookie.RegisterOptions>;

export = HapiAuthCookie;
