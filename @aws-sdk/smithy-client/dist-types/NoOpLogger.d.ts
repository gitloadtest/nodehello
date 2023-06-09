import { Logger } from "@aws-sdk/types";
/**
 * @internal
 */
export declare class NoOpLogger implements Logger {
    trace(): void;
    debug(): void;
    info(): void;
    warn(): void;
    error(): void;
}
