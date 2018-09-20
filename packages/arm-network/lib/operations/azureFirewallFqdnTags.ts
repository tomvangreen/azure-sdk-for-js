/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "ms-rest-js";
import * as Models from "../models";
import * as Mappers from "../models/azureFirewallFqdnTagsMappers";
import * as Parameters from "../models/parameters";
import { NetworkManagementClientContext } from "../networkManagementClientContext";

/** Class representing a AzureFirewallFqdnTags. */
export class AzureFirewallFqdnTags {
  private readonly client: NetworkManagementClientContext;

  /**
   * Create a AzureFirewallFqdnTags.
   * @param {NetworkManagementClientContext} client Reference to the service client.
   */
  constructor(client: NetworkManagementClientContext) {
    this.client = client;
  }

  /**
   * Gets all the Azure Firewall FQDN Tags in a subscription.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  listAll(): Promise<Models.AzureFirewallFqdnTagsListAllResponse>;
  listAll(options: msRest.RequestOptionsBase): Promise<Models.AzureFirewallFqdnTagsListAllResponse>;
  listAll(callback: msRest.ServiceCallback<Models.AzureFirewallFqdnTagListResult>): void;
  listAll(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.AzureFirewallFqdnTagListResult>): void;
  listAll(options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.AzureFirewallFqdnTagListResult>): Promise<Models.AzureFirewallFqdnTagsListAllResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      listAllOperationSpec,
      callback) as Promise<Models.AzureFirewallFqdnTagsListAllResponse>;
  }

  /**
   * Gets all the Azure Firewall FQDN Tags in a subscription.
   *
   * @param {string} nextPageLink The NextLink from the previous successful call to List operation.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  listAllNext(nextPageLink: string): Promise<Models.AzureFirewallFqdnTagsListAllNextResponse>;
  listAllNext(nextPageLink: string, options: msRest.RequestOptionsBase): Promise<Models.AzureFirewallFqdnTagsListAllNextResponse>;
  listAllNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.AzureFirewallFqdnTagListResult>): void;
  listAllNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.AzureFirewallFqdnTagListResult>): void;
  listAllNext(nextPageLink: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.AzureFirewallFqdnTagListResult>): Promise<Models.AzureFirewallFqdnTagsListAllNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listAllNextOperationSpec,
      callback) as Promise<Models.AzureFirewallFqdnTagsListAllNextResponse>;
  }

}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listAllOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.Network/azureFirewallFqdnTags",
  urlParameters: [
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.AzureFirewallFqdnTagListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listAllNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.AzureFirewallFqdnTagListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};