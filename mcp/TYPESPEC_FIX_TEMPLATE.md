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
#   Reason: [Brief reason]
#
# Category 2: [Category Name] ([X] changes)
#   Decision: ✅ REQUIRES FIX | ⚠️ NO FIX NEEDED
#   Reason: [Brief reason]
#
# Category 3: [Category Name] ([X] changes)
#   Decision: ✅ REQUIRES FIX | ⚠️ NO FIX NEEDED
#   Reason: [Brief reason]
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
#
# Proposed Solution:
# [Detailed solution based on TSG]
#
# TSG Reference: [Link or reference]
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
