/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('ms-rest-azure-js'), require('ms-rest-js')) :
    typeof define === 'function' && define.amd ? define(['exports', 'ms-rest-azure-js', 'ms-rest-js'], factory) :
    (factory((global.Azure = global.Azure || {}, global.Azure.ArmResourcehealth = {}),global.msRestAzure,global.msRest));
}(this, (function (exports,msRestAzure,msRest) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License. See License.txt in the project root for
     * license information.
     *
     * Code generated by Microsoft (R) AutoRest Code Generator.
     * Changes may cause incorrect behavior and will be lost if the code is
     * regenerated.
     */
    /**
     * Defines values for AvailabilityStateValues.
     * Possible values include: 'Available', 'Unavailable', 'Unknown'
     * @readonly
     * @enum {string}
     */
    var AvailabilityStateValues;
    (function (AvailabilityStateValues) {
        AvailabilityStateValues["Available"] = "Available";
        AvailabilityStateValues["Unavailable"] = "Unavailable";
        AvailabilityStateValues["Unknown"] = "Unknown";
    })(AvailabilityStateValues || (AvailabilityStateValues = {}));
    /**
     * Defines values for ReasonChronicityTypes.
     * Possible values include: 'Transient', 'Persistent'
     * @readonly
     * @enum {string}
     */
    var ReasonChronicityTypes;
    (function (ReasonChronicityTypes) {
        ReasonChronicityTypes["Transient"] = "Transient";
        ReasonChronicityTypes["Persistent"] = "Persistent";
    })(ReasonChronicityTypes || (ReasonChronicityTypes = {}));

    var index = /*#__PURE__*/Object.freeze({
        get AvailabilityStateValues () { return AvailabilityStateValues; },
        get ReasonChronicityTypes () { return ReasonChronicityTypes; }
    });

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License. See License.txt in the project root for
     * license information.
     *
     * Code generated by Microsoft (R) AutoRest Code Generator.
     * Changes may cause incorrect behavior and will be lost if the code is
     * regenerated.
     */
    var CloudError = msRestAzure.CloudErrorMapper;
    var BaseResource = msRestAzure.BaseResourceMapper;
    var AvailabilityStatusPropertiesRecentlyResolvedState = {
        serializedName: "availabilityStatus_properties_recentlyResolvedState",
        type: {
            name: "Composite",
            className: "AvailabilityStatusPropertiesRecentlyResolvedState",
            modelProperties: {
                unavailableOccurredTime: {
                    serializedName: "unavailableOccurredTime",
                    type: {
                        name: "DateTime"
                    }
                },
                resolvedTime: {
                    serializedName: "resolvedTime",
                    type: {
                        name: "DateTime"
                    }
                },
                unavailabilitySummary: {
                    serializedName: "unavailabilitySummary",
                    type: {
                        name: "String"
                    }
                }
            }
        }
    };
    var RecommendedAction = {
        serializedName: "recommendedAction",
        type: {
            name: "Composite",
            className: "RecommendedAction",
            modelProperties: {
                action: {
                    serializedName: "action",
                    type: {
                        name: "String"
                    }
                },
                actionUrl: {
                    serializedName: "actionUrl",
                    type: {
                        name: "String"
                    }
                },
                actionUrlText: {
                    serializedName: "actionUrlText",
                    type: {
                        name: "String"
                    }
                }
            }
        }
    };
    var ServiceImpactingEventStatus = {
        serializedName: "serviceImpactingEvent_status",
        type: {
            name: "Composite",
            className: "ServiceImpactingEventStatus",
            modelProperties: {
                value: {
                    serializedName: "value",
                    type: {
                        name: "String"
                    }
                }
            }
        }
    };
    var ServiceImpactingEventIncidentProperties = {
        serializedName: "serviceImpactingEvent_incidentProperties",
        type: {
            name: "Composite",
            className: "ServiceImpactingEventIncidentProperties",
            modelProperties: {
                title: {
                    serializedName: "title",
                    type: {
                        name: "String"
                    }
                },
                service: {
                    serializedName: "service",
                    type: {
                        name: "String"
                    }
                },
                region: {
                    serializedName: "region",
                    type: {
                        name: "String"
                    }
                },
                incidentType: {
                    serializedName: "incidentType",
                    type: {
                        name: "String"
                    }
                }
            }
        }
    };
    var ServiceImpactingEvent = {
        serializedName: "serviceImpactingEvent",
        type: {
            name: "Composite",
            className: "ServiceImpactingEvent",
            modelProperties: {
                eventStartTime: {
                    serializedName: "eventStartTime",
                    type: {
                        name: "DateTime"
                    }
                },
                eventStatusLastModifiedTime: {
                    serializedName: "eventStatusLastModifiedTime",
                    type: {
                        name: "DateTime"
                    }
                },
                correlationId: {
                    serializedName: "correlationId",
                    type: {
                        name: "String"
                    }
                },
                status: {
                    serializedName: "status",
                    type: {
                        name: "Composite",
                        className: "ServiceImpactingEventStatus"
                    }
                },
                incidentProperties: {
                    serializedName: "incidentProperties",
                    type: {
                        name: "Composite",
                        className: "ServiceImpactingEventIncidentProperties"
                    }
                }
            }
        }
    };
    var AvailabilityStatusProperties = {
        serializedName: "availabilityStatus_properties",
        type: {
            name: "Composite",
            className: "AvailabilityStatusProperties",
            modelProperties: {
                availabilityState: {
                    serializedName: "availabilityState",
                    type: {
                        name: "Enum",
                        allowedValues: [
                            "Available",
                            "Unavailable",
                            "Unknown"
                        ]
                    }
                },
                summary: {
                    serializedName: "summary",
                    type: {
                        name: "String"
                    }
                },
                detailedStatus: {
                    serializedName: "detailedStatus",
                    type: {
                        name: "String"
                    }
                },
                reasonType: {
                    serializedName: "reasonType",
                    type: {
                        name: "String"
                    }
                },
                rootCauseAttributionTime: {
                    serializedName: "rootCauseAttributionTime",
                    type: {
                        name: "DateTime"
                    }
                },
                healthEventType: {
                    serializedName: "healthEventType",
                    type: {
                        name: "String"
                    }
                },
                healthEventCause: {
                    serializedName: "healthEventCause",
                    type: {
                        name: "String"
                    }
                },
                healthEventCategory: {
                    serializedName: "healthEventCategory",
                    type: {
                        name: "String"
                    }
                },
                healthEventId: {
                    serializedName: "healthEventId",
                    type: {
                        name: "String"
                    }
                },
                resolutionETA: {
                    serializedName: "resolutionETA",
                    type: {
                        name: "DateTime"
                    }
                },
                occuredTime: {
                    serializedName: "occuredTime",
                    type: {
                        name: "DateTime"
                    }
                },
                reasonChronicity: {
                    serializedName: "reasonChronicity",
                    type: {
                        name: "Enum",
                        allowedValues: [
                            "Transient",
                            "Persistent"
                        ]
                    }
                },
                reportedTime: {
                    serializedName: "reportedTime",
                    type: {
                        name: "DateTime"
                    }
                },
                recentlyResolvedState: {
                    serializedName: "recentlyResolvedState",
                    type: {
                        name: "Composite",
                        className: "AvailabilityStatusPropertiesRecentlyResolvedState"
                    }
                },
                recommendedActions: {
                    serializedName: "recommendedActions",
                    type: {
                        name: "Sequence",
                        element: {
                            type: {
                                name: "Composite",
                                className: "RecommendedAction"
                            }
                        }
                    }
                },
                serviceImpactingEvents: {
                    serializedName: "serviceImpactingEvents",
                    type: {
                        name: "Sequence",
                        element: {
                            type: {
                                name: "Composite",
                                className: "ServiceImpactingEvent"
                            }
                        }
                    }
                }
            }
        }
    };
    var AvailabilityStatus = {
        serializedName: "availabilityStatus",
        type: {
            name: "Composite",
            className: "AvailabilityStatus",
            modelProperties: {
                id: {
                    serializedName: "id",
                    type: {
                        name: "String"
                    }
                },
                name: {
                    serializedName: "name",
                    type: {
                        name: "String"
                    }
                },
                type: {
                    serializedName: "type",
                    type: {
                        name: "String"
                    }
                },
                location: {
                    serializedName: "location",
                    type: {
                        name: "String"
                    }
                },
                properties: {
                    serializedName: "properties",
                    type: {
                        name: "Composite",
                        className: "AvailabilityStatusProperties"
                    }
                }
            }
        }
    };
    var OperationDisplay = {
        serializedName: "operation_display",
        type: {
            name: "Composite",
            className: "OperationDisplay",
            modelProperties: {
                provider: {
                    serializedName: "provider",
                    type: {
                        name: "String"
                    }
                },
                resource: {
                    serializedName: "resource",
                    type: {
                        name: "String"
                    }
                },
                operation: {
                    serializedName: "operation",
                    type: {
                        name: "String"
                    }
                },
                description: {
                    serializedName: "description",
                    type: {
                        name: "String"
                    }
                }
            }
        }
    };
    var Operation = {
        serializedName: "operation",
        type: {
            name: "Composite",
            className: "Operation",
            modelProperties: {
                name: {
                    serializedName: "name",
                    type: {
                        name: "String"
                    }
                },
                display: {
                    serializedName: "display",
                    type: {
                        name: "Composite",
                        className: "OperationDisplay"
                    }
                }
            }
        }
    };
    var OperationListResult = {
        serializedName: "operationListResult",
        type: {
            name: "Composite",
            className: "OperationListResult",
            modelProperties: {
                value: {
                    required: true,
                    serializedName: "value",
                    type: {
                        name: "Sequence",
                        element: {
                            type: {
                                name: "Composite",
                                className: "Operation"
                            }
                        }
                    }
                }
            }
        }
    };
    var ErrorResponse = {
        serializedName: "ErrorResponse",
        type: {
            name: "Composite",
            className: "ErrorResponse",
            modelProperties: {
                code: {
                    readOnly: true,
                    serializedName: "code",
                    type: {
                        name: "String"
                    }
                },
                message: {
                    readOnly: true,
                    serializedName: "message",
                    type: {
                        name: "String"
                    }
                },
                details: {
                    readOnly: true,
                    serializedName: "details",
                    type: {
                        name: "String"
                    }
                }
            }
        }
    };
    var AvailabilityStatusListResult = {
        serializedName: "availabilityStatusListResult",
        type: {
            name: "Composite",
            className: "AvailabilityStatusListResult",
            modelProperties: {
                value: {
                    required: true,
                    serializedName: "",
                    type: {
                        name: "Sequence",
                        element: {
                            type: {
                                name: "Composite",
                                className: "AvailabilityStatus"
                            }
                        }
                    }
                },
                nextLink: {
                    serializedName: "nextLink",
                    type: {
                        name: "String"
                    }
                }
            }
        }
    };

    var mappers = /*#__PURE__*/Object.freeze({
        CloudError: CloudError,
        BaseResource: BaseResource,
        AvailabilityStatusPropertiesRecentlyResolvedState: AvailabilityStatusPropertiesRecentlyResolvedState,
        RecommendedAction: RecommendedAction,
        ServiceImpactingEventStatus: ServiceImpactingEventStatus,
        ServiceImpactingEventIncidentProperties: ServiceImpactingEventIncidentProperties,
        ServiceImpactingEvent: ServiceImpactingEvent,
        AvailabilityStatusProperties: AvailabilityStatusProperties,
        AvailabilityStatus: AvailabilityStatus,
        OperationDisplay: OperationDisplay,
        Operation: Operation,
        OperationListResult: OperationListResult,
        ErrorResponse: ErrorResponse,
        AvailabilityStatusListResult: AvailabilityStatusListResult
    });

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License. See License.txt in the project root for
     * license information.
     *
     * Code generated by Microsoft (R) AutoRest Code Generator.
     * Changes may cause incorrect behavior and will be lost if the code is
     * regenerated.
     */

    var Mappers = /*#__PURE__*/Object.freeze({
        AvailabilityStatusListResult: AvailabilityStatusListResult,
        AvailabilityStatus: AvailabilityStatus,
        AvailabilityStatusProperties: AvailabilityStatusProperties,
        AvailabilityStatusPropertiesRecentlyResolvedState: AvailabilityStatusPropertiesRecentlyResolvedState,
        RecommendedAction: RecommendedAction,
        ServiceImpactingEvent: ServiceImpactingEvent,
        ServiceImpactingEventStatus: ServiceImpactingEventStatus,
        ServiceImpactingEventIncidentProperties: ServiceImpactingEventIncidentProperties,
        ErrorResponse: ErrorResponse
    });

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License. See License.txt in the project root for
     * license information.
     *
     * Code generated by Microsoft (R) AutoRest Code Generator.
     * Changes may cause incorrect behavior and will be lost if the code is
     * regenerated.
     */
    var acceptLanguage = {
        parameterPath: "acceptLanguage",
        mapper: {
            serializedName: "accept-language",
            defaultValue: 'en-US',
            type: {
                name: "String"
            }
        }
    };
    var apiVersion = {
        parameterPath: "apiVersion",
        mapper: {
            required: true,
            serializedName: "api-version",
            type: {
                name: "String"
            }
        }
    };
    var expand = {
        parameterPath: [
            "options",
            "expand"
        ],
        mapper: {
            serializedName: "$expand",
            type: {
                name: "String"
            }
        }
    };
    var filter = {
        parameterPath: [
            "options",
            "filter"
        ],
        mapper: {
            serializedName: "$filter",
            type: {
                name: "String"
            }
        }
    };
    var nextPageLink = {
        parameterPath: "nextPageLink",
        mapper: {
            required: true,
            serializedName: "nextLink",
            type: {
                name: "String"
            }
        },
        skipEncoding: true
    };
    var resourceGroupName = {
        parameterPath: "resourceGroupName",
        mapper: {
            required: true,
            serializedName: "resourceGroupName",
            type: {
                name: "String"
            }
        }
    };
    var resourceUri = {
        parameterPath: "resourceUri",
        mapper: {
            required: true,
            serializedName: "resourceUri",
            type: {
                name: "String"
            }
        },
        skipEncoding: true
    };
    var subscriptionId = {
        parameterPath: "subscriptionId",
        mapper: {
            required: true,
            serializedName: "subscriptionId",
            type: {
                name: "String"
            }
        }
    };

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License. See License.txt in the project root for
     * license information.
     *
     * Code generated by Microsoft (R) AutoRest Code Generator.
     * Changes may cause incorrect behavior and will be lost if the code is
     * regenerated.
     */
    /** Class representing a AvailabilityStatuses. */
    var AvailabilityStatuses = /** @class */ (function () {
        /**
         * Create a AvailabilityStatuses.
         * @param {MicrosoftResourceHealthContext} client Reference to the service client.
         */
        function AvailabilityStatuses(client) {
            this.client = client;
        }
        AvailabilityStatuses.prototype.listBySubscriptionId = function (options, callback) {
            return this.client.sendOperationRequest({
                options: options
            }, listBySubscriptionIdOperationSpec, callback);
        };
        AvailabilityStatuses.prototype.listByResourceGroup = function (resourceGroupName$$1, options, callback) {
            return this.client.sendOperationRequest({
                resourceGroupName: resourceGroupName$$1,
                options: options
            }, listByResourceGroupOperationSpec, callback);
        };
        AvailabilityStatuses.prototype.getByResource = function (resourceUri$$1, options, callback) {
            return this.client.sendOperationRequest({
                resourceUri: resourceUri$$1,
                options: options
            }, getByResourceOperationSpec, callback);
        };
        AvailabilityStatuses.prototype.list = function (resourceUri$$1, options, callback) {
            return this.client.sendOperationRequest({
                resourceUri: resourceUri$$1,
                options: options
            }, listOperationSpec, callback);
        };
        AvailabilityStatuses.prototype.listBySubscriptionIdNext = function (nextPageLink$$1, options, callback) {
            return this.client.sendOperationRequest({
                nextPageLink: nextPageLink$$1,
                options: options
            }, listBySubscriptionIdNextOperationSpec, callback);
        };
        AvailabilityStatuses.prototype.listByResourceGroupNext = function (nextPageLink$$1, options, callback) {
            return this.client.sendOperationRequest({
                nextPageLink: nextPageLink$$1,
                options: options
            }, listByResourceGroupNextOperationSpec, callback);
        };
        AvailabilityStatuses.prototype.listNext = function (nextPageLink$$1, options, callback) {
            return this.client.sendOperationRequest({
                nextPageLink: nextPageLink$$1,
                options: options
            }, listNextOperationSpec, callback);
        };
        return AvailabilityStatuses;
    }());
    // Operation Specifications
    var serializer = new msRest.Serializer(Mappers);
    var listBySubscriptionIdOperationSpec = {
        httpMethod: "GET",
        path: "subscriptions/{subscriptionId}/providers/Microsoft.ResourceHealth/availabilityStatuses",
        urlParameters: [
            subscriptionId
        ],
        queryParameters: [
            apiVersion,
            filter,
            expand
        ],
        headerParameters: [
            acceptLanguage
        ],
        responses: {
            200: {
                bodyMapper: AvailabilityStatusListResult
            },
            default: {
                bodyMapper: ErrorResponse
            }
        },
        serializer: serializer
    };
    var listByResourceGroupOperationSpec = {
        httpMethod: "GET",
        path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ResourceHealth/availabilityStatuses",
        urlParameters: [
            subscriptionId,
            resourceGroupName
        ],
        queryParameters: [
            apiVersion,
            filter,
            expand
        ],
        headerParameters: [
            acceptLanguage
        ],
        responses: {
            200: {
                bodyMapper: AvailabilityStatusListResult
            },
            default: {
                bodyMapper: ErrorResponse
            }
        },
        serializer: serializer
    };
    var getByResourceOperationSpec = {
        httpMethod: "GET",
        path: "{resourceUri}/providers/Microsoft.ResourceHealth/availabilityStatuses/current",
        urlParameters: [
            resourceUri
        ],
        queryParameters: [
            apiVersion,
            filter,
            expand
        ],
        headerParameters: [
            acceptLanguage
        ],
        responses: {
            200: {
                bodyMapper: AvailabilityStatus
            },
            default: {
                bodyMapper: ErrorResponse
            }
        },
        serializer: serializer
    };
    var listOperationSpec = {
        httpMethod: "GET",
        path: "{resourceUri}/providers/Microsoft.ResourceHealth/availabilityStatuses",
        urlParameters: [
            resourceUri
        ],
        queryParameters: [
            apiVersion,
            filter,
            expand
        ],
        headerParameters: [
            acceptLanguage
        ],
        responses: {
            200: {
                bodyMapper: AvailabilityStatusListResult
            },
            default: {
                bodyMapper: ErrorResponse
            }
        },
        serializer: serializer
    };
    var listBySubscriptionIdNextOperationSpec = {
        httpMethod: "GET",
        baseUrl: "https://management.azure.com",
        path: "{nextLink}",
        urlParameters: [
            nextPageLink
        ],
        headerParameters: [
            acceptLanguage
        ],
        responses: {
            200: {
                bodyMapper: AvailabilityStatusListResult
            },
            default: {
                bodyMapper: ErrorResponse
            }
        },
        serializer: serializer
    };
    var listByResourceGroupNextOperationSpec = {
        httpMethod: "GET",
        baseUrl: "https://management.azure.com",
        path: "{nextLink}",
        urlParameters: [
            nextPageLink
        ],
        headerParameters: [
            acceptLanguage
        ],
        responses: {
            200: {
                bodyMapper: AvailabilityStatusListResult
            },
            default: {
                bodyMapper: ErrorResponse
            }
        },
        serializer: serializer
    };
    var listNextOperationSpec = {
        httpMethod: "GET",
        baseUrl: "https://management.azure.com",
        path: "{nextLink}",
        urlParameters: [
            nextPageLink
        ],
        headerParameters: [
            acceptLanguage
        ],
        responses: {
            200: {
                bodyMapper: AvailabilityStatusListResult
            },
            default: {
                bodyMapper: ErrorResponse
            }
        },
        serializer: serializer
    };

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License. See License.txt in the project root for
     * license information.
     *
     * Code generated by Microsoft (R) AutoRest Code Generator.
     * Changes may cause incorrect behavior and will be lost if the code is
     * regenerated.
     */

    var Mappers$1 = /*#__PURE__*/Object.freeze({
        OperationListResult: OperationListResult,
        Operation: Operation,
        OperationDisplay: OperationDisplay,
        ErrorResponse: ErrorResponse
    });

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License. See License.txt in the project root for
     * license information.
     *
     * Code generated by Microsoft (R) AutoRest Code Generator.
     * Changes may cause incorrect behavior and will be lost if the code is
     * regenerated.
     */
    /** Class representing a Operations. */
    var Operations = /** @class */ (function () {
        /**
         * Create a Operations.
         * @param {MicrosoftResourceHealthContext} client Reference to the service client.
         */
        function Operations(client) {
            this.client = client;
        }
        Operations.prototype.list = function (options, callback) {
            return this.client.sendOperationRequest({
                options: options
            }, listOperationSpec$1, callback);
        };
        return Operations;
    }());
    // Operation Specifications
    var serializer$1 = new msRest.Serializer(Mappers$1);
    var listOperationSpec$1 = {
        httpMethod: "GET",
        path: "providers/Microsoft.ResourceHealth/operations",
        queryParameters: [
            apiVersion
        ],
        headerParameters: [
            acceptLanguage
        ],
        responses: {
            200: {
                bodyMapper: OperationListResult
            },
            default: {
                bodyMapper: ErrorResponse
            }
        },
        serializer: serializer$1
    };

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License. See License.txt in the project root for
     * license information.
     *
     * Code generated by Microsoft (R) AutoRest Code Generator.
     * Changes may cause incorrect behavior and will be lost if the code is
     * regenerated.
     */

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License. See License.txt in the project root for
     * license information.
     *
     * Code generated by Microsoft (R) AutoRest Code Generator.
     * Changes may cause incorrect behavior and will be lost if the code is
     * regenerated.
     */
    var packageName = "@azure/arm-resourcehealth";
    var packageVersion = "1.0.0";
    var MicrosoftResourceHealthContext = /** @class */ (function (_super) {
        __extends(MicrosoftResourceHealthContext, _super);
        /**
         * Initializes a new instance of the MicrosoftResourceHealth class.
         * @param credentials Credentials needed for the client to connect to Azure.
         * @param subscriptionId Subscription credentials which uniquely identify Microsoft Azure
         * subscription. The subscription ID forms part of the URI for every service call.
         * @param [options] The parameter options
         */
        function MicrosoftResourceHealthContext(credentials, subscriptionId, options) {
            var _this = this;
            if (credentials == undefined) {
                throw new Error('\'credentials\' cannot be null.');
            }
            if (subscriptionId == undefined) {
                throw new Error('\'subscriptionId\' cannot be null.');
            }
            if (!options) {
                options = {};
            }
            _this = _super.call(this, credentials, options) || this;
            _this.apiVersion = '2017-07-01';
            _this.acceptLanguage = 'en-US';
            _this.longRunningOperationRetryTimeout = 30;
            _this.baseUri = options.baseUri || _this.baseUri || "https://management.azure.com";
            _this.requestContentType = "application/json; charset=utf-8";
            _this.credentials = credentials;
            _this.subscriptionId = subscriptionId;
            _this.addUserAgentInfo(packageName + "/" + packageVersion);
            if (options.acceptLanguage !== null && options.acceptLanguage !== undefined) {
                _this.acceptLanguage = options.acceptLanguage;
            }
            if (options.longRunningOperationRetryTimeout !== null && options.longRunningOperationRetryTimeout !== undefined) {
                _this.longRunningOperationRetryTimeout = options.longRunningOperationRetryTimeout;
            }
            return _this;
        }
        return MicrosoftResourceHealthContext;
    }(msRestAzure.AzureServiceClient));

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License. See License.txt in the project root for
     * license information.
     *
     * Code generated by Microsoft (R) AutoRest Code Generator.
     * Changes may cause incorrect behavior and will be lost if the code is
     * regenerated.
     */
    var MicrosoftResourceHealth = /** @class */ (function (_super) {
        __extends(MicrosoftResourceHealth, _super);
        /**
         * Initializes a new instance of the MicrosoftResourceHealth class.
         * @param credentials Credentials needed for the client to connect to Azure.
         * @param subscriptionId Subscription credentials which uniquely identify Microsoft Azure
         * subscription. The subscription ID forms part of the URI for every service call.
         * @param [options] The parameter options
         */
        function MicrosoftResourceHealth(credentials, subscriptionId, options) {
            var _this = _super.call(this, credentials, subscriptionId, options) || this;
            _this.availabilityStatuses = new AvailabilityStatuses(_this);
            _this.operations = new Operations(_this);
            return _this;
        }
        return MicrosoftResourceHealth;
    }(MicrosoftResourceHealthContext));

    exports.MicrosoftResourceHealth = MicrosoftResourceHealth;
    exports.MicrosoftResourceHealthContext = MicrosoftResourceHealthContext;
    exports.MicrosoftResourceHealthModels = index;
    exports.MicrosoftResourceHealthMappers = mappers;
    exports.AvailabilityStatuses = AvailabilityStatuses;
    exports.Operations = Operations;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=arm-resourcehealth.js.map