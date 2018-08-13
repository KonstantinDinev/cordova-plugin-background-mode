# cordova-plugin-navigate
Navigate to another installed app on the Android Platform

# Android Activity - Intent - Task (Stack pool)
Clone this plugin to the root directory of your project. 
To navigate from your app to another change the packageName for the Intent.

Whenever you make a change to the plugin source, copy and paste in the terminal the
snippet bellow.

```
sudo cordova plugins rm cordova-plugin-background-mode
sudo cordova plugin add --link cordova-plugin-background-mode
sudo cordova platforms rm android
sudo cordova platforms add android@6.2.3
sudo cordova run android
```

This will install the plugin from your local directory.

# To extract a PKG name of an .apk file
Navigate to ~/Library/Android/Sdk/build-tools/27.0.3

``` ./aapt dump badging ~/Downloads/YouDestinationApplication.apk | grep package:\ name ```

# How to install a package 
Navigate to ~/Library/Android/Sdk/platform-tools

```./adb install ~/SomeApp.apk ```

# Useful sources
https://developer.android.com/guide/components/activities/tasks-and-back-stack

https://stackoverflow.com/questions/2780102/open-another-application-from-your-own-intent

https://stackoverflow.com/questions/36841971/get-string-from-jsonarray-java-android
