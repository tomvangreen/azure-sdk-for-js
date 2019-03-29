/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as Models from "../models";
import * as Mappers from "../models/metricBaselinesMappers";
import * as Parameters from "../models/parameters";
import { MonitorManagementClientContext } from "../monitorManagementClientContext";

/** Class representing a MetricBaselines. */
export class MetricBaselines {
  private readonly client: MonitorManagementClientContext;

  /**
   * Create a MetricBaselines.
   * @param {MonitorManagementClientContext} client Reference to the service client.
   */
  constructor(client: MonitorManagementClientContext) {
    this.client = client;
  }

  /**
   * **Gets the metric baseline values**.
   * @param resourceUri The identifier of the resource. It has the following structure:
   * subscriptions/{subscriptionName}/resourceGroups/{resourceGroupName}/providers/{providerName}/{resourceName}.
   * For example:
   * subscriptions/b368ca2f-e298-46b7-b0ab-012281956afa/resourceGroups/vms/providers/Microsoft.Compute/virtualMachines/vm1
   * @param [options] The optional parameters
   * @returns Promise<Models.MetricBaselinesGetResponse>
   */
  get(resourceUri: string, options?: Models.MetricBaselinesGetOptionalParams): Promise<Models.MetricBaselinesGetResponse>;
  /**
   * @param resourceUri The identifier of the resource. It has the following structure:
   * subscriptions/{subscriptionName}/resourceGroups/{resourceGroupName}/providers/{providerName}/{resourceName}.
   * For example:
   * subscriptions/b368ca2f-e298-46b7-b0ab-012281956afa/resourceGroups/vms/providers/Microsoft.Compute/virtualMachines/vm1
   * @param callback The callback
   */
  get(resourceUri: string, callback: msRest.ServiceCallback<Models.MetricBaselinesResponse>): void;
  /**
   * @param resourceUri The identifier of the resource. It has the following structure:
   * subscriptions/{subscriptionName}/resourceGroups/{resourceGroupName}/providers/{providerName}/{resourceName}.
   * For example:
   * subscriptions/b368ca2f-e298-46b7-b0ab-012281956afa/resourceGroups/vms/providers/Microsoft.Compute/virtualMachines/vm1
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceUri: string, options: Models.MetricBaselinesGetOptionalParams, callback: msRest.ServiceCallback<Models.MetricBaselinesResponse>): void;
  get(resourceUri: string, options?: Models.MetricBaselinesGetOptionalParams | msRest.ServiceCallback<Models.MetricBaselinesResponse>, callback?: msRest.ServiceCallback<Models.MetricBaselinesResponse>): Promise<Models.MetricBaselinesGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceUri,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.MetricBaselinesGetResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "{resourceUri}/providers/microsoft.insights/metricBaselines",
  urlParameters: [
    Parameters.resourceUri
  ],
  queryParameters: [
    Parameters.metricnames,
    Parameters.metricnamespace,
    Parameters.timespan,
    Parameters.interval,
    Parameters.aggregation,
    Parameters.sensitivities,
    Parameters.filter,
    Parameters.resultType,
    Parameters.apiVersion3
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.MetricBaselinesResponse
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};
