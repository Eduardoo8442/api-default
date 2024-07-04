
function randomIdMessage(length: number) {
    let result: string = '';
    const characters: string = '0123456789';
    const charactersLength: number = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return `id${result}`;
}
export default randomIdMessage;