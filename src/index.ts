
export { createElement } from './tsx-runtime'
export { writeStaticFile, writeRouteHtml, toHTML } from './writeRoute'
export { Sitemap, toXML, writeSitemap } from './sitemap'
export { type OptionT, Select, readContent } from './widget'
export { Tabs } from './tabs'
export { Panels } from './panels'
export { Labels } from './labels'
export { initNode } from './init-node'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      div: HTMLDivElement | any
      span: HTMLSpanElement | any
      p: HTMLParagraphElement | any
      img: HTMLImageElement | any
      a: HTMLAnchorElement | any
      button: HTMLButtonElement | any
      ul: HTMLUListElement | any
      ol: HTMLOListElement | any
      li: HTMLLIElement | any
      select: HTMLSelectElement | any
      option: HTMLOptionElement | any
      [elemName: string]: HTMLElement | any
   }
    type Element = HTMLElement;
  }
}
