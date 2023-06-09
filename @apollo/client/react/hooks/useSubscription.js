import "../../utilities/globals/index.js";
import { useState, useRef, useEffect } from 'react';
import { invariant } from "../../utilities/globals/index.js";
import { equal } from '@wry/equality';
import { DocumentType, verifyDocumentType } from "../parser/index.js";
import { useApolloClient } from "./useApolloClient.js";
export function useSubscription(subscription, options) {
    var hasIssuedDeprecationWarningRef = useRef(false);
    var client = useApolloClient(options === null || options === void 0 ? void 0 : options.client);
    verifyDocumentType(subscription, DocumentType.Subscription);
    var _a = useState({
        loading: !(options === null || options === void 0 ? void 0 : options.skip),
        error: void 0,
        data: void 0,
        variables: options === null || options === void 0 ? void 0 : options.variables,
    }), result = _a[0], setResult = _a[1];
    if (!hasIssuedDeprecationWarningRef.current) {
        hasIssuedDeprecationWarningRef.current = true;
        if (options === null || options === void 0 ? void 0 : options.onSubscriptionData) {
            __DEV__ && invariant.warn(options.onData
                ? "'useSubscription' supports only the 'onSubscriptionData' or 'onData' option, but not both. Only the 'onData' option will be used."
                : "'onSubscriptionData' is deprecated and will be removed in a future major version. Please use the 'onData' option instead.");
        }
        if (options === null || options === void 0 ? void 0 : options.onSubscriptionComplete) {
            __DEV__ && invariant.warn(options.onComplete
                ? "'useSubscription' supports only the 'onSubscriptionComplete' or 'onComplete' option, but not both. Only the 'onComplete' option will be used."
                : "'onSubscriptionComplete' is deprecated and will be removed in a future major version. Please use the 'onComplete' option instead.");
        }
    }
    var _b = useState(function () {
        if (options === null || options === void 0 ? void 0 : options.skip) {
            return null;
        }
        return client.subscribe({
            query: subscription,
            variables: options === null || options === void 0 ? void 0 : options.variables,
            fetchPolicy: options === null || options === void 0 ? void 0 : options.fetchPolicy,
            context: options === null || options === void 0 ? void 0 : options.context,
        });
    }), observable = _b[0], setObservable = _b[1];
    var canResetObservableRef = useRef(false);
    useEffect(function () {
        return function () {
            canResetObservableRef.current = true;
        };
    }, []);
    var ref = useRef({ client: client, subscription: subscription, options: options });
    useEffect(function () {
        var _a, _b, _c, _d;
        var shouldResubscribe = options === null || options === void 0 ? void 0 : options.shouldResubscribe;
        if (typeof shouldResubscribe === 'function') {
            shouldResubscribe = !!shouldResubscribe(options);
        }
        if (options === null || options === void 0 ? void 0 : options.skip) {
            if (!(options === null || options === void 0 ? void 0 : options.skip) !== !((_a = ref.current.options) === null || _a === void 0 ? void 0 : _a.skip) || canResetObservableRef.current) {
                setResult({
                    loading: false,
                    data: void 0,
                    error: void 0,
                    variables: options === null || options === void 0 ? void 0 : options.variables,
                });
                setObservable(null);
                canResetObservableRef.current = false;
            }
        }
        else if ((shouldResubscribe !== false &&
            (client !== ref.current.client ||
                subscription !== ref.current.subscription ||
                (options === null || options === void 0 ? void 0 : options.fetchPolicy) !== ((_b = ref.current.options) === null || _b === void 0 ? void 0 : _b.fetchPolicy) ||
                !(options === null || options === void 0 ? void 0 : options.skip) !== !((_c = ref.current.options) === null || _c === void 0 ? void 0 : _c.skip) ||
                !equal(options === null || options === void 0 ? void 0 : options.variables, (_d = ref.current.options) === null || _d === void 0 ? void 0 : _d.variables))) ||
            canResetObservableRef.current) {
            setResult({
                loading: true,
                data: void 0,
                error: void 0,
                variables: options === null || options === void 0 ? void 0 : options.variables,
            });
            setObservable(client.subscribe({
                query: subscription,
                variables: options === null || options === void 0 ? void 0 : options.variables,
                fetchPolicy: options === null || options === void 0 ? void 0 : options.fetchPolicy,
                context: options === null || options === void 0 ? void 0 : options.context,
            }));
            canResetObservableRef.current = false;
        }
        Object.assign(ref.current, { client: client, subscription: subscription, options: options });
    }, [client, subscription, options, canResetObservableRef.current]);
    useEffect(function () {
        if (!observable) {
            return;
        }
        var subscriptionStopped = false;
        var subscription = observable.subscribe({
            next: function (fetchResult) {
                var _a, _b;
                if (subscriptionStopped) {
                    return;
                }
                var result = {
                    loading: false,
                    data: fetchResult.data,
                    error: void 0,
                    variables: options === null || options === void 0 ? void 0 : options.variables,
                };
                setResult(result);
                if ((_a = ref.current.options) === null || _a === void 0 ? void 0 : _a.onData) {
                    ref.current.options.onData({
                        client: client,
                        data: result
                    });
                }
                else if ((_b = ref.current.options) === null || _b === void 0 ? void 0 : _b.onSubscriptionData) {
                    ref.current.options.onSubscriptionData({
                        client: client,
                        subscriptionData: result
                    });
                }
            },
            error: function (error) {
                var _a, _b;
                if (!subscriptionStopped) {
                    setResult({
                        loading: false,
                        data: void 0,
                        error: error,
                        variables: options === null || options === void 0 ? void 0 : options.variables,
                    });
                    (_b = (_a = ref.current.options) === null || _a === void 0 ? void 0 : _a.onError) === null || _b === void 0 ? void 0 : _b.call(_a, error);
                }
                ;
            },
            complete: function () {
                var _a, _b;
                if (!subscriptionStopped) {
                    if ((_a = ref.current.options) === null || _a === void 0 ? void 0 : _a.onComplete) {
                        ref.current.options.onComplete();
                    }
                    else if ((_b = ref.current.options) === null || _b === void 0 ? void 0 : _b.onSubscriptionComplete) {
                        ref.current.options.onSubscriptionComplete();
                    }
                }
            },
        });
        return function () {
            subscriptionStopped = true;
            setTimeout(function () {
                subscription.unsubscribe();
            });
        };
    }, [observable]);
    return result;
}
//# sourceMappingURL=useSubscription.js.map