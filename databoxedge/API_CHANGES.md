## Swagger Changes

### Changes for `description`

| Path | Change Type | Value |
|------|------------|-------|
| `info.description__added` | added | `// (missing-service-description) Add service description` |

### Changes for `x-ms-pageable`

| Path | Change Type | Value |
|------|------------|-------|
| `paths['/subscriptions/{subscriptionId}/providers/microsoft.DataBoxEdge/availableSkus'].get['x-ms-pageable__deleted']` | deleted | `{"nextLinkName":"nextLink"}` |

### Changes for `DataBoxEdgeMoveRequest`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.DataBoxEdgeMoveRequest__deleted` | deleted | `{"type":"object","properties":{"targetResourceGroup":{"type":"string"},"resources":{"type":"array","...` |

### Changes for `TypeSpec.Http.NoContentResponse`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions['TypeSpec.Http.NoContentResponse__added']` | added | `{"type":"object"}` |

### Changes for `TypeSpec.Http.OkResponse`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions['TypeSpec.Http.OkResponse__added']` | added | `{"type":"object"}` |

### Changes for `discriminator`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.Addon.discriminator__deleted` | deleted | `kind` |
| `definitions.Role.discriminator__deleted` | deleted | `kind` |
| `definitions.Trigger.discriminator__deleted` | deleted | `kind` |

### Changes for `systemData`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.Addon.properties.systemData__deleted` | deleted | `{"$ref":"../../../../../common-types/resource-management/v2/types.json#/definitions/systemData","rea...` |
| `definitions.Alert.properties.systemData__deleted` | deleted | `{"$ref":"../../../../../common-types/resource-management/v2/types.json#/definitions/systemData","rea...` |
| `definitions.BandwidthSchedule.properties.systemData__deleted` | deleted | `{"$ref":"../../../../../common-types/resource-management/v2/types.json#/definitions/systemData","rea...` |
| `definitions.Container.properties.systemData__deleted` | deleted | `{"$ref":"../../../../../common-types/resource-management/v2/types.json#/definitions/systemData","rea...` |
| `definitions.DataBoxEdgeDevice.properties.systemData__deleted` | deleted | `{"$ref":"../../../../../common-types/resource-management/v2/types.json#/definitions/systemData","rea...` |
| `definitions.DeviceCapacityInfo.properties.systemData__deleted` | deleted | `{"$ref":"../../../../../common-types/resource-management/v2/types.json#/definitions/systemData","rea...` |
| `definitions.DiagnosticProactiveLogCollectionSettings.properties.systemData__deleted` | deleted | `{"$ref":"../../../../../common-types/resource-management/v2/types.json#/definitions/systemData","rea...` |
| `definitions.DiagnosticRemoteSupportSettings.properties.systemData__deleted` | deleted | `{"$ref":"../../../../../common-types/resource-management/v2/types.json#/definitions/systemData","rea...` |
| `definitions.MonitoringMetricConfiguration.properties.systemData__deleted` | deleted | `{"$ref":"../../../../../common-types/resource-management/v2/types.json#/definitions/systemData","rea...` |
| `definitions.NetworkSettings.properties.systemData__deleted` | deleted | `{"$ref":"../../../../../common-types/resource-management/v2/types.json#/definitions/systemData","rea...` |
| `definitions.Order.properties.systemData__deleted` | deleted | `{"$ref":"../../../../../common-types/resource-management/v2/types.json#/definitions/systemData","rea...` |
| `definitions.Role.properties.systemData__deleted` | deleted | `{"$ref":"../../../../../common-types/resource-management/v2/types.json#/definitions/systemData","rea...` |
| `definitions.Share.properties.systemData__deleted` | deleted | `{"$ref":"../../../../../common-types/resource-management/v2/types.json#/definitions/systemData","rea...` |
| `definitions.StorageAccount.properties.systemData__deleted` | deleted | `{"$ref":"../../../../../common-types/resource-management/v2/types.json#/definitions/systemData","rea...` |
| `definitions.StorageAccountCredential.properties.systemData__deleted` | deleted | `{"$ref":"../../../../../common-types/resource-management/v2/types.json#/definitions/systemData","rea...` |
| `definitions.Trigger.properties.systemData__deleted` | deleted | `{"$ref":"../../../../../common-types/resource-management/v2/types.json#/definitions/systemData","rea...` |
| `definitions.UpdateSummary.properties.systemData__deleted` | deleted | `{"$ref":"../../../../../common-types/resource-management/v2/types.json#/definitions/systemData","rea...` |
| `definitions.User.properties.systemData__deleted` | deleted | `{"$ref":"../../../../../common-types/resource-management/v2/types.json#/definitions/systemData","rea...` |

### Changes for `properties`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.Addon.properties.properties__added` | added | `{"type":"object","x-ms-client-flatten":true}` |
| `definitions.Role.properties.properties__added` | added | `{"type":"object","x-ms-client-flatten":true}` |
| `definitions.Trigger.properties.properties__added` | added | `{"type":"object","x-ms-client-flatten":true}` |

### Changes for `required`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.AddonList.required__added` | added | `["value"]` |
| `definitions.AlertList.required__added` | added | `["value"]` |
| `definitions.BandwidthSchedulesList.required__added` | added | `["value"]` |
| `definitions.ContainerList.required__added` | added | `["value"]` |
| `definitions.DataBoxEdgeDevice.required__deleted` | deleted | `["location"]` |
| `definitions.DataBoxEdgeDeviceList.required__added` | added | `["value"]` |
| `definitions.DataBoxEdgeSkuList.required__added` | added | `["value"]` |
| `definitions.MonitoringMetricConfigurationList.required__added` | added | `["value"]` |
| `definitions.NodeList.required__added` | added | `["value"]` |
| `definitions.OrderList.required__added` | added | `["value"]` |
| `definitions.RoleList.required__added` | added | `["value"]` |
| `definitions.ShareList.required__added` | added | `["value"]` |
| `definitions.StorageAccountCredentialList.required__added` | added | `["value"]` |
| `definitions.StorageAccountList.required__added` | added | `["value"]` |
| `definitions.TriggerList.required__added` | added | `["value"]` |
| `definitions.UserList.required__added` | added | `["value"]` |

### Changes for `readOnly`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.Alert.properties.properties.readOnly__deleted` | deleted | `true` |
| `definitions.Job.properties.properties.readOnly__deleted` | deleted | `true` |
| `definitions.NetworkSettings.properties.properties.readOnly__deleted` | deleted | `true` |

### Changes for `x-ms-discriminator-value`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.ArcAddon['x-ms-discriminator-value__deleted']` | deleted | `ArcForKubernetes` |
| `definitions.CloudEdgeManagementRole['x-ms-discriminator-value__deleted']` | deleted | `CloudEdgeManagement` |
| `definitions.FileEventTrigger['x-ms-discriminator-value__deleted']` | deleted | `FileEvent` |
| `definitions.IoTAddon['x-ms-discriminator-value__deleted']` | deleted | `IotEdge` |
| `definitions.IoTRole['x-ms-discriminator-value__deleted']` | deleted | `IOT` |
| `definitions.KubernetesRole['x-ms-discriminator-value__deleted']` | deleted | `Kubernetes` |
| `definitions.MECRole['x-ms-discriminator-value__deleted']` | deleted | `MEC` |
| `definitions.PeriodicTimerEventTrigger['x-ms-discriminator-value__deleted']` | deleted | `PeriodicTimerEvent` |

### Changes for `id`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.ArcAddon.properties.id__deleted` | deleted | `{"type":"string","readOnly":true}` |
| `definitions.CloudEdgeManagementRole.properties.id__deleted` | deleted | `{"type":"string","readOnly":true}` |
| `definitions.FileEventTrigger.properties.id__deleted` | deleted | `{"type":"string","readOnly":true}` |
| `definitions.IoTAddon.properties.id__deleted` | deleted | `{"type":"string","readOnly":true}` |
| `definitions.IoTRole.properties.id__deleted` | deleted | `{"type":"string","readOnly":true}` |
| `definitions.Job.properties.id__deleted` | deleted | `{"type":"string","readOnly":true}` |
| `definitions.KubernetesRole.properties.id__deleted` | deleted | `{"type":"string","readOnly":true}` |
| `definitions.MECRole.properties.id__deleted` | deleted | `{"type":"string","readOnly":true}` |
| `definitions.PeriodicTimerEventTrigger.properties.id__deleted` | deleted | `{"type":"string","readOnly":true}` |

### Changes for `name`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.ArcAddon.properties.name__deleted` | deleted | `{"type":"string","readOnly":true}` |
| `definitions.CloudEdgeManagementRole.properties.name__deleted` | deleted | `{"type":"string","readOnly":true}` |
| `definitions.FileEventTrigger.properties.name__deleted` | deleted | `{"type":"string","readOnly":true}` |
| `definitions.IoTAddon.properties.name__deleted` | deleted | `{"type":"string","readOnly":true}` |
| `definitions.IoTRole.properties.name__deleted` | deleted | `{"type":"string","readOnly":true}` |
| `definitions.Job.properties.name__deleted` | deleted | `{"type":"string","readOnly":true}` |
| `definitions.KubernetesRole.properties.name__deleted` | deleted | `{"type":"string","readOnly":true}` |
| `definitions.MECRole.properties.name__deleted` | deleted | `{"type":"string","readOnly":true}` |
| `definitions.PeriodicTimerEventTrigger.properties.name__deleted` | deleted | `{"type":"string","readOnly":true}` |

### Changes for `type`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.ArcAddon.properties.type__deleted` | deleted | `{"type":"string","readOnly":true}` |
| `definitions.CloudEdgeManagementRole.properties.type__deleted` | deleted | `{"type":"string","readOnly":true}` |
| `definitions.FileEventTrigger.properties.type__deleted` | deleted | `{"type":"string","readOnly":true}` |
| `definitions.IoTAddon.properties.type__deleted` | deleted | `{"type":"string","readOnly":true}` |
| `definitions.IoTRole.properties.type__deleted` | deleted | `{"type":"string","readOnly":true}` |
| `definitions.Job.properties.type__deleted` | deleted | `{"type":"string","readOnly":true}` |
| `definitions.KubernetesRole.properties.type__deleted` | deleted | `{"type":"string","readOnly":true}` |
| `definitions.MECRole.properties.type__deleted` | deleted | `{"type":"string","readOnly":true}` |
| `definitions.PeriodicTimerEventTrigger.properties.type__deleted` | deleted | `{"type":"string","readOnly":true}` |

### Changes for `kind`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.ArcAddon.properties.kind__added` | added | `{"type":"string","enum":["ArcForKubernetes"],"x-ms-enum":{"modelAsString":false}}` |
| `definitions.CloudEdgeManagementRole.properties.kind__added` | added | `{"type":"string","enum":["CloudEdgeManagement"],"x-ms-enum":{"modelAsString":false}}` |
| `definitions.FileEventTrigger.properties.kind__added` | added | `{"type":"string","enum":["FileEvent"],"x-ms-enum":{"modelAsString":false}}` |
| `definitions.IoTAddon.properties.kind__added` | added | `{"type":"string","enum":["IotEdge"],"x-ms-enum":{"modelAsString":false}}` |
| `definitions.IoTRole.properties.kind__added` | added | `{"type":"string","enum":["IOT"],"x-ms-enum":{"modelAsString":false}}` |
| `definitions.KubernetesRole.properties.kind__added` | added | `{"type":"string","enum":["Kubernetes"],"x-ms-enum":{"modelAsString":false}}` |
| `definitions.MECRole.properties.kind__added` | added | `{"type":"string","enum":["MEC"],"x-ms-enum":{"modelAsString":false}}` |
| `definitions.PeriodicTimerEventTrigger.properties.kind__added` | added | `{"type":"string","enum":["PeriodicTimerEvent"],"x-ms-enum":{"modelAsString":false}}` |

### Changes for `x-ms-secret`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.AsymmetricEncryptedSecret.properties.encryptionCertThumbprint['x-ms-secret__deleted']` | deleted | `true` |
| `definitions.GenerateCertResponse.properties.privateKey['x-ms-secret__deleted']` | deleted | `true` |

### Changes for `x-ms-identifiers`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.BandwidthScheduleProperties.properties.days.items['x-ms-identifiers__deleted']` | deleted | `[]` |
| `definitions.DataBoxEdgeDeviceProperties.properties.configuredRoleTypes.items['x-ms-identifiers__deleted']` | deleted | `[]` |
| `definitions.DataBoxEdgeSkuList.properties.value['x-ms-identifiers__deleted']` | deleted | `["name","resourceType"]` |

### Changes for `x-ms-external`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.CloudError['x-ms-external__deleted']` | deleted | `true` |
| `definitions.CloudErrorBody['x-ms-external__deleted']` | deleted | `true` |

### Changes for `location`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.DataBoxEdgeDevice.properties.location__deleted` | deleted | `{"type":"string","x-ms-mutability":["create","read"]}` |

### Changes for `tags`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.DataBoxEdgeDevice.properties.tags__deleted` | deleted | `{"type":"object","additionalProperties":{"type":"string"}}` |

### Changes for `uniqueItems`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.DeviceCapacityRequestInfoProperties.properties.vmPlacementQuery.items.uniqueItems__deleted` | deleted | `false` |

### Changes for `allOf`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.Job.allOf__added` | added | `[{"$ref":"../../../../../common-types/resource-management/v3/types.json#/definitions/ProxyResource"}...` |

## Modified Values

| Path | Old Value | New Value |
|------|-----------|----------|
| `definitions.Addon.allOf[0].$ref` | `#/definitions/ARMBaseModel` | `../../../../../common-types/resource-management/v3/types.json#/definitions/ProxyResource` |
| `definitions.Alert.allOf[0].$ref` | `#/definitions/ARMBaseModel` | `../../../../../common-types/resource-management/v3/types.json#/definitions/ProxyResource` |
| `definitions.BandwidthSchedule.allOf[0].$ref` | `#/definitions/ARMBaseModel` | `../../../../../common-types/resource-management/v3/types.json#/definitions/ProxyResource` |
| `definitions.Container.allOf[0].$ref` | `#/definitions/ARMBaseModel` | `../../../../../common-types/resource-management/v3/types.json#/definitions/ProxyResource` |
| `definitions.DataBoxEdgeDevice.allOf[0].$ref` | `#/definitions/ARMBaseModel` | `../../../../../common-types/resource-management/v3/types.json#/definitions/TrackedResource` |
| `definitions.DataBoxEdgeDeviceExtendedInfo.properties.systemData.$ref` | `../../../../../common-types/resource-management/v2/types.json#/definitions/systemData` | `../../../../../common-types/resource-management/v3/types.json#/definitions/systemData` |
| `definitions.DataBoxEdgeDeviceProperties.properties.systemData.$ref` | `../../../../../common-types/resource-management/v2/types.json#/definitions/systemData` | `../../../../../common-types/resource-management/v3/types.json#/definitions/systemData` |
| `definitions.DeviceCapacityInfo.allOf[0].$ref` | `#/definitions/ARMBaseModel` | `../../../../../common-types/resource-management/v3/types.json#/definitions/ProxyResource` |
| `definitions.DiagnosticProactiveLogCollectionSettings.allOf[0].$ref` | `#/definitions/ARMBaseModel` | `../../../../../common-types/resource-management/v3/types.json#/definitions/ProxyResource` |
| `definitions.DiagnosticRemoteSupportSettings.allOf[0].$ref` | `#/definitions/ARMBaseModel` | `../../../../../common-types/resource-management/v3/types.json#/definitions/ProxyResource` |
| `definitions.MonitoringMetricConfiguration.allOf[0].$ref` | `#/definitions/ARMBaseModel` | `../../../../../common-types/resource-management/v3/types.json#/definitions/ProxyResource` |
| `definitions.NetworkAdapter.properties.dhcpStatus['x-ms-enum'].name` | `NetworkAdapterDHCPStatus` | `NetworkAdapterDhcpStatus` |
| `definitions.NetworkAdapter.properties.rdmaStatus['x-ms-enum'].name` | `NetworkAdapterRDMAStatus` | `NetworkAdapterRdmaStatus` |
| `definitions.NetworkSettings.allOf[0].$ref` | `#/definitions/ARMBaseModel` | `../../../../../common-types/resource-management/v3/types.json#/definitions/ProxyResource` |
| `definitions.Order.allOf[0].$ref` | `#/definitions/ARMBaseModel` | `../../../../../common-types/resource-management/v3/types.json#/definitions/ProxyResource` |
| `definitions.Role.allOf[0].$ref` | `#/definitions/ARMBaseModel` | `../../../../../common-types/resource-management/v3/types.json#/definitions/ProxyResource` |
| `definitions.Share.allOf[0].$ref` | `#/definitions/ARMBaseModel` | `../../../../../common-types/resource-management/v3/types.json#/definitions/ProxyResource` |
| `definitions.StorageAccount.allOf[0].$ref` | `#/definitions/ARMBaseModel` | `../../../../../common-types/resource-management/v3/types.json#/definitions/ProxyResource` |
| `definitions.StorageAccountCredential.allOf[0].$ref` | `#/definitions/ARMBaseModel` | `../../../../../common-types/resource-management/v3/types.json#/definitions/ProxyResource` |
| `definitions.Trigger.allOf[0].$ref` | `#/definitions/ARMBaseModel` | `../../../../../common-types/resource-management/v3/types.json#/definitions/ProxyResource` |
| `definitions.UpdateSummary.allOf[0].$ref` | `#/definitions/ARMBaseModel` | `../../../../../common-types/resource-management/v3/types.json#/definitions/ProxyResource` |
| `definitions.User.allOf[0].$ref` | `#/definitions/ARMBaseModel` | `../../../../../common-types/resource-management/v3/types.json#/definitions/ProxyResource` |

