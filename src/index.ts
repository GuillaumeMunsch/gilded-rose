import { Item } from "./types/Item";
import { SellableInnItem } from "./types/SellableInnItemInterface";

const displayItemsDetails = (item: Item) => `\nName: ${item.name}\nQuality: ${item.quality}\n`;

const logItemsWithLabel = (label: string, items: Item[]) => {
  console.log(`${label}: [${items.map(displayItemsDetails).join("\n - \n")}]`);
};

export class GildedRose {
  // sellableInnItems: SellableInnItem[];
  items: Item[];

  constructor(items: Array<Item> = []) {
    // this.sellableInnItems = items.map(() => );
    this.items = items;
    logItemsWithLabel("Items on construction", this.items);
  }

  updateQuality() {
    logItemsWithLabel("Items pre updateQuality", this.items);

    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].name != "Aged Brie" && this.items[i].name != "Backstage passes to a TAFKAL80ETC concert") {
        if (this.items[i].quality > 0) {
          if (this.items[i].name != "Sulfuras, Hand of Ragnaros") {
            this.items[i].quality = this.items[i].quality - 1;
          }
        }
      } else {
        if (this.items[i].quality < 50) {
          this.items[i].quality = this.items[i].quality + 1;
          if (this.items[i].name == "Backstage passes to a TAFKAL80ETC concert") {
            if (this.items[i].sellIn < 11) {
              if (this.items[i].quality < 50) {
                this.items[i].quality = this.items[i].quality + 1;
              }
            }
            if (this.items[i].sellIn < 6) {
              if (this.items[i].quality < 50) {
                this.items[i].quality = this.items[i].quality + 1;
              }
            }
          }
        }
      }
      if (this.items[i].name != "Sulfuras, Hand of Ragnaros") {
        this.items[i].sellIn = this.items[i].sellIn - 1;
      }
      if (this.items[i].sellIn < 0) {
        if (this.items[i].name != "Aged Brie") {
          if (this.items[i].name != "Backstage passes to a TAFKAL80ETC concert") {
            if (this.items[i].quality > 0) {
              if (this.items[i].name != "Sulfuras, Hand of Ragnaros") {
                this.items[i].quality = this.items[i].quality - 1;
              }
            }
          } else {
            this.items[i].quality = this.items[i].quality - this.items[i].quality;
          }
        } else {
          if (this.items[i].quality < 50) {
            this.items[i].quality = this.items[i].quality + 1;
          }
        }
      }
    }

    logItemsWithLabel("End of updateQuality", this.items);
    return this.items;
  }
}
