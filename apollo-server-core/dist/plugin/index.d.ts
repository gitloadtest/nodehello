import type { ApolloServerPlugin } from 'apollo-server-plugin-base';
import type { ApolloServerPluginUsageReportingOptions } from './usageReporting';
export type { ApolloServerPluginUsageReportingOptions, SendValuesBaseOptions, VariableValueOptions, ClientInfo, GenerateClientInfo, } from './usageReporting';
export declare function ApolloServerPluginUsageReporting<TContext>(options?: ApolloServerPluginUsageReportingOptions<TContext>): ApolloServerPlugin;
export declare function ApolloServerPluginUsageReportingDisabled(): ApolloServerPlugin;
import type { ApolloServerPluginSchemaReportingOptions } from './schemaReporting';
export type { ApolloServerPluginSchemaReportingOptions } from './schemaReporting';
export declare function ApolloServerPluginSchemaReporting(options?: ApolloServerPluginSchemaReportingOptions): ApolloServerPlugin;
import type { ApolloServerPluginInlineTraceOptions } from './inlineTrace';
export type { ApolloServerPluginInlineTraceOptions } from './inlineTrace';
export declare function ApolloServerPluginInlineTrace(options?: ApolloServerPluginInlineTraceOptions): ApolloServerPlugin;
export declare function ApolloServerPluginInlineTraceDisabled(): ApolloServerPlugin;
import type { ApolloServerPluginCacheControlOptions } from './cacheControl';
export type { ApolloServerPluginCacheControlOptions } from './cacheControl';
export declare function ApolloServerPluginCacheControl(options?: ApolloServerPluginCacheControlOptions): ApolloServerPlugin;
export declare function ApolloServerPluginCacheControlDisabled(): ApolloServerPlugin;
import type { ApolloServerPluginDrainHttpServerOptions } from './drainHttpServer';
export type { ApolloServerPluginDrainHttpServerOptions } from './drainHttpServer';
export declare function ApolloServerPluginDrainHttpServer(options: ApolloServerPluginDrainHttpServerOptions): ApolloServerPlugin;
export declare function ApolloServerPluginLandingPageDisabled(): ApolloServerPlugin;
import type { ApolloServerPluginLandingPageLocalDefaultOptions, ApolloServerPluginLandingPageProductionDefaultOptions } from './landingPage/default/types';
export type { ApolloServerPluginLandingPageDefaultBaseOptions, ApolloServerPluginLandingPageLocalDefaultOptions, ApolloServerPluginLandingPageProductionDefaultOptions, } from './landingPage/default/types';
export declare function ApolloServerPluginLandingPageLocalDefault(options?: ApolloServerPluginLandingPageLocalDefaultOptions): ApolloServerPlugin;
export declare function ApolloServerPluginLandingPageProductionDefault(options?: ApolloServerPluginLandingPageProductionDefaultOptions): ApolloServerPlugin;
import type { ApolloServerPluginLandingPageGraphQLPlaygroundOptions } from './landingPage/graphqlPlayground';
export type { ApolloServerPluginLandingPageGraphQLPlaygroundOptions } from './landingPage/graphqlPlayground';
export declare function ApolloServerPluginLandingPageGraphQLPlayground(options?: ApolloServerPluginLandingPageGraphQLPlaygroundOptions): ApolloServerPlugin;
//# sourceMappingURL=index.d.ts.map