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
  
# Credits

Thanks to [Jerome Gravel-Niquet](https://github.com/jeromegn) for creating
[backbone.localStorage][bls].

[bls]: https://github.com/jeromegn/Backbone.localStorage
