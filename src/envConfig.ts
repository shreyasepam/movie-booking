interface Config {
   imageURI: string;
   baseURL: string;
   token: string;
}
 
 const getConfig = (): Config => ({
    imageURI: import.meta.env.VITE_IMAGE_URI as string,
    baseURL: import.meta.env.VITE_BASE_URL as string,
    token: import.meta.env.VITE_MOVIE_TOKEN as string,
 });
 
 export default getConfig;