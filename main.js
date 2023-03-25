















var library = [ { author: 'Bill Gates',
					title: 'The Road Ahead', 
					readingStatus: true },
					
					{ author: 'Steve Jobs',
					title: 'Walter Isaacson', 
					readingStatus: true },
					
					{ author: 'Suzanne Collins',
					title: 'Mockingjay: The Final Book of The Hunger Games', 
					readingStatus: false }];

library.filter(function(value)
{
	if(value.readingStatus===true){
		console.log(`Already read ${value.author} by ${value.title}`)
	}
	else {
	console.log(`You still need to read ${value.title} by ${value.author}`)
	}
})

