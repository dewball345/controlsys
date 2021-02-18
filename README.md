# controlsys
Controlsys is a lightweight controller system inspired by dat.gui. The difference between this and dat.gui is the fact that you yourself have to create the html elements, instead of dat.gui creating a little black toolbar in the corner of your page. This allows for better customizability and freedom in your web development.

# installation
You can either:
* visit the ```./js``` directory
* view the raw files and download each one individually

Or:
* Visit [DownGit](https://downgit.github.io/#/home) and enter the link to the ```./js/helpers``` directory

Or:
* You can use [this](https://stackoverflow.com/a/65911352/9987269) solution to download the ```./js/helpers``` directory

# Usage

Assuming that you have typed in your desired ```input``` tags to be used, create a new javascript file and import ```./js/helpers/controlSystemHelper.js```. Also be sure that the other javascript files in the helpers directory are in the same directory as ```controlSystemHelper.js```. 

There are two different types of controllers that you can use:
```ControlSystemHelper.checkbox``` and ```ControlSystemHelper.input```

The first one is exclusively for checkboxes(as the way they work is different from regular ```<input>``` tags(i think)), while the second one is for all other inputs. I was able to use range inputs, color selector inputs, and ```<section>```.

Parameters:
* ```element```(or ```checkbox``` for ```ControlSystemHelper.checkbox```)
* ```tracker```(a map that holds the variable that you want to control)
* ```mapKey```(the variable name that you want to control)
* ```callback```(a function that is called when the input is changed)

## A simple tutorial
### Here i will show you how to use the CheckboxController to track the value of a checkbox

In your html file add an ```<input>``` for your checkbox

```
<input type="checkbox" id="checkbox" />
```

In your javascript file import controlSystemHelper.js and access your input in the html file

```
import {ControlSystemHelper} from './controlSystemHelper.js'
var checkbox = document.getElementById("checkbox");
```

add a map that contains the variables that you want to control

```
var track = {
    checkbox: true,
};
```

Then, add a ```ControlSystemHelper.Checkbox``` to track your checkbox variable:

```
new ControlSystemHelper.checkbox({
    checkbox: checkbox, 
    mapKey: "checkbox", 
    tracker: track, 
    callback: (event) => {
        console.log("check" + track.checkbox)
    }
});
```

That's it! If you run the program, and click the checkbox, you will see that the value of ```track.checkbox``` changes.

# Credits
I made this project(duh)

# Licence
see in LICENCE.md
