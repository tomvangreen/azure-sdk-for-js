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
import * as msRestAzure from "ms-rest-azure-js";
import * as Models from "../models";
import * as Mappers from "../models/virtualNetworksMappers";
import * as Parameters from "../models/parameters";
import { DevTestLabsClientContext } from "../devTestLabsClientContext";

/** Class representing a VirtualNetworks. */
export class VirtualNetworks {
  private readonly client: DevTestLabsClientContext;

  /**
   * Create a VirtualNetworks.
   * @param {DevTestLabsClientContext} client Reference to the service client.
   */
  constructor(client: DevTestLabsClientContext) {
    this.client = client;
  }

  /**
   * List virtual networks in a given lab.
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param [options] The optional parameters
   * @returns Promise<Models.VirtualNetworksListResponse>
   */
  list(resourceGroupName: string, labName: string, options?: Models.VirtualNetworksListOptionalParams): Promise<Models.VirtualNetworksListResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param callback The callback
   */
  list(resourceGroupName: string, labName: string, callback: msRest.ServiceCallback<Models.ResponseWithContinuationVirtualNetwork>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param options The optional parameters
   * @param callback The callback
   */
  list(resourceGroupName: string, labName: string, options: Models.VirtualNetworksListOptionalParams, callback: msRest.ServiceCallback<Models.ResponseWithContinuationVirtualNetwork>): void;
  list(resourceGroupName: string, labName: string, options?: Models.VirtualNetworksListOptionalParams, callback?: msRest.ServiceCallback<Models.ResponseWithContinuationVirtualNetwork>): Promise<Models.VirtualNetworksListResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        labName,
        options
      },
      listOperationSpec,
      callback) as Promise<Models.VirtualNetworksListResponse>;
  }

  /**
   * Get virtual network.
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param name The name of the virtual network.
   * @param [options] The optional parameters
   * @returns Promise<Models.VirtualNetworksGetResponse>
   */
  get(resourceGroupName: string, labName: string, name: string, options?: Models.VirtualNetworksGetOptionalParams): Promise<Models.VirtualNetworksGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param name The name of the virtual network.
   * @param callback The callback
   */
  get(resourceGroupName: string, labName: string, name: string, callback: msRest.ServiceCallback<Models.VirtualNetwork>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param name The name of the virtual network.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, labName: string, name: string, options: Models.VirtualNetworksGetOptionalParams, callback: msRest.ServiceCallback<Models.VirtualNetwork>): void;
  get(resourceGroupName: string, labName: string, name: string, options?: Models.VirtualNetworksGetOptionalParams, callback?: msRest.ServiceCallback<Models.VirtualNetwork>): Promise<Models.VirtualNetworksGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        labName,
        name,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.VirtualNetworksGetResponse>;
  }

  /**
   * Create or replace an existing virtual network. This operation can take a while to complete.
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param name The name of the virtual network.
   * @param virtualNetwork A virtual network.
   * @param [options] The optional parameters
   * @returns Promise<Models.VirtualNetworksCreateOrUpdateResponse>
   */
  createOrUpdate(resourceGroupName: string, labName: string, name: string, virtualNetwork: Models.VirtualNetwork, options?: msRest.RequestOptionsBase): Promise<Models.VirtualNetworksCreateOrUpdateResponse> {
    return this.beginCreateOrUpdate(resourceGroupName,labName,name,virtualNetwork,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.VirtualNetworksCreateOrUpdateResponse>;
  }

  /**
   * Delete virtual network. This operation can take a while to complete.
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param name The name of the virtual network.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, labName: string, name: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginDeleteMethod(resourceGroupName,labName,name,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * Modify properties of virtual networks.
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param name The name of the virtual network.
   * @param virtualNetwork A virtual network.
   * @param [options] The optional parameters
   * @returns Promise<Models.VirtualNetworksUpdateResponse>
   */
  update(resourceGroupName: string, labName: string, name: string, virtualNetwork: Models.VirtualNetworkFragment, options?: msRest.RequestOptionsBase): Promise<Models.VirtualNetworksUpdateResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param name The name of the virtual network.
   * @param virtualNetwork A virtual network.
   * @param callback The callback
   */
  update(resourceGroupName: string, labName: string, name: string, virtualNetwork: Models.VirtualNetworkFragment, callback: msRest.ServiceCallback<Models.VirtualNetwork>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param name The name of the virtual network.
   * @param virtualNetwork A virtual network.
   * @param options The optional parameters
   * @param callback The callback
   */
  update(resourceGroupName: string, labName: string, name: string, virtualNetwork: Models.VirtualNetworkFragment, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.VirtualNetwork>): void;
  update(resourceGroupName: string, labName: string, name: string, virtualNetwork: Models.VirtualNetworkFragment, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.VirtualNetwork>): Promise<Models.VirtualNetworksUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        labName,
        name,
        virtualNetwork,
        options
      },
      updateOperationSpec,
      callback) as Promise<Models.VirtualNetworksUpdateResponse>;
  }

  /**
   * Create or replace an existing virtual network. This operation can take a while to complete.
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param name The name of the virtual network.
   * @param virtualNetwork A virtual network.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginCreateOrUpdate(resourceGroupName: string, labName: string, name: string, virtualNetwork: Models.VirtualNetwork, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        labName,
        name,
        virtualNetwork,
        options
      },
      beginCreateOrUpdateOperationSpec,
      options);
  }

  /**
   * Delete virtual network. This operation can take a while to complete.
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param name The name of the virtual network.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginDeleteMethod(resourceGroupName: string, labName: string, name: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        labName,
        name,
        options
      },
      beginDeleteMethodOperationSpec,
      options);
  }

  /**
   * List virtual networks in a given lab.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.VirtualNetworksListNextResponse>
   */
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.VirtualNetworksListNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.ResponseWithContinuationVirtualNetwork>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ResponseWithContinuationVirtualNetwork>): void;
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.ResponseWithContinuationVirtualNetwork>): Promise<Models.VirtualNetworksListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.VirtualNetworksListNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/virtualnetworks",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.labName
  ],
  queryParameters: [
    Parameters.expand,
    Parameters.filter,
    Parameters.top,
    Parameters.orderby,
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ResponseWithContinuationVirtualNetwork
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/virtualnetworks/{name}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.labName,
    Parameters.name
  ],
  queryParameters: [
    Parameters.expand,
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.VirtualNetwork
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const updateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PATCH",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/virtualnetworks/{name}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.labName,
    Parameters.name
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "virtualNetwork",
    mapper: {
      ...Mappers.VirtualNetworkFragment,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.VirtualNetwork
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginCreateOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/virtualnetworks/{name}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.labName,
    Parameters.name
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "virtualNetwork",
    mapper: {
      ...Mappers.VirtualNetwork,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.VirtualNetwork
    },
    201: {
      bodyMapper: Mappers.VirtualNetwork
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginDeleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/virtualnetworks/{name}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.labName,
    Parameters.name
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listNextOperationSpec: msRest.OperationSpec = {
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
      bodyMapper: Mappers.ResponseWithContinuationVirtualNetwork
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};