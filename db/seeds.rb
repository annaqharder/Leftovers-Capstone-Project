puts "Clearing Database..."
Eatery.destroy_all
User.destroy_all
Visit.destroy_all

puts "Creating users..."
anna = User.create!(first_name: "Anna", last_name: "Harder", email: "annaqharder@gmail.com", password: "123", location: "Denver, CO", bio: "", avatar: "https://static.vecteezy.com/system/resources/thumbnails/006/962/403/small/stylish-colorful-portrait-of-a-beautiful-woman-with-glasses-in-front-flat-illustration-vector.jpg")
johnny = User.create!(first_name: "Johnny", last_name: "Turco", email: "johnnyturco@me.com", password: "123", location: "Omaha, NE", bio: "Enjoyer of fine cocktails, specifically the whiskey sour", avatar: "https://ca.slack-edge.com/T0266FRGM-U2Q173U05-g863c2a865d7-512" )
rachel = User.create!(first_name: "Rachel", last_name: "Humes", email: "racheljhumes@gmail.com", password: "123", location: "Denver, CO", bio: "", avatar: "https://ca.slack-edge.com/T0266FRGM-U2Q173U05-g863c2a865d7-512" )

puts "Creating eateries..."
E1 = Eatery.create!(eatery_name: "Hop Alley", eatery_address: "3500 Larimer St. Denver, CO 80205", eatery_neighborhood: "RiNo", eatery_category: "Restaurant", eatery_type: "Modern Chinese", user_id: anna.id, have_visited: true, eatery_img: "https://goop-img.com/wp-content/uploads/2017/02/Hop-Alley-.jpg")
E2 = Eatery.create!(eatery_name: "Spuntino", eatery_address: "2639 W 32nd Ave. Denver, CO 80201", eatery_neighborhood: "Highlands", eatery_category: "Restaurant", eatery_type: "Italian", user_id: anna.id, have_visited: true, eatery_img: "http://static1.squarespace.com/static/5ed41749a35bb1242ef90d3e/t/5ee24efe3dba006e9bec1625/1591889665475/Spuntino_Denver.jpg?format=1500w")
E3 = Eatery.create!(eatery_name: "Dandy Lion Coffee Co.", eatery_address: "5225 E 38th Ave. Denver, CO 80207", eatery_neighborhood: "North Park Hill", eatery_category: "Coffee/Cafe", eatery_type: "", user_id: anna.id, have_visited: true, eatery_img: "https://travellemming.com/wp-content/uploads/Dandy-Lion-Coffee-Co.-Counter.jpg")
E4 = Eatery.create!(eatery_name: "9th Door", eatery_address: "925 Lincoln St. Denver, CO 80203", eatery_neighborhood: "Capitol Hill", eatery_category: "Restaurant", eatery_type: "Spanish Tapas", user_id: johnny.id, have_visited: true, eatery_img: "")
E5 = Eatery.create!(eatery_name: "Death & Co.", eatery_address: "1280 25th St, Denver, CO 80205", eatery_neighborhood: "RiNo", eatery_category: "Bar", eatery_type: "Cocktail", user_id: anna.id, have_visited: false, eatery_img: "https://static01.nyt.com/images/2016/08/19/dining/19DEATH-WEB/19DEATH-WEB-superJumbo.jpg")
E6 = Eatery.create!(eatery_name: "Kuluka Boba & Sweets", eatery_address: "6030 W 92nd Ave. Westminster, CO 80031", eatery_neighborhood: "", eatery_category: "Coffee/Cafe", eatery_type: "Boba", user_id: anna.id, have_visited: false, eatery_img: "")
E7 = Eatery.create!(eatery_name: "Ving Xuong Bakery", eatery_address: "2370 W Alameda Ave. Denver, CO 80223", eatery_neighborhood: "", eatery_category: "Coffee/Cafe", eatery_type: "Bakery", user_id: anna.id, have_visited: false, eatery_img: "")
E8 = Eatery.create!(eatery_name: "Highland Noodles", eatery_address: "9188 Prestmont Pl. Frisco, TX 75035", eatery_neighborhood: "", eatery_category: "Restaurant", eatery_type: "Chinese", user_id: anna.id, have_visited: false, eatery_img: "")
E9 = Eatery.create!(eatery_name: "Dos Santos", eatery_address: "1475 E 17th Ave. Denver, CO 80218", eatery_neighborhood: "", eatery_category: "Restaurant", eatery_type: "Mexican", user_id: anna.id, have_visited: true, eatery_img: "")
E10 = Eatery.create!(eatery_name: "Lou's Italian Specialties", eatery_address: "3357 N Downing St. Denver, CO 80205", eatery_neighborhood: "Five Points", eatery_category: "Restaurant", eatery_type: "Italian Sandwich Shop", user_id: anna.id, have_visited: true, eatery_img: "")
E11 = Eatery.create!(eatery_name: "Kochi Cafe", eatery_address: "4100 E 8th Ave. Denver, CO 80220", eatery_neighborhood: "", eatery_category: "Coffee/Cafe", eatery_type: "", user_id: anna.id, have_visited: true, eatery_img: "")
E12 = Eatery.create!(eatery_name: "La Fillette Bakery", eatery_address: "4416 E 8th Ave. Denver, CO 80220", eatery_neighborhood: "", eatery_category: "Coffee/Cafe", eatery_type: "French", user_id: anna.id, have_visited: true, eatery_img: "")
E13 = Eatery.create!(eatery_name: "Bakery Four", eatery_address: "4150 Tennyson St. Denver, CO 80212", eatery_neighborhood: "", eatery_category: "Coffee/Cafe", eatery_type: "Bakery", user_id: anna.id, have_visited: true, eatery_img: "")
E14 = Eatery.create!(eatery_name: "Barcelona Wine Bar", eatery_address: "2900 Larimer St. Denver, CO 80205", eatery_neighborhood: "RiNo", eatery_category: "Restaurant", eatery_type: "Tapas", user_id: anna.id, have_visited: true, eatery_img: "")
E15 = Eatery.create!(eatery_name: "Work & Class", eatery_address: "2500 Larimer St. Denver, CO 80205", eatery_neighborhood: "RiNo", eatery_category: "Restaurant", eatery_type: "Southern & Latin American", user_id: anna.id, have_visited: true, eatery_img: "")
E16 = Eatery.create!(eatery_name: "SuperMegaBien", eatery_address: "1260 25th St. Denver, CO 80205", eatery_neighborhood: "RiNo", eatery_category: "Restaurant", eatery_type: "Latin American dim-sum", user_id: anna.id, have_visited: true, eatery_img: "")
E17 = Eatery.create!(eatery_name: "Merchants Pub & Plate", eatery_address: "746 Massachusetts St. Lawrence, KS 66044", eatery_neighborhood: "", eatery_category: "Restaurant", eatery_type: "", user_id: anna.id, have_visited: true, eatery_img: "")
E18 = Eatery.create!(eatery_name: "The Mad Greek", eatery_address: "907 Massachusetts St. Lawrence, KS 66044", eatery_neighborhood: "", eatery_category: "Restaurant", eatery_type: "Greek", user_id: anna.id, have_visited: true, eatery_img: "")
E19 = Eatery.create!(eatery_name: "John Brown's Underground", eatery_address: "7 E 7th Ave. Lawrence, KS 66044", eatery_neighborhood: "", eatery_category: "Bar", eatery_type: "Speakeasy", user_id: anna.id, have_visited: true, eatery_img: "")
E20 = Eatery.create!(eatery_name: "El Five", eatery_address: "2930 Umatilla St. Unit #500 Denver, CO 80211", eatery_neighborhood: "Highlands", eatery_category: "Restaurant", eatery_type: "Tapas", user_id: anna.id, have_visited: false, eatery_img: "")
E21= Eatery.create!(eatery_name: "Retrograde", eatery_address: "530 E 19th Ave. Denver, CO 80203", eatery_neighborhood: "Capitol Hill", eatery_category: "Bar", eatery_type: "speakeasy", user_id: anna.id, have_visited: false, eatery_img: "")
E22 = Eatery.create!(eatery_name: "Room for Milly", eatery_address: "1615 Platte St. Denver, CO 80202", eatery_neighborhood: "Platte Park", eatery_category: "Bar", eatery_type: "Cocktail", user_id: anna.id, have_visited: false, eatery_img: "")
E23 = Eatery.create!(eatery_name: "Señor Bear", eatery_address: "3301 Tejon St. Denver, CO 802011", eatery_neighborhood: "Highlands", eatery_category: "Restaurant", eatery_type: "Latin American", user_id: anna.id, have_visited: false, eatery_img: "")
E24 = Eatery.create!(eatery_name: "Honey Elixer Bar", eatery_address: "2636 Walnut St. #104 Denver, CO 80205", eatery_neighborhood: "RiNo", eatery_category: "Bar", eatery_type: "cocktail", user_id: anna.id, have_visited: true, eatery_img: "")
E25 = Eatery.create!(eatery_name: "Dimestore Delibar", eatery_address: "1575 Boulder St. Unit A Denver, CO 80211", eatery_neighborhood: "Highlands", eatery_category: "Restaurant", eatery_type: "Deli", user_id: anna.id, have_visited: true, eatery_img: "")
E26 = Eatery.create!(eatery_name: "Fort Greene", eatery_address: "321 E 445th Ave. Denver, CO 80216", eatery_neighborhood: "RiNo", eatery_category: "Bar", eatery_type: "Cocktail", user_id: anna.id, have_visited: true, eatery_img: "")



puts "Creating visits..."
V1 = Visit.create!(user_id: anna.id, eatery_id: E1.id, date: "2022-03-17", occasion: "Dinner", notes: "", drink: "Curry cocktail", appetizer: "Shrimp Toast, Yen Tsai", food: "La Zi Ji, Beijing Duck Rolls", dessert: "", other_consumables: "", visit_img:"", rating: 4)
V2 = Visit.create!(user_id: anna.id , eatery_id: E1.id, date: "2022-10-15" , occasion: "Date Night", notes: "", drink: "California Barbie cocktail", appetizer: "Steamed Eggplant", food: "Dian Dian Noodles, La Zi Ji", dessert: "Grapefruit sorbet", other_consumables: "", visit_img:"", rating: 4)
V3 = Visit.create!(user_id: anna.id , eatery_id: E2.id, date: "2022-07-22", occasion: "Date Night", notes: "", drink: "Cappelletti Sour, The Bourbonator", appetizer: "Focaccia e Ricotta", food: "Alce Crudo, Capellini Aglio e Olio", dessert: "Tartufo al Cioccolato", other_consumables: "", visit_img:"", rating: 4)
V4 = Visit.create!(user_id: anna.id , eatery_id: E3.id , date: "2023-01-15" , occasion: "Studying", notes: "burrito was just microwaved, Thai ice tea was so good!", drink: "Thai Ice Tea", appetizer: "", food: "breakfast burrito", dessert: "", other_consumables: "", visit_img:"", rating: 3)
V5 = Visit.create!(user_id: anna.id, eatery_id: E3.id, date:"2023-01-28", occasion: "Studying", notes: "pastry was delicious", drink: "latte", appetizer: "", food: "rhubarb pastery", dessert: "", other_consumables: "", visit_img: "", rating: 4)
V6 = Visit.create!(user_id: johnny.id, eatery_id: E4.id, date: "2023-01-13", occasion: "Dinner w/ friends", notes: "", drink: "margarita, seasonal sangria", appetizer: "", food: "Patatas Bravas, Pollo Con Chorizo y Garbanzo, Albondigas, Datiles, Torrado de Escalivada de Catalana", dessert: "Churros Rellenos, Crema Catalana", other_consumables: "", visit_img:"", rating: 4)
V7 = Visit.create!(user_id: anna.id, eatery_id: E5.id, date: "2022-12-23", occasion: "Happy Hour", notes: "not the best, expensive", drink: "Whiskey Sour, ", appetizer: "", food: "", dessert: "", other_consumables: "", visit_img:"", rating: 3)
V8 = Visit.create!(user_id: anna.id, eatery_id: E9.id , date: "2023-02-10", occasion: "Dinner", notes: "wouldn't order the crunchy taco supreme again, everything else was great!", drink: "House Margarita, Love Potion", appetizer: "Chicken Tinga Chips, Chips & Guac", food: "Crunchy Taco Supreme, Tuna Tostada, Beer Battered Fish taco", dessert: "", other_consumables: "", visit_img:"", rating: 5)
V9 = Visit.create!(user_id: anna.id, eatery_id: E10.id, date: "2023-02-10", occasion: "Lunch", notes: "", drink: "", appetizer: "", food: "The Louie (classic Italian sandwich), Roman Fiesta, Prosciutto Mozz Panini", dessert: "", other_consumables: "Denver Chips, original and sweet&spicy", visit_img:"", rating: 4)
V10 = Visit.create!(user_id: anna.id, eatery_id: E11.id, date: "2023-02-04", occasion: "Studying", notes: "", drink: "Coconut Oolong Latte", appetizer: "", food: "Ham & Swiss breakfast sandwich", dessert: "", other_consumables: "", visit_img:"", rating: 4)
V11 = Visit.create!(user_id: anna.id, eatery_id: E11.id, date: "2023-01-18", occasion: "Studying", notes: "", drink: "Matcha Latte, London Fog", appetizer: "", food: "", dessert: "", other_consumables: "", visit_img:"", rating: 4)
V12 = Visit.create!(user_id: anna.id, eatery_id: E11.id, date: "2022-12-07", occasion: "Coffee w/ friends", notes: "", drink: "Coconut Oolong Latte, Golden Chai", appetizer: "", food: "Pistachio croissant, spinach & mushroom quiche", dessert: "", other_consumables: "", visit_img:"", rating: 4)
V13 = Visit.create!(user_id: anna.id, eatery_id: E12.id, date: "2022-12-15", occasion: "Breakfast", notes: "", drink: "", appetizer: "", food: "Cinnamon Roll, Savory Roll, Galette, Chocolate croissant", dessert: "", other_consumables: "", visit_img:"", rating: 4)
V14 = Visit.create!(user_id: anna.id, eatery_id: E12.id, date: "2023-01-21", occasion: "Brunch", notes: "", drink: "", appetizer: "", food: "Lamb sandwhich, BYO Sandwich (focaccia, duck confit, carmelized onions, provolone cheese)", dessert: "Cinnamon Roll", other_consumables: "", visit_img:"", rating: 5)
V15 = Visit.create!(user_id: anna.id, eatery_id: E12.id, date: "2023-02-05", occasion: "Breakfast", notes: "", drink: "", appetizer: "", food: "BYO Sandwich (croissant, duck confit, garlic sauce, provolone cheese)", dessert: "Kouign-Amann, Cinnamon Roll", other_consumables: "", visit_img:"", rating: 5)
V16 = Visit.create!(user_id: anna.id, eatery_id: E13.id, date: "2023-10-19", occasion: "Breakfast", notes: "long wait, get there early for best selection", drink: "", appetizer: "", food: "Country Loaf", dessert: "Cardamom Bun, Morning Bun, Vanilla Bean Spandauer, Pain Au Chocolat, Garlic Herb Knot", other_consumables: "", visit_img:"", rating: 5)
V17 = Visit.create!(user_id: anna.id, eatery_id: E14.id, date: "2021-06-19", occasion: "First Date", notes: "very loud", drink: "don't remember", appetizer: "", food: "Patatas Bravas, Mediterranean Hummus, Butternut Squash", dessert: "", other_consumables: "", visit_img:"", rating: 5)
V18 = Visit.create!(user_id: anna.id, eatery_id: E14.id, date: "2022-11-19", occasion: "Date Night", notes: "very loud, very good", drink: "Fruit GinTonic, Smoked Sherry Manhattan", appetizer: "", food: "Eggplant Caponata, Jámon & Manchego Croquetas, Truffled Bikini, Bacon-Wrapped Dates, Albondigas", dessert: "Flan Catalán, Burnt Basque Cheesecake", other_consumables: "", visit_img:"", rating: 5)
V19 = Visit.create!(user_id: anna.id, eatery_id: E15.id, date: "2021-12-17", occasion: "Aiden's Birthday Dinner", notes: "", drink: "Apple Ginger Thyme cocktail, Grapefruit Habanero Rosemary cocktail, Pomegranate Blueberry Basil cocktail, Nitro Espresso Martini", appetizer: "Blue Corn Empanadas, Jalapeno Cornbread Muffins", food: "Cochinita Pibil, Short Rib, Colorado Lamb, Roasted Vegetables, Roasted Mushroom Potatoes, Sweet Plantains", dessert: "Key Lime Pie, Butterscotch Pudding", other_consumables: "", visit_img:"", rating: 5)
V20 = Visit.create!(user_id: anna.id, eatery_id: E16.id, date: "2022-12-02", occasion: "Date Night", notes: "go for Happy Hour, Carne Asada and Coconut Flan was so good ", drink: "Spicy Margarita, Sangria Blanca", appetizer: "", food: "Cerviche, Arepas de Queso, Ropa Vieja, Saffron Arancini, Carne Asada", dessert: "Coconut Flan", other_consumables: "", visit_img:"", rating: 5)
V21 = Visit.create!(user_id: anna.id, eatery_id: E17.id, date: "2019-05-16", occasion: "Emily's Graduation Lunch", notes: "", drink: "", appetizer: "Brussels Sprouts, Truffle Goat Cheese Dip, Bee Stings", food: "Seared Salmon, Cauliflower Tikka Masala, Mac & Cheesemonger", dessert: "", other_consumables: "", visit_img:"", rating: 4)
V22 = Visit.create!(user_id: anna.id, eatery_id: E17.id, date: "2019-05-03", occasion: "21st Birthday Brunch", notes: "all-you-can-eat brunch is the best", drink: "", appetizer: "", food: "all the brunch food", dessert: "", other_consumables: "", visit_img:"", rating: 5)
V23 = Visit.create!(user_id: anna.id, eatery_id: E17.id, date: "2020-03-19", occasion: "Sunday Brunch", notes: "", drink: "", appetizer: "", food: "brussel sprouts, bee stings, smoked salmon baguette, chorizo & sweet potato hash, chedder cheese biscuit, kale caesar salad, crab cakes", dessert: "", other_consumables: "", visit_img:"", rating: 5)
V24 = Visit.create!(user_id: anna.id, eatery_id: E18.id, date: "2020-01-27", occasion: "Dinner", notes: "", drink: "", appetizer: "Saganaki (flaming cheese), toasted ravioli", food: "gyro sandwich plate", dessert: "", other_consumables: "", visit_img:"", rating: 4)
V25 = Visit.create!(user_id: anna.id, eatery_id: E19.id, date: "2019-10-12", occasion: "Drinks w/ Sydney, Megan, & Mattea", notes: "very fun cocktail concept", drink: "Deny Our Programming, Peach Gnar, Of the Earth Beetroot", appetizer: "", food: "", dessert: "", other_consumables: "", visit_img:"", rating: 4)
V26 = Visit.create!(user_id: anna.id, eatery_id: E24.id, date: "2023-11-14", occasion: "Drinks", notes: "very fun cocktail concept", drink: "Princess Peach w/ coconut milk, This is My Jam", appetizer: "", food: "", dessert: "", other_consumables: "", visit_img:"", rating: 4)
V27 = Visit.create!(user_id: anna.id, eatery_id: E25.id, date: "2022-10-07", occasion: "Lunch with Sydney & Coral", notes: "Spicy tuna dimeroll and Lychee Martini were amazing", drink: "Limoncello Spritz, Lychee Martini", appetizer: "", food: "Spicy Tuna Dimeroll, Chicken Parmesan sandwich", dessert: "", other_consumables: "Bacon Potato Salad, Housemade Salt & Vinegar chips, Smoked Chicken Salad", visit_img:"", rating: 5)
V28 = Visit.create!(user_id: anna.id, eatery_id: E26.id, date: "2022-02-14", occasion: "First Date Party", notes: "cute, intimate vibes; limited seating", drink: "", dessert: "", other_consumables: "", visit_img:"", rating: 4)

puts "Done seeding!"