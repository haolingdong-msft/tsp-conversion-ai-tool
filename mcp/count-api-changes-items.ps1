# Script to count individual diff items (table rows) in API_CHANGES.md
# Each table row represents one diff item
# Usage: .\count-api-changes-items.ps1

param(
    [string]$FilePath = ".\API_CHANGES.md"
)

# Check if file exists
if (-not (Test-Path $FilePath)) {
    Write-Error "File not found: $FilePath"
    exit 1
}

Write-Host "`nAnalyzing API_CHANGES.md..." -ForegroundColor Cyan
Write-Host "Counting table rows as diff items...`n" -ForegroundColor Cyan

# Read the file
$lines = Get-Content $FilePath

# Initialize counters
$totalDiffItems = 0
$changedPathsCount = 0
$swaggerChangesCount = 0
$modifiedValuesCount = 0

# Track sections
$inChangedPaths = $false
$inSwaggerChanges = $false
$inModifiedValues = $false
$inTable = $false

# Category breakdown
$categories = @{}
$currentCategory = ""

foreach ($line in $lines) {
    # Detect sections
    if ($line -match "^## Changed Paths") {
        $inChangedPaths = $true
        $inSwaggerChanges = $false
        $inModifiedValues = $false
        continue
    }
    elseif ($line -match "^## Swagger Changes") {
        $inChangedPaths = $false
        $inSwaggerChanges = $true
        $inModifiedValues = $false
        continue
    }
    elseif ($line -match "^## Modified Values") {
        $inChangedPaths = $false
        $inSwaggerChanges = $false
        $inModifiedValues = $true
        continue
    }
    
    # Track current category in Swagger Changes section
    if ($inSwaggerChanges -and $line -match "^### Changes for ``(.+)``") {
        $currentCategory = $Matches[1]
        if (-not $categories.ContainsKey($currentCategory)) {
            $categories[$currentCategory] = 0
        }
    }
    
    # Count Changed Paths section items (format: "Path: ... \n Change Type: ...")
    if ($inChangedPaths -and $line -match "^Path: ") {
        $totalDiffItems++
        $changedPathsCount++
        continue
    }
    
    # Count table rows (exclude header and separator rows)
    # A diff item row starts with | and contains path/definition info
    if ($line -match "^\| ``?[^|]+``? \|") {
        # Skip table headers
        if ($line -match "\| Path \| Change Type \|" -or 
            $line -match "\| Path \| Old Value \|") {
            continue
        }
        
        # Skip separator rows
        if ($line -match "^\|[\s\-:]+\|") {
            continue
        }
        
        # Count as a diff item
        $totalDiffItems++
        
        if ($inSwaggerChanges) {
            $swaggerChangesCount++
            if ($currentCategory) {
                $categories[$currentCategory]++
            }
        }
        elseif ($inModifiedValues) {
            $modifiedValuesCount++
        }
    }
}

# Display results
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  API_CHANGES.md Diff Items Count" -ForegroundColor Cyan
Write-Host "========================================`n" -ForegroundColor Cyan

Write-Host "Section Breakdown:" -ForegroundColor Yellow
Write-Host "  Changed Paths:    $changedPathsCount items" -ForegroundColor White
Write-Host "  Swagger Changes:  $swaggerChangesCount items" -ForegroundColor White
Write-Host "  Modified Values:  $modifiedValuesCount items" -ForegroundColor White

Write-Host "`nTotal Diff Items:" -ForegroundColor Yellow
Write-Host "  $totalDiffItems" -ForegroundColor Cyan -NoNewline
Write-Host " individual diff items (table rows)`n" -ForegroundColor White

Write-Host "========================================`n" -ForegroundColor Cyan

# Show category breakdown
if ($categories.Count -gt 0) {
    Write-Host "Diff Items by Category:" -ForegroundColor Yellow
    Write-Host "----------------------`n"
    
    $categories.GetEnumerator() | 
        Sort-Object Value -Descending | 
        ForEach-Object {
            $categoryName = $_.Key
            $count = $_.Value
            
            # Truncate long category names for display
            if ($categoryName.Length -gt 80) {
                $categoryName = $categoryName.Substring(0, 77) + "..."
            }
            
            Write-Host ("  {0,-85} : {1,3}" -f $categoryName, $count) -ForegroundColor White
        }
    
    Write-Host ""
}

# Summary statistics
Write-Host "Summary:" -ForegroundColor Yellow
Write-Host "--------"
Write-Host "  Total Categories: $($categories.Count)" -ForegroundColor Gray
Write-Host "  Average items per category: $([math]::Round($swaggerChangesCount / $categories.Count, 2))" -ForegroundColor Gray

Write-Host "`n"

# Return only the total diff count
return $totalDiffItems
