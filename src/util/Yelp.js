import SearchBar from "../components/SearchBar/SearchBar";

const apiKey = '_qkkaoKnXDCEcd-xpljPzDHTmz55pMaTZuIxH8L_6wvdFASnFku1TggLCigDLPBs4mGMX6Cn3GzKwDXDyaRemWvQ_FXaa7SJqaQbveYRgX5qIimPkGJlStale8BLYHYx';

const Yelp = {
    searchYelp( term, location, sortBy ) {
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
            headers: { 
                Authorization: `Bearer ${apiKey}`
            },
        }).then( (response) => { 
            return response.json();
        }).then( (jsonResponse) => {
            if (jsonResponse.businesses) {
                return jsonResponse.businesses.map( (business) => {
                    return {
                    id: business.id, 
                    imageSrc: business.image_url,
                    name: business.name,
                    address: business.location.address1,
                    city: business.location.city,
                    state: business.location.state,
                    zipCode: business.location.postal_code,
                    category: business.categories.title,
                    rating: business.rating,
                    reviewCount: business.review_count,
                }
            });
            }
        });
    }
}; 

export default Yelp;