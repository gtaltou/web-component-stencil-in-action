/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import '@stencil/core';




export namespace Components {

  interface UcStockPrice {}
  interface UcStockPriceAttributes extends StencilHTMLAttributes {}
}

declare global {
  interface StencilElementInterfaces {
    'UcStockPrice': Components.UcStockPrice;
  }

  interface StencilIntrinsicElements {
    'uc-stock-price': Components.UcStockPriceAttributes;
  }


  interface HTMLUcStockPriceElement extends Components.UcStockPrice, HTMLStencilElement {}
  var HTMLUcStockPriceElement: {
    prototype: HTMLUcStockPriceElement;
    new (): HTMLUcStockPriceElement;
  };

  interface HTMLElementTagNameMap {
    'uc-stock-price': HTMLUcStockPriceElement
  }

  interface ElementTagNameMap {
    'uc-stock-price': HTMLUcStockPriceElement;
  }


  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends StencilIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends StencilHTMLAttributes {}

}
