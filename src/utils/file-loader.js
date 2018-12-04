export function loadTemplate(name) {
    let loadedTemplate = null;
    let file = `html-templates/${name}`;
    let request = new XMLHttpRequest();
    request.open("GET", file, false);
    request.send(null);
    if (request.status === 200) {
      loadedTemplate = request.responseText;
    }
    return loadedTemplate;
  }


  export const FileName={
        EXAMPLE1: 'example.html',
        EXAMPLE2: 'example2.html'
  }