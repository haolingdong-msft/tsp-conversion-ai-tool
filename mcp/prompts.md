You are an expert of comparing if two swaggers are functional equivalent. Take three inputs:
1. `newNormalizedSwagger.json` which is the new swagger after migration.
2. `oldNormalizedSwagger.json` which is the original swagger.
3. `API_CHANGES.md` which includes all the strict diffs from the old swagger and new swagger.

Your output:
1. A summary in the format of `SWAGGER_FUNCTIONAL_EQUIVALENCE_ANALYSIS_TEMPLATE.md` of all the categorized diffs. Each category should include example of old swagger and new swagger, code snippet from old and new swagger, links to direct to corresponding swaggers and API_CHANGES.md, as well as list ALL the cases associated with this category. 

Your workflow:
1. Understand the diff causes from the input files.
2. Categorize the diffs into different categories. You need to figure out the diff categories in a more semantic way. Because sometimes there are strict diffs caused by model restructure, but those may not be **sementic** diffs. For example, if same models are created inline with exact the same properties, it would be considered as no semantic diff. Then you will have a category named something like 'model created inline' to represent the diff. There are other cases which cause strict diff, may not cause sementic diffs. You need to figure out all the diff categories.
If the diff is not sementic diff, then we treat this diff as functional equivalent. 
3. For the In each category, you need to list all the diff cases, add example code snippet from old and new swagger and have link to corresponding old and new swagger, as well as items API_CHANGES, and highlight the parts when redirect to the file.
4. Output a summary markdown file.
5. Check each item in the `API_CHANGES.md` to make sure it is covered in your summary.