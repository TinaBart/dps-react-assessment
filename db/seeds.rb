100.times do
    beer = beer.create( name: Faker::Beer.unique.name, 
                        brewery: Faker::Company.name, 
                        style: Faker::Beer.style, 
                        hop: Faker::Beer.hop, 
                        yeast: Faker::Beer.yeast, 
                        malt: Faker::Beer.malts, 
                        ibu: Faker::Beer.ibu, 
                        alcohol: Faker::Beer.alcohol, 
                        blg: Faker::Beer.blg)
    20.times do
      Score.create( user_id: user.id, value: Faker::Number.between(25, 350) )
    end
  end
