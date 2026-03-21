export function extractClasses() {
  const html = document.body.innerHTML;

  const matches = html.match(/class="([^"]+)"/g) || [];

  const classes = matches.flatMap((item) =>
    item.replace('class="', "").replace('"', "").split(" "),
  );

  return [...new Set(classes)];
}
