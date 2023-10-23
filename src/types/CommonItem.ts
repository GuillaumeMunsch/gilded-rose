import { NewItemInterface } from "./NewItemInterface";

export class CommonItem implements NewItemInterface {
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
    const qualityLoss = this.sellIn >= 0 ? 1 : 2;
    this.quality = Math.max(0, this.quality - qualityLoss);
  };

  generateItemDetails = () => `\nName: ${this.name}\nQuality: ${this.quality}\n`;
}
