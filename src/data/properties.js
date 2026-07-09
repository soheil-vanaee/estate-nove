import image1 from "../assets/images/image1.jpg";
import image2 from "../assets/images/image2.jpg";
import image3 from "../assets/images/image3.jpg";
import image4 from "../assets/images/image4.jpg";
import image5 from "../assets/images/image5.jpg";
import image6 from "../assets/images/image6.jpg";

// Central data source for all property listings shown across the site.
// Replace `price`, `image`, and other fields with real data from your
// backend/CMS — components read from this array so a single edit here
// updates the Home, Buy, Rent and Property Details pages everywhere.
export const properties = [
  {
    id: "serenity-tower-1",
    title: "Serenity Tower",
    location: "USA, Los Angeles",
    price: 340000,
    type: "buy",
    size: "300m",
    floors: 1,
    beds: 2,
    baths: 2,
    image: image1,
    description:
      "A bright, contemporary villa with an open-plan living area, a private pool and floor-to-ceiling glazing that frames the surrounding landscape.",
  },
  {
    id: "serenity-tower-2",
    title: "Serenity Tower",
    location: "USA, Los Angeles",
    price: 340000,
    type: "buy",
    size: "300m",
    floors: 1,
    beds: 2,
    baths: 2,
    image: image2,
    description:
      "Warm timber cladding and layered volumes give this residence a striking street presence, paired with a fully landscaped rear garden.",
  },
  {
    id: "serenity-tower-3",
    title: "Serenity Tower",
    location: "USA, Los Angeles",
    price: 340000,
    type: "rent",
    size: "300m",
    floors: 1,
    beds: 2,
    baths: 2,
    image: image3,
    description:
      "A quiet suburban retreat surrounded by mature planting, with a double garage and a welcoming, light-filled entry.",
  },
  {
    id: "serenity-tower-4",
    title: "Serenity Tower",
    location: "USA, Los Angeles",
    price: 340000,
    type: "buy",
    size: "300m",
    floors: 1,
    beds: 2,
    baths: 2,
    image: image4,
    description:
      "Clean architectural lines and a resort-style pool make this property ideal for entertaining year round.",
  },
  {
    id: "serenity-tower-5",
    title: "Serenity Tower",
    location: "USA, Los Angeles",
    price: 340000,
    type: "rent",
    size: "300m",
    floors: 1,
    beds: 2,
    baths: 2,
    image: image5,
    description:
      "Golden-hour glazing and a cantilevered upper floor define this striking modern home in a sought-after neighbourhood.",
  },
  {
    id: "serenity-tower-6",
    title: "Serenity Tower",
    location: "USA, Los Angeles",
    price: 340000,
    type: "sell",
    size: "300m",
    floors: 1,
    beds: 2,
    baths: 2,
    image: image6,
    description:
      "A family-friendly home with a landscaped front lawn, generous natural light and easy access to local schools.",
  },
];

export const formatPrice = (value) =>
  `$${value.toLocaleString("en-US")}`;
