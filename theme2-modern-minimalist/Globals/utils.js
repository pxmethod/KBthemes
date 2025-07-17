function findSection(manifest, name) {
    if (Array.isArray(manifest)) {
      return manifest.filter(function (section) {
        return section.name === name;
      })[0];
    } else {
      const section = _.get(manifest, `pages.homepage.variables[${name}]`);
      return section;
    }
  }
  
  function getAbsoluteLink(link) {
    if (!link) return "";
  
    const httpsNotFound = link.indexOf("https://") === -1;
    const httpNotFound = link.indexOf("http://") === -1;
    let absoluteLink = link;
  
    if (httpsNotFound && httpNotFound) {
      absoluteLink = `https://${link}`;
    }
  
    return absoluteLink;
  }
  