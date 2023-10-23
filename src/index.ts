import { Item } from "./types/Item";
import { LegacyItem } from "./types/LegacyItem";
import { NewItemInterface } from "./types/NewItemInterface";
import { SulfurasItem } from "./types/SulfurasItem";

const logItemsWithLabel = (label: string, items: NewItemInterface[]) => {
  console.log(`${label}: [${items.map(({ generateItemDetails }) => generateItemDetails()).join("\n - \n")}]`);
};

export class GildedRose {
  items: NewItemInterface[];

  constructor(items: Array<Item> = []) {
    this.items = items.map(({ name, quality, sellIn }) => {
      if (name === "Sulfuras, Hand of Ragnaros") {
        return new SulfurasItem();
      }
      return new LegacyItem(name, sellIn, quality);
    });
    logItemsWithLabel("Items on construction", this.items);
  }

  updateQuality() {
    logItemsWithLabel("Items pre updateQuality", this.items);

    for (let i = 0; i < this.items.length; i++) {
      this.items[i].updateQuality();
    }

    logItemsWithLabel("End of updateQuality", this.items);
    return this.items;
  }
}
