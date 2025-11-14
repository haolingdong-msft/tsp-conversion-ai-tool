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
8. validation-report.md

## Output File
`TSP_FIX.diff` file under `diff-output` folder

## Process Overview

### STEP 0: FETCH TSG and FAQ CONTENT (MANDATORY)

Before analyzing any diffs, you MUST fetch the complete Troubleshooting Guide (TSG):
1. **Fetch Gist TSG**: Use the fetch_webpage tool to get content from https://gist.github.com/msyyc/c1ee8478cd178a4219a083d851651308
2. **Fetch Loop TSG**: Use the fetch_webpage tool to get content from https://loop.cloud.microsoft/p/eyJ3Ijp7InUiOiJodHRwczovL21pY3Jvc29mdC5zaGFyZXBvaW50LmNvbS8%2FbmF2PWN6MGxNa1ltWkQxaUlUUmhibUYyY1c5RVRqQmxSMnBUZERReGEyRTJXa1pHYkRGVmFub3pZbWhMYVdOMlpGQk5PRUZxTm10YWNrVXRaakJYZFdoVVdWVjFiazVSTlcxdE1rd21aajB3TVVSUk4wd3pTa1ZDVnpkWVJUTTNURkJaTlVKS1VsZEpNMVZDUkVGWk4wZEtKbU05Sm1ac2RXbGtQVEUlM0QiLCJyIjpmYWxzZX0sInAiOnsidSI6Imh0dHBzOi8vbWljcm9zb2Z0LnNoYXJlcG9pbnQuY29tL2NvbnRlbnRzdG9yYWdlL0NTUF9iZWRhYTllMS0wM2FhLTQ3MzctODY4ZC0yYjc4ZDY0NmJhNjQ%2FbmF2PWN6MGxNa1pqYjI1MFpXNTBjM1J2Y21GblpTVXlSa05UVUY5aVpXUmhZVGxsTVMwd00yRmhMVFEzTXpjdE9EWTRaQzB5WWpjNFpEWTBObUpoTmpRbVpEMWlJVFJoYm1GMmNXOUVUakJsUjJwVGREUXhhMkUyV2taR2JERlZhbm96WW1oTGFXTjJaRkJOT0VGcU5tdGFja1V0WmpCWGRXaFVXVlYxYms1Uk5XMXRNa3dtWmowd01VUlJOMHd6U2toU1ZGQkRObFZKTlVoTFZrVkpXbEEwV1VKVFRGUmFORWxTSm1NOUpUSkdKbVpzZFdsa1BURSUzRCIsInIiOmZhbHNlfSwiaSI6eyJpIjoiMDY0MWYzOTUtNjgyNy00YWNiLTg5MzktOWI4MGRhMTJjOTcyIn19
2. **Fetch migration FAQ to understand Diffs**: https://azure.github.io/typespec-azure/docs/migrate-swagger/faq/mustread/
2. **Review Fix Patterns**: The TSG contains known diff patterns and their TypeSpec fixes
3. **Understand Solutions**: Study the fix approaches before analyzing categories
4. **Reference During Analysis**: Keep TSG content available for matching patterns

**Why this is critical:**
- TSG contains proven fix patterns for common diff scenarios, you should fetch both Loop TSG and gist TSG 
- migration FAQ contains the 3 types of diffs that do not need to fix

**DO NOT PROCEED** to Step 1 until you have fetched and reviewed the TSG content.

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

All diffs must be fixed except:
Those drop into the three categories (Using Resources from Common Types, Using Page Model from Library, Handling 'readOnly' in Model Schemas) on this page: https://azure.github.io/typespec-azure/docs/migrate-swagger/faq/mustread/ OR drop in to two categories of 
Non-semantic diff(model inlined and hierarchical structure change)

If your decision is to NOT fix one category, you must verify again and provide reason on which category it belongs to.

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
