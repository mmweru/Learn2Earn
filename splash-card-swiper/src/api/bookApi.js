const myHeaders = new Headers();
myHeaders.append("x-app-version", "1.0.0");
myHeaders.append("x-apihub-key", "TrsbQ5fAg-1mLKg6bMpZQpXzkPnOCHMJy2GVbFwRte58fFOhip");
myHeaders.append("x-apihub-host", "Top-Goodread-Books-collection-1980-to-2023.allthingsdev.co");
myHeaders.append("x-apihub-endpoint", "b4591402-4f74-4a16-b18e-c522ee27e837");

const requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow",
};

export const fetchBooks = async (searchTerm) => {
  try {
    const response = await fetch(`https://Top-Goodread-Books-collection-1980-to-2023.proxy-production.allthingsdev.co/api/v1/bookread/infmn/?isbn=${searchTerm}`, requestOptions);
    const data = await response.json();
    return data.books; // Adjust according to actual API response structure
  } catch (error) {
    console.error('Error fetching books:', error);
    return [];
  }
};
