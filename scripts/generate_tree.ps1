# PowerShell script to generate a directory tree structure and save it to a file
# Usage: .\generate_tree.ps1 -Depth 3 -OutputFile project_structure.txt

param (
    [int]$Depth = 4,                                 # The depth of the directory tree
    [string]$OutputFile = "project_structure.txt"    # The output file to save the directory structure
)

function Get-Tree {
    param (
        [string]$Path,  # The current directory path
        [int]$Depth,    # The current depth level
        [string]$Indent = ""  # Indentation for nested directories
    )
    if ($Depth -eq 0) { return }  # Stop if the specified depth is reached
    Get-ChildItem -Path $Path | Where-Object { $_.Name -ne "node_modules" } | ForEach-Object {
        Write-Output "$Indent$_"  # Print the current item with indentation
        if ($_ -is [System.IO.DirectoryInfo]) {
            # Recursively get the tree for subdirectories
            Get-Tree -Path $_.FullName -Depth ($Depth - 1) -Indent ("$Indent    ")
        }
    }
}

# Get the root directory of the project (assuming the script is in the 'scripts' folder)
$RootDirectory = (Get-Location).Path
$RootDirectory = $RootDirectory.Substring(0, $RootDirectory.LastIndexOf('\scripts'))

# Create output directory if it doesn't exist
$OutputDirectory = "$RootDirectory\scripts\outputs"
if (-not (Test-Path -Path $OutputDirectory)) {
    New-Item -ItemType Directory -Path $OutputDirectory
}

# Generate the directory tree and save it to the specified output file
Get-Tree -Path $RootDirectory -Depth $Depth | Out-File -FilePath "$OutputDirectory\$OutputFile"
