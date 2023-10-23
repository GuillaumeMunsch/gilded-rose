import { AgedBrie } from "./types/AgedBrie";
import { BackstagePass } from "./types/BackstagePass";
import { Item } from "./types/Item";
import { LegacyItem } from "./types/LegacyItem";
import { NewItemInterface } from "./types/NewItemInterface";
import { SulfurasItem } from "./types/SulfurasItem";

const logItemsWithLabel = (label: string, items: NewItemInterface[]) => {
  console.log(`${label}: [${items.map(({ generateItemDetails }) => generateItemDetails()).join("\n - \n")}]`);
};

const itemFactory = ({ name, quality, sellIn }: Item) => {
  switch (name) {
    case "Sulfuras, Hand of Ragnaros":
      return new SulfurasItem();
    case "Aged Brie":
      return new AgedBrie(name, sellIn, quality);
    case "Backstage passes to a TAFKAL80ETC concert":
      return new BackstagePass(name, sellIn, quality);
    default:
      return new LegacyItem(name, sellIn, quality);
  }
};

export class GildedRose {
  items: NewItemInterface[];

  constructor(items: Array<Item> = []) {
    this.items = items.map(itemFactory);
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
