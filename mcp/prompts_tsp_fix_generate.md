# TypeSpec Fix Generation Guide

You are an expert TypeSpec developer tasked with analyzing swagger diffs and generating TypeSpec fixes to achieve functional equivalence with the original swagger.

**IMPORTANT: All output MUST follow the structure and format defined in `TYPESPEC_FIX_TEMPLATE.md`. Refer to the template for complete formatting guidelines and examples.**

## Input Files
1. **TYPESPEC_FIX_TEMPLATE.md** - Output format template with examples
2. **TypeSpec project** - .tsp files and tspconfig.yaml
3. **Troubleshooting Guide (TSG)** - Known diff patterns and fixes from https://gist.github.com/msyyc/c1ee8478cd178a4219a083d851651308
4. **Old swagger** - Original specification
5. **New swagger** - Generated from TypeSpec
6. **SWAGGER_SEMANTIC_DIFF_ANALYSIS.md** - Categorized differences
7. **API_CHANGES.md** - Change summary
8. **Output folder** - For TSP_FIX.diff file

## Process Overview

**STEP 0: FETCH TSG CONTENT FIRST (MANDATORY)**

Before analyzing any diffs, you MUST fetch the complete Troubleshooting Guide (TSG):
1. **Fetch TSG**: Use the fetch_webpage tool to get content from https://gist.github.com/msyyc/c1ee8478cd178a4219a083d851651308
2. **Review Fix Patterns**: The TSG contains known diff patterns and their TypeSpec fixes
3. **Understand Solutions**: Study the fix approaches before analyzing categories
4. **Reference During Analysis**: Keep TSG content available for matching patterns

**Why this is critical:**
- TSG contains proven fix patterns for common diff scenarios
- Provides specific TypeSpec code snippets and decorators
- Shows best practices for common types migration
- Documents known issues and their solutions
- Prevents reinventing solutions that already exist

**DO NOT PROCEED** to Step 1 until you have fetched and reviewed the TSG content.

**BEFORE STARTING: Breaking Change Checklist**

For EVERY category, verify against this checklist:
- [ ] Are any properties REMOVED? → MUST FIX
- [ ] Are any readOnly constraints ADDED? → MUST FIX
- [ ] Are any readOnly constraints REMOVED? → MUST FIX
- [ ] Are any property types CHANGED? → MUST FIX
- [ ] Are any required/optional constraints CHANGED? → MUST FIX
- [ ] Are any enum values ADDED/REMOVED/CHANGED? → MUST FIX
- [ ] Are any x-ms-* extensions REMOVED? → MUST FIX (except x-ms-discriminator-value)
- [ ] Are paths/endpoints CHANGED? → MUST FIX
- [ ] Did any MODEL NAMES change? → MUST FIX (except ARMBaseModel/xxx→ProxyResource/TrackedResource)
- [ ] Only optional properties ADDED? → Verify carefully, likely OK
- [ ] Only model restructuring via inheritance? → Verify properties 100% match

**If ANY checkbox above is "Yes", default decision is MUST FIX**

**SPECIAL NOTE ON x-ms-* EXTENSIONS:**
x-ms-* extension removals have ZERO tolerance - they are ALWAYS breaking changes.
**EXCEPTION**: `x-ms-discriminator-value` removal is acceptable when TypeSpec uses modern discriminator pattern.

### Step 1: Analyze Each Category
Process all categories from SWAGGER_SEMANTIC_DIFF_ANALYSIS.md sequentially. Each category contains multiple cases.

**Example:**
```markdown
### 1. API Path Restructuring (9 changes)
**Complete List (9 cases):**
- Path `/roles/{roleName}/addons` deleted, `/addons` added (operationId: 'Addons_ListByRole')
- Path `/roles/{roleName}/addons/{addonName}` deleted, `/addons/{addonName}` added (...)
```

### Step 2: Determine Fix Necessity

For each category, decide if fixes are needed using this decision tree:

#### A. Non-Semantic Changes (NO FIX NEEDED)

**STRICT CRITERIA - All conditions must be met:**

These are ONLY acceptable if they meet ALL requirements:
- ✅ Model inlining without ANY property changes (name, type, constraints must be 100% identical)
- ✅ Model hierarchy restructuring where:
  - ALL properties preserved via inheritance
  - NO readOnly changes
  - NO type changes
  - NO constraint changes
- ✅ `SystemData` inherited from common types base models (ProxyResource/TrackedResource) IF:
  - SystemData was NOT in original swagger, OR
  - SystemData properties are 100% identical
- ✅ List operation response adding `value` as required IF:
  - Only strengthening (optional → required)
  - NOT weakening (required → optional)
  - No other property changes

**WARNING: If unsure whether a change is non-semantic, treat as MUST FIX**

#### B. Common Types Migration (REQUIRES VERIFICATION)

**⚠️ CRITICAL: Never assume "NO FIX NEEDED" - always verify properties recursively**

Examples: `CloudError→ErrorResponse`, `OperationsList→OperationListResult`, `ARMBaseModel→ProxyResource`

**CRITICAL RULE: Model Name Changes**

If the model NAME changed (not just the reference path):
- ❌ **MUST FIX** - Model name change is ALWAYS breaking
- ✅ **EXCEPTIONS** - Only these specific migrations are acceptable:
  - `ARMBaseModel` → `ProxyResource` (standard ARM resource base)
  - `ARMBaseModel` → `TrackedResource` (standard ARM tracked resource)
  - Custom base model → `ProxyResource` (if properties match 100%)
  - Custom base model → `TrackedResource` (if properties match 100%)

**Examples:**
- `CloudError` → `ErrorResponse`: ❌ MUST FIX (model name changed)
- `OperationsList` → `OperationListResult`: ❌ MUST FIX (model name changed)
- `MyCustomError` → `ErrorResponse`: ❌ MUST FIX (model name changed)
- `ARMBaseModel` → `ProxyResource`: ✅ May be OK (verify properties)
- `ARMBaseModel` → `TrackedResource`: ✅ May be OK (verify properties)


**Mandatory 4-Step Verification Process:**

**STEP 1: Identify Models**
- Old swagger model name (e.g., `CloudError`, `CloudErrorBody`)
- New swagger model name (e.g., `ErrorResponse`, `ErrorDetail`)
- Common-types reference path if applicable
- **CHECK**: Did the model NAME change? If YES → Default to MUST FIX (unless ProxyResource/TrackedResource exception)

**STEP 2: Extract Complete Properties RECURSIVELY**

For BOTH old and new models:
1. List all top-level properties with full details:
   - Name, type, required/optional, readOnly, enum values, constraints
2. For EACH property that is an object or array:
   - Follow `$ref` to the referenced model
   - List all properties of that nested model
   - Continue recursively until reaching primitives
3. If new model uses common-types, look up the actual definition - don't assume

**STEP 3: Compare Recursively**

Check EVERY property at ALL nesting levels:
- ❌ **BREAKING**: Property name mismatch
- ❌ **BREAKING**: Type difference (string vs integer, object vs primitive)
- ❌ **BREAKING**: Required constraint changed (old: required, new: optional OR old: optional, new: required)
- ❌ **BREAKING**: ReadOnly constraint ADDED (old: no readOnly, new: readOnly: true) - Makes properties immutable
- ❌ **BREAKING**: ReadOnly constraint REMOVED (old: readOnly: true, new: no readOnly) - Allows mutation where it was forbidden
- ❌ **BREAKING**: Enum values differ (added, removed, or changed)
- ❌ **BREAKING**: Format differs (e.g., uri vs string)
- ❌ **BREAKING**: Nested structures differ
- ❌ **BREAKING**: Array item schemas differ
- ❌ **BREAKING**: Properties removed from old model 

**STEP 4: Document & Decide**

In TSP_FIX.diff, MUST include:
```
# Property Verification:
# Old model '<ModelName>' properties (recursive):
#   - property1: type (required/optional, readOnly, etc.)
#   - property2: object ($ref: ...)
#     └─ nestedProp1: type (...)
#     └─ nestedProp2: type (...)
#   ...
# 
# New model '<ModelName>' properties (recursive):
#   - property1: type (required/optional, readOnly, etc.)
#   - property2: object ($ref: common-types/...)
#     └─ nestedProp1: type (...)
#     └─ nestedProp2: type (...)
#   ...
# 
# Differences found:
#   - [List EVERY difference with BREAKING/NON-BREAKING designation]
#   OR state "VERIFIED: All properties identical at all levels"
#
# Breaking Changes Summary:
#   - [Count and list all BREAKING differences]
#
# Decision: [NO FIX NEEDED / MUST FIX]
# Justification: [Explain why based on breaking change analysis]
```

**Decision Rules:**
- ✅ **NO FIX NEEDED**: Only if:
  1. Model names are identical OR migration is ARMBaseModel→ProxyResource/TrackedResource AND
  2. 100% property match at ALL levels (name, type, constraints) AND
  3. No readOnly changes (added or removed) AND
  4. Only optional properties added (if any) AND
  5. Fully documented verification shown
- ❌ **MUST FIX**: If ANY of these conditions exist:
  1. Model name changed (except ARMBaseModel→ProxyResource/TrackedResource)
  2. Properties removed from old model
  3. Property types changed
  4. ReadOnly constraints added or removed
  5. Required/optional constraints changed
  6. Nested structures differ
  7. Enum values differ
  8. ANY difference found at any nesting level

**Reference:** https://azure.github.io/typespec-azure/docs/migrate-swagger/faq/mustread/#using-resources-from-common-types

**EXAMPLE 1: Error Model Migration - BREAKING CHANGE**
```
Old: CloudError.error.code: string (optional)
New: ErrorResponse.error.code: string (optional, readOnly: true)

Analysis: 
- Model name changed: CloudError → ErrorResponse ❌ BREAKING
- ReadOnly constraint ADDED ❌ BREAKING
Decision: ❌ MUST FIX
Reason: Model name change + readOnly addition = breaking change
Fix: Use custom error model matching CloudError exactly
```

**EXAMPLE 2: Operations List Migration - BREAKING CHANGE**
```
Old: OperationsList.value[].properties.serviceSpecification: object
New: OperationListResult.value[].properties: PROPERTY REMOVED

Analysis:
- Model name changed: OperationsList → OperationListResult ❌ BREAKING
- Property removed from old model ❌ BREAKING
Decision: ❌ MUST FIX
Reason: Model name change + property removal = breaking change
Fix: Extend common-types model with service-specific properties OR use custom model
```

**EXAMPLE 3: Resource Base Migration - NON-BREAKING (Exception)**
```
Old: ARMBaseModel { id, name, type } (all optional, readOnly)
New: ProxyResource { id, name, type, systemData } (all optional, readOnly)

Analysis: 
- Model name changed: ARMBaseModel → ProxyResource ✅ EXCEPTION APPLIES
- All old properties preserved with identical constraints
- Only systemData added (optional, readOnly)
- No constraint changes
Decision: ✅ NO FIX NEEDED (exception + full verification)
Reason: ARMBaseModel→ProxyResource is allowed exception, properties verified identical
```

**EXAMPLE 4: Same Model, Different Reference - Verify Properties**
```
Old: MyError { code, message } (local definition)
New: MyError { code, message } (common-types reference with same name)

Analysis:
- Model name SAME: MyError ✅ OK
- Reference path changed but model name unchanged
- Must verify properties are identical
Decision: Depends on property verification
If properties identical → ✅ NO FIX NEEDED
If properties differ → ❌ MUST FIX
```

**EXAMPLE 5: x-ms-secret Extension Removed - BREAKING CHANGE**
```
Old: AsymmetricEncryptedSecret.encryptionCertThumbprint (string, x-ms-secret: true)
New: AsymmetricEncryptedSecret.encryptionCertThumbprint (string, NO x-ms-secret)

Analysis:
- Property type unchanged: string ✅
- x-ms-secret extension REMOVED ❌ BREAKING
Decision: ❌ MUST FIX
Reason: x-ms-secret removal is ALWAYS breaking - SDKs won't treat property as secret
Fix: Add @secret decorator in TypeSpec to generate x-ms-secret extension
```

#### COMMON PITFALLS - READ CAREFULLY

**PITFALL 1: Ignoring Model Name Changes**
```
❌ WRONG ASSUMPTION:
"CloudError and ErrorResponse have similar properties, so renaming is fine"
"OperationsList → OperationListResult is just a naming convention update"

✅ CORRECT:
Model name changes are BREAKING CHANGES because:
- Client SDKs generate different class/type names
- Documentation references model names
- Code that references model names breaks
- API contracts specify model names

EXCEPTION: Only ARMBaseModel→ProxyResource/TrackedResource are allowed
because these are standard ARM base types that don't appear in generated SDKs.

Rule: If model name changed → MUST FIX (unless specific exception applies)
```

**PITFALL 2: Ignoring ReadOnly Additions**
```
❌ WRONG ASSUMPTION:
"Adding readOnly to error response properties is fine because errors are server-generated"

✅ CORRECT:
Adding readOnly: true is a BREAKING CHANGE to the schema contract.
Even if semantically correct, it changes the OpenAPI specification.
MUST FIX by using custom models or @visibility decorator.
```

**PITFALL 2: Ignoring ReadOnly Additions**
```
❌ WRONG ASSUMPTION:
"Adding readOnly to error response properties is fine because errors are server-generated"

✅ CORRECT:
Adding readOnly: true is a BREAKING CHANGE to the schema contract.
Even if semantically correct, it changes the OpenAPI specification.
MUST FIX by using custom models or @visibility decorator.
```

**PITFALL 3: Assuming Common-Types are Always Compatible**
```
❌ WRONG ASSUMPTION:
"Common-types ErrorResponse is a standard, so migration is safe"

✅ CORRECT:
Common-types models may have DIFFERENT constraints than custom models.
ALWAYS verify every property recursively.
If ANY difference exists (readOnly, properties, types), MUST FIX.
```

**PITFALL 3: Assuming Common-Types are Always Compatible**
```
❌ WRONG ASSUMPTION:
"Common-types ErrorResponse is a standard, so migration is safe"

✅ CORRECT:
Common-types models may have DIFFERENT constraints than custom models.
ALWAYS verify every property recursively.
If ANY difference exists (readOnly, properties, types), MUST FIX.
Even if migrating TO common-types, if model name changes → MUST FIX.
```

**PITFALL 4: Ignoring Property Removals**
```
❌ WRONG ASSUMPTION:
"Removing properties.serviceSpecification is fine, it was service-specific"

✅ CORRECT:
ANY property removal is BREAKING for existing clients.
Even optional or unused properties must be preserved.
MUST FIX by keeping the property or using back-compat pattern.
```

**PITFALL 5: Ignoring x-ms-* Extension Removals**
```
❌ WRONG ASSUMPTION:
"x-ms-secret is just an SDK hint, removing it doesn't break the wire format"
"x-ms-identifiers is optional, TypeSpec doesn't need it"
"x-ms-pageable is auto-generated, no need to fix"
"x-ms-discriminator-value can be removed, it's old pattern"

✅ CORRECT:
x-ms-* extensions are CRITICAL for SDK generation:
- x-ms-secret removal → SDKs won't treat property as sensitive (security issue!)
- x-ms-pageable removal → SDKs won't implement pagination helpers
- x-ms-identifiers removal → SDK array handling changes
- ANY x-ms-* removal changes SDK behavior → BREAKING CHANGE

Rule: ALL x-ms-* extension removals MUST be fixed.
EXCEPTION: x-ms-discriminator-value removal is OK if TypeSpec uses kind enum pattern.

Common fixes:
- x-ms-secret: Add @secret decorator in TypeSpec
- x-ms-pageable: Ensure operation uses pagination templates
- x-ms-identifiers: Add #suppress directive if intentional removal
- x-ms-discriminator-value: No fix needed if kind enum pattern is used
```

**PITFALL 6: Treating Response Models Differently**
```
❌ WRONG ASSUMPTION:
"For response-only models, schema changes don't matter"

✅ CORRECT:
Schema compatibility matters for:
- Client code generation
- Validation logic
- API contracts and documentation
MUST FIX to preserve exact schema shape.
```

#### C. Extension Changes (x-ms-*)

**⚠️ CRITICAL: ALL x-ms-* extension removals are BREAKING CHANGES**

**RULE: If ANY x-ms-* extension was removed → MUST FIX**

**EXCEPTION**: `x-ms-discriminator-value` removal is acceptable when TypeSpec uses its modern discriminator pattern (inline `kind` enum on derived types).

Why x-ms-* extensions matter:
- They control SDK code generation behavior
- They affect client-side tooling and validation
- They are part of the API contract
- Removing them changes SDK behavior even if wire format unchanged

**Common x-ms-* extensions that MUST be preserved:**
- ❌ **MUST FIX** if removed:
  - `x-ms-secret` - Controls SDK secret handling, credential management
  - `x-ms-pageable` - Defines pagination behavior in SDKs
  - `x-ms-identifiers` - Controls array element uniqueness in SDK generation
  - `x-ms-client-flatten` - Controls property flattening in generated SDKs
  - `x-ms-mutability` - Defines read/write/create constraints
  - `x-ms-client-name` - Controls property names in generated code
  - `x-ms-enum` - Controls enum modeling in SDKs
  - `x-ms-parameter-location` - Controls parameter placement
  - **ANY other x-ms-* extension** - When in doubt, MUST FIX
- ✅ **NO FIX NEEDED** if removed:
  - `x-ms-discriminator-value` - Only if TypeSpec uses modern discriminator pattern (kind enum)

**ONLY ONE EXCEPTION**: x-ms-discriminator-value can be safely removed when replaced by TypeSpec's discriminator pattern.
All other x-ms-* extension removals MUST be fixed.

**Examples:**
```
x-ms-secret removed from password property → ❌ MUST FIX (SDK won't mark as secret)
x-ms-pageable removed from list operation → ❌ MUST FIX (SDK won't implement pagination)
x-ms-identifiers removed from array property → ❌ MUST FIX (SDK generation changes)
x-ms-discriminator-value removed + kind enum added → ✅ NO FIX NEEDED (modern pattern)
```

#### D. Semantic Changes (MUST FIX)

All other differences are breaking changes:
- ❌ Path changes (e.g., `/roles/{name}/addons` → `/addons`)
- ❌ Model property changes (name, type, constraints)
- ❌ Operation changes (parameters, responses, behavior)
- ❌ Parameter changes (name, type, location, constraints)
- ❌ Response model changes
- ❌ Enum value changes

### Step 3: Search TSG & Propose Solution

**REMINDER: You should have already fetched the TSG in Step 0. If not, STOP and fetch it now.**

For each category requiring fixes:
1. **Search the TSG** for similar diff patterns using the content you fetched in Step 0
2. **Match Patterns**: Look for exact or similar diff scenarios in the TSG
3. **Extract Fix Approach**: Use the TypeSpec fix approach documented in the TSG
4. **Adapt to Context**: Apply the TSG solution to your specific case
5. **Prefer TSG Solutions**: When TSG provides a solution, use it rather than inventing new approaches
6. **Modern Patterns**: Prefer modern TypeSpec patterns over legacy templates (as documented in TSG)
7. **Verify Format**: Ensure proposed solution follows the format in `TYPESPEC_FIX_TEMPLATE.md`

**Common TSG patterns to look for:**
- Common types migration (ErrorResponse, OperationListResult, etc.)
- x-ms-* extension preservation (x-ms-secret, x-ms-pageable, etc.)
- ARM template patterns (ProxyResource, TrackedResource, etc.)
- Discriminator patterns (x-ms-discriminator-value vs kind enum)
- Path parameter handling
- Property visibility and constraints

### Step 4: Generate TSP_FIX.diff

Create/append to `TSP_FIX.diff` file in the `diff-output` folder.

**CRITICAL: Follow the structure and format defined in `TYPESPEC_FIX_TEMPLATE.md`**

**Key Requirements:**
- Start with OVERALL SUMMARY section listing all categories and their decisions
- For each category, include: Analysis, Root Cause, Proposed Solution, TSG Reference
- Use standard diff format: `--- a/filepath` and `+++ b/filepath`
- Organize by category, process one category at a time
- For common types migration: Include complete property verification showing recursive comparison
- For pattern-based fixes affecting multiple operations: Provide complete enumeration or clear search patterns
- Include specific examples for different operation types (ArmListOperations, ArmResourceRead, etc.)

### Step 5: Summary

After processing all categories, provide a summary:
```
## Fix Generation Summary
Total categories analyzed: [N]
Categories requiring fixes: [M]
Categories verified as non-breaking: [K]

Breakdown:
- [Category 1]: [FIX / NO FIX] - [reason]
- [Category 2]: [FIX / NO FIX] - [reason]
...
```

## Key Principles

1. **Never Assume** - Always verify, especially for common types
2. **Check Recursively** - Follow all nested objects and arrays to primitive types
3. **Document Everything** - Show your complete verification work with all differences
4. **Default to Fix** - When uncertain, preserve backward compatibility
5. **Use Standard Format** - Follow diff syntax for code changes
6. **ReadOnly = Breaking** - Any readOnly constraint change is ALWAYS breaking
7. **Removed = Breaking** - Any property removal is ALWAYS breaking
8. **Model Name = Breaking** - Model name changes are ALWAYS breaking (except ARMBaseModel→ProxyResource/TrackedResource)
9. **x-ms-* = Breaking** - ANY x-ms-* extension removal is ALWAYS breaking (NO EXCEPTIONS)
10. **Be Conservative** - Only mark "NO FIX NEEDED" when 100% certain and fully verified
11. **Show Your Work** - Document every difference found with BREAKING/NON-BREAKING designation
12. **Trust the Checklist** - If the Breaking Change Checklist says "MUST FIX", don't override
