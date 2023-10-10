export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

export class SellableInnItem {
  item: Item;

  constructor(item) {
    this.item = item;
  }

  updateQuality() {}
}

const displayItemsDetails = (item: Item) => `\nName: ${item.name}\nSell in: ${item.sellIn}\nQuality: ${item.quality}\n`;

const logItemsWithLabel = (label: string, items: Item[]) => {
  console.log(`${label}: [${items.map(displayItemsDetails).join("\n - \n")}]`);
};

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
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
            logItemsWithLabel("After default item update", this.items);
          }
        }
      } else {
        if (this.items[i].quality < 50) {
          this.items[i].quality = this.items[i].quality + 1;
          logItemsWithLabel("After quality incrementation", this.items);
          if (this.items[i].name == "Backstage passes to a TAFKAL80ETC concert") {
            if (this.items[i].sellIn < 11) {
              if (this.items[i].quality < 50) {
                this.items[i].quality = this.items[i].quality + 1;
                logItemsWithLabel("+ 2 quality for backstage pass when less thant 10 days", this.items);
              }
            }
            if (this.items[i].sellIn < 6) {
              if (this.items[i].quality < 50) {
                this.items[i].quality = this.items[i].quality + 1;
                logItemsWithLabel("+ 3 quality for backstage pass when less thant 5 days", this.items);
              }
            }
          }
        }
      }
      if (this.items[i].name != "Sulfuras, Hand of Ragnaros") {
        this.items[i].sellIn = this.items[i].sellIn - 1;
        logItemsWithLabel("-1 sellIn for anything but Sulfuras", this.items);
      }
      if (this.items[i].sellIn < 0) {
        if (this.items[i].name != "Aged Brie") {
          if (this.items[i].name != "Backstage passes to a TAFKAL80ETC concert") {
            if (this.items[i].quality > 0) {
              if (this.items[i].name != "Sulfuras, Hand of Ragnaros") {
                this.items[i].quality = this.items[i].quality - 1;
                logItemsWithLabel("-2 quality for default items when sellIn date passed", this.items);
              }
            }
          } else {
            this.items[i].quality = this.items[i].quality - this.items[i].quality;
            logItemsWithLabel("quality to 0 for backstage passes when sellIn date passed", this.items);
          }
        } else {
          if (this.items[i].quality < 50) {
            this.items[i].quality = this.items[i].quality + 1;
            logItemsWithLabel("+1 quality for Aged Brie when sellIn date passed", this.items);
          }
        }
      }
    }

    logItemsWithLabel("End of updateQuality", this.items);
    return this.items;
  }
}
