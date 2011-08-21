$(function () {

      var ItemsCollection;

      module('backbone.nopersistence', {
		 setup : function () {
		     ItemsCollection = Backbone.Collection.extend({
	               noPersistence : new bnp.NoPersistence()
								  });
		 }
      });

      test('item creation and retrieval', function() { 
	   var items = new ItemsCollection();
	       
	       items.fetch();
	       equals(items.length, 0);

	       items.create({ name : "Item #1" });

	       equals("Item #1", items.at(0).get('name'));

	       items.reset();
	       items.fetch();

	       var all_items = items.toArray();
	       equals("Item #1", all_items[0].get('name'));
	   });

      test('Item update', function () {
	       var items = new ItemsCollection();
	       items.fetch();

	       equals(items.length, 0);
	       
	       items.create({ name : "Item #2" });

	       var item = items.at(0);

 	       equals("Item #2", item.get('name'));
 
	       item.set({name: "Updated name"});
 	       item.save();

 	       items.reset();
 	       items.fetch();
 
 	       equals("Updated name", items.at(0).get('name'));	       
	   });

       test('Test item destroy', function () {
	       var items = new ItemsCollection();
	       items.fetch();
	       equals(items.length, 0);

		items.create({ name : "Item #3" });

 	       equals(items.length, 1);
 	       
	       items.at(0).destroy();

 	       items.reset();
 	       items.fetch();
 
 	       equals(items.length, 0);
       });
});

