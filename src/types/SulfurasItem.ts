import { NewItemInterface } from "./NewItemInterface";

export class SulfurasItem implements NewItemInterface {
  name = "Sulfuras, Hand of Ragnaros";
  quality = 80;

  updateQuality() {}

  generateItemDetails = () => `\nName: ${this.name}\nQuality: ${this.quality}\n`;
}
