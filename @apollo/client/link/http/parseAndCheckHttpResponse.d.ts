import { Operation } from "../core";
import { Observer } from "../../utilities";
export type ServerParseError = Error & {
    response: Response;
    statusCode: number;
    bodyText: string;
};
export declare function readMultipartBody<T extends object = Record<string, unknown>>(response: Response, observer: Observer<T>): Promise<void>;
export declare function parseHeaders(headerText: string): Record<string, string>;
export declare function parseJsonBody<T>(response: Response, bodyText: string): T;
export declare function handleError(err: any, observer: Observer<any>): void;
export declare function readJsonBody<T = Record<string, unknown>>(response: Response, operation: Operation, observer: Observer<T>): void;
export declare function parseAndCheckHttpResponse(operations: Operation | Operation[]): (response: Response) => Promise<any>;
//# sourceMappingURL=parseAndCheckHttpResponse.d.ts.map