import { extractClasses } from "./parser/class-extractor.js";
import { generateCSS } from "./parser/css-generator.js";
import { applyStyles } from "./parser/style-injector.js";

export function initStyleEngine() {
  const classes = extractClasses();
  const css = generateCSS(classes);

  applyStyles(css);
}
initStyleEngine();
