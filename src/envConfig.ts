interface Config {
    imageURI: string;
 }
 
 const getConfig = (): Config => ({
    imageURI: import.meta.env.VITE_IMAGE_URI as string,
 });
 
 export default getConfig;