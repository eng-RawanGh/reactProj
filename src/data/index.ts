import { v4 as uuid } from "uuid";
import { Iproduct } from "../interfaces";

export const productList: Iproduct[] = [
  {
    id: uuid(),
    title: "Rolls-Royce Phantom",
    description:
      "The grandest and greatest luxury conveyance in motordom was replaced by Rolls-Royce in 2017 and given a glittering five-star road test welcome by our road testers shortly thereafter. The Phantom was subsequently updated in 2022, given subtle design and equipment tweaks, and we expect to test the updated version very soon.",
    imageUrl:
      "https://images.unsplash.com/photo-1627097170492-1041ecd6c3c5?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "$500000",
    colors: ["#ff0032", "#2563eb", "#ff6e31"],
    category: {
      name: "luxury cars",
      imageURL:
        "https://images.unsplash.com/photo-1627097170492-1041ecd6c3c5?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  },
  {
    id: uuid(),
    title: "Bentley Flying Spur",
    description:
      "Of course, there's the same calling-card 6.0-litre twin-turbo W12, which makes 626bhp plus bottomless torque and fires the car to 62mph in comfortably less than 4.0sec and on to a top speed of more than 200mph - if you want it. Versions of the Spur equipped with Bentley's lighter, more freely revving V8 and a six-cylinder plug-in hybrid powertrain are also offered, though. The hybrid system suits the big Bentley rather well, its near-silent progress in EV mode offering a sepulchral sense of calm when you're mooching. Yet when its V6 engine chimes in, it's almost as quick as the V8, even if it doesn't have that engine's character.",
    imageUrl:
      "https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/body-image/public/bentley_flying_spur_top_10.jpg?itok=S46_2hDH",
    price: "$500000",
    colors: ["#ff0032", "#2563eb", "#ff6e31"],
    category: {
      name: "luxury cars",
      imageURL:
        "https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/body-image/public/bentley_flying_spur_top_10.jpg?itok=S46_2hDH",
    },
  },
  {
    id: uuid(),
    title: "Rolls-Royce Ghost",
    description:
      "The Ghost was a line in the sand for Rolls-Royce when it appeared in 2009: the beginning of a shift that transformed the company's annual production volumes. ",
    imageUrl:
      "https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/body-image/public/rolls_royce_ghost_top_10.jpg?itok=E8K24ujB",
    price: "$500000",
    colors: ["#ff0032", "#2563eb", "#ff6e31"],
    category: {
      name: "luxury cars",
      imageURL:
        "https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/body-image/public/rolls_royce_ghost_top_10.jpg?itok=E8K24ujB",
    },
  },
  {
    id: uuid(),
    title: "Mercedes-Maybach S-Class",
    description:
    "The richest and most special car in what might be the most universally respected and admired limousine range in the world, the Mercedes-Maybach S-Class is the modern standard-bearer for Daimler's Maybach super-luxury brand.",
    imageUrl:
    "https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/body-image/public/mercedes-maybach-s-class_top_10.jpg?itok=PZxoKqGW",
    price: "$500000",
    colors: ["#ff0032", "#2563eb", "#ff6e31"],
    category: {
      name: "luxury cars",
      imageURL:
      "https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/body-image/public/mercedes-maybach-s-class_top_10.jpg?itok=PZxoKqGW",
    },
  },
  {
    id: uuid(),
    title: "BMW i7",
    description:
    "The BMW limousine has just taken a huge stride into the future with the introduction of the first electric 7 Series, called the BMW i7. While its street-tough styling doesn't quite level with the refined elegance of some the cars elsewhere on this list, there can be no denying its claims as a luxury operator. Lavish and refined to travel in, with on-board technology options that even Rolls-Royce, Bentley and Tesla don't offer, the i7 is probably the greatest luxury EV of the moment.",
    imageUrl:
    "https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/body-image/public/bmw_i7_top_10.jpg?itok=_U_FkyCu",
    price: "$500000",
    colors: ["#ff0032", "#2563eb", "#ff6e31"],
    category: {
      name: "luxury cars",
      imageURL:
"https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/body-image/public/bmw_i7_top_10.jpg?itok=_U_FkyCu",
    },
  },
];