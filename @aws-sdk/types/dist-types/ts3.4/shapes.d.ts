import { HttpResponse } from "./http";
import { MetadataBearer } from "./response";
export type DocumentType =
  | null
  | boolean
  | number
  | string
  | DocumentType[]
  | {
      [prop: string]: DocumentType;
    };
export interface RetryableTrait {
  readonly throttling?: boolean;
}
export interface SmithyException {
  readonly name: string;
  readonly $fault: "client" | "server";
  readonly $service?: string;
  readonly $retryable?: RetryableTrait;
  readonly $response?: HttpResponse;
}
export type SdkError = Error &
  Partial<SmithyException> &
  Partial<MetadataBearer>;
