import { ASTNode, print } from 'graphql';
import { Operation } from '../core';
export interface Printer {
    (node: ASTNode, originalPrint: typeof print): string;
}
export interface UriFunction {
    (operation: Operation): string;
}
export interface Body {
    query?: string;
    operationName?: string;
    variables?: Record<string, any>;
    extensions?: Record<string, any>;
}
export interface HttpOptions {
    uri?: string | UriFunction;
    includeExtensions?: boolean;
    fetch?: WindowOrWorkerGlobalScope['fetch'];
    headers?: Record<string, string>;
    preserveHeaderCase?: boolean;
    credentials?: string;
    fetchOptions?: any;
    useGETForQueries?: boolean;
    includeUnusedVariables?: boolean;
    print?: Printer;
}
export interface HttpQueryOptions {
    includeQuery?: boolean;
    includeExtensions?: boolean;
    preserveHeaderCase?: boolean;
}
export interface HttpConfig {
    http?: HttpQueryOptions;
    options?: any;
    headers?: Record<string, string>;
    credentials?: any;
}
export declare const fallbackHttpConfig: {
    http: HttpQueryOptions;
    headers: {
        accept: string;
        'content-type': string;
    };
    options: {
        method: string;
    };
};
export declare const defaultPrinter: Printer;
export declare function selectHttpOptionsAndBody(operation: Operation, fallbackConfig: HttpConfig, ...configs: Array<HttpConfig>): {
    options: HttpConfig & Record<string, any>;
    body: Body;
};
export declare function selectHttpOptionsAndBodyInternal(operation: Operation, printer: Printer, ...configs: HttpConfig[]): {
    options: HttpConfig & Record<string, any>;
    body: Body;
};
//# sourceMappingURL=selectHttpOptionsAndBody.d.ts.map