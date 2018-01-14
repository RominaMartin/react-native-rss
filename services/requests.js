export function getServerData() { 
    return fetch('https://www.theonion.com/rss')
    .then((response) => {
        return response.text();
    })
    .catch((error) => {
      console.error(error);
    });
}