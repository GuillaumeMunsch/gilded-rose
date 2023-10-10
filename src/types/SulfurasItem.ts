import { SellableInnItem } from "./SellableInnItemInterface";

export class SulfurasItem implements SellableInnItem {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }

  updateQuality() {}
}
