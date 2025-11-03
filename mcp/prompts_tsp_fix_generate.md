You are an expert TypeSpec developer tasked with analyzing TypeSpec code and proposing fixes to make the generated swagger functionally equivalent and backward-compatible with the original swagger specification.

You will be given:
1. A TypeSpec project directory containing .tsp files and tspconfig.yaml file.
2. Trouble Shooting Guide(TSG) from https://gist.github.com/msyyc/c1ee8478cd178a4219a083d851651308, this contains description of a swagger diff and the corresponding fix in the commit.
3. The old swagger specification for reference.
4. The new generated swagger specification from TypeSpec.
5. A swagger semantic diff analysis report: SWAGGER_SEMANTIC_DIFF_ANALYSIS.md.
6. API_CHANGES.md
7. Output TypeSpec fix folder

Your process:

## Analyze and Propose Fixes
Process all categories from SWAGGER_SEMANTIC_DIFF_ANALYSIS.md. For below example, `API Path Restructuring` is a category, each item in the `Complete list` is a case.
```markdown
### 1. API Path Restructuring (9 changes)
...
**Complete List (9 cases):**
- Path `/roles/{roleName}/addons` deleted, `/addons` added (operationId: 'Addons_ListByRole') 
- Path `/roles/{roleName}/addons/{addonName}` deleted, `/addons/{addonName}` added (operationId: 'Addons_Get', 'Addons_Delete', 'Addons_CreateOrUpdate') 
- Path `/roles/{roleName}/monitoringConfig` deleted, `/monitoringConfig` added (operationId: 'MonitoringConfig_List')
- Path `/roles/{roleName}/monitoringConfig/default` deleted, `/monitoringConfig/default` added (operationId: 'MonitoringConfig_Get', 'MonitoringConfig_CreateOrUpdate', 'MonitoringConfig_Delete')
- Path `/securitySettings/default/update` deleted, `/update` added (operationId: 'Devices_CreateOrUpdateSecuritySettings')
```

For each category:
1. **Analyze the diff**: Determine if the diff needs to be fixed.

**How to decide:**

**⚠️ STOP - READ THIS FIRST ⚠️**
If the category involves "Common Types Migration" (e.g., CloudError→ErrorResponse, OperationsList→OperationListResult, ARMBaseModel→ProxyResource):
- You are **FORBIDDEN** from saying "NO FIX NEEDED" based on assumptions
- You are **FORBIDDEN** from saying "standard practice" or "properties are identical" without proof
- You **MUST** perform the complete 4-step verification process below
- You **MUST** document your verification in the report with actual property lists
- If you skip verification, your analysis is WRONG and INCOMPLETE

First, identify if the diff falls into one of these **Non-Semantic** categories (DO NOT fix):
- Model created inlined (without property changes)
- Model hierarchical/inheritance reconstruction (properties preserved through inheritance)
- `SystemData` being inherited from common types base models
- List operation's response got `value` added as required (strengthening constraint only)

**NOTE**: "Common Types Migration" is **NOT** automatically non-semantic. You MUST verify properties as described below.

For **Common types related diffs**, you MUST perform these verification steps:

**IMPORTANT**: Property comparison must be done RECURSIVELY at ALL nesting levels. Do not stop at the first level - follow all object references and array items to their deepest properties.

**MANDATORY**: You MUST show your verification work in the TSP_FIX.diff report. DO NOT just say "properties are identical" - you MUST list the actual properties you compared.

**Step 1: Identify the models being compared**
- Old swagger model name (e.g., `CloudError`, `CloudErrorBody`)
- New swagger model name (e.g., `ErrorResponse`, `ErrorDetail`)
- If new swagger uses external reference to common-types, note the path (e.g., `common-types/resource-management/v3/types.json`)

**Step 2: Get the COMPLETE property list for BOTH models - CHECK RECURSIVELY**
- For old swagger: Find the model definition in old swagger and list ALL properties
  - **CRITICAL**: For EACH property, check if it's an object or array
  - If property is an object reference ($ref), follow the reference and list its properties
  - If property is an array, check the items schema and its properties
  - Continue recursively until you reach primitive types (string, integer, boolean, etc.)
  - List EVERY property at EVERY level including: name, type, required/optional, readOnly, enum values, constraints
- For new swagger: 
  - If it references common-types, you MUST look up the actual definition from common-types
  - DO NOT assume the properties - VERIFY them
  - **CRITICAL**: Follow the same recursive checking process
  - For EACH property in common-types definition, check nested objects and arrays
  - List ALL properties from the common-types definition at ALL levels

**Step 3: Compare property lists RECURSIVELY at ALL levels**
- Create a side-by-side comparison of ALL properties at ALL nesting levels
- Check EVERY property recursively: 
  - Property name (must match exactly)
  - Property type (string, integer, object, array, etc.)
  - Required vs optional (required arrays must match)
  - ReadOnly constraint (readOnly: true vs no readOnly)
  - Enum values (if present, values must match)
  - Nested object properties (compare all sub-properties recursively)
  - Array item schemas (compare item definitions recursively)
- Document ANY differences found at ANY level

**Step 4: Decision and Documentation**
- In the TSP_FIX.diff report, you MUST document your verification:
  - List the OLD model properties you found (with all attributes: type, required, readOnly, etc.)
  - List the NEW model properties you found (with all attributes)
  - List ALL differences found at ALL levels
  - Only then state your decision
- ✅ **NO FIX NEEDED** ONLY if you verified that 100% of properties are identical at ALL levels AND you documented this verification
- ❌ **MUST FIX** if you find ANY difference at ANY level:
  - Missing properties (e.g., new swagger has `target`, old swagger doesn't)
  - Extra properties (e.g., old swagger has property X, new swagger doesn't)
  - Different types (e.g., string vs integer)
  - Different constraints at ANY level:
    - Required vs optional (required: ["property"] vs no required)
    - ReadOnly differences (readOnly: true vs no readOnly)
    - Enum value differences
    - Format differences (e.g., uri vs string)
  - Different nested object structures
  - Different array item schemas

**FORBIDDEN**: You MUST NOT say "properties are identical" or "standard practice" without showing the actual property comparison. Always document what you verified.

**Example verification with RECURSIVE property checking:**

**Example 1: Error Response Model Migration (CloudErrorBody → ErrorDetail)**
```
Old swagger CloudErrorBody properties (RECURSIVE CHECK):
  - code: string (optional)
  - message: string (optional)
  - details: array of CloudErrorBody (optional)
    └─> RECURSIVE: Each item has code, message, details (recursive structure)

Common-types v3 ErrorDetail properties (RECURSIVE CHECK):
  - code: string (optional, readOnly: true)
  - message: string (optional, readOnly: true)
  - target: string (optional, readOnly: true)     ← MISSING in old swagger
  - details: array of ErrorDetail (optional, readOnly: true)
    └─> RECURSIVE: Each item has code, message, target, details, additionalInfo
  - additionalInfo: array of ErrorAdditionalInfo (optional, readOnly: true)  ← MISSING in old swagger
    └─> RECURSIVE: Each item has:
        - type: string (readOnly: true)
        - info: object (readOnly: true)

DIFFERENCES FOUND:
1. Missing property at level 1: 'target'
2. Missing property at level 1: 'additionalInfo' 
3. ReadOnly constraint difference: old swagger has no readOnly, common-types has readOnly: true on ALL properties
4. Nested items in 'details' array have different schemas (missing target, additionalInfo in old swagger)

Decision: ❌ MUST FIX - Multiple differences at multiple levels
```

**Example 2: Operations List Model Migration (OperationsList → OperationListResult)**
```
Old swagger OperationsList properties (RECURSIVE CHECK):
  - value: array of Operation (required, no readOnly)
    └─> RECURSIVE: Check Operation properties
  - nextLink: string (optional, no readOnly)

Common-types v3 OperationListResult properties (RECURSIVE CHECK):
  - value: array of Operation (optional, readOnly: true)
    └─> RECURSIVE: Check Operation properties
  - nextLink: string (optional, readOnly: true)

DIFFERENCES FOUND:
1. Required constraint: old has required: ["value"], new has no required
2. ReadOnly on 'value': old has no readOnly, new has readOnly: true
3. ReadOnly on 'nextLink': old has no readOnly, new has readOnly: true

Decision: ❌ MUST FIX - ReadOnly constraints differ at property level
```

Reference: https://azure.github.io/typespec-azure/docs/migrate-swagger/faq/mustread/#using-resources-from-common-types

For **x-ms-* extensions**, ALWAYS check if they are required:
- ❌ **MUST FIX** if extension is required for SDK generation or API behavior:
  - `x-ms-pageable` - MUST be present for paginated operations
  - `x-ms-secret` - MUST be present to mark sensitive data
  - `x-ms-identifiers` - MUST be present for proper SDK generation of array elements
  - `x-ms-client-flatten` - MUST be present if used in original swagger
  - `x-ms-mutability` - MUST be present if used in original swagger
  - `x-ms-discriminator-value` - MUST be present for polymorphic types
- ✅ **NO FIX NEEDED** only if the extension was optional or incorrectly added
- When in doubt, **MUST FIX** to ensure backward compatibility

All other diffs are **Semantic Diffs** and MUST BE FIXED, including:
- Path changes (e.g., `/roles/{roleName}/addons` → `/addons`)
- Model property changes (different name, type, or constraints)
- Operation changes (different parameters, responses, or behavior)
- Parameter changes (different name, type, location, or constraints)
- Response model changes
- Required extensions missing (`x-ms-*`)
- Enum value changes

2. **Search TSG and propose solution**: Search in the TSG, propose the solution for this category. Please do not use legacy templates unless you have to.

3. **Output to TSP_FIX.diff**: Add the proposed fix to `TSP_FIX.diff` file (create one if not found) in the `diff-output` folder, organized by category. Follow template `TYPESPEC_FIX_TEMPLATE.md` for TSP_FIX.diff Format (append one category at a time)

**CRITICAL for Common Types Migration categories**: 
- You MUST include a "Property Verification" section showing the actual property comparison
- Format:
  ```
  # Property Verification:
  # Old model properties:
  #   - property1: type (constraints)
  #   - property2: type (constraints)
  #   ...
  # New model properties (from common-types):
  #   - property1: type (constraints)
  #   - property2: type (constraints)
  #   ...
  # Differences found:
  #   - [List each difference or state "None - all properties identical"]
  ```
- Without this verification section, the analysis is INCOMPLETE

REMEMBER:
1. **Use standard diff format** in TSP_FIX.diff with proper --- a/file +++ b/file syntax for all code changes.
2. After all categories are analyzed, present a summary of the TSP_FIX.diff showing total categories and their proposed fixes.
