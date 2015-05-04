//hide form, when push edit button form shows
//button changes to preview
//add + button when editing

$("#edit-form").hide();
$("#add-btn-text").hide();

$("#edit-btn").click(function() { 
	$("#items").hide();
	$("#edit-form").show(); 
	$("#edit-btn").text("preview");
	$("#add-btn-text").show();
});

var form = function(brand, name, length, style, price, bottomImage, topImage) {
	brand: this.brand;
	name: this.name;
	length: this.length;
	style: this.style;
	price: this.price;
	bottomImage: this.bottomImage;
	topImage: this.topImage;
}

//show form with information filled out in form

//when edit and push save button, save form and API server

//when push save, it goes back to the main screen
$("#save-btn").click(function() { 
	$("#edit-form").hide(); 
	$("#items").show();
	$("#edit-btn").text("edit");
});