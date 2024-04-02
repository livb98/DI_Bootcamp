class Video{
    constructor(title, uploader, time) {
        this.title = title
        this.uploader = uploader
        this.time = time
    }

    watch(){
        return `${this.uploader} watched all ${this.time}sec of ${this.title}`
    }
}

let HarryPoter = new Video('harry', ' warner', 1234)
let arrOfVideo = [
    {title: 'aaa',
    uploader: 'AAA',
    time: 1111},
    {title: 'bbb',
    uploader: 'BBB',
    time: 2222},
    {title: 'ccc',
    uploader: 'CCC',
    time: 333}
]


let arr = []
arrOfVideo.forEach(item =>{
    const {title,uploader,time} = item;
    arr.push(new Video(title,uploader,time))
})
console.log(HarryPoter.watch())

console.log(arr);