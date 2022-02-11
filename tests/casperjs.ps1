#!/usr/bin/env pwsh
$basedir=Split-Path $MyInvocation.MyCommand.Definition -Parent

$exe=""
if ($PSVersionTable.PSVersion -lt "6.0" -or $IsWindows) {
  # Fix case when both the Windows and Linux builds of Node
  # are installed in the same directory
  $exe=".exe"
}
$ret=0
if (Test-Path "$basedir/python$exe") {
  & "$basedir/python$exe"  "$basedir/node_modules/casperjs/bin/casperjs" $args
  $ret=$LASTEXITCODE
} else {
  & "python$exe"  "$basedir/node_modules/casperjs/bin/casperjs" $args
  $ret=$LASTEXITCODE
}
exit $ret
