(function() {
	var Realmac = Realmac || {};

	Realmac.meta = {
		
		// Set the browser title
		//
		// @var String text
		setTitle: function(text) {
			return document.title = text;
		},
		
		// Set the content attribute of a meta tag
		//
		// @var String name
		// @var String content
		setTagContent: function(tag, content){
			// If the tag being set is title
			// return the result of setTitle
			if ( tag === 'title' )
			{
				return this.setTitle(content);
			}
			
			// Otherwise try and find the meta tag
			var tag = this.getTag(tag);
			
			// If we have a tag, set the content
			if ( tag !== false )
			{
				return tag.setAttribute('content', content);
			}
			
			return false;
		},
		
		// Find a meta tag
		//
		// @var String name
		getTag: function(name) {
			var meta = document.querySelectorAll('meta');
			
			for ( var i=0; i<meta.length; i++ )
			{
				if (meta[i].name == name){
					return meta[i];
				}
			}
			
			var tag = document.createElement('meta');
			tag.name = name;
			document.getElementsByTagName('head')[0].appendChild(tag);
			
			return tag;
		}
	};
 
	// Object containing all website meta info
	var websiteMeta = {"3da5b6da926b060b204a73b6aa6c7ad2-6.html":"<p>This is exactly why I have my own blog instead of just posting on some other social service.<br \/>Redesigning your blog<\/p>","a5553a712b938f9bea4773a43f07005c-3.html":"Well, I haven't done a very good job of keeping this blog up to date, but I've had a lot going on. I'll be back-filling stories onto the blog now, so ","archive-august-2017.html":"Archives for August 2017","3e8e01eae01fd3842d1ad0bcfe3a224e-1.html":"Becca and I have been enjoying our back porch more now that we have neat little hummingbirds coming by and visiting. Becca had put out a hummingbird f","f820159b492ddedc2424faf25c77397e-0.html":"I have a dream to visit Belize some day (and maybe move there permanently). Belize is unique among the Caribbean and Central American countries for se","5a67d8bdd77652e14dd351b869847266-7.html":"I've created a community site designed specifically for electric bike fans and riders. Check it out!","ccc45df011ab3d538185c65eb759b61a-2.html":"This is a really fast and easy resource to get started learning Git.","archive-november-2016.html":"Archives for November 2016","category-hobbies.html":"A list of posts in category &ldquo;Hobbies&rdquo;","category-travel.html":"A list of posts in category &ldquo;Travel&rdquo;","archive-july-2015.html":"Archives for July 2015","archive-july-2016.html":"Archives for July 2016","archive-september-2016.html":"Archives for September 2016","c047c4df2ab0826c941f0232ba5297cf-5.html":"A few weeks ago I decided to replace the electric bike that I had built with one that was factory-produced. I made this decision for a few different r","category-ebikes.html":"A list of posts in category &ldquo;eBikes&rdquo;","category-work.html":"A list of posts in category &ldquo;Work&rdquo;","ffab5942741343f019c16efb28bd1875-4.html":"Before I get into why *today* was so great, I need to tell you about the day before it. Yesterday was a big day for me professionally. I gave an hour ","archive-august-2016.html":"Archives for August 2016","category-personal.html":"A list of posts in category &ldquo;Personal&rdquo;"};
 
	// pageId must match the key in websiteMeta object
	var url = window.location.pathname;
	var pageId = url.substring(url.lastIndexOf('/')+1);
	if (!pageId || pageId.length == 0){
		pageId = 'index.html';
	}
	pageMeta = websiteMeta[pageId];
 
	// If we have meta for this page
	if (pageMeta){
		Realmac.meta.setTagContent('description', pageMeta);
	}
 
 })();