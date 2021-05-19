export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=12&api_key=ZrFDA3d5AmJAaV4udXFH6NI7YRZTqssf`

    try {
        const { data } = await (await fetch(url)).json()
        const gifs = data.map(({ id, title, images }) => ({
            id: id,
            title: title,
            url: images?.downsized_medium.url
        }))
        return gifs
    } catch (error) {
        console.log(error)
    }
}
