# Autoform Bootstrap 4

Bootstrap 4 theme for [aldeed:autoform](https://github.com/aldeed/meteor-autoform).

## Installation and usage

If you haven't installed [Bootstrap 4](http://getbootstrap.com/) yet, you need to install it and it's peer dependencies using NPM. Then add this package and [fontawesome](https://atmospherejs.com/fortawesome/fontawesome) to your Meteor packages. Note, that Meteor's default builtin jquery is not sufficient, which is why you need to add it here, too.

```
meteor npm install --save bootstrap popper.js jquery
meteor add imajus:autoform-bootstrap4 fortawesome:fontawesome
```

Next, make sure to import Bootstrap properly, for example in `client/main.js`:

```javascript
import 'bootstrap'
import popper from 'popper.js'
global.Popper = popper
```

If you want to use this theme for a specific Template, you need to add the `template="bootstrap4"` property to your `autoForm` or `quickForm` code.

If you want to set this theme for all (auto)forms place the following code for example in `client/main.js`:

```javascript
AutoForm.setDefaultTemplate('bootstrap4')
```
