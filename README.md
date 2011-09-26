# Backbone.nopersistence

**backbone.nopersistence** is a simple adapter to disable persistence
for Backbone apps.

It's a simple replacement for `Backbone.Sync(...)`. You can call all
standard Backbone methods available but all collections will be saved
in memory only. This is useful for testing or when your app does not
need persistence between sessions. It's also useful if you want to
test your application using Rhino and you can't use localStorage.

# Usage

Include Backbone.noPersistence after having included Backbone.js:

    <script type="text/javascript" src=underscore.js"></script>
    <script type="text/javascript" src="backbone.js"></script>
    <script type="text/javascript" src="backbone.noPersistence.js"></script>

Create your collections with a new `bnp.NoPersistence` assigned to
`noPersistence`:

    window.SomeCollection = Backbone.Collection.extend({
      noPersistence: new bnp.NoPersistence(),
      
      // Standard Backbone.js code
    });

You can also set a `maxSize` property in each `bnp.NoPersistence` instance. When
this property is set and a new model is inserted in a collection,
`backbone.persisistence` will throw an exception if the new size of the
collection is greater than `maxSize`.

Alternatively, you can let `backbone.nopersistence` handle the instantiation of
these objects for you. Just import the `.js` files and use your models
normally.

  
# Credits

Thanks to [Jerome Gravel-Niquet](https://github.com/jeromegn) for creating
[backbone.localStorage][bls].

[bls]: https://github.com/jeromegn/Backbone.localStorage
