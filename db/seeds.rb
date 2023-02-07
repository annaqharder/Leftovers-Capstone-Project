puts "Clearing Database..."
Eatery.destroy_all
User.destroy_all
Visit.destroy_all

puts "Creating users..."
anna = User.create!(first_name: "Anna", last_name: "Harder", email: "annaqharder@gmail.com", password: "123", location: "Denver, CO", bio: "", avatar: "https://static.vecteezy.com/system/resources/thumbnails/006/962/403/small/stylish-colorful-portrait-of-a-beautiful-woman-with-glasses-in-front-flat-illustration-vector.jpg")
johnny = User.create!(first_name: "Johnny", last_name: "Turco", email: "johnnyturco@me.com", password: "123", location: "Omaha, NE", bio: "Enjoyer of fine cocktails, specifically the whiskey sour", avatar: "https://ca.slack-edge.com/T0266FRGM-U2Q173U05-g863c2a865d7-512" )
rachel = User.create!(first_name: "Rachel", last_name: "Humes", email: "racheljhumes@gmail.com", password: "123", location: "Denver, CO", bio: "", avatar: "https://ca.slack-edge.com/T0266FRGM-U2Q173U05-g863c2a865d7-512" )

puts "Creating eateries..."
E1 = Eatery.create!(eatery_name: "Hop Alley", eatery_address: "3500 Larimer St. Denver, CO 80205", eatery_neighborhood: "RiNo", eatery_category: "Restaurant", eatery_type: "Modern Chinese", user_id: anna.id, have_visited: true)
E2 = Eatery.create!(eatery_name: "Spuntino", eatery_address: "2639 W 32nd Ave. Denver, CO 80201", eatery_neighborhood: "Highlands", eatery_category: "Restaurant", eatery_type: "Italian", user_id: anna.id, have_visited: true)
E3 = Eatery.create!(eatery_name: "Dandy Lion Coffee Co.", eatery_address: "5225 E 38th Ave. Denver, CO 80207", eatery_neighborhood: "North Park Hill", eatery_category: "Coffee/Cafe", eatery_type: "", user_id: anna.id, have_visited: true)
E4 = Eatery.create!(eatery_name: "9th Door", eatery_address: "925 Lincoln St. Denver, CO 80203", eatery_neighborhood: "Capitol Hill", eatery_category: "Restaurant", eatery_type: "Spanish Tapas", user_id: johnny.id, have_visited: true)
E5 = Eatery.create!(eatery_name: "Death & Co.", eatery_address: "1280 25th St, Denver, CO 80205", eatery_neighborhood: "RiNo", eatery_category: "Bar", eatery_type: "Cocktail", user_id: johnny.id, have_visited: false)


puts "Creating visits..."
V1 = Visit.create!(user_id: anna.id, eatery_id: E1.id, date: "2022-03-17", occasion: "Dinner", notes: "", drink: "Curry cocktail", appetizer: "Shrimp Toast, Yen Tsai", food: "La Zi Ji, Beijing Duck Rolls", dessert: "", other_consumables: "", visit_img:"https://images.squarespace-cdn.com/content/v1/559b4924e4b0e8559d2b7a1b/1455828623564-P8G01TOZDN249O4FIW7P/1G1A6233-7.jpg", rating: 4)
V2 = Visit.create!(user_id: anna.id , eatery_id: E1.id, date: "2022-10-15" , occasion: "Date Night", notes: "", drink: "California Barbie cocktail", appetizer: "Steamed Eggplant", food: "Dian Dian Noodles, La Zi Ji", dessert: "Grapefruit sorbet", other_consumables: "", visit_img:"https://img1.10bestmedia.com/Images/Photos/388754/Hop-Alley-Lemon-Lime-Sorbet-LR_55_660x440.jpg", rating: 4)
V3 = Visit.create!(user_id: anna.id , eatery_id: E2.id, date: "2022-07-22", occasion: "Date Night", notes: "", drink: "Cappelletti Sour, The Bourbonator", appetizer: "Focaccia e Ricotta", food: "Alce Crudo, Capellini Aglio e Olio", dessert: "Tartufo al Cioccolato", other_consumables: "", visit_img:"https://scontent-den4-1.xx.fbcdn.net/v/t39.30808-6/279435246_5579788938717586_747017412156370746_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=a26aad&_nc_ohc=_Aa4sSFp3fUAX9fr_3_&_nc_ht=scontent-den4-1.xx&oh=00_AfBiIMMqjA-zbqZYZY-Oc3AeFUbN2_PK4VKcJdLOO0UOGA&oe=63E4D655", rating: 4)
V4 = Visit.create!(user_id: anna.id , eatery_id: E3.id , date: "2023-01-15" , occasion: "Studying", notes: "burrito was just microwaved, Thai ice tea was so good!", drink: "Thai Ice Tea", appetizer: "", food: "breakfast burrito", dessert: "", other_consumables: "", visit_img:"https://static.wixstatic.com/media/0e1c21_e194d6bc5c8542d2b4974dae411b666a~mv2.png/v1/fill/w_640,h_854,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/0e1c21_e194d6bc5c8542d2b4974dae411b666a~mv2.png", rating: 3)
V5 = Visit.create!(user_id: anna.id, eatery_id: E3.id, date:"2023-01-28", occasion: "Studying", notes: "pastry was delicious", drink: "latte", appetizer: "", food: "rhubarb pastery", dessert: "", other_consumables: "", visit_img:"https://scontent-den4-1.xx.fbcdn.net/v/t39.30808-6/286578158_1330865960740894_2527995046174152890_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=a26aad&_nc_ohc=pu6A5vJ_SisAX-Snw_e&_nc_ht=scontent-den4-1.xx&oh=00_AfBi2Uuz3iI60enS0F2Wd3bMqN_mFhmATHesilUPx7fYDg&oe=63E467E9", rating: 4)
V6 = Visit.create!(user_id: johnny.id, eatery_id: E4.id, date: "2023-01-13", occasion: "Dinner w/ friends", notes: "", drink: "margarita, seasonal sangria", appetizer: "", food: "Patatas Bravas, Pollo Con Chorizo y Garbanzo, Albondigas, Datiles, Torrado de Escalivada de Catalana", dessert: "Churros Rellenos, Crema Catalana", other_consumables: "", visit_img:"", rating: 4)
V7 = Visit.create!(user_id: johnny.id, eatery_id: E5.id , date: "2022-12-23", occasion: "Happy Hour", notes: "not the best, expensive", drink: "Whiskey Sour", appetizer: "", food: "", dessert: "", other_consumables: "", visit_img:"", rating: 3)

puts "Done seeding!"