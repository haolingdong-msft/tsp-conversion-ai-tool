# [Service Name] API Semantic Diff Analysis

## Analysis Methodology

1. **Source Files Analyzed:**
   - [Old Swagger: `[filename].json`]([path/to/old/swagger])
   - [New Swagger: `[filename].json`]([path/to/new/swagger]) 
   - [Change Documentation: `API_CHANGES.md`]([path/to/changes])

2. **Semantic Categorization:** Changes grouped by semantic impact rather than structural differences
3. **Coverage Verification:** All [X] items from API_CHANGES.md accounted for

---

## Detailed Category Analysis

### 1. [Category Name] ([X] changes)

**Description:** [Detailed description of what changes in this category represent]

**Examples:**
- [Line X](API_CHANGES.md#LX): [Specific example description]
- [Line Y](API_CHANGES.md#LY): [Specific example description]

**Code Comparison:**
```json
// OLD SWAGGER - [Description of old pattern]
[Old swagger code example]

// NEW SWAGGER - [Description of new pattern]
[New swagger code example]
```

**Complete List ([X] cases):**
[Lines X-Y in API_CHANGES.md](API_CHANGES.md#LX-LY)
- [Bullet point of affected areas: if it is path change, add operationId value, operation_id example: "operationId": "EdgeNodes_List", so operationId value would be 'EdgeNodes_List', list all operationIds]
- [Additional affected areas]


Some examples for "Complete List":
```
**Complete List (9 cases):**
- Path `/roles/{roleName}/addons` deleted, `/roles/{name}/addons` added (operationId: 'Addons_ListByRole')
- Path `/roles/{roleName}/addons/{addonName}` deleted, `/roles/{name}/addons/{addonName}` added (operationId: 'Addons_Get', 'Addons_Delete', 'Addons_CreateOrUpdate')
- Path `/roles/{roleName}/monitoringConfig` deleted, `/roles/{name}/monitoringConfig` added (operationId: 'MonitoringConfig_List')
- Path `/roles/{roleName}/monitoringConfig/default` deleted, `/roles/{name}/monitoringConfig/default` added (operationId: 'MonitoringConfig_Get', 'MonitoringConfig_CreateOrUpdate', 'MonitoringConfig_Delete')
```

```
**Complete List (6 cases):**
- 3 discriminator properties removed (AModel, BModel, CModel)
- 3 x-ms-discriminator-value extensions removed from derived types (AModel, BModel, CModel)
```

```
**Complete List (7 cases):**
- 3 resource model base reference changes from `ARMBaseModel` to `ProxyResource` (Addon, Alert, BandwidthSchedule)
- 3 error response reference changes from `CloudError` to `ErrorResponse` (AModel, BModel, CModel)
```

```
**Complete List (7 cases):**
- 1 operations list reference change from `OperationsList` to `OperationListResult` (operationId: 'Operations_list')
```

```
**Complete List (2 cases):**
- Location headers removed from 202 responses for operations: canMigrate(operationId: 'Profiles_CanMigrate', actions: PATCH/PUT)

```

**GitHub Fix commit links:**
[you must have this section, but leave the content empty]

---

### 2. [Category Name] ([X] changes)

**Description:** [Detailed description]

**Examples:**
- [Line X](API_CHANGES.md#LX): [Specific example description]

**Code Comparison:**
```json
// OLD SWAGGER - [Description]
[Code example]

// NEW SWAGGER - [Description]
[Code example]
```

**Complete List ([X] cases):**
[Lines X-Y in API_CHANGES.md](API_CHANGES.md#LX-LY)

**GitHub Fix commit links:**
[you must have this section, but leave the content empty]

---

[Repeat template for all identified categories...]

---

## Verification Results

### Coverage Verification
[✅ COMPLETE | ❌ INCOMPLETE]: All [X] items from API_CHANGES.md are categorized and analyzed

| Category | Count | Lines in API_CHANGES.md |
|----------|-------|-------------------------|
| [Category 1] | [X] | [X-Y] |
| [Category 2] | [X] | [X-Y] |
| [Category 3] | [X] | [X-Y] |
| [Category 4] | [X] | [X-Y] |
| [Category 5] | [X] | [X-Y] |
| [Category 6] | [X] | [X-Y] |
| [Category 7] | [X] | [X-Y] |
| [Category 8] | [X] | [X-Y] |
| [Category 9] | [X] | [X-Y] |
| [Category 10] | [X] | [X-Y] |
| **TOTAL** | **[X]** | **[TOTAL_DIFF_COUNT_IN_API_CHANGES]** |


---

*Analysis completed on: [Date]*  
*Analyst: [Name/Team]*  
*Review Status: [Pending/Approved/Rejected]*  
*Next Review Date: [Date]*
