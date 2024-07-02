import AsyncStorage from '@react-native-async-storage/async-storage';

export async function getProducts(){

    try {
        const rawProducts = await AsyncStorage.getItem('fashion-favourites');
        if(!rawProducts){
            return {};
        }
        const products = JSON.parse(rawProducts);
        return products;
    } catch(err) {
        console.log(err)
    }
}

export async function setProducts(products){
    try {
        const rawProducts = JSON.stringify(products);
        await AsyncStorage.setItem('fashion-favourites', rawProducts);
    } catch (err) {
        console.log(err)
    }

}

export async function addProduct(productId){
    const existingProducts =  await getProducts();

    existingProducts[productId] = 1,
    setProducts(existingProducts);
}

export async function removeProduct(productId){

    const existingProducts = await getProducts();

    const { productId, ...updatedProducts } = existingProducts;

    await setProducts(updatedProducts);

}
