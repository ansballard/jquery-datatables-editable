# jquery-datatables-editable
A fork of the datatables plugin found here: https://code.google.com/p/jquery-datatables-editable/

This fork is meant to update the project to be used with modern versions of jQuery and Datatables. Dependencies are in 'bower.json'.

Steps To Build: (need [node/npm](https://nodejs.org/) installed)
```
git clone https://github.com/ansballard/jquery-datatables-editable.git editable
cd editable
npm update -g npm
npm install
npm install -g bower
bower install
grunt
```

Any formatting error should show up after running grunt, and a minified version/source map will be generated.

[Example using bootstrap](http://ansballard.github.io/jquery-datatables-editable/)
