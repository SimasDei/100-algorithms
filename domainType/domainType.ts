function domainType(domains: string[]): string[] {
  const domainType: string[] = [];

  for (let i = 0; i < domains.length; i++) {
    const domain = domains[i].split('.');
    const lastDomain = domain[domain.length - 1];
    switch (lastDomain) {
      case 'org':
        domainType.push('organization');
        break;
      case 'com':
        domainType.push('commercial');
        break;
      case 'net':
        domainType.push('network');
        break;
      case 'info':
        domainType.push('information');
      default:
        break;
    }
  }
  return domainType;
}

console.log(
  domainType([
    'en.wiki.org',
    'codefights.com',
    'happy.net',
    'code.info',
    'imdb.com'
  ])
);
