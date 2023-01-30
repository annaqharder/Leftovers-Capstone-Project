puts "Clearing Database..."
Eatery.destroy_all
User.destroy_all
Visit.destroy_all

puts "Creating users..."
anna = User.create!(first_name: "Anna", last_name: "Harder", email: "annaqharder@gmail.com", password: "123", location: "Denver, CO", bio: "", avatar: "" )
johnny = User.create!(first_name: "Johnny", last_name: "Turco", email: "johnnyturco@me.com", password: "123", location: "Omaha, NE", bio: "Enjoyer of fine cocktails, specifically the whiskey sour", avatar: "" )
rachel = User.create!(first_name: "Rachel", last_name: "Humes", email: "racheljhumes@gmail.com", password: "123", location: "Denver, CO", bio: "", avatar: "" )

puts "Creating eateries..."
E1 = Eatery.create!(eatery_name: "Hop Alley", eatery_address: "3500 Larimer St. Denver, CO 80205", eatery_neighborhood: "RiNo", eatery_category: "Restaurant", eatery_type: "Modern Chinese", user_id: anna.id)
E2 = Eatery.create!(eatery_name: "Spuntino", eatery_address: "2639 W 32nd Ave. Denver, CO 802011", eatery_neighborhood: "Highlands", eatery_category: "Restaurant", eatery_type: "Italian", user_id: anna.id)
E3 = Eatery.create!(eatery_name: "Dandy Lion Coffee Co.", eatery_address: "5225 E 38th Ave. Denver, CO 80207", eatery_neighborhood: "North Park Hill", eatery_category: "Coffee Shop", eatery_type: "", user_id: anna.id)
E4 = Eatery.create!(eatery_name: "9th Door", eatery_address: "925 Lincoln St. Denver, CO 80203", eatery_neighborhood: "Capitol Hill", eatery_category: "Restaurant", eatery_type: "Spanish Tapas", user_id: johnny.id)
E5 = Eatery.create!(eatery_name: "Death & Co.", eatery_address: "1280 25th St, Denver, CO 80205", eatery_neighborhood: "RiNo", eatery_category: "Bar", eatery_type: "Cocktail", user_id: johnny.id)


puts "Creating visits..."
V1 = Visit.create!(user_id: anna.id, eatery_id: E1.id, date: "2022-03-17", occasion: "Dinner", notes: "", drink: "Curry cocktail", appetizer: "Shrimp Toast, Yen Tsai", food: "La Zi Ji, Beijing Duck Rolls", dessert: "", other_consumables: "", visit_img:"")
V2 = Visit.create!(user_id: anna.id , eatery_id: E1.id, date: "2022-10-15" , occasion: "Date Night", notes: "", drink: "California Barbie cocktail", appetizer: "Steamed Eggplant", food: "Dian Dian Noodles, La Zi Ji", dessert: "Grapefruit sorbet", other_consumables: "", visit_img:"")
V3 = Visit.create!(user_id: anna.id , eatery_id: E2.id, date: "2022-07-22", occasion: "Date Night", notes: "", drink: "Cappelletti Sour, The Bourbonator", appetizer: "Focaccia e Ricotta", food: "Alce Crudo, Capellini Aglio e Olio", dessert: "Tartufo al Cioccolato", other_consumables: "", visit_img:"")
V4 = Visit.create!(user_id: anna.id , eatery_id: E3.id , date: "2023-01-15" , occasion: "Studying", notes: "burrito was just microwaved, Thai ice tea was so good!", drink: "Thai Ice Tea", appetizer: "", food: "breakfast burrito", dessert: "", other_consumables: "", visit_img:"")
V5 = Visit.create!(user_id: anna.id, eatery_id: E3.id, date:"2023-01-28", occasion: "Studying", notes: "pastry was delicious", drink: "Thai Ice Tea", appetizer: "", food: "caramel apple pastery", dessert: "", other_consumables: "", visit_img:"")
V6 = Visit.create!(user_id: johnny.id, eatery_id: E4.id, date: "2023-01-13", occasion: "Dinner w/ friends", notes: "", drink: "margarita, seasonal sangria", appetizer: "", food: "Patatas Bravas, Pollo Con Chorizo y Garbanzo, Albondigas, Datiles, Torrado de Escalivada de Catalana", dessert: "Churros Rellenos, Crema Catalana", other_consumables: "", visit_img:"")
V7 = Visit.create!(user_id: johnny.id, eatery_id: E5.id , date: "2022-12-23", occasion: "Happy Hour", notes: "not the best, expensive", drink: "Whiskey Sour", appetizer: "", food: "", dessert: "", other_consumables: "", visit_img:"")

puts "Done seeding!"