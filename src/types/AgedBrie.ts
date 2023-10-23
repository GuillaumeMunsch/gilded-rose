import { NewItemInterface } from "./NewItemInterface";

export class AgedBrie implements NewItemInterface {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name: string, sellIn: number, quality: number) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }

  updateQuality = () => {
    this.sellIn = this.sellIn - 1;
    const qualityWin = this.sellIn < 0 ? 2 : 1;
    this.quality = Math.min(50, this.quality + qualityWin);
  };

  generateItemDetails = () => `\nName: ${this.name}\nQuality: ${this.quality}\n`;
}
