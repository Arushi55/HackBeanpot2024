const cake_recipe = {
    name: 'Cake',
    flour: 1.5,
    sugar: 1,
    butter: 4,
    egg: 2,
    vanilla: 2,
    baking_powder: 1.75,
    milk: .5,
    steps: "1. Gather all ingredients.\n \
    2. Preheat the oven to 350 degrees F (175 degrees C). Grease and flour a 9-inch square cake pan. \n \
    3. Cream sugar and butter together in a mixing bowl. Add eggs, one at a time, beating briefly after each addition. Mix in vanilla. \n \
    4. Combine flour and baking powder in a separate bowl. Add to the wet ingredients and mix well. Add milk and stir until smooth. \n \
    "
  };

  export default function Profile() {
    return (
      <>
        <h1>{user.name}</h1>
        <img
          className="avatar"
          src={user.imageUrl}
          alt={'Photo of ' + user.name}
          style={{
            width: user.imageSize,
            height: user.imageSize
          }}
        />
      </>
    );
  }
  