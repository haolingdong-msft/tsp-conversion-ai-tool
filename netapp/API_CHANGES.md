## Swagger Changes

### Changes for `x-ms-code-generation-settings`

| Path | Change Type | Value |
|------|------------|-------|
| `info['x-ms-code-generation-settings__deleted']` | deleted | `{"name":"AzureNetAppFilesManagementClient"}` |

### Changes for `Accounts_List`

| Path | Change Type | Value |
|------|------------|-------|
| `paths['/subscriptions/{subscriptionId}/providers/microsoft.NetApp/netAppAccounts'].get['x-ms-examples'].Accounts_List__deleted` | deleted | `{"$ref":"examples/Accounts_List.json"}` |

### Changes for `Accounts_ListBySubscription`

| Path | Change Type | Value |
|------|------------|-------|
| `paths['/subscriptions/{subscriptionId}/providers/microsoft.NetApp/netAppAccounts'].get['x-ms-examples'].Accounts_ListBySubscription__added` | added | `{"$ref":"./examples/Accounts_ListBySubscription.json"}` |

### Changes for `final-state-schema`

| Path | Change Type | Value |
|------|------------|-------|
| `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.NetApp/netAppAccounts/{accountName}'].put['x-ms-long-running-operation-options']['final-state-schema__added']` | added | `#/definitions/NetAppAccount` |
| `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.NetApp/netAppAccounts/{accountName}/backupPolicies/{backupPolicyName}'].patch['x-ms-long-running-operation-options']['final-state-schema__added']` | added | `#/definitions/BackupPolicy` |
| `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.NetApp/netAppAccounts/{accountName}/backupPolicies/{backupPolicyName}'].put['x-ms-long-running-operation-options']['final-state-schema__added']` | added | `#/definitions/BackupPolicy` |
| `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.NetApp/netAppAccounts/{accountName}/backupVaults/{backupVaultName}'].put['x-ms-long-running-operation-options']['final-state-schema__added']` | added | `#/definitions/BackupVault` |
| `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.NetApp/netAppAccounts/{accountName}/backupVaults/{backupVaultName}/backups/{backupName}'].put['x-ms-long-running-operation-options']['final-state-schema__added']` | added | `#/definitions/Backup` |
| `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.NetApp/netAppAccounts/{accountName}/capacityPools/{poolName}/volumes/{volumeName}'].put['x-ms-long-running-operation-options']['final-state-schema__added']` | added | `#/definitions/Volume` |
| `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.NetApp/netAppAccounts/{accountName}/capacityPools/{poolName}/volumes/{volumeName}/subvolumes/{subvolumeName}'].patch['x-ms-long-running-operation-options']['final-state-schema__added']` | added | `#/definitions/SubvolumeInfo` |
| `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.NetApp/netAppAccounts/{accountName}/capacityPools/{poolName}/volumes/{volumeName}/subvolumes/{subvolumeName}'].put['x-ms-long-running-operation-options']['final-state-schema__added']` | added | `#/definitions/SubvolumeInfo` |
| `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.NetApp/netAppAccounts/{accountName}/capacityPools/{poolName}/volumes/{volumeName}/subvolumes/{subvolumeName}/getMetadata'].post['x-ms-long-running-operation-options']['final-state-schema__added']` | added | `#/definitions/SubvolumeModel` |
| `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.NetApp/netAppAccounts/{accountName}/getKeyVaultStatus'].post['x-ms-long-running-operation-options']['final-state-schema__added']` | added | `#/definitions/GetKeyVaultStatusResponse` |

### Changes for `accountEncryption`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.accountEncryption__deleted` | deleted | `{"type":"object","properties":{"keySource":{"type":"string","default":"Microsoft.NetApp","enum":["Mi...` |

### Changes for `accountProperties`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.accountProperties__deleted` | deleted | `{"type":"object","properties":{"provisioningState":{"type":"string","readOnly":true},"activeDirector...` |

### Changes for `activeDirectory`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.activeDirectory__deleted` | deleted | `{"type":"object","properties":{"activeDirectoryId":{"type":"string","x-nullable":true},"username":{"...` |

### Changes for `authorizeRequest`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.authorizeRequest__deleted` | deleted | `{"type":"object","properties":{"remoteVolumeResourceId":{"type":"string"}}}` |

### Changes for `backup`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.backup__deleted` | deleted | `{"type":"object","properties":{"properties":{"$ref":"#/definitions/backupProperties","x-ms-client-fl...` |

### Changes for `backupPatch`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.backupPatch__deleted` | deleted | `{"type":"object","properties":{"properties":{"$ref":"#/definitions/backupPatchProperties","x-ms-clie...` |

### Changes for `backupPatchProperties`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.backupPatchProperties__deleted` | deleted | `{"type":"object","properties":{"label":{"type":"string"}}}` |

### Changes for `backupPoliciesList`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.backupPoliciesList__deleted` | deleted | `{"type":"object","properties":{"value":{"type":"array","items":{"$ref":"#/definitions/backupPolicy"}...` |

### Changes for `backupPolicy`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.backupPolicy__deleted` | deleted | `{"type":"object","properties":{"etag":{"type":"string","readOnly":true},"properties":{"$ref":"#/defi...` |

### Changes for `backupPolicyPatch`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.backupPolicyPatch__deleted` | deleted | `{"type":"object","properties":{"location":{"type":"string","x-ms-mutability":["create","read"]},"id"...` |

### Changes for `backupPolicyProperties`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.backupPolicyProperties__deleted` | deleted | `{"type":"object","properties":{"backupPolicyId":{"type":"string","readOnly":true},"provisioningState...` |

### Changes for `backupProperties`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.backupProperties__deleted` | deleted | `{"type":"object","properties":{"backupId":{"type":"string","title":"backupId","minLength":36,"maxLen...` |

### Changes for `backupRestoreFiles`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.backupRestoreFiles__deleted` | deleted | `{"type":"object","properties":{"fileList":{"type":"array","minItems":1,"maxItems":8,"items":{"type":...` |

### Changes for `backupStatus`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.backupStatus__deleted` | deleted | `{"type":"object","properties":{"healthy":{"type":"boolean","readOnly":true},"relationshipStatus":{"t...` |

### Changes for `backupVault`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.backupVault__deleted` | deleted | `{"type":"object","properties":{"properties":{"$ref":"#/definitions/backupVaultProperties","x-ms-clie...` |

### Changes for `backupVaultPatch`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.backupVaultPatch__deleted` | deleted | `{"type":"object","properties":{"tags":{"$ref":"#/definitions/resourceTags"}}}` |

### Changes for `backupVaultProperties`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.backupVaultProperties__deleted` | deleted | `{"type":"object","properties":{"provisioningState":{"type":"string","readOnly":true}}}` |

### Changes for `backupVaultsList`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.backupVaultsList__deleted` | deleted | `{"type":"object","description":"[Placeholder] Discription for page model","properties":{"value":{"ty...` |

### Changes for `backupsList`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.backupsList__deleted` | deleted | `{"type":"object","description":"[Placeholder] Discription for page model","properties":{"value":{"ty...` |

### Changes for `backupsMigrationRequest`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.backupsMigrationRequest__deleted` | deleted | `{"type":"object","properties":{"backupVaultId":{"type":"string","format":"arm-id","example":"/subscr...` |

### Changes for `breakFileLocksRequest`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.breakFileLocksRequest__deleted` | deleted | `{"type":"object","properties":{"clientIp":{"type":"string","pattern":"^(25[0-5]\|2[0-4][0-9]\|[01]?[0-...` |

### Changes for `breakReplicationRequest`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.breakReplicationRequest__deleted` | deleted | `{"type":"object","properties":{"forceBreakReplication":{"type":"boolean"}}}` |

### Changes for `capacityPool`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.capacityPool__deleted` | deleted | `{"type":"object","properties":{"etag":{"type":"string","readOnly":true},"properties":{"$ref":"#/defi...` |

### Changes for `capacityPoolList`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.capacityPoolList__deleted` | deleted | `{"type":"object","description":"[Placeholder] Discription for page model","properties":{"value":{"ty...` |

### Changes for `capacityPoolPatch`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.capacityPoolPatch__deleted` | deleted | `{"type":"object","properties":{"location":{"type":"string"},"id":{"type":"string","readOnly":true},"...` |

### Changes for `changeKeyVault`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.changeKeyVault__deleted` | deleted | `{"type":"object","properties":{"keyVaultUri":{"type":"string","format":"uri","title":"keyVaultUri","...` |

### Changes for `cloudError`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.cloudError__deleted` | deleted | `{"type":"object","properties":{"error":{"$ref":"#/definitions/cloudErrorBody"}},"x-ms-external":true...` |

### Changes for `cloudErrorBody`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.cloudErrorBody__deleted` | deleted | `{"type":"object","properties":{"code":{"type":"string"},"message":{"type":"string"}},"x-ms-external"...` |

### Changes for `clusterPeerCommandResponse`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.clusterPeerCommandResponse__deleted` | deleted | `{"type":"object","properties":{"peerAcceptCommand":{"type":"string"}}}` |

### Changes for `dailySchedule`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.dailySchedule__deleted` | deleted | `{"type":"object","properties":{"snapshotsToKeep":{"type":"integer","format":"int32"},"hour":{"type":...` |

### Changes for `destinationReplication`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.destinationReplication__deleted` | deleted | `{"type":"object","properties":{"resourceId":{"type":"string","format":"arm-id","x-ms-arm-id-details"...` |

### Changes for `encryptionTransitionRequest`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.encryptionTransitionRequest__deleted` | deleted | `{"type":"object","properties":{"virtualNetworkId":{"type":"string","format":"arm-id","title":"virtua...` |

### Changes for `exportPolicyRule`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.exportPolicyRule__deleted` | deleted | `{"type":"object","properties":{"ruleIndex":{"type":"integer","format":"int32"},"unixReadOnly":{"type...` |

### Changes for `getGroupIdListForLDAPUserRequest`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.getGroupIdListForLDAPUserRequest__deleted` | deleted | `{"type":"object","properties":{"username":{"type":"string","minLength":1,"maxLength":255}},"required...` |

### Changes for `getGroupIdListForLDAPUserResponse`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.getGroupIdListForLDAPUserResponse__deleted` | deleted | `{"type":"object","properties":{"groupIdsForLdapUser":{"type":"array","items":{"type":"string"},"exam...` |

### Changes for `getKeyVaultStatusResponse`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.getKeyVaultStatusResponse__deleted` | deleted | `{"type":"object","properties":{"properties":{"$ref":"#/definitions/getKeyVaultStatusResponseProperti...` |

### Changes for `getKeyVaultStatusResponseProperties`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.getKeyVaultStatusResponseProperties__deleted` | deleted | `{"type":"object","properties":{"keyVaultUri":{"type":"string","format":"uri","title":"keyVaultUri","...` |

### Changes for `hourlySchedule`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.hourlySchedule__deleted` | deleted | `{"type":"object","properties":{"snapshotsToKeep":{"type":"integer","format":"int32"},"minute":{"type...` |

### Changes for `ipAddress`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.ipAddress__deleted` | deleted | `{"type":"string","title":"ipAddress","readOnly":true,"example":"1.2.3.4"}` |

### Changes for `keyVaultPrivateEndpoint`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.keyVaultPrivateEndpoint__deleted` | deleted | `{"type":"object","title":"keyVaultPrivateEndpoint","properties":{"virtualNetworkId":{"type":"string"...` |

### Changes for `ldapSearchScopeOpt`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.ldapSearchScopeOpt__deleted` | deleted | `{"type":"object","properties":{"userDN":{"type":"string","maxLength":255,"example":"OU=fin,OU=hr,dc=...` |

### Changes for `listReplications`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.listReplications__deleted` | deleted | `{"type":"object","properties":{"value":{"type":"array","items":{"$ref":"#/definitions/replication"}}...` |

### Changes for `monthlySchedule`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.monthlySchedule__deleted` | deleted | `{"type":"object","properties":{"snapshotsToKeep":{"type":"integer","format":"int32"},"daysOfMonth":{...` |

### Changes for `mountTarget`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.mountTarget__deleted` | deleted | `{"type":"object","properties":{"location":{"type":"string"},"id":{"type":"string","readOnly":true},"...` |

### Changes for `mountTargetProperties`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.mountTargetProperties__deleted` | deleted | `{"type":"object","properties":{"mountTargetId":{"type":"string","title":"mountTargetId","minLength":...` |

### Changes for `netAppAccount`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.netAppAccount__deleted` | deleted | `{"type":"object","properties":{"etag":{"type":"string","readOnly":true},"properties":{"$ref":"#/defi...` |

### Changes for `netAppAccountList`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.netAppAccountList__deleted` | deleted | `{"type":"object","description":"[Placeholder] Discription for page model","properties":{"value":{"ty...` |

### Changes for `netAppAccountPatch`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.netAppAccountPatch__deleted` | deleted | `{"type":"object","properties":{"location":{"type":"string"},"id":{"type":"string","readOnly":true},"...` |

### Changes for `networkSiblingSet`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.networkSiblingSet__deleted` | deleted | `{"type":"object","title":"Network sibling set","properties":{"networkSiblingSetId":{"type":"string",...` |

### Changes for `networkSiblingSetId`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.networkSiblingSetId__deleted` | deleted | `{"type":"string","title":"Network Sibling Set ID","minLength":36,"maxLength":36,"pattern":"^[a-fA-F0...` |

### Changes for `networkSiblingSetStateId`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.networkSiblingSetStateId__deleted` | deleted | `{"type":"string","title":"Network sibling set state Id","example":"12345_44420.8001578125"}` |

### Changes for `nicInfo`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.nicInfo__deleted` | deleted | `{"type":"object","title":"NIC information","properties":{"ipAddress":{"type":"string","title":"ipAdd...` |

### Changes for `peerClusterForVolumeMigrationRequest`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.peerClusterForVolumeMigrationRequest__deleted` | deleted | `{"type":"object","properties":{"peerIpAddresses":{"type":"array","minItems":1,"items":{"type":"strin...` |

### Changes for `placementKeyValuePairs`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.placementKeyValuePairs__deleted` | deleted | `{"type":"object","properties":{"key":{"type":"string","example":"key1"},"value":{"type":"string","ex...` |

### Changes for `poolChangeRequest`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.poolChangeRequest__deleted` | deleted | `{"type":"object","properties":{"newPoolResourceId":{"type":"string"}},"required":["newPoolResourceId...` |

### Changes for `poolPatchProperties`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.poolPatchProperties__deleted` | deleted | `{"type":"object","properties":{"size":{"type":"integer","format":"int64","title":"size","default":43...` |

### Changes for `poolProperties`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.poolProperties__deleted` | deleted | `{"type":"object","properties":{"poolId":{"type":"string","title":"poolId","minLength":36,"maxLength"...` |

### Changes for `reestablishReplicationRequest`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.reestablishReplicationRequest__deleted` | deleted | `{"type":"object","properties":{"sourceVolumeId":{"type":"string"}}}` |

### Changes for `regionInfo`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.regionInfo__deleted` | deleted | `{"type":"object","properties":{"storageToNetworkProximity":{"type":"string","title":"Storage to Netw...` |

### Changes for `regionInfoResource`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.regionInfoResource__deleted` | deleted | `{"type":"object","properties":{"properties":{"$ref":"#/definitions/regionInfo","x-ms-client-flatten"...` |

### Changes for `regionInfosList`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.regionInfosList__deleted` | deleted | `{"type":"object","description":"[Placeholder] Discription for page model","properties":{"value":{"ty...` |

### Changes for `relocateVolumeRequest`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.relocateVolumeRequest__deleted` | deleted | `{"type":"object","properties":{"creationToken":{"type":"string"}}}` |

### Changes for `remotePath`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.remotePath__deleted` | deleted | `{"type":"object","properties":{"externalHostName":{"type":"string"},"serverName":{"type":"string"},"...` |

### Changes for `replication`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.replication__deleted` | deleted | `{"type":"object","properties":{"replicationId":{"type":"string","minLength":36,"maxLength":36,"patte...` |

### Changes for `replicationObject`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.replicationObject__deleted` | deleted | `{"type":"object","properties":{"replicationId":{"type":"string","readOnly":true},"endpointType":{"ty...` |

### Changes for `replicationStatus`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.replicationStatus__deleted` | deleted | `{"type":"object","properties":{"healthy":{"type":"boolean"},"relationshipStatus":{"type":"string","e...` |

### Changes for `resourceIdentity`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.resourceIdentity__deleted` | deleted | `{"type":"object","properties":{"principalId":{"type":"string","readOnly":true},"tenantId":{"type":"s...` |

### Changes for `resourceTags`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.resourceTags__deleted` | deleted | `{"type":"object","additionalProperties":{"type":"string"}}` |

### Changes for `restoreStatus`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.restoreStatus__deleted` | deleted | `{"type":"object","properties":{"healthy":{"type":"boolean","readOnly":true},"relationshipStatus":{"t...` |

### Changes for `snapshot`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.snapshot__deleted` | deleted | `{"type":"object","properties":{"location":{"type":"string","x-ms-mutability":["create","read"]},"pro...` |

### Changes for `snapshotPatch`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.snapshotPatch__deleted` | deleted | `{"type":"object","properties":{}}` |

### Changes for `snapshotPoliciesList`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.snapshotPoliciesList__deleted` | deleted | `{"type":"object","properties":{"value":{"type":"array","items":{"$ref":"#/definitions/snapshotPolicy...` |

### Changes for `snapshotPolicy`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.snapshotPolicy__deleted` | deleted | `{"type":"object","properties":{"etag":{"type":"string","readOnly":true},"properties":{"$ref":"#/defi...` |

### Changes for `snapshotPolicyDetails`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.snapshotPolicyDetails__deleted` | deleted | `{"type":"object","properties":{"location":{"type":"string","x-ms-mutability":["create","read"]},"id"...` |

### Changes for `snapshotPolicyPatch`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.snapshotPolicyPatch__deleted` | deleted | `{"type":"object","properties":{"location":{"type":"string"},"id":{"type":"string","readOnly":true},"...` |

### Changes for `snapshotPolicyProperties`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.snapshotPolicyProperties__deleted` | deleted | `{"type":"object","properties":{"hourlySchedule":{"$ref":"#/definitions/hourlySchedule","type":"objec...` |

### Changes for `snapshotPolicyVolumeList`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.snapshotPolicyVolumeList__deleted` | deleted | `{"type":"object","properties":{"value":{"type":"array","items":{"$ref":"#/definitions/volume"}}}}` |

### Changes for `snapshotProperties`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.snapshotProperties__deleted` | deleted | `{"type":"object","properties":{"snapshotId":{"type":"string","title":"snapshotId","minLength":36,"ma...` |

### Changes for `snapshotRestoreFiles`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.snapshotRestoreFiles__deleted` | deleted | `{"type":"object","properties":{"filePaths":{"type":"array","minItems":1,"maxItems":10,"items":{"type...` |

### Changes for `snapshotsList`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.snapshotsList__deleted` | deleted | `{"type":"object","properties":{"value":{"type":"array","items":{"$ref":"#/definitions/snapshot"}}}}` |

### Changes for `subnetId`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.subnetId__deleted` | deleted | `{"type":"string","format":"arm-id","title":"Subnet resource Id","x-ms-mutability":["read","create"],...` |

### Changes for `subvolumeInfo`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.subvolumeInfo__deleted` | deleted | `{"type":"object","properties":{"properties":{"$ref":"#/definitions/subvolumeProperties","x-ms-client...` |

### Changes for `subvolumeModel`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.subvolumeModel__deleted` | deleted | `{"type":"object","properties":{"id":{"type":"string","readOnly":true},"name":{"type":"string","readO...` |

### Changes for `subvolumeModelProperties`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.subvolumeModelProperties__deleted` | deleted | `{"type":"object","properties":{"path":{"type":"string","title":"path","example":"/subvolume1"},"pare...` |

### Changes for `subvolumePatchParams`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.subvolumePatchParams__deleted` | deleted | `{"type":"object","properties":{"size":{"type":"integer","format":"int64","title":"size","x-nullable"...` |

### Changes for `subvolumePatchRequest`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.subvolumePatchRequest__deleted` | deleted | `{"type":"object","properties":{"properties":{"$ref":"#/definitions/subvolumePatchParams","x-ms-clien...` |

### Changes for `subvolumeProperties`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.subvolumeProperties__deleted` | deleted | `{"type":"object","properties":{"path":{"type":"string","title":"path","example":"/subvolume1"},"size...` |

### Changes for `subvolumesList`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.subvolumesList__deleted` | deleted | `{"type":"object","description":"[Placeholder] Discription for page model","properties":{"value":{"ty...` |

### Changes for `svmPeerCommandResponse`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.svmPeerCommandResponse__deleted` | deleted | `{"type":"object","properties":{"svmPeeringCommand":{"type":"string"}}}` |

### Changes for `usageName`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.usageName__deleted` | deleted | `{"type":"object","properties":{"value":{"type":"string"},"localizedValue":{"type":"string"}},"readOn...` |

### Changes for `usageProperties`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.usageProperties__deleted` | deleted | `{"type":"object","properties":{"currentValue":{"type":"integer","format":"int32","readOnly":true},"l...` |

### Changes for `volume`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.volume__deleted` | deleted | `{"type":"object","properties":{"etag":{"type":"string","readOnly":true},"zones":{"type":"array","ite...` |

### Changes for `volumeBackupProperties`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.volumeBackupProperties__deleted` | deleted | `{"type":"object","properties":{"backupPolicyId":{"type":"string","format":"arm-id","x-ms-arm-id-deta...` |

### Changes for `volumeBackups`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.volumeBackups__deleted` | deleted | `{"type":"object","properties":{"volumeName":{"type":"string"},"volumeResourceId":{"type":"string","f...` |

### Changes for `volumeGroup`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.volumeGroup__deleted` | deleted | `{"type":"object","properties":{"location":{"type":"string","x-ms-mutability":["create","read"]},"id"...` |

### Changes for `volumeGroupDetails`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.volumeGroupDetails__deleted` | deleted | `{"type":"object","properties":{"location":{"type":"string","x-ms-mutability":["create","read"]},"id"...` |

### Changes for `volumeGroupList`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.volumeGroupList__deleted` | deleted | `{"type":"object","properties":{"value":{"type":"array","items":{"$ref":"#/definitions/volumeGroup"}}...` |

### Changes for `volumeGroupListProperties`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.volumeGroupListProperties__deleted` | deleted | `{"type":"object","properties":{"provisioningState":{"type":"string","readOnly":true,"example":"Avail...` |

### Changes for `volumeGroupMetaData`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.volumeGroupMetaData__deleted` | deleted | `{"type":"object","properties":{"groupDescription":{"type":"string","example":"group description"},"a...` |

### Changes for `volumeGroupProperties`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.volumeGroupProperties__deleted` | deleted | `{"type":"object","properties":{"provisioningState":{"type":"string","readOnly":true,"example":"Avail...` |

### Changes for `volumeGroupVolumeProperties`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.volumeGroupVolumeProperties__deleted` | deleted | `{"type":"object","properties":{"id":{"type":"string","readOnly":true},"name":{"type":"string"},"type...` |

### Changes for `volumeList`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.volumeList__deleted` | deleted | `{"type":"object","description":"[Placeholder] Discription for page model","properties":{"value":{"ty...` |

### Changes for `volumePatch`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.volumePatch__deleted` | deleted | `{"type":"object","properties":{"location":{"type":"string"},"id":{"type":"string","readOnly":true},"...` |

### Changes for `volumePatchProperties`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.volumePatchProperties__deleted` | deleted | `{"type":"object","properties":{"serviceLevel":{"type":"string","title":"serviceLevel","default":"Pre...` |

### Changes for `volumeProperties`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.volumeProperties__deleted` | deleted | `{"type":"object","properties":{"fileSystemId":{"type":"string","title":"FileSystem ID","minLength":3...` |

### Changes for `volumeQuotaRule`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.volumeQuotaRule__deleted` | deleted | `{"type":"object","properties":{"properties":{"$ref":"#/definitions/volumeQuotaRulesProperties","x-ms...` |

### Changes for `volumeQuotaRulePatch`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.volumeQuotaRulePatch__deleted` | deleted | `{"type":"object","properties":{"tags":{"$ref":"#/definitions/resourceTags"},"properties":{"$ref":"#/...` |

### Changes for `volumeQuotaRulesList`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.volumeQuotaRulesList__deleted` | deleted | `{"type":"object","properties":{"value":{"type":"array","items":{"$ref":"#/definitions/volumeQuotaRul...` |

### Changes for `volumeQuotaRulesProperties`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.volumeQuotaRulesProperties__deleted` | deleted | `{"type":"object","properties":{"provisioningState":{"type":"string","enum":["Accepted","Creating","P...` |

### Changes for `volumeRelocationProperties`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.volumeRelocationProperties__deleted` | deleted | `{"type":"object","properties":{"relocationRequested":{"type":"boolean"},"readyToBeFinalized":{"type"...` |

### Changes for `volumeResourceIds`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.volumeResourceIds__deleted` | deleted | `{"type":"array","title":"Volume resource Ids","items":{"type":"string","format":"arm-id","title":"Re...` |

### Changes for `volumeRevert`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.volumeRevert__deleted` | deleted | `{"type":"object","properties":{"snapshotId":{"type":"string","format":"arm-id","x-ms-arm-id-details"...` |

### Changes for `volumeSnapshotProperties`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.volumeSnapshotProperties__deleted` | deleted | `{"type":"object","properties":{"snapshotPolicyId":{"type":"string"}}}` |

### Changes for `weeklySchedule`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.weeklySchedule__deleted` | deleted | `{"type":"object","properties":{"snapshotsToKeep":{"type":"integer","format":"int32"},"day":{"type":"...` |

### Changes for `AccountEncryption`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.AccountEncryption__added` | added | `{"type":"object","properties":{"keySource":{"type":"string","default":"Microsoft.NetApp","enum":["Mi...` |

### Changes for `AccountProperties`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.AccountProperties__added` | added | `{"type":"object","properties":{"provisioningState":{"type":"string","readOnly":true},"activeDirector...` |

### Changes for `ActiveDirectory`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.ActiveDirectory__added` | added | `{"type":"object","properties":{"activeDirectoryId":{"type":"string"},"username":{"type":"string"},"p...` |

### Changes for `AuthorizeRequest`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.AuthorizeRequest__added` | added | `{"type":"object","properties":{"remoteVolumeResourceId":{"type":"string"}}}` |

### Changes for `Azure.ResourceManager.ArmResponse<ClusterPeerCommandResponse>`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions['Azure.ResourceManager.ArmResponse<ClusterPeerCommandResponse>__added']` | added | `{"type":"object","properties":{"body":{"$ref":"#/definitions/ClusterPeerCommandResponse"}},"required...` |

### Changes for `Azure.ResourceManager.ArmResponse<GetGroupIdListForLdapUserResponse>`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions['Azure.ResourceManager.ArmResponse<GetGroupIdListForLdapUserResponse>__added']` | added | `{"type":"object","properties":{"body":{"$ref":"#/definitions/GetGroupIdListForLdapUserResponse"}},"r...` |

### Changes for `Azure.ResourceManager.ArmResponse<SvmPeerCommandResponse>`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions['Azure.ResourceManager.ArmResponse<SvmPeerCommandResponse>__added']` | added | `{"type":"object","properties":{"body":{"$ref":"#/definitions/SvmPeerCommandResponse"}},"required":["...` |

### Changes for `Azure.ResourceManager.ArmResponse<Volume>`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions['Azure.ResourceManager.ArmResponse<Volume>__added']` | added | `{"type":"object","properties":{"body":{"$ref":"#/definitions/Volume"}},"required":["body"]}` |

### Changes for `Backup`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.Backup__added` | added | `{"type":"object","properties":{"properties":{"$ref":"#/definitions/BackupProperties","x-ms-client-fl...` |

### Changes for `BackupPatch`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.BackupPatch__added` | added | `{"type":"object","properties":{"properties":{"$ref":"#/definitions/BackupPatchProperties","x-ms-clie...` |

### Changes for `BackupPatchProperties`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.BackupPatchProperties__added` | added | `{"type":"object","properties":{"label":{"type":"string"}}}` |

### Changes for `BackupPoliciesList`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.BackupPoliciesList__added` | added | `{"type":"object","description":"[Placeholder] Discription for page model","properties":{"value":{"ty...` |

### Changes for `BackupPolicy`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.BackupPolicy__added` | added | `{"type":"object","properties":{"properties":{"$ref":"#/definitions/BackupPolicyProperties","x-ms-cli...` |

### Changes for `BackupPolicyPatch`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.BackupPolicyPatch__added` | added | `{"type":"object","properties":{"location":{"type":"string","x-ms-mutability":["create","read"]},"id"...` |

### Changes for `BackupPolicyProperties`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.BackupPolicyProperties__added` | added | `{"type":"object","properties":{"backupPolicyId":{"type":"string","readOnly":true},"provisioningState...` |

### Changes for `BackupProperties`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.BackupProperties__added` | added | `{"type":"object","properties":{"backupId":{"type":"string","minLength":36,"maxLength":36,"pattern":"...` |

### Changes for `BackupRestoreFiles`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.BackupRestoreFiles__added` | added | `{"type":"object","properties":{"fileList":{"type":"array","items":{"type":"string"}},"restoreFilePat...` |

### Changes for `BackupStatus`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.BackupStatus__added` | added | `{"type":"object","properties":{"healthy":{"type":"boolean","readOnly":true},"relationshipStatus":{"t...` |

### Changes for `BackupVault`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.BackupVault__added` | added | `{"type":"object","properties":{"properties":{"$ref":"#/definitions/BackupVaultProperties","x-ms-clie...` |

### Changes for `BackupVaultPatch`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.BackupVaultPatch__added` | added | `{"type":"object","properties":{"tags":{"type":"object","additionalProperties":{"type":"string"}}}}` |

### Changes for `BackupVaultProperties`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.BackupVaultProperties__added` | added | `{"type":"object","properties":{"provisioningState":{"type":"string","readOnly":true}}}` |

### Changes for `BackupVaultsList`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.BackupVaultsList__added` | added | `{"type":"object","description":"[Placeholder] Discription for page model","properties":{"value":{"ty...` |

### Changes for `BackupsList`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.BackupsList__added` | added | `{"type":"object","description":"[Placeholder] Discription for page model","properties":{"value":{"ty...` |

### Changes for `BackupsMigrationRequest`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.BackupsMigrationRequest__added` | added | `{"type":"object","properties":{"backupVaultId":{"type":"string","format":"arm-id","x-ms-arm-id-detai...` |

### Changes for `BreakFileLocksRequest`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.BreakFileLocksRequest__added` | added | `{"type":"object","properties":{"clientIp":{"type":"string","pattern":"^(25[0-5]\|2[0-4][0-9]\|[01]?[0-...` |

### Changes for `BreakReplicationRequest`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.BreakReplicationRequest__added` | added | `{"type":"object","properties":{"forceBreakReplication":{"type":"boolean"}}}` |

### Changes for `CapacityPool`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.CapacityPool__added` | added | `{"type":"object","properties":{"properties":{"$ref":"#/definitions/PoolProperties","x-ms-client-flat...` |

### Changes for `CapacityPoolList`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.CapacityPoolList__added` | added | `{"type":"object","description":"[Placeholder] Discription for page model","properties":{"value":{"ty...` |

### Changes for `CapacityPoolPatch`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.CapacityPoolPatch__added` | added | `{"type":"object","properties":{"location":{"type":"string"},"id":{"type":"string","readOnly":true},"...` |

### Changes for `ChangeKeyVault`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.ChangeKeyVault__added` | added | `{"type":"object","properties":{"keyVaultUri":{"type":"string","format":"uri"},"keyName":{"type":"str...` |

### Changes for `ClusterPeerCommandResponse`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.ClusterPeerCommandResponse__added` | added | `{"type":"object","properties":{"peerAcceptCommand":{"type":"string"}}}` |

### Changes for `DailySchedule`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.DailySchedule__added` | added | `{"type":"object","properties":{"snapshotsToKeep":{"type":"integer","format":"int32"},"hour":{"type":...` |

### Changes for `DestinationReplication`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.DestinationReplication__added` | added | `{"type":"object","properties":{"resourceId":{"type":"string","format":"arm-id","x-ms-arm-id-details"...` |

### Changes for `EncryptionTransitionRequest`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.EncryptionTransitionRequest__added` | added | `{"type":"object","properties":{"virtualNetworkId":{"type":"string","format":"arm-id","x-ms-arm-id-de...` |

### Changes for `ExportPolicyRule`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.ExportPolicyRule__added` | added | `{"type":"object","properties":{"ruleIndex":{"type":"integer","format":"int32"},"unixReadOnly":{"type...` |

### Changes for `GetGroupIdListForLdapUserRequest`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.GetGroupIdListForLdapUserRequest__added` | added | `{"type":"object","properties":{"username":{"type":"string","minLength":1,"maxLength":255}},"required...` |

### Changes for `GetGroupIdListForLdapUserResponse`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.GetGroupIdListForLdapUserResponse__added` | added | `{"type":"object","properties":{"groupIdsForLdapUser":{"type":"array","items":{"type":"string"}}}}` |

### Changes for `GetKeyVaultStatusResponse`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.GetKeyVaultStatusResponse__added` | added | `{"type":"object","properties":{"properties":{"$ref":"#/definitions/GetKeyVaultStatusResponseProperti...` |

### Changes for `GetKeyVaultStatusResponseProperties`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.GetKeyVaultStatusResponseProperties__added` | added | `{"type":"object","properties":{"keyVaultUri":{"type":"string","format":"uri"},"keyName":{"type":"str...` |

### Changes for `HourlySchedule`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.HourlySchedule__added` | added | `{"type":"object","properties":{"snapshotsToKeep":{"type":"integer","format":"int32"},"minute":{"type...` |

### Changes for `KeyVaultPrivateEndpoint`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.KeyVaultPrivateEndpoint__added` | added | `{"type":"object","properties":{"virtualNetworkId":{"type":"string","format":"arm-id","x-ms-arm-id-de...` |

### Changes for `LdapSearchScopeOpt`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.LdapSearchScopeOpt__added` | added | `{"type":"object","properties":{"userDN":{"type":"string","maxLength":255},"groupDN":{"type":"string"...` |

### Changes for `ListReplications`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.ListReplications__added` | added | `{"type":"object","description":"[Placeholder] Discription for page model","properties":{"value":{"ty...` |

### Changes for `MonthlySchedule`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.MonthlySchedule__added` | added | `{"type":"object","properties":{"snapshotsToKeep":{"type":"integer","format":"int32"},"daysOfMonth":{...` |

### Changes for `MountTargetProperties`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.MountTargetProperties__added` | added | `{"type":"object","properties":{"mountTargetId":{"type":"string","minLength":36,"maxLength":36,"patte...` |

### Changes for `NetAppAccount`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.NetAppAccount__added` | added | `{"type":"object","properties":{"properties":{"$ref":"#/definitions/AccountProperties","x-ms-client-f...` |

### Changes for `NetAppAccountList`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.NetAppAccountList__added` | added | `{"type":"object","description":"[Placeholder] Discription for page model","properties":{"value":{"ty...` |

### Changes for `NetAppAccountPatch`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.NetAppAccountPatch__added` | added | `{"type":"object","properties":{"location":{"type":"string"},"id":{"type":"string","readOnly":true},"...` |

### Changes for `NetworkSiblingSet`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.NetworkSiblingSet__added` | added | `{"type":"object","properties":{"networkSiblingSetId":{"type":"string","minLength":36,"maxLength":36,...` |

### Changes for `NicInfo`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.NicInfo__added` | added | `{"type":"object","properties":{"ipAddress":{"type":"string","readOnly":true},"volumeResourceIds":{"t...` |

### Changes for `OperationDisplay`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.OperationDisplay__added` | added | `{"type":"object","properties":{"provider":{"type":"string"},"resource":{"type":"string"},"operation"...` |

### Changes for `PeerClusterForVolumeMigrationRequest`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.PeerClusterForVolumeMigrationRequest__added` | added | `{"type":"object","properties":{"peerIpAddresses":{"type":"array","items":{"type":"string"}}},"requir...` |

### Changes for `PlacementKeyValuePairs`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.PlacementKeyValuePairs__added` | added | `{"type":"object","properties":{"key":{"type":"string"},"value":{"type":"string"}},"required":["key",...` |

### Changes for `PoolChangeRequest`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.PoolChangeRequest__added` | added | `{"type":"object","properties":{"newPoolResourceId":{"type":"string"}},"required":["newPoolResourceId...` |

### Changes for `PoolPatchProperties`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.PoolPatchProperties__added` | added | `{"type":"object","properties":{"size":{"type":"integer","format":"int64","default":4398046511104},"q...` |

### Changes for `PoolProperties`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.PoolProperties__added` | added | `{"type":"object","properties":{"poolId":{"type":"string","minLength":36,"maxLength":36,"pattern":"^[...` |

### Changes for `ReestablishReplicationRequest`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.ReestablishReplicationRequest__added` | added | `{"type":"object","properties":{"sourceVolumeId":{"type":"string"}}}` |

### Changes for `RegionInfo`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.RegionInfo__added` | added | `{"type":"object","properties":{"storageToNetworkProximity":{"type":"string","enum":["Default","T1","...` |

### Changes for `RegionInfoAvailabilityZoneMappingsItem`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.RegionInfoAvailabilityZoneMappingsItem__added` | added | `{"type":"object","properties":{"availabilityZone":{"type":"string"},"isAvailable":{"type":"boolean"}...` |

### Changes for `RegionInfoResource`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.RegionInfoResource__added` | added | `{"type":"object","properties":{"properties":{"$ref":"#/definitions/RegionInfo","x-ms-client-flatten"...` |

### Changes for `RegionInfosList`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.RegionInfosList__added` | added | `{"type":"object","description":"[Placeholder] Discription for page model","properties":{"value":{"ty...` |

### Changes for `RelocateVolumeRequest`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.RelocateVolumeRequest__added` | added | `{"type":"object","properties":{"creationToken":{"type":"string"}}}` |

### Changes for `RemotePath`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.RemotePath__added` | added | `{"type":"object","properties":{"externalHostName":{"type":"string"},"serverName":{"type":"string"},"...` |

### Changes for `Replication`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.Replication__added` | added | `{"type":"object","properties":{"replicationId":{"type":"string","minLength":36,"maxLength":36,"patte...` |

### Changes for `ReplicationObject`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.ReplicationObject__added` | added | `{"type":"object","properties":{"replicationId":{"type":"string","readOnly":true},"endpointType":{"ty...` |

### Changes for `ReplicationStatus`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.ReplicationStatus__added` | added | `{"type":"object","properties":{"healthy":{"type":"boolean"},"relationshipStatus":{"type":"string","e...` |

### Changes for `RestoreStatus`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.RestoreStatus__added` | added | `{"type":"object","properties":{"healthy":{"type":"boolean","readOnly":true},"relationshipStatus":{"t...` |

### Changes for `Snapshot`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.Snapshot__added` | added | `{"type":"object","properties":{"properties":{"$ref":"#/definitions/SnapshotProperties","x-ms-client-...` |

### Changes for `SnapshotPatch`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.SnapshotPatch__added` | added | `{"type":"object"}` |

### Changes for `SnapshotPoliciesList`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.SnapshotPoliciesList__added` | added | `{"type":"object","description":"[Placeholder] Discription for page model","properties":{"value":{"ty...` |

### Changes for `SnapshotPolicy`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.SnapshotPolicy__added` | added | `{"type":"object","properties":{"properties":{"$ref":"#/definitions/SnapshotPolicyProperties","x-ms-c...` |

### Changes for `SnapshotPolicyPatch`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.SnapshotPolicyPatch__added` | added | `{"type":"object","properties":{"location":{"type":"string"},"id":{"type":"string","readOnly":true},"...` |

### Changes for `SnapshotPolicyProperties`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.SnapshotPolicyProperties__added` | added | `{"type":"object","properties":{"hourlySchedule":{"$ref":"#/definitions/HourlySchedule"},"dailySchedu...` |

### Changes for `SnapshotPolicyVolumeList`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.SnapshotPolicyVolumeList__added` | added | `{"type":"object","properties":{"value":{"type":"array","items":{"$ref":"#/definitions/Volume"}}}}` |

### Changes for `SnapshotProperties`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.SnapshotProperties__added` | added | `{"type":"object","properties":{"snapshotId":{"type":"string","minLength":36,"maxLength":36,"pattern"...` |

### Changes for `SnapshotRestoreFiles`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.SnapshotRestoreFiles__added` | added | `{"type":"object","properties":{"filePaths":{"type":"array","items":{"type":"string"}},"destinationPa...` |

### Changes for `SnapshotsList`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.SnapshotsList__added` | added | `{"type":"object","description":"[Placeholder] Discription for page model","properties":{"value":{"ty...` |

### Changes for `SubvolumeInfo`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.SubvolumeInfo__added` | added | `{"type":"object","properties":{"properties":{"$ref":"#/definitions/SubvolumeProperties","x-ms-client...` |

### Changes for `SubvolumeModel`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.SubvolumeModel__added` | added | `{"type":"object","properties":{"id":{"type":"string","readOnly":true},"name":{"type":"string","readO...` |

### Changes for `SubvolumeModelProperties`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.SubvolumeModelProperties__added` | added | `{"type":"object","properties":{"path":{"type":"string"},"parentPath":{"type":"string"},"size":{"type...` |

### Changes for `SubvolumePatchParams`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.SubvolumePatchParams__added` | added | `{"type":"object","properties":{"size":{"type":"integer","format":"int64"},"path":{"type":"string"}}}` |

### Changes for `SubvolumePatchRequest`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.SubvolumePatchRequest__added` | added | `{"type":"object","properties":{"properties":{"$ref":"#/definitions/SubvolumePatchParams","x-ms-clien...` |

### Changes for `SubvolumeProperties`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.SubvolumeProperties__added` | added | `{"type":"object","properties":{"path":{"type":"string"},"size":{"type":"integer","format":"int64"},"...` |

### Changes for `SubvolumesList`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.SubvolumesList__added` | added | `{"type":"object","description":"[Placeholder] Discription for page model","properties":{"value":{"ty...` |

### Changes for `SvmPeerCommandResponse`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.SvmPeerCommandResponse__added` | added | `{"type":"object","properties":{"svmPeeringCommand":{"type":"string"}}}` |

### Changes for `TypeSpec.Http.OkResponse`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions['TypeSpec.Http.OkResponse__added']` | added | `{"type":"object"}` |

### Changes for `UsageName`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.UsageName__added` | added | `{"type":"object","properties":{"value":{"type":"string"},"localizedValue":{"type":"string"}}}` |

### Changes for `UsageProperties`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.UsageProperties__added` | added | `{"type":"object","properties":{"currentValue":{"type":"integer","format":"int32","readOnly":true},"l...` |

### Changes for `Volume`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.Volume__added` | added | `{"type":"object","properties":{"properties":{"$ref":"#/definitions/VolumeProperties","x-ms-client-fl...` |

### Changes for `VolumeBackupProperties`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.VolumeBackupProperties__added` | added | `{"type":"object","properties":{"backupPolicyId":{"type":"string","format":"arm-id","x-ms-arm-id-deta...` |

### Changes for `VolumeBackups`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.VolumeBackups__added` | added | `{"type":"object","properties":{"volumeName":{"type":"string"},"volumeResourceId":{"type":"string","f...` |

### Changes for `VolumeGroup`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.VolumeGroup__added` | added | `{"type":"object","properties":{"location":{"type":"string","x-ms-mutability":["create","read"]},"id"...` |

### Changes for `VolumeGroupDetails`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.VolumeGroupDetails__added` | added | `{"type":"object","properties":{"properties":{"$ref":"#/definitions/VolumeGroupProperties","x-ms-clie...` |

### Changes for `VolumeGroupList`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.VolumeGroupList__added` | added | `{"type":"object","description":"[Placeholder] Discription for page model","properties":{"value":{"ty...` |

### Changes for `VolumeGroupListProperties`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.VolumeGroupListProperties__added` | added | `{"type":"object","properties":{"provisioningState":{"type":"string","readOnly":true},"groupMetaData"...` |

### Changes for `VolumeGroupMetaData`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.VolumeGroupMetaData__added` | added | `{"type":"object","properties":{"groupDescription":{"type":"string"},"applicationType":{"type":"strin...` |

### Changes for `VolumeGroupProperties`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.VolumeGroupProperties__added` | added | `{"type":"object","properties":{"provisioningState":{"type":"string","readOnly":true},"groupMetaData"...` |

### Changes for `VolumeGroupVolumeProperties`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.VolumeGroupVolumeProperties__added` | added | `{"type":"object","properties":{"id":{"type":"string","readOnly":true},"name":{"type":"string"},"type...` |

### Changes for `VolumeList`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.VolumeList__added` | added | `{"type":"object","description":"[Placeholder] Discription for page model","properties":{"value":{"ty...` |

### Changes for `VolumePatch`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.VolumePatch__added` | added | `{"type":"object","properties":{"location":{"type":"string"},"id":{"type":"string","readOnly":true},"...` |

### Changes for `VolumePatchProperties`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.VolumePatchProperties__added` | added | `{"type":"object","properties":{"serviceLevel":{"type":"string","default":"Premium","enum":["Standard...` |

### Changes for `VolumePatchPropertiesDataProtection`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.VolumePatchPropertiesDataProtection__added` | added | `{"type":"object","properties":{"backup":{"$ref":"#/definitions/VolumeBackupProperties"},"snapshot":{...` |

### Changes for `VolumePatchPropertiesExportPolicy`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.VolumePatchPropertiesExportPolicy__added` | added | `{"type":"object","properties":{"rules":{"type":"array","items":{"$ref":"#/definitions/ExportPolicyRu...` |

### Changes for `VolumeProperties`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.VolumeProperties__added` | added | `{"type":"object","properties":{"fileSystemId":{"type":"string","minLength":36,"maxLength":36,"patter...` |

### Changes for `VolumePropertiesDataProtection`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.VolumePropertiesDataProtection__added` | added | `{"type":"object","properties":{"backup":{"$ref":"#/definitions/VolumeBackupProperties"},"replication...` |

### Changes for `VolumePropertiesExportPolicy`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.VolumePropertiesExportPolicy__added` | added | `{"type":"object","properties":{"rules":{"type":"array","items":{"$ref":"#/definitions/ExportPolicyRu...` |

### Changes for `VolumeQuotaRule`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.VolumeQuotaRule__added` | added | `{"type":"object","properties":{"properties":{"$ref":"#/definitions/VolumeQuotaRulesProperties","x-ms...` |

### Changes for `VolumeQuotaRulePatch`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.VolumeQuotaRulePatch__added` | added | `{"type":"object","properties":{"tags":{"type":"object","additionalProperties":{"type":"string"}},"pr...` |

### Changes for `VolumeQuotaRulesList`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.VolumeQuotaRulesList__added` | added | `{"type":"object","description":"[Placeholder] Discription for page model","properties":{"value":{"ty...` |

### Changes for `VolumeQuotaRulesProperties`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.VolumeQuotaRulesProperties__added` | added | `{"type":"object","properties":{"provisioningState":{"type":"string","enum":["Accepted","Creating","P...` |

### Changes for `VolumeRelocationProperties`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.VolumeRelocationProperties__added` | added | `{"type":"object","properties":{"relocationRequested":{"type":"boolean"},"readyToBeFinalized":{"type"...` |

### Changes for `VolumeRevert`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.VolumeRevert__added` | added | `{"type":"object","properties":{"snapshotId":{"type":"string","format":"arm-id","x-ms-arm-id-details"...` |

### Changes for `VolumeSnapshotProperties`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.VolumeSnapshotProperties__added` | added | `{"type":"object","properties":{"snapshotPolicyId":{"type":"string"}}}` |

### Changes for `WeeklySchedule`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.WeeklySchedule__added` | added | `{"type":"object","properties":{"snapshotsToKeep":{"type":"integer","format":"int32"},"day":{"type":"...` |

### Changes for `example`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.EncryptionIdentity.properties.federatedClientId.example__deleted` | deleted | `87654321-1234-1234-1234-876543214321` |
| `definitions.FilePathAvailabilityRequest.properties.availabilityZone.example__deleted` | deleted | `1` |
| `definitions.KeyVaultProperties.properties.keyVaultId.example__deleted` | deleted | `9760acf5-4638-11e7-9bdb-020073ca7778` |
| `definitions.QueryNetworkSiblingSetRequest.properties.networkSiblingSetId.example__deleted` | deleted | `9760acf5-4638-11e7-9bdb-020073ca3333` |
| `definitions.UpdateNetworkSiblingSetRequest.properties.networkFeatures.example__deleted` | deleted | `Standard` |
| `definitions.UpdateNetworkSiblingSetRequest.properties.networkSiblingSetId.example__deleted` | deleted | `9760acf5-4638-11e7-9bdb-020073ca3333` |
| `definitions.UpdateNetworkSiblingSetRequest.properties.networkSiblingSetStateId.example__deleted` | deleted | `12345_44420.8001578125` |

### Changes for `title`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.FilePathAvailabilityRequest.properties.availabilityZone.title__deleted` | deleted | `Logical availability zone` |
| `definitions.QueryNetworkSiblingSetRequest.properties.networkSiblingSetId.title__deleted` | deleted | `Network Sibling Set ID` |
| `definitions.QueryNetworkSiblingSetRequest.properties.subnetId.title__deleted` | deleted | `Subnet resource Id` |
| `definitions.QueryNetworkSiblingSetRequest.title__deleted` | deleted | `QueryNetworkSiblingSetRequest` |
| `definitions.UpdateNetworkSiblingSetRequest.properties.networkFeatures.title__deleted` | deleted | `Network features` |
| `definitions.UpdateNetworkSiblingSetRequest.properties.networkSiblingSetId.title__deleted` | deleted | `Network Sibling Set ID` |
| `definitions.UpdateNetworkSiblingSetRequest.properties.networkSiblingSetStateId.title__deleted` | deleted | `Network sibling set state Id` |
| `definitions.UpdateNetworkSiblingSetRequest.properties.subnetId.title__deleted` | deleted | `Subnet resource Id` |
| `definitions.UpdateNetworkSiblingSetRequest.title__deleted` | deleted | `UpdateNetworkSiblingSetRequest` |

### Changes for `x-nullable`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.FilePathAvailabilityRequest.properties.availabilityZone['x-nullable__deleted']` | deleted | `true` |

### Changes for `type`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.Operation.properties.display.type__deleted` | deleted | `object` |

### Changes for `properties`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.Operation.properties.display.properties__deleted` | deleted | `{"provider":{"type":"string","description":"Service provider: Microsoft NetApp."},"resource":{"type"...` |

### Changes for `$ref`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.Operation.properties.display.$ref__added` | added | `#/definitions/OperationDisplay` |

### Changes for `required`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.OperationListResult.required__added` | added | `["value"]` |
| `definitions.SubscriptionQuotaItemList.required__added` | added | `["value"]` |
| `definitions.UsagesListResult.required__added` | added | `["value"]` |

### Changes for `x-ms-identifiers`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.OperationListResult.properties.value['x-ms-identifiers__deleted']` | deleted | `["name"]` |

### Changes for `x-ms-mutability`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.QueryNetworkSiblingSetRequest.properties.subnetId['x-ms-mutability__deleted']` | deleted | `["create","read"]` |
| `definitions.UpdateNetworkSiblingSetRequest.properties.subnetId['x-ms-mutability__deleted']` | deleted | `["create","read"]` |

### Changes for `readOnly`

| Path | Change Type | Value |
|------|------------|-------|
| `definitions.UsageResult.properties.name.readOnly__added` | added | `true` |

## Modified Values

| Path | Old Value | New Value |
|------|-----------|----------|
| `definitions.UsageResult.properties.name.$ref` | `#/definitions/usageName` | `#/definitions/UsageName` |
| `definitions.UsageResult.properties.properties.$ref` | `#/definitions/usageProperties` | `#/definitions/UsageProperties` |
| `info.description` | `Microsoft NetApp Azure Resource Provider specification` | `Microsoft NetApp Files Azure Resource Provider specification` |
| `info.title` | `Microsoft NetApp` | `NetAppManagementClient` |
| `paths['/providers/microsoft.NetApp/operations'].get['x-ms-examples'].OperationList.$ref` | `examples/OperationList.json` | `./examples/OperationList.json` |
| `paths['/subscriptions/{subscriptionId}/providers/microsoft.NetApp/locations/{location}/checkFilePathAvailability'].post['x-ms-examples'].CheckFilePathAvailability.$ref` | `examples/CheckFilePathAvailability.json` | `./examples/CheckFilePathAvailability.json` |
| `paths['/subscriptions/{subscriptionId}/providers/microsoft.NetApp/locations/{location}/checkNameAvailability'].post['x-ms-examples'].CheckNameAvailability.$ref` | `examples/CheckNameAvailability.json` | `./examples/CheckNameAvailability.json` |
| `paths['/subscriptions/{subscriptionId}/providers/microsoft.NetApp/locations/{location}/checkQuotaAvailability'].post['x-ms-examples'].CheckQuotaAvailability.$ref` | `examples/CheckQuotaAvailability.json` | `./examples/CheckQuotaAvailability.json` |
| `paths['/subscriptions/{subscriptionId}/providers/microsoft.NetApp/locations/{location}/queryNetworkSiblingSet'].post.responses.200.schema.$ref` | `#/definitions/networkSiblingSet` | `#/definitions/NetworkSiblingSet` |
| `paths['/subscriptions/{subscriptionId}/providers/microsoft.NetApp/locations/{location}/queryNetworkSiblingSet'].post['x-ms-examples'].NetworkSiblingSet_Query.$ref` | `examples/NetworkSiblingSet_Query.json` | `./examples/NetworkSiblingSet_Query.json` |
| `paths['/subscriptions/{subscriptionId}/providers/microsoft.NetApp/locations/{location}/quotaLimits'].get['x-ms-examples'].QuotaLimits.$ref` | `examples/QuotaLimits_List.json` | `./examples/QuotaLimits_List.json` |
| `paths['/subscriptions/{subscriptionId}/providers/microsoft.NetApp/locations/{location}/quotaLimits/{quotaLimitName}'].get['x-ms-examples'].QuotaLimits.$ref` | `examples/QuotaLimits_Get.json` | `./examples/QuotaLimits_Get.json` |
| `paths['/subscriptions/{subscriptionId}/providers/microsoft.NetApp/locations/{location}/regionInfo'].get.parameters[0].$ref` | `../../../../../common-types/resource-management/v6/types.json#/parameters/LocationParameter` | `../../../../../common-types/resource-management/v5/types.json#/parameters/LocationParameter` |
| `paths['/subscriptions/{subscriptionId}/providers/microsoft.NetApp/locations/{location}/regionInfo'].get.responses.200.schema.$ref` | `#/definitions/regionInfo` | `#/definitions/RegionInfo` |
| `paths['/subscriptions/{subscriptionId}/providers/microsoft.NetApp/locations/{location}/regionInfo'].get['x-ms-examples'].RegionInfo_Query.$ref` | `examples/RegionInfo.json` | `./examples/RegionInfo.json` |
| `paths['/subscriptions/{subscriptionId}/providers/microsoft.NetApp/locations/{location}/regionInfos'].get.responses.200.schema.$ref` | `#/definitions/regionInfosList` | `#/definitions/RegionInfosList` |
| `paths['/subscriptions/{subscriptionId}/providers/microsoft.NetApp/locations/{location}/regionInfos'].get['x-ms-examples'].RegionInfos_List.$ref` | `examples/RegionInfos_List.json` | `./examples/RegionInfos_List.json` |
| `paths['/subscriptions/{subscriptionId}/providers/microsoft.NetApp/locations/{location}/regionInfos/default'].get.responses.200.schema.$ref` | `#/definitions/regionInfoResource` | `#/definitions/RegionInfoResource` |
| `paths['/subscriptions/{subscriptionId}/providers/microsoft.NetApp/locations/{location}/regionInfos/default'].get['x-ms-examples'].RegionInfos_Get.$ref` | `examples/RegionInfos_Get.json` | `./examples/RegionInfos_Get.json` |
| `paths['/subscriptions/{subscriptionId}/providers/microsoft.NetApp/locations/{location}/updateNetworkSiblingSet'].post.responses.200.schema.$ref` | `#/definitions/networkSiblingSet` | `#/definitions/NetworkSiblingSet` |
| `paths['/subscriptions/{subscriptionId}/providers/microsoft.NetApp/locations/{location}/updateNetworkSiblingSet'].post['x-ms-examples'].NetworkFeatures_Update.$ref` | `examples/NetworkSiblingSet_Update.json` | `./examples/NetworkSiblingSet_Update.json` |
| `paths['/subscriptions/{subscriptionId}/providers/microsoft.NetApp/locations/{location}/usages'].get.parameters[0].$ref` | `../../../../../common-types/resource-management/v6/types.json#/parameters/LocationParameter` | `../../../../../common-types/resource-management/v5/types.json#/parameters/LocationParameter` |
| `paths['/subscriptions/{subscriptionId}/providers/microsoft.NetApp/locations/{location}/usages'].get['x-ms-examples'].Usages_List.$ref` | `examples/Usages_List.json` | `./examples/Usages_List.json` |
| `paths['/subscriptions/{subscriptionId}/providers/microsoft.NetApp/locations/{location}/usages/{usageType}'].get['x-ms-examples'].Usages_Get.$ref` | `examples/Usages_Get.json` | `./examples/Usages_Get.json` |
| `paths['/subscriptions/{subscriptionId}/providers/microsoft.NetApp/netAppAccounts'].get.responses.200.schema.$ref` | `#/definitions/netAppAccountList` | `#/definitions/NetAppAccountList` |
| `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.NetApp/netAppAccounts'].get.responses.200.schema.$ref` | `#/definitions/netAppAccountList` | `#/definitions/NetAppAccountList` |
| `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.NetApp/netAppAccounts'].get['x-ms-examples'].Accounts_List.$ref` | `examples/Accounts_List.json` | `./examples/Accounts_List.json` |
| `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.NetApp/netAppAccounts/{accountName}'].delete['x-ms-examples'].Accounts_Delete.$ref` | `examples/Accounts_Delete.json` | `./examples/Accounts_Delete.json` |
| `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.NetApp/netAppAccounts/{accountName}'].get.responses.200.schema.$ref` | `#/definitions/netAppAccount` | `#/definitions/NetAppAccount` |
| `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.NetApp/netAppAccounts/{accountName}'].get['x-ms-examples'].Accounts_Get.$ref` | `examples/Accounts_Get.json` | `./examples/Accounts_Get.json` |
| `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.NetApp/netAppAccounts/{accountName}'].patch.parameters[1].schema.$ref` | `#/definitions/netAppAccountPatch` | `#/definitions/NetAppAccountPatch` |
| `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.NetApp/netAppAccounts/{accountName}'].patch.responses.200.schema.$ref` | `#/definitions/netAppAccount` | `#/definitions/NetAppAccount` |
| `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.NetApp/netAppAccounts/{accountName}'].patch.responses.202.schema.$ref` | `#/definitions/netAppAccount` | `#/definitions/NetAppAccount` |
| `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.NetApp/netAppAccounts/{accountName}'].patch['x-ms-examples'].Accounts_Update.$ref` | `examples/Accounts_Update.json` | `./examples/Accounts_Update.json` |
| `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.NetApp/netAppAccounts/{accountName}'].put.parameters[1].schema.$ref` | `#/definitions/netAppAccount` | `#/definitions/NetAppAccount` |
| `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.NetApp/netAppAccounts/{accountName}'].put.responses.200.schema.$ref` | `#/definitions/netAppAccount` | `#/definitions/NetAppAccount` |
| `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.NetApp/netAppAccounts/{accountName}'].put.responses.201.schema.$ref` | `#/definitions/netAppAccount` | `#/definitions/NetAppAccount` |
| `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.NetApp/netAppAccounts/{accountName}'].put['x-ms-examples'].Accounts_CreateOrUpdate.$ref` | `examples/Accounts_CreateOrUpdate.json` | `./examples/Accounts_CreateOrUpdate.json` |
| `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.NetApp/netAppAccounts/{accountName}'].put['x-ms-examples'].Accounts_CreateOrUpdateWithActiveDirectory.$ref` | `examples/Accounts_CreateOrUpdateAD.json` | `./examples/Accounts_CreateOrUpdateAD.json` |
| `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.NetApp/netAppAccounts/{accountName}/backupPolicies'].get.responses.200.schema.$ref` | `#/definitions/backupPoliciesList` | `#/definitions/BackupPoliciesList` |
| `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.NetApp/netAppAccounts/{accountName}/backupPolicies'].get['x-ms-examples'].BackupPolicies_List.$ref` | `examples/BackupPolicies_List.json` | `./examples/BackupPolicies_List.json` |
| `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.NetApp/netAppAccounts/{accountName}/backupPolicies/{backupPolicyName}'].delete['x-ms-examples'].BackupPolicies_Delete.$ref` | `examples/BackupPolicies_Delete.json` | `./examples/BackupPolicies_Delete.json` |
| `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.NetApp/netAppAccounts/{accountName}/backupPolicies/{backupPolicyName}'].get.responses.200.schema.$ref` | `#/definitions/backupPolicy` | `#/definitions/BackupPolicy` |
| `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.NetApp/netAppAccounts/{accountName}/backupPolicies/{backupPolicyName}'].get['x-ms-examples'].Backups_Get.$ref` | `examples/BackupPolicies_Get.json` | `./examples/BackupPolicies_Get.json` |
| `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.NetApp/netAppAccounts/{accountName}/backupPolicies/{backupPolicyName}'].patch.parameters[2].schema.$ref` | `#/definitions/backupPolicyPatch` | `#/definitions/BackupPolicyPatch` |
| `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.NetApp/netAppAccounts/{accountName}/backupPolicies/{backupPolicyName}'].patch.responses.200.schema.$ref` | `#/definitions/backupPolicy` | `#/definitions/BackupPolicy` |
| `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.NetApp/netAppAccounts/{accountName}/backupPolicies/{backupPolicyName}'].patch.responses.202.schema.$ref` | `#/definitions/backupPolicy` | `#/definitions/BackupPolicy` |
| `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.NetApp/netAppAccounts/{accountName}/backupPolicies/{backupPolicyName}'].patch['x-ms-examples'].BackupPolicies_Update.$ref` | `examples/BackupPolicies_Update.json` | `./examples/BackupPolicies_Update.json` |
| `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.NetApp/netAppAccounts/{accountName}/backupPolicies/{backupPolicyName}'].put.parameters[2].schema.$ref` | `#/definitions/backupPolicy` | `#/definitions/BackupPolicy` |
| `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.NetApp/netAppAccounts/{accountName}/backupPolicies/{backupPolicyName}'].put.responses.200.schema.$ref` | `#/definitions/backupPolicy` | `#/definitions/BackupPolicy` |
| `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.NetApp/netAppAccounts/{accountName}/backupPolicies/{backupPolicyName}'].put.responses.201.schema.$ref` | `#/definitions/backupPolicy` | `#/definitions/BackupPolicy` |
| `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.NetApp/netAppAccounts/{accountName}/backupPolicies/{backupPolicyName}'].put['x-ms-examples'].BackupPolicies_Create.$ref` | `examples/BackupPolicies_Create.json` | `./examples/BackupPolicies_Create.json` |
| `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.NetApp/netAppAccounts/{accountName}/backupVaults'].get.responses.200.schema.$ref` | `#/definitions/backupVaultsList` | `#/definitions/BackupVaultsList` |
| `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.NetApp/netAppAccounts/{accountName}/backupVaults'].get['x-ms-examples'].BackupVaults_List.$ref` | `examples/BackupVaults_List.json` | `./examples/BackupVaults_List.json` |
| `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.NetApp/netAppAccounts/{accountName}/backupVaults/{backupVaultName}'].delete['x-ms-examples'].BackupVaults_Delete.$ref` | `examples/BackupVaults_Delete.json` | `./examples/BackupVaults_Delete.json` |
| `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.NetApp/netAppAccounts/{accountName}/backupVaults/{backupVaultName}'].get.responses.200.schema.$ref` | `#/definitions/backupVault` | `#/definitions/BackupVault` |
| `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.NetApp/netAppAccounts/{accountName}/backupVaults/{backupVaultName}'].get['x-ms-examples'].BackupVaults_Get.$ref` | `examples/BackupVaults_Get.json` | `./examples/BackupVaults_Get.json` |
| `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.NetApp/netAppAccounts/{accountName}/backupVaults/{backupVaultName}'].patch.parameters[2].schema.$ref` | `#/definitions/backupVaultPatch` | `#/definitions/BackupVaultPatch` |
| `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.NetApp/netAppAccounts/{accountName}/backupVaults/{backupVaultName}'].patch.responses.200.schema.$ref` | `#/definitions/backupVault` | `#/definitions/BackupVault` |
| `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.NetApp/netAppAccounts/{accountName}/backupVaults/{backupVaultName}'].patch.responses.202.schema.$ref` | `#/definitions/backupVault` | `#/definitions/BackupVault` |
| `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.NetApp/netAppAccounts/{accountName}/backupVaults/{backupVaultName}'].patch['x-ms-examples'].BackupVaults_Update.$ref` | `examples/BackupVaults_Update.json` | `./examples/BackupVaults_Update.json` |
| `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.NetApp/netAppAccounts/{accountName}/backupVaults/{backupVaultName}'].put.parameters[2].schema.$ref` | `#/definitions/backupVault` | `#/definitions/BackupVault` |
| `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.NetApp/netAppAccounts/{accountName}/backupVaults/{backupVaultName}'].put.responses.200.schema.$ref` | `#/definitions/backupVault` | `#/definitions/BackupVault` |
| `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.NetApp/netAppAccounts/{accountName}/backupVaults/{backupVaultName}'].put.responses.201.schema.$ref` | `#/definitions/backupVault` | `#/definitions/BackupVault` |
| `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.NetApp/netAppAccounts/{accountName}/backupVaults/{backupVaultName}'].put['x-ms-examples'].BackupVault_CreateOrUpdate.$ref` | `examples/BackupVaults_Create.json` | `./examples/BackupVaults_Create.json` |
| `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.NetApp/netAppAccounts/{accountName}/backupVaults/{backupVaultName}/backups'].get.responses.200.schema.$ref` | `#/definitions/backupsList` | `#/definitions/BackupsList` |
| `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.NetApp/netAppAccounts/{accountName}/backupVaults/{backupVaultName}/backups'].get['x-ms-examples'].Backups_List.$ref` | `examples/BackupsUnderBackupVault_List.json` | `./examples/BackupsUnderBackupVault_List.json` |
| `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.NetApp/netAppAccounts/{accountName}/backupVaults/{backupVaultName}/backups/{backupName}'].delete['x-ms-examples'].BackupsUnderBackupVault_Delete.$ref` | `examples/BackupsUnderBackupVault_Delete.json` | `./examples/BackupsUnderBackupVault_Delete.json` |
| `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.NetApp/netAppAccounts/{accountName}/backupVaults/{backupVaultName}/backups/{backupName}'].get.responses.200.schema.$ref` | `#/definitions/backup` | `#/definitions/Backup` |
| `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.NetApp/netAppAccounts/{accountName}/backupVaults/{backupVaultName}/backups/{backupName}'].get['x-ms-examples'].BackupsUnderBackupVault_Get.$ref` | `examples/BackupsUnderBackupVault_Get.json` | `./examples/BackupsUnderBackupVault_Get.json` |
| `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.NetApp/netAppAccounts/{accountName}/backupVaults/{backupVaultName}/backups/{backupName}'].patch.parameters[3].schema.$ref` | `#/definitions/backupPatch` | `#/definitions/BackupPatch` |
| `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.NetApp/netAppAccounts/{accountName}/backupVaults/{backupVaultName}/backups/{backupName}'].patch.responses.200.schema.$ref` | `#/definitions/backup` | `#/definitions/Backup` |
| `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.NetApp/netAppAccounts/{accountName}/backupVaults/{backupVaultName}/backups/{backupName}'].patch.responses.202.schema.$ref` | `#/definitions/backup` | `#/definitions/Backup` |
| `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.NetApp/netAppAccounts/{accountName}/backupVaults/{backupVaultName}/backups/{backupName}'].patch['x-ms-examples'].BackupsUnderBackupVault_Update.$ref` | `examples/BackupsUnderBackupVault_Update.json` | `./examples/BackupsUnderBackupVault_Update.json` |
| `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.NetApp/netAppAccounts/{accountName}/backupVaults/{backupVaultName}/backups/{backupName}'].put.parameters[3].schema.$ref` | `#/definitions/backup` | `#/definitions/Backup` |
| `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.NetApp/netAppAccounts/{accountName}/backupVaults/{backupVaultName}/backups/{backupName}'].put.responses.200.schema.$ref` | `#/definitions/backup` | `#/definitions/Backup` |
| `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.NetApp/netAppAccounts/{accountName}/backupVaults/{backupVaultName}/backups/{backupName}'].put.responses.201.schema.$ref` | `#/definitions/backup` | `#/definitions/Backup` |
| `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.NetApp/netAppAccounts/{accountName}/backupVaults/{backupVaultName}/backups/{backupName}'].put['x-ms-examples'].BackupsUnderBackupVault_Create.$ref` | `examples/BackupsUnderBackupVault_Create.json` | `./examples/BackupsUnderBackupVault_Create.json` |
| `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.NetApp/netAppAccounts/{accountName}/backupVaults/{backupVaultName}/backups/{backupName}/restoreFiles'].post['x-ms-examples'].Backups_SingleFileRestore.$ref` | `examples/BackupsUnderBackupVault_SingleFileRestore.json` | `./examples/BackupsUnderBackupVault_SingleFileRestore.json` |
| `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.NetApp/netAppAccounts/{accountName}/capacityPools'].get.responses.200.schema.$ref` | `#/definitions/capacityPoolList` | `#/definitions/CapacityPoolList` |
| `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.NetApp/netAppAccounts/{accountName}/capacityPools'].get['x-ms-examples'].Pools_List.$ref` | `examples/Pools_List.json` | `./examples/Pools_List.json` |
| `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.NetApp/netAppAccounts/{accountName}/capacityPools/{poolName}'].delete['x-ms-examples'].Pools_Delete.$ref` | `examples/Pools_Delete.json` | `./examples/Pools_Delete.json` |
| `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.NetApp/netAppAccounts/{accountName}/capacityPools/{poolName}'].get.responses.200.schema.$ref` | `#/definitions/capacityPool` | `#/definitions/CapacityPool` |
| `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.NetApp/netAppAccounts/{accountName}/capacityPools/{poolName}'].get['x-ms-examples'].Pools_Get_CustomThroughput.$ref` | `examples/Pools_Get_CustomThroughput.json` | `./examples/Pools_Get_CustomThroughput.json` |
| `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.NetApp/netAppAccounts/{accountName}/capacityPools/{poolName}'].get['x-ms-examples'].Pools_Get.$ref` | `examples/Pools_Get.json` | `./examples/Pools_Get.json` |
| `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.NetApp/netAppAccounts/{accountName}/capacityPools/{poolName}'].patch.responses.200.schema.$ref` | `#/definitions/capacityPool` | `#/definitions/CapacityPool` |
| `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.NetApp/netAppAccounts/{accountName}/capacityPools/{poolName}'].patch['x-ms-examples'].Pools_Update_CustomThroughput.$ref` | `examples/Pools_Update_CustomThroughput.json` | `./examples/Pools_Update_CustomThroughput.json` |
| `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.NetApp/netAppAccounts/{accountName}/capacityPools/{poolName}'].patch['x-ms-examples'].Pools_Update.$ref` | `examples/Pools_Update.json` | `./examples/Pools_Update.json` |
| `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.NetApp/netAppAccounts/{accountName}/capacityPools/{poolName}'].put.responses.200.schema.$ref` | `#/definitions/capacityPool` | `#/definitions/CapacityPool` |
| `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.NetApp/netAppAccounts/{accountName}/capacityPools/{poolName}'].put.responses.201.schema.$ref` | `#/definitions/capacityPool` | `#/definitions/CapacityPool` |
| `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.NetApp/netAppAccounts/{accountName}/capacityPools/{poolName}'].put['x-ms-examples'].Pools_CreateOrUpdate_CustomThroughput.$ref` | `examples/Pools_CreateOrUpdate_CustomThroughput.json` | `./examples/Pools_CreateOrUpdate_CustomThroughput.json` |
| `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.NetApp/netAppAccounts/{accountName}/capacityPools/{poolName}'].put['x-ms-examples'].Pools_CreateOrUpdate.$ref` | `examples/Pools_CreateOrUpdate.json` | `./examples/Pools_CreateOrUpdate.json` |
| `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.NetApp/netAppAccounts/{accountName}/capacityPools/{poolName}/volumes'].get.responses.200.schema.$ref` | `#/definitions/volumeList` | `#/definitions/VolumeList` |
| `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.NetApp/netAppAccounts/{accountName}/capacityPools/{poolName}/volumes'].get['x-ms-examples'].Volumes_List.$ref` | `examples/Volumes_List.json` | `./examples/Volumes_List.json` |
| `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.NetApp/netAppAccounts/{accountName}/capacityPools/{poolName}/volumes/{volumeName}'].delete['x-ms-examples'].Volumes_Delete.$ref` | `examples/Volumes_Delete.json` | `./examples/Volumes_Delete.json` |
| `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.NetApp/netAppAccounts/{accountName}/capacityPools/{poolName}/volumes/{volumeName}'].get.responses.200.schema.$ref` | `#/definitions/volume` | `#/definitions/Volume` |
| `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.NetApp/netAppAccounts/{accountName}/capacityPools/{poolName}/volumes/{volumeName}'].get['x-ms-examples'].Volumes_Get.$ref` | `examples/Volumes_Get.json` | `./examples/Volumes_Get.json` |
| `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.NetApp/netAppAccounts/{accountName}/capacityPools/{poolName}/volumes/{volumeName}'].patch.responses.200.schema.$ref` | `#/definitions/volume` | `#/definitions/Volume` |
| `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.NetApp/netAppAccounts/{accountName}/capacityPools/{poolName}/volumes/{volumeName}'].patch['x-ms-examples'].Volumes_Update.$ref` | `examples/Volumes_Update.json` | `./examples/Volumes_Update.json` |
| `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.NetApp/netAppAccounts/{accountName}/capacityPools/{poolName}/volumes/{volumeName}'].put.responses.200.schema.$ref` | `#/definitions/volume` | `#/definitions/Volume` |
| `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.NetApp/netAppAccounts/{accountName}/capacityPools/{poolName}/volumes/{volumeName}'].put.responses.201.schema.$ref` | `#/definitions/volume` | `#/definitions/Volume` |
| `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.NetApp/netAppAccounts/{accountName}/capacityPools/{poolName}/volumes/{volumeName}'].put['x-ms-examples'].Volumes_CreateOrUpdate.$ref` | `examples/Volumes_CreateOrUpdate.json` | `./examples/Volumes_CreateOrUpdate.json` |
| `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.NetApp/netAppAccounts/{accountName}/capacityPools/{poolName}/volumes/{volumeName}/authorizeExternalReplication'].post.responses.200.schema.$ref` | `#/definitions/svmPeerCommandResponse` | `#/definitions/SvmPeerCommandResponse` |
| `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.NetApp/netAppAccounts/{accountName}/capacityPools/{poolName}/volumes/{volumeName}/authorizeExternalReplication'].post['x-ms-examples'].Volumes_AuthorizeExternalReplication.$ref` | `examples/Volumes_AuthorizeExternalReplication.json` | `./examples/Volumes_AuthorizeExternalReplication.json` |
| `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.NetApp/netAppAccounts/{accountName}/capacityPools/{poolName}/volumes/{volumeName}/authorizeReplication'].post.parameters[3].schema.$ref` | `#/definitions/authorizeRequest` | `#/definitions/AuthorizeRequest` |
| `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.NetApp/netAppAccounts/{accountName}/capacityPools/{poolName}/volumes/{volumeName}/authorizeReplication'].post['x-ms-examples'].Volumes_AuthorizeReplication.$ref` | `examples/Volumes_AuthorizeReplication.json` | `./examples/Volumes_AuthorizeReplication.json` |
| `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.NetApp/netAppAccounts/{accountName}/capacityPools/{poolName}/volumes/{volumeName}/breakFileLocks'].post.parameters[3].schema.$ref` | `#/definitions/breakFileLocksRequest` | `#/definitions/BreakFileLocksRequest` |
| `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.NetApp/netAppAccounts/{accountName}/capacityPools/{poolName}/volumes/{volumeName}/breakFileLocks'].post['x-ms-examples'].Volumes_BreakFileLocks.$ref` | `examples/Volumes_BreakFileLocks.json` | `./examples/Volumes_BreakFileLocks.json` |
| `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.NetApp/netAppAccounts/{accountName}/capacityPools/{poolName}/volumes/{volumeName}/breakReplication'].post.parameters[3].schema.$ref` | `#/definitions/breakReplicationRequest` | `#/definitions/BreakReplicationRequest` |
| `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.NetApp/netAppAccounts/{accountName}/capacityPools/{poolName}/volumes/{volumeName}/breakReplication'].post['x-ms-examples'].Volumes_BreakReplication.$ref` | `examples/Volumes_BreakReplication.json` | `./examples/Volumes_BreakReplication.json` |
| `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.NetApp/netAppAccounts/{accountName}/capacityPools/{poolName}/volumes/{volumeName}/deleteReplication'].post['x-ms-examples'].Volumes_DeleteReplication.$ref` | `examples/Volumes_DeleteReplication.json` | `./examples/Volumes_DeleteReplication.json` |
| `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.NetApp/netAppAccounts/{accountName}/capacityPools/{poolName}/volumes/{volumeName}/finalizeExternalReplication'].post['x-ms-examples'].Volumes_FinalizeExternalReplication.$ref` | `examples/Volumes_FinalizeExternalReplication.json` | `./examples/Volumes_FinalizeExternalReplication.json` |
| `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.NetApp/netAppAccounts/{accountName}/capacityPools/{poolName}/volumes/{volumeName}/finalizeRelocation'].post['x-ms-examples'].Volumes_FinalizeRelocation.$ref` | `examples/Volumes_FinalizeRelocation.json` | `./examples/Volumes_FinalizeRelocation.json` |
| `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.NetApp/netAppAccounts/{accountName}/capacityPools/{poolName}/volumes/{volumeName}/getGroupIdListForLdapUser'].post.parameters[3].schema.$ref` | `#/definitions/getGroupIdListForLDAPUserRequest` | `#/definitions/GetGroupIdListForLdapUserRequest` |
| `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.NetApp/netAppAccounts/{accountName}/capacityPools/{poolName}/volumes/{volumeName}/getGroupIdListForLdapUser'].post.responses.200.schema.$ref` | `#/definitions/getGroupIdListForLDAPUserResponse` | `#/definitions/GetGroupIdListForLdapUserResponse` |
| `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.NetApp/netAppAccounts/{accountName}/capacityPools/{poolName}/volumes/{volumeName}/getGroupIdListForLdapUser'].post['x-ms-examples'].GetGroupIdListForUser.$ref` | `examples/GroupIdListForLDAPUser.json` | `./examples/GroupIdListForLDAPUser.json` |
| `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.NetApp/netAppAccounts/{accountName}/capacityPools/{poolName}/volumes/{volumeName}/latestBackupStatus/current'].get.responses.200.schema.$ref` | `#/definitions/backupStatus` | `#/definitions/BackupStatus` |
| `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.NetApp/netAppAccounts/{accountName}/capacityPools/{poolName}/volumes/{volumeName}/latestBackupStatus/current'].get['x-ms-examples'].Volumes_BackupStatus.$ref` | `examples/Volumes_LatestBackupStatus.json` | `./examples/Volumes_LatestBackupStatus.json` |
| `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.NetApp/netAppAccounts/{accountName}/capacityPools/{poolName}/volumes/{volumeName}/latestRestoreStatus/current'].get.responses.200.schema.$ref` | `#/definitions/restoreStatus` | `#/definitions/RestoreStatus` |
| `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.NetApp/netAppAccounts/{accountName}/capacityPools/{poolName}/volumes/{volumeName}/latestRestoreStatus/current'].get['x-ms-examples'].Volumes_RestoreStatus.$ref` | `examples/Volumes_LatestRestoreStatus.json` | `./examples/Volumes_LatestRestoreStatus.json` |
| `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.NetApp/netAppAccounts/{accountName}/capacityPools/{poolName}/volumes/{volumeName}/listReplications'].post.responses.200.schema.$ref` | `#/definitions/listReplications` | `#/definitions/ListReplications` |
| `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.NetApp/netAppAccounts/{accountName}/capacityPools/{poolName}/volumes/{volumeName}/listReplications'].post['x-ms-examples'].Volumes_ListReplications.$ref` | `examples/Volumes_ListReplications.json` | `./examples/Volumes_ListReplications.json` |
| `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.NetApp/netAppAccounts/{accountName}/capacityPools/{poolName}/volumes/{volumeName}/migrateBackups'].post['x-ms-examples'].BackupsUnderVolume_Migrate.$ref` | `examples/BackupsUnderVolume_Migrate.json` | `./examples/BackupsUnderVolume_Migrate.json` |
| `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.NetApp/netAppAccounts/{accountName}/capacityPools/{poolName}/volumes/{volumeName}/peerExternalCluster'].post.parameters[3].schema.$ref` | `#/definitions/peerClusterForVolumeMigrationRequest` | `#/definitions/PeerClusterForVolumeMigrationRequest` |
| `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.NetApp/netAppAccounts/{accountName}/capacityPools/{poolName}/volumes/{volumeName}/peerExternalCluster'].post.responses.200.schema.$ref` | `#/definitions/clusterPeerCommandResponse` | `#/definitions/ClusterPeerCommandResponse` |
| `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.NetApp/netAppAccounts/{accountName}/capacityPools/{poolName}/volumes/{volumeName}/peerExternalCluster'].post['x-ms-examples'].Volumes_PeerExternalCluster.$ref` | `examples/Volumes_PeerExternalCluster.json` | `./examples/Volumes_PeerExternalCluster.json` |
| `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.NetApp/netAppAccounts/{accountName}/capacityPools/{poolName}/volumes/{volumeName}/performReplicationTransfer'].post['x-ms-examples'].Volumes_PerformReplicationTransfer.$ref` | `examples/Volumes_PerformReplicationTransfer.json` | `./examples/Volumes_PerformReplicationTransfer.json` |
| `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.NetApp/netAppAccounts/{accountName}/capacityPools/{poolName}/volumes/{volumeName}/poolChange'].post.parameters[3].schema.$ref` | `#/definitions/poolChangeRequest` | `#/definitions/PoolChangeRequest` |
| `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.NetApp/netAppAccounts/{accountName}/capacityPools/{poolName}/volumes/{volumeName}/poolChange'].post['x-ms-examples'].Volumes_AuthorizeReplication.$ref` | `examples/Volumes_PoolChange.json` | `./examples/Volumes_PoolChange.json` |
| `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.NetApp/netAppAccounts/{accountName}/capacityPools/{poolName}/volumes/{volumeName}/populateAvailabilityZone'].post.responses.200.schema.$ref` | `#/definitions/volume` | `#/definitions/Volume` |
| `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.NetApp/netAppAccounts/{accountName}/capacityPools/{poolName}/volumes/{volumeName}/populateAvailabilityZone'].post['x-ms-examples'].Volumes_PopulateAvailabilityZones.$ref` | `examples/Volumes_PopulateAvailabilityZones.json` | `./examples/Volumes_PopulateAvailabilityZones.json` |
| `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.NetApp/netAppAccounts/{accountName}/capacityPools/{poolName}/volumes/{volumeName}/reestablishReplication'].post.parameters[3].schema.$ref` | `#/definitions/reestablishReplicationRequest` | `#/definitions/ReestablishReplicationRequest` |
| `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.NetApp/netAppAccounts/{accountName}/capacityPools/{poolName}/volumes/{volumeName}/reestablishReplication'].post['x-ms-examples'].Volumes_ReestablishReplication.$ref` | `examples/Volumes_ReestablishReplication.json` | `./examples/Volumes_ReestablishReplication.json` |
| `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.NetApp/netAppAccounts/{accountName}/capacityPools/{poolName}/volumes/{volumeName}/reinitializeReplication'].post['x-ms-examples'].Volumes_ReInitializeReplication.$ref` | `examples/Volumes_ReInitializeReplication.json` | `./examples/Volumes_ReInitializeReplication.json` |
| `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.NetApp/netAppAccounts/{accountName}/capacityPools/{poolName}/volumes/{volumeName}/relocate'].post.parameters[3].schema.$ref` | `#/definitions/relocateVolumeRequest` | `#/definitions/RelocateVolumeRequest` |
| `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.NetApp/netAppAccounts/{accountName}/capacityPools/{poolName}/volumes/{volumeName}/relocate'].post['x-ms-examples'].Volumes_Relocate.$ref` | `examples/Volumes_Relocate.json` | `./examples/Volumes_Relocate.json` |
| `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.NetApp/netAppAccounts/{accountName}/capacityPools/{poolName}/volumes/{volumeName}/replicationStatus'].get.responses.200.schema.$ref` | `#/definitions/replicationStatus` | `#/definitions/ReplicationStatus` |
| `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.NetApp/netAppAccounts/{accountName}/capacityPools/{poolName}/volumes/{volumeName}/replicationStatus'].get['x-ms-examples'].Volumes_ReplicationStatus.$ref` | `examples/Volumes_ReplicationStatus.json` | `./examples/Volumes_ReplicationStatus.json` |
| `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.NetApp/netAppAccounts/{accountName}/capacityPools/{poolName}/volumes/{volumeName}/resetCifsPassword'].post['x-ms-examples'].Volumes_ResetCifsPassword.$ref` | `examples/Volumes_ResetCifsPassword.json` | `./examples/Volumes_ResetCifsPassword.json` |
| `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.NetApp/netAppAccounts/{accountName}/capacityPools/{poolName}/volumes/{volumeName}/resyncReplication'].post['x-ms-examples'].Volumes_ResyncReplication.$ref` | `examples/Volumes_ResyncReplication.json` | `./examples/Volumes_ResyncReplication.json` |
| `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.NetApp/netAppAccounts/{accountName}/capacityPools/{poolName}/volumes/{volumeName}/revert'].post.parameters[3].schema.$ref` | `#/definitions/volumeRevert` | `#/definitions/VolumeRevert` |
| `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.NetApp/netAppAccounts/{accountName}/capacityPools/{poolName}/volumes/{volumeName}/revert'].post['x-ms-examples'].Volumes_Revert.$ref` | `examples/Volumes_Revert.json` | `./examples/Volumes_Revert.json` |
| `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.NetApp/netAppAccounts/{accountName}/capacityPools/{poolName}/volumes/{volumeName}/revertRelocation'].post['x-ms-examples'].Volumes_RevertRelocation.$ref` | `examples/Volumes_RevertRelocation.json` | `./examples/Volumes_RevertRelocation.json` |
| `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.NetApp/netAppAccounts/{accountName}/capacityPools/{poolName}/volumes/{volumeName}/snapshots'].get.responses.200.schema.$ref` | `#/definitions/snapshotsList` | `#/definitions/SnapshotsList` |
| `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.NetApp/netAppAccounts/{accountName}/capacityPools/{poolName}/volumes/{volumeName}/snapshots'].get['x-ms-examples'].Snapshots_List.$ref` | `examples/Snapshots_List.json` | `./examples/Snapshots_List.json` |
| `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.NetApp/netAppAccounts/{accountName}/capacityPools/{poolName}/volumes/{volumeName}/snapshots/{snapshotName}'].delete['x-ms-examples'].Snapshots_Delete.$ref` | `examples/Snapshots_Delete.json` | `./examples/Snapshots_Delete.json` |
| `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.NetApp/netAppAccounts/{accountName}/capacityPools/{poolName}/volumes/{volumeName}/snapshots/{snapshotName}'].get.responses.200.schema.$ref` | `#/definitions/snapshot` | `#/definitions/Snapshot` |
| `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.NetApp/netAppAccounts/{accountName}/capacityPools/{poolName}/volumes/{volumeName}/snapshots/{snapshotName}'].get['x-ms-examples'].Snapshots_Get.$ref` | `examples/Snapshots_Get.json` | `./examples/Snapshots_Get.json` |
| `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.NetApp/netAppAccounts/{accountName}/capacityPools/{poolName}/volumes/{volumeName}/snapshots/{snapshotName}'].patch.responses.200.schema.$ref` | `#/definitions/snapshot` | `#/definitions/Snapshot` |
| `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.NetApp/netAppAccounts/{accountName}/capacityPools/{poolName}/volumes/{volumeName}/snapshots/{snapshotName}'].patch['x-ms-examples'].Snapshots_Update.$ref` | `examples/Snapshots_Update.json` | `./examples/Snapshots_Update.json` |
| `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.NetApp/netAppAccounts/{accountName}/capacityPools/{poolName}/volumes/{volumeName}/snapshots/{snapshotName}'].put.responses.201.schema.$ref` | `#/definitions/snapshot` | `#/definitions/Snapshot` |
| `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.NetApp/netAppAccounts/{accountName}/capacityPools/{poolName}/volumes/{volumeName}/snapshots/{snapshotName}'].put['x-ms-examples'].Snapshots_Create.$ref` | `examples/Snapshots_Create.json` | `./examples/Snapshots_Create.json` |
| `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.NetApp/netAppAccounts/{accountName}/capacityPools/{poolName}/volumes/{volumeName}/snapshots/{snapshotName}/restoreFiles'].post['x-ms-examples'].Snapshots_SingleFileRestore.$ref` | `examples/Snapshots_SingleFileRestore.json` | `./examples/Snapshots_SingleFileRestore.json` |
| `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.NetApp/netAppAccounts/{accountName}/capacityPools/{poolName}/volumes/{volumeName}/splitCloneFromParent'].post.responses.200.schema.$ref` | `#/definitions/volume` | `#/definitions/Volume` |
| `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.NetApp/netAppAccounts/{accountName}/capacityPools/{poolName}/volumes/{volumeName}/splitCloneFromParent'].post['x-ms-examples'].Volumes_SplitClone.$ref` | `examples/Volumes_SplitClone.json` | `./examples/Volumes_SplitClone.json` |
| `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.NetApp/netAppAccounts/{accountName}/capacityPools/{poolName}/volumes/{volumeName}/subvolumes'].get.responses.200.schema.$ref` | `#/definitions/subvolumesList` | `#/definitions/SubvolumesList` |
| `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.NetApp/netAppAccounts/{accountName}/capacityPools/{poolName}/volumes/{volumeName}/subvolumes'].get['x-ms-examples'].Subvolumes_List.$ref` | `examples/Subvolumes_List.json` | `./examples/Subvolumes_List.json` |
| `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.NetApp/netAppAccounts/{accountName}/capacityPools/{poolName}/volumes/{volumeName}/subvolumes/{subvolumeName}'].delete['x-ms-examples'].Subvolumes_Delete.$ref` | `examples/Subvolumes_Delete.json` | `./examples/Subvolumes_Delete.json` |
| `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.NetApp/netAppAccounts/{accountName}/capacityPools/{poolName}/volumes/{volumeName}/subvolumes/{subvolumeName}'].get.responses.200.schema.$ref` | `#/definitions/subvolumeInfo` | `#/definitions/SubvolumeInfo` |
| `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.NetApp/netAppAccounts/{accountName}/capacityPools/{poolName}/volumes/{volumeName}/subvolumes/{subvolumeName}'].get['x-ms-examples'].Subvolumes_Get.$ref` | `examples/Subvolumes_Get.json` | `./examples/Subvolumes_Get.json` |
| `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.NetApp/netAppAccounts/{accountName}/capacityPools/{poolName}/volumes/{volumeName}/subvolumes/{subvolumeName}'].patch.responses.200.schema.$ref` | `#/definitions/subvolumeInfo` | `#/definitions/SubvolumeInfo` |
| `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.NetApp/netAppAccounts/{accountName}/capacityPools/{poolName}/volumes/{volumeName}/subvolumes/{subvolumeName}'].patch['x-ms-examples'].Subvolumes_Update.$ref` | `examples/Subvolumes_Update.json` | `./examples/Subvolumes_Update.json` |
| `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.NetApp/netAppAccounts/{accountName}/capacityPools/{poolName}/volumes/{volumeName}/subvolumes/{subvolumeName}'].put.responses.200.schema.$ref` | `#/definitions/subvolumeInfo` | `#/definitions/SubvolumeInfo` |
| `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.NetApp/netAppAccounts/{accountName}/capacityPools/{poolName}/volumes/{volumeName}/subvolumes/{subvolumeName}'].put.responses.201.schema.$ref` | `#/definitions/subvolumeInfo` | `#/definitions/SubvolumeInfo` |
| `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.NetApp/netAppAccounts/{accountName}/capacityPools/{poolName}/volumes/{volumeName}/subvolumes/{subvolumeName}'].put['x-ms-examples'].Subvolumes_Create.$ref` | `examples/Subvolumes_Create.json` | `./examples/Subvolumes_Create.json` |
| `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.NetApp/netAppAccounts/{accountName}/capacityPools/{poolName}/volumes/{volumeName}/subvolumes/{subvolumeName}/getMetadata'].post.responses.200.schema.$ref` | `#/definitions/subvolumeModel` | `#/definitions/SubvolumeModel` |
| `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.NetApp/netAppAccounts/{accountName}/capacityPools/{poolName}/volumes/{volumeName}/subvolumes/{subvolumeName}/getMetadata'].post['x-ms-examples'].Subvolumes_Metadata.$ref` | `examples/Subvolumes_Metadata.json` | `./examples/Subvolumes_Metadata.json` |
| `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.NetApp/netAppAccounts/{accountName}/capacityPools/{poolName}/volumes/{volumeName}/volumeQuotaRules'].get.responses.200.schema.$ref` | `#/definitions/volumeQuotaRulesList` | `#/definitions/VolumeQuotaRulesList` |
| `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.NetApp/netAppAccounts/{accountName}/capacityPools/{poolName}/volumes/{volumeName}/volumeQuotaRules'].get['x-ms-examples'].VolumeQuotaRules_List.$ref` | `examples/VolumeQuotaRules_List.json` | `./examples/VolumeQuotaRules_List.json` |
| `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.NetApp/netAppAccounts/{accountName}/capacityPools/{poolName}/volumes/{volumeName}/volumeQuotaRules/{volumeQuotaRuleName}'].delete['x-ms-examples'].VolumeQuotaRules_Delete.$ref` | `examples/VolumeQuotaRules_Delete.json` | `./examples/VolumeQuotaRules_Delete.json` |
| `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.NetApp/netAppAccounts/{accountName}/capacityPools/{poolName}/volumes/{volumeName}/volumeQuotaRules/{volumeQuotaRuleName}'].get.responses.200.schema.$ref` | `#/definitions/volumeQuotaRule` | `#/definitions/VolumeQuotaRule` |
| `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.NetApp/netAppAccounts/{accountName}/capacityPools/{poolName}/volumes/{volumeName}/volumeQuotaRules/{volumeQuotaRuleName}'].get['x-ms-examples'].VolumeQuotaRules_Get.$ref` | `examples/VolumeQuotaRules_Get.json` | `./examples/VolumeQuotaRules_Get.json` |
| `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.NetApp/netAppAccounts/{accountName}/capacityPools/{poolName}/volumes/{volumeName}/volumeQuotaRules/{volumeQuotaRuleName}'].patch.responses.200.schema.$ref` | `#/definitions/volumeQuotaRule` | `#/definitions/VolumeQuotaRule` |
| `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.NetApp/netAppAccounts/{accountName}/capacityPools/{poolName}/volumes/{volumeName}/volumeQuotaRules/{volumeQuotaRuleName}'].patch['x-ms-examples'].VolumeQuotaRules_Update.$ref` | `examples/VolumeQuotaRules_Update.json` | `./examples/VolumeQuotaRules_Update.json` |
| `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.NetApp/netAppAccounts/{accountName}/capacityPools/{poolName}/volumes/{volumeName}/volumeQuotaRules/{volumeQuotaRuleName}'].put.responses.200.schema.$ref` | `#/definitions/volumeQuotaRule` | `#/definitions/VolumeQuotaRule` |
| `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.NetApp/netAppAccounts/{accountName}/capacityPools/{poolName}/volumes/{volumeName}/volumeQuotaRules/{volumeQuotaRuleName}'].put.responses.201.schema.$ref` | `#/definitions/volumeQuotaRule` | `#/definitions/VolumeQuotaRule` |
| `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.NetApp/netAppAccounts/{accountName}/capacityPools/{poolName}/volumes/{volumeName}/volumeQuotaRules/{volumeQuotaRuleName}'].put['x-ms-examples'].VolumeQuotaRules_Create.$ref` | `examples/VolumeQuotaRules_Create.json` | `./examples/VolumeQuotaRules_Create.json` |
| `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.NetApp/netAppAccounts/{accountName}/changeKeyVault'].post.parameters[1].schema.$ref` | `#/definitions/changeKeyVault` | `#/definitions/ChangeKeyVault` |
| `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.NetApp/netAppAccounts/{accountName}/changeKeyVault'].post['x-ms-examples'].Accounts_ChangeKeyVault.$ref` | `examples/Accounts_ChangeKeyVault.json` | `./examples/Accounts_ChangeKeyVault.json` |
| `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.NetApp/netAppAccounts/{accountName}/getKeyVaultStatus'].post.responses.200.schema.$ref` | `#/definitions/getKeyVaultStatusResponse` | `#/definitions/GetKeyVaultStatusResponse` |
| `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.NetApp/netAppAccounts/{accountName}/getKeyVaultStatus'].post['x-ms-examples'].Accounts_GetChangeKeyVaultInformation.$ref` | `examples/Accounts_GetChangeKeyVaultInformation.json` | `./examples/Accounts_GetChangeKeyVaultInformation.json` |
| `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.NetApp/netAppAccounts/{accountName}/migrateBackups'].post.parameters[1].schema.$ref` | `#/definitions/backupsMigrationRequest` | `#/definitions/BackupsMigrationRequest` |
| `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.NetApp/netAppAccounts/{accountName}/migrateBackups'].post['x-ms-examples'].BackupsUnderAccount_Migrate.$ref` | `examples/BackupsUnderAccount_Migrate.json` | `./examples/BackupsUnderAccount_Migrate.json` |
| `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.NetApp/netAppAccounts/{accountName}/renewCredentials'].post['x-ms-examples'].Accounts_RenewCredentials.$ref` | `examples/Accounts_RenewCredentials.json` | `./examples/Accounts_RenewCredentials.json` |
| `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.NetApp/netAppAccounts/{accountName}/snapshotPolicies'].get.responses.200.schema.$ref` | `#/definitions/snapshotPoliciesList` | `#/definitions/SnapshotPoliciesList` |
| `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.NetApp/netAppAccounts/{accountName}/snapshotPolicies'].get['x-ms-examples'].SnapshotPolicies_List.$ref` | `examples/SnapshotPolicies_List.json` | `./examples/SnapshotPolicies_List.json` |
| `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.NetApp/netAppAccounts/{accountName}/snapshotPolicies/{snapshotPolicyName}'].delete['x-ms-examples'].SnapshotPolicies_Delete.$ref` | `examples/SnapshotPolicies_Delete.json` | `./examples/SnapshotPolicies_Delete.json` |
| `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.NetApp/netAppAccounts/{accountName}/snapshotPolicies/{snapshotPolicyName}'].get.responses.200.schema.$ref` | `#/definitions/snapshotPolicy` | `#/definitions/SnapshotPolicy` |
| `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.NetApp/netAppAccounts/{accountName}/snapshotPolicies/{snapshotPolicyName}'].get['x-ms-examples'].SnapshotPolicies_Get.$ref` | `examples/SnapshotPolicies_Get.json` | `./examples/SnapshotPolicies_Get.json` |
| `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.NetApp/netAppAccounts/{accountName}/snapshotPolicies/{snapshotPolicyName}'].patch.responses.200.schema.$ref` | `#/definitions/snapshotPolicy` | `#/definitions/SnapshotPolicy` |
| `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.NetApp/netAppAccounts/{accountName}/snapshotPolicies/{snapshotPolicyName}'].patch.responses.202.schema.$ref` | `#/definitions/snapshotPolicy` | `#/definitions/SnapshotPolicy` |
| `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.NetApp/netAppAccounts/{accountName}/snapshotPolicies/{snapshotPolicyName}'].patch['x-ms-examples'].SnapshotPolicies_Update.$ref` | `examples/SnapshotPolicies_Update.json` | `./examples/SnapshotPolicies_Update.json` |
| `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.NetApp/netAppAccounts/{accountName}/snapshotPolicies/{snapshotPolicyName}'].put.responses.200.schema.$ref` | `#/definitions/snapshotPolicy` | `#/definitions/SnapshotPolicy` |
| `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.NetApp/netAppAccounts/{accountName}/snapshotPolicies/{snapshotPolicyName}'].put.responses.201.schema.$ref` | `#/definitions/snapshotPolicy` | `#/definitions/SnapshotPolicy` |
| `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.NetApp/netAppAccounts/{accountName}/snapshotPolicies/{snapshotPolicyName}'].put['x-ms-examples'].SnapshotPolicies_Create.$ref` | `examples/SnapshotPolicies_Create.json` | `./examples/SnapshotPolicies_Create.json` |
| `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.NetApp/netAppAccounts/{accountName}/snapshotPolicies/{snapshotPolicyName}/volumes'].get.responses.200.schema.$ref` | `#/definitions/snapshotPolicyVolumeList` | `#/definitions/SnapshotPolicyVolumeList` |
| `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.NetApp/netAppAccounts/{accountName}/snapshotPolicies/{snapshotPolicyName}/volumes'].get['x-ms-examples'].SnapshotPolicies_ListVolumes.$ref` | `examples/SnapshotPolicies_ListVolumes.json` | `./examples/SnapshotPolicies_ListVolumes.json` |
| `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.NetApp/netAppAccounts/{accountName}/transitiontocmk'].post.parameters[1].schema.$ref` | `#/definitions/encryptionTransitionRequest` | `#/definitions/EncryptionTransitionRequest` |
| `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.NetApp/netAppAccounts/{accountName}/transitiontocmk'].post['x-ms-examples'].Accounts_MigrateEncryptionKey.$ref` | `examples/Accounts_TransitionEncryptionKey.json` | `./examples/Accounts_TransitionEncryptionKey.json` |
| `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.NetApp/netAppAccounts/{accountName}/volumeGroups'].get.responses.200.schema.$ref` | `#/definitions/volumeGroupList` | `#/definitions/VolumeGroupList` |
| `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.NetApp/netAppAccounts/{accountName}/volumeGroups'].get['x-ms-examples'].VolumeGroups_List_Oracle.$ref` | `examples/VolumeGroups_List_Oracle.json` | `./examples/VolumeGroups_List_Oracle.json` |
| `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.NetApp/netAppAccounts/{accountName}/volumeGroups'].get['x-ms-examples'].VolumeGroups_List_SapHana.$ref` | `examples/VolumeGroups_List_SapHana.json` | `./examples/VolumeGroups_List_SapHana.json` |
| `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.NetApp/netAppAccounts/{accountName}/volumeGroups/{volumeGroupName}'].delete['x-ms-examples'].VolumeGroups_Delete.$ref` | `examples/VolumeGroups_Delete.json` | `./examples/VolumeGroups_Delete.json` |
| `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.NetApp/netAppAccounts/{accountName}/volumeGroups/{volumeGroupName}'].get.responses.200.schema.$ref` | `#/definitions/volumeGroupDetails` | `#/definitions/VolumeGroupDetails` |
| `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.NetApp/netAppAccounts/{accountName}/volumeGroups/{volumeGroupName}'].get['x-ms-examples'].VolumeGroups_Get_Oracle.$ref` | `examples/VolumeGroups_Get_Oracle.json` | `./examples/VolumeGroups_Get_Oracle.json` |
| `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.NetApp/netAppAccounts/{accountName}/volumeGroups/{volumeGroupName}'].get['x-ms-examples'].VolumeGroups_Get_SapHana.$ref` | `examples/VolumeGroups_Get_SapHana.json` | `./examples/VolumeGroups_Get_SapHana.json` |
| `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.NetApp/netAppAccounts/{accountName}/volumeGroups/{volumeGroupName}'].put.responses.201.schema.$ref` | `#/definitions/volumeGroupDetails` | `#/definitions/VolumeGroupDetails` |
| `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.NetApp/netAppAccounts/{accountName}/volumeGroups/{volumeGroupName}'].put['x-ms-examples'].VolumeGroups_Create_Oracle.$ref` | `examples/VolumeGroups_Create_Oracle.json` | `./examples/VolumeGroups_Create_Oracle.json` |
| `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.NetApp/netAppAccounts/{accountName}/volumeGroups/{volumeGroupName}'].put['x-ms-examples'].VolumeGroups_Create_SapHana.$ref` | `examples/VolumeGroups_Create_SapHana.json` | `./examples/VolumeGroups_Create_SapHana.json` |

