// Restaurant Images 
export const IMAGE_CDN = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"

// Hero Background
export const HERO_IMAGE = "https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"

// Restaurant List API
export const RESTAURANT_API = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.5743545&lng=88.3628734"

// Restaurant Menu API
export const getMenuApi = (resId) => `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.5743545&lng=88.3628734&restaurantId=${resId}`
