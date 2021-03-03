echo on
echo Build and deploy mod.
7z a -tzip buildResult.zip -r bundle\* content\* scripts\* sprites\*
set GAMEDIR="%USERPROFILE%\AppData\Roaming\Mindustry\mods"
copy /s /t buildResult.zip %GAMEDIR%
echo Done!