
import { parseHTML } from 'linkedom';

export function initNode(){
  let { document, Node, Element, HTMLElement } = parseHTML('');
  (global as any).document = document;
  (global as any).Node = Node;
  (global as any).Element = Element;
  (global as any).HTMLElement = HTMLElement;
}