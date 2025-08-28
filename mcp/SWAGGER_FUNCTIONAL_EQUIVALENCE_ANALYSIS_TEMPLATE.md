# [Service Name] API Functional Equivalence Analysis

## Executive Summary

**RECOMMENDATION: [APPROVE/REJECT] MIGRATION - [X]% FUNCTIONALLY EQUIVALENT**

This analysis examines all [X] individual differences between the old and new normalized swagger files for [Service Name] API version [X.X.X]. Every change has been categorized semantically and determined to be **[functionally equivalent/contains breaking changes]** with **[X] breaking changes**. The migration represents [description of overall impact: structural improvements, modernization, breaking changes, etc.].

## Analysis Methodology

1. **Source Files Analyzed:**
   - [Old Swagger: `[filename].json`]([path/to/old/swagger])
   - [New Swagger: `[filename].json`]([path/to/new/swagger]) 
   - [Change Documentation: `API_CHANGES.md`]([path/to/changes])

2. **Semantic Categorization:** Changes grouped by functional impact rather than structural differences
3. **Coverage Verification:** All [X] items from API_CHANGES.md accounted for
4. **Functional Impact Assessment:** Each category evaluated for breaking changes

---

## Detailed Category Analysis

### 1. [Category Name] ([X] changes)
**Functional Impact:** [✅ NON-BREAKING | ❌ BREAKING] - [Brief impact description]

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
- [Bullet point summary of affected areas]
- [Additional affected areas]

**Breaking Change Assessment:**
- [If breaking: specific explanation of why it breaks compatibility]
- [If non-breaking: explanation of why it maintains compatibility]

---

### 2. [Category Name] ([X] changes)
**Functional Impact:** [✅ NON-BREAKING | ❌ BREAKING] - [Brief impact description]

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

**Breaking Change Assessment:**
- [Assessment details]

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
