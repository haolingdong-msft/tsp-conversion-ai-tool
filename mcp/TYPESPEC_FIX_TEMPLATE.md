# TypeSpec Fix Plan - [Service Name]
# Generated: [Date]
# TypeSpec Project: [Path]
# Analysis Source: SWAGGER_SEMANTIC_DIFF_ANALYSIS.md
#
# ============================================================================
# OVERALL SUMMARY
# ============================================================================
#
# Total Categories Analyzed: [N]
# Categories Requiring Fixes: [X]
# Categories with No Fix Needed: [Y]
#
# CATEGORY OVERVIEW:
#
# Category 1: [Category Name] ([X] changes)
#   Decision: ✅ REQUIRES FIX | ⚠️ NO FIX NEEDED
#   Reason: [Brief reason - if NO FIX NEEDED, specify which category below it belongs to]
#   Reference: [If NO FIX NEEDED, link to relevant section or "Non-semantic diff"]
#
# Category 2: [Category Name] ([X] changes)
#   Decision: ✅ REQUIRES FIX | ⚠️ NO FIX NEEDED
#   Reason: [Brief reason - if NO FIX NEEDED, specify which category below it belongs to]
#   Reference: [If NO FIX NEEDED, link to relevant section or "Non-semantic diff"]
#
# Category 3: [Category Name] ([X] changes)
#   Decision: ✅ REQUIRES FIX | ⚠️ NO FIX NEEDED
#   Reason: [Brief reason - if NO FIX NEEDED, specify which category below it belongs to]
#   Reference: [If NO FIX NEEDED, link to relevant section or "Non-semantic diff"]
#
# ----------------------------------------------------------------------------
# DECISION CRITERIA FOR "⚠️ NO FIX NEEDED"
# ----------------------------------------------------------------------------
# If you decide NOT to fix a category, you MUST verify it belongs to one of these:
#
# 1. Using Resources from Common Types
#    - Standard common-types migration (e.g., SystemData, ManagedServiceIdentity)
#    - Properties functionally match (readOnly strengthening is acceptable)
#    - Reference: https://azure.github.io/typespec-azure/docs/migrate-swagger/faq/mustread/#using-resources-from-common-types
#
# 2. Using Page Model from Library
#    - Pagination model changes (value, nextLink structure preserved)
#    - List operations using standard Azure.Core.Page<T>
#    - Reference: https://azure.github.io/typespec-azure/docs/migrate-swagger/faq/mustread/#using-page-model-from-library
#
# 3. Handling 'readOnly' in Model Schemas
#    - readOnly constraint added to properties (strengthening only, no removal/type changes)
#    - Reference: https://azure.github.io/typespec-azure/docs/migrate-swagger/faq/mustread/#handling-readonly-in-model-schemas
#
# 4. Non-Semantic Diff
#    - Model inlined: nested model flattened without property changes ('allOf' case)
#    - Hierarchical structure change: model restructured but ALL properties preserved

# For each "⚠️ NO FIX NEEDED" decision:
#   - Specify which category (1-4) it belongs to
#   - Provide verification details
#   - Include reference link for categories 1-3
#
```

Then for EACH category, append:
```diff
# ============================================================================
# Category [N]: [Category Name] ([X] changes)
# ============================================================================
# Analysis:
# [Brief explanation of what the diff indicates and why it needs/doesn't need fixing]
#
# Root Cause:
# [Explain the root cause based on TSG analysis]
# For model diffs, verify model properties recursively
#
# Proposed Solution:
# [Detailed solution based on TSG]
#
# TSG Reference: [Github commit Link or document reference link]
#
# ----------------------------------------------------------------------------
# Fix for Case: [Case description]
# File: [filename.tsp] - Interface/Model: [name]
# ----------------------------------------------------------------------------

--- a/[filepath/filename.tsp]
+++ b/[filepath/filename.tsp]
@@ -[line],[count] +[line],[count] @@
-[old TypeSpec code line 1]
-[old TypeSpec code line 2]
-[old TypeSpec code line 3]
+[new TypeSpec code line 1]
+[new TypeSpec code line 2]
+[new TypeSpec code line 3]
 [context line]

# ----------------------------------------------------------------------------
# [Repeat for each case in this category]
# ----------------------------------------------------------------------------

# IMPORTANT NOTES:
# - If this category affects multiple operations/models (e.g., "all 81 operations"), 
#   provide COMPLETE ENUMERATION or a CLEAR SEARCH PATTERN to find all locations
# - Include specific examples showing the fix pattern for different operation types:
#   * ArmListOperations
#   * ArmResourceRead
#   * ArmResourceCreateOrReplaceAsync
#   * ArmResourceDeleteAsync
#   * Custom operations
# - For pattern-based fixes, provide a grep/search pattern to find all instances
# - List all affected files and interfaces/models explicitly if feasible
# ============================================================================
# EXAMPLES: 
# ============================================================================
#
# ----------------------------------------------------------------------------
# Example 1: SystemData Migration - NO FIX NEEDED
# ----------------------------------------------------------------------------
# Category: SystemData Migration
#
# Property Verification:
# Old model 'SystemData' (4 properties):
#   - createdBy: string (optional)
#   - createdAt: string/date-time (optional)
#   - lastModifiedBy: string (optional)
#   - lastModifiedAt: string/date-time (optional)
#
# New model 'SystemData' from common-types/v3 (4 properties):
#   - createdBy: string (optional, readOnly: true)
#   - createdAt: string/date-time (optional, readOnly: true)
#   - lastModifiedBy: string (optional, readOnly: true)
#   - lastModifiedAt: string/date-time (optional, readOnly: true)
#
# Differences Found:
#   - ReadOnly constraint added (acceptable - strengthening only)
#
# Decision: ⚠️ NO FIX NEEDED - Standard common-types migration pattern
#
# ----------------------------------------------------------------------------
# Example 2: API Path Restructuring
# ----------------------------------------------------------------------------
# Category: API Path Restructuring - Resource Hierarchy
#
# Analysis:
# API paths changed from device-scoped (/devices/{deviceName}/addons) 
# to role-scoped (/devices/{deviceName}/roles/{roleName}/addons).
# This indicates the resource hierarchy needs correction.
#
# Root Cause:
# Model definition is missing @parentResource decorator to establish correct hierarchy.
#
#
# Proposed Solution:
# Add @parentResource(Role) to the Addon model definition.
# The interface operations will automatically inherit the correct path structure.
#
# --- a/Addon.tsp
# +++ b/Addon.tsp
# @@ -1,6 +1,8 @@
#  import "@azure-tools/typespec-azure-core";
#  import "@azure-tools/typespec-azure-resource-manager";
#  
# +@parentResource(Role)
#  model Addon is ProxyResource<AddonProperties> {
#    @key("addonName")
#    @path
#    @doc("The addon name.")
#    name: string;
#  }
#
# // Interface definition remains clean - no @parentResource needed here
# interface Addons {
#   listByRole is ArmResourceListByParent<Addon>;
#   get is ArmResourceRead<Addon>;
#   createOrUpdate is ArmResourceCreateOrReplaceAsync<Addon>;
#   delete is ArmResourceDeleteAsync<Addon>;
# }
#
# TSG Reference: 
# https://github.com/Azure/azure-rest-api-specs/blob/78fd8f85507c9a12d47bd8953b864353a6005080/specification/databoxedge/DataBoxEdge.Management/Addon.tsp#L20
# "use @parentResource on model to update path to add a segment"
#
# ----------------------------------------------------------------------------
# Example 3: Error Model Migration - CloudError vs ErrorResponse
# ----------------------------------------------------------------------------
# Category: Common Types Migration - Error Models
#
# Analysis:
# Error response models migrated from custom CloudError/CloudErrorBody to common-types ErrorResponse.
# This is a MODEL NAME CHANGE which is ALWAYS a breaking change, even though both represent errors.
#
# Property Verification:
# Old model 'CloudError' properties:
#   - error: object (CloudErrorBody, optional)
#
# Old model 'CloudErrorBody' properties (nested):
#   - code: string (optional)
#   - message: string (optional)
#   - details: array of CloudErrorBody (optional)
#
# New model 'ErrorResponse' from common-types/v3 properties:
#   - error: object (ErrorDetail, optional)
#
# New model 'ErrorDetail' from common-types/v3 properties (nested):
#   - code: string (optional, readOnly: true)
#   - message: string (optional, readOnly: true)
#   - target: string (optional, readOnly: true) ← NEW
#   - details: array of ErrorDetail (optional, readOnly: true)
#   - additionalInfo: array of ErrorAdditionalInfo (optional, readOnly: true) ← NEW
#
# Differences Found:
#   1. Model name changed: CloudError → ErrorResponse ❌ BREAKING
#   2. Nested model name changed: CloudErrorBody → ErrorDetail ❌ BREAKING
#   3. ReadOnly constraints ADDED to all properties ❌ BREAKING
#   4. New properties added: target, additionalInfo ❌ BREAKING (changes structure)
#
# Decision: ✅ REQUIRES FIX
# Justification: Multiple breaking changes - model names changed, readOnly constraints added,and structure modified with new properties
#
# Root Cause:
# TypeSpec using common-types ErrorResponse directly instead of defining custom error models
# to match original CloudError schema. When ARM template operations default to common-types,
# they automatically use ErrorResponse instead of preserving the original error model.
#
# Proposed Solution:
# Update ALL operation error responses to reference CloudError instead of ErrorResponse
# IMPORTANT: update for ALL cases in this category to use CloudError, add 'Error = CloudError'
#
# --- a/[specification/databoxedge/DataBoxEdge.Management/main.tsp]
# +++ b/[specification/databoxedge/DataBoxEdge.Management/main.tsp]
# @@ -61,4 +61,7 @@
#  interface Operations
# -  extends Azure.ResourceManager.Legacy.Operations<Error = CloudError> {}
# +  extends Azure.ResourceManager.Legacy.Operations<
# +    OperationsList,
# +    Error = CloudError
# +  > {}
# 
# TSG Reference: 
# https://github.com/Azure/typespec-azure/blob/main/docs/migrate-swagger/faq/common-types.md
# https://github.com/Azure/azure-rest-api-specs/commit/5219e4b239d24251de80e326042bcf2dc63e53d3
# "Define custom error models when original swagger used non-standard error formats"
