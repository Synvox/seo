import { theme } from "../theme";
import styled from "styled-components";
import Nav from "../components/Nav";
import Section from "../components/Section";
import Timp from "../components/Timp";
import Title from "../components/Title";
import Images from "../components/Images";
import {
  Blockquote,
  Heading,
  P,
  Padding,
  Heading2,
} from "../components/typography";
import Stack from "../components/Stack";
import Drawer from "../components/Drawer";

export default function Home() {
  return (
    <>
      <Nav invert></Nav>
      <Section style={{ height: "60vmin" }} background={<Timp />}>
        <Title></Title>
      </Section>
      <Section>
        <Images />
      </Section>
      <Section>
        <Padding>
          <Stack space={12}>
            <Heading id="custom-food">Custom Food</Heading>
            <P>
              <ul>
                <li>Homemade Family Meals</li>
                <li>Gourmet Brown Bag Lunches for Crews &amp; Office Staff</li>
                <li>Elaborate Tapas Style Dinners</li>
                <li>Brunches and fresh baked goods</li>
                <li>Food for Family and Friend Celebrations</li>
                <li>Private Chef Services</li>
                <li>Custom Menus By Request</li>
              </ul>
            </P>
            <Heading id="reviews">Reviews</Heading>
            <Blockquote cite="Tisha (Dallas, Aug 2020)">
              Best food I've ever had
            </Blockquote>
            <Blockquote cite="Courtney (Dallas, Aug 2020)">
              Best Dessert of my life
            </Blockquote>
            <Heading id="menus">Example Menus</Heading>
            <Drawer header={<div>Tapas Style Meal</div>}>
              <P>
                <Heading2>Featured Tapas</Heading2>

                <ul>
                  <li>
                    Local Tomato Bruschetta-Toasted French Bread, Extra Virgin
                    Olive Oil, Fresh Basil, Balsamic Glaze
                  </li>
                  <li>
                    Red Wine Braised Short Rib- Roasted Cauliflower Puree, Demi
                    Glaze, Crispy Onions
                  </li>
                  <li>
                    Smoked Pulled Pork Sliders- Gold BBQ Sauce, Cilantro Slaw,
                    Harissa Mayo
                  </li>
                  <li>
                    Wood Grilled Chicken Breast- Roasted Garlic Mashed Potato,
                    Shaved Asparagus, Marsala Jus
                  </li>
                  <li>
                    Black Garlic Crusted Shrimp- Toasted Basil Orzo, Herb Butter
                    Sauce, Pickled Zucchini
                  </li>
                  <li>
                    Spinach &amp; Roasted Artichoke Dip- Cajun Seasoned Pita
                    Bread, Baked Corn Chips
                  </li>
                </ul>

                <Heading2>Dessert</Heading2>

                <ul>
                  <li>
                    Strawberry Trifle- Macerated Berries, Vanilla Cream, Pound
                    Cake
                  </li>
                </ul>
              </P>
              <P>
                <strong>$90 per person</strong>
              </P>
            </Drawer>
            <Drawer header={<div>Brunch Meal</div>}>
              <P>
                <ul>
                  <li>
                    Strawberry Milkshake Overnight Oats- Rolled Oats, Chia
                    Seeds, Greek Yogurt, Almond Milk, Honey
                  </li>
                  <li>
                    Western Frittata- Ham, Sautéed Onions, Bell Peppers, Colby
                    Cheese, Western Seasoning, Roasted Tomato Sauce
                  </li>
                  <li>
                    Garlic Herb Grilled Chicken Breast- Creamy Marsala Jus,
                    Crispy Onions
                  </li>
                  <li>
                    Herb Roasted Potatoes- Fresh Thyme, Fresh Sage, Garlic
                  </li>
                  <li>
                    Seasonal Pancake Selection- Sweet Cream Pancake with a
                    Seasonal Twist, Butter Flavored Syrup
                  </li>
                  <li>Chocolate Chip Banana Bread- Cinnamon Butter</li>
                  <li>Smoked Sausage- Hardwood Smoked</li>
                </ul>
              </P>
              <P>
                <strong>$40 per person</strong>
              </P>
            </Drawer>
            <Drawer header={<div>Italian Themed</div>}>
              <P>
                <Heading2>Starters</Heading2>

                <ul>
                  <li>
                    Arancini- Arborio Rice, Cured Ham, Onions, Garlic, Parmesan,
                    Tomato Sauce
                  </li>
                  <li>
                    Local Tomato Bruschetta-Toasted French Bread, Extra Virgin
                    Olive Oil, Fresh Basil, Balsamic Glaze
                  </li>
                </ul>
                <Heading2>Main Event</Heading2>

                <ul>
                  <li>
                    Chopped Salad- Grilled Chicken, Bacon, Red Cabbage, Ditalini
                    Pasta, Green Onions, Grape Tomatoes, Mozzarella Cheese,
                    Balsamic Vinaigrette
                  </li>
                  <li>
                    Chicken Saltimbocca-Chicken Breast, Prosciutto, Provolone
                    Cheese, Fresh Sage, Dijon Sauce, Ziti Pasta
                  </li>
                  <li>
                    Shrimp &amp; Scallops Fra Diavolo- Black Tiger Shrimp, Wild
                    Caught Scallops, Red Pepper Flakes, White Wine Sauce,
                    Parsley, Diced Tomatoes, Gemelli Pasta
                  </li>
                  <li>
                    Grilled Italian Sausage-Red Peppers, Green Peppers, Onions
                  </li>
                  <li>
                    Parmesan Roasted Cauliflower-Olive Oil, Parsley, Black
                    Pepper, Garlic
                  </li>
                </ul>

                <Heading2>Dessert</Heading2>

                <ul>
                  <li>
                    Cannoli Cheesecake – Graham Cracker Crust, Ricotta Cheese,
                    Mini Chocolate Chips, Waffle Cone Topping
                  </li>
                </ul>
              </P>
              <P>
                <strong>$85 per person</strong>
              </P>
            </Drawer>
            <Drawer header={<div>Spanish Inspired</div>}>
              <P>
                <Heading2>Starters</Heading2>

                <ul>
                  <li>
                    Patatas Bravas- Crispy Idaho Potatoes, Spicy Tomato Sauce,
                    Garlic Aioli
                  </li>
                  <li>
                    Sausage Skewers- Spanish Chorizo, Manchego Cheese, Green
                    Olives
                  </li>
                </ul>
                <Heading2>Main Event</Heading2>

                <ul>
                  <li>
                    Greek Salad- Sweet Jem Lettuce, Roasted Peppers, Olives,
                    Grape Tomatoes, Banana Peppers, Salami, Feta Cheese, Red
                    Wine Vinaigrette
                  </li>
                  <li>
                    Seafood Paella- Green Mussels, Shrimp, Bell Peppers, Onions,
                    Arborio Rice, White Wine Tomato Broth
                  </li>
                  <li>
                    Chicken and Sausage Paella- Chicken Thighs, Linguica, Bell
                    Peppers, Onions, Arborio Rice, White Wine Tomato Broth
                  </li>
                  <li>
                    Grilled Asparagus Spears- Lemon Zest, Shallots, Olive Oil,
                    Garlic Pepper
                  </li>
                </ul>

                <Heading2>Dessert</Heading2>

                <ul>
                  <li>
                    “Birthday Cake” Tiramisu – Vanilla Mascarpone, Coffee
                    Infused Lady Fingers, Yellow Cake, Confetti Sprinkles
                  </li>
                </ul>
              </P>
              <P>
                <strong>$80 per person</strong>
              </P>
            </Drawer>
          </Stack>
        </Padding>
      </Section>
    </>
  );
}
