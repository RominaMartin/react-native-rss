export function getServerData() { 
    return fetch('https://www.theonion.com/rss')
    .then((response) => {
        return response;
    })
    .catch((error) => {
      console.error(error);
    });
}