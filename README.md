#HowTO use

navigate to the folder project with terminal
`npm install`
paste this in the terminal to symlink the local plugin and after making changes in it
```
sudo cordova plugins rm cordova-plugin-background-mode
sudo cordova plugin add --link cordova-plugin-background-mode
sudo cordova platforms rm android
sudo cordova platforms add android@6.2.3
sudo cordova run android

```



Useful sources:
https://stackoverflow.com/questions/2780102/open-another-application-from-your-own-intent
TO IMPLEMENT
1. Create an intent with action=MAIN and category=LAUNCHER
2. Get the PackageManager from the current context using context.getPackageManager
3. packageManager.queryIntentActivity(<intent>, 0) where intent has category=LAUNCHER, action=MAIN or packageManager.resolveActivity(<intent>, 0) to get the first activity with main/launcher
4. Get theActivityInfo you're interested in
5. From the ActivityInfo, get the packageName and name
6. Finally, create another intent with with category=LAUNCHER, action=MAIN, componentName = new ComponentName(packageName, name) and setFlags(Intent.FLAG_ACTIVITY_NEW_TASK)
7. Finally, context.startActivity(newIntent)