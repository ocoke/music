async function loadlist() {
    let r = await fetch("./list.json");
    let rs = await r.text()
    return JSON.parse(rs);
}

var slist = loadlist();
var t = {
    "name": "Playlist",
    "listVer": 1,
    "list": [{"name":"海阔天空","artist":"BEYOND","url":"lib/music/BEYOND - 海阔天空.mp3","lrc":"lib/lrc/BEYOND - 海阔天空.lrc"},{"name":"Bad Liar","artist":"Imagine Dragons","url":"lib/music/Imagine Dragons - Bad Liar.mp3","lrc":"lib/lrc/Imagine Dragons - Bad Liar.lrc"},{"name":"Autumn","artist":"Kozoro","url":"lib/music/Kozoro - Autumn.mp3"},{"name":"Friend","artist":"Kozoro","url":"lib/music/Kozoro - Friend.mp3"},{"name":"Remember Me","artist":"Kozoro","url":"lib/music/Kozoro - Remember Me.mp3"},{"name":"僕らの手には何もないけど、 (尽管我们的手中空无一物)","artist":"RAM WIRE","url":"lib/music/RAM WIRE - 僕らの手には何もないけど、 (尽管我们的手中空无一物).mp3"},{"name":"Letter","artist":"SHE'S","url":"lib/music/SHE'S - Letter.mp3","lrc":"lib/lrc/SHE'S - Letter.lrc"},{"name":"あの夏へ (那个夏天)","artist":"久石譲","url":"lib/music/久石譲 - あの夏へ (那个夏天).mp3"},{"name":"道","artist":"向井太一","url":"lib/music/向井太一 - 道.mp3","lrc":"lib/lrc/向井太一 - 道.lrc"},{"name":"说好不哭(with 五月天阿信)","artist":"周杰伦","url":"lib/music/周杰伦 - 说好不哭(with 五月天阿信).mp3","lrc":"lib/lrc/周杰伦 - 说好不哭(with 五月天阿信).lrc"},{"name":"Lemon (柠檬)","artist":"米津玄師","url":"lib/music/米津玄師 - Lemon (柠檬).mp3"},{"name":"打上花火","artist":"米津玄師、DAOKO","url":"lib/music/米津玄師、DAOKO - 打上花火.mp3"},{"name":"夜空中最亮的星","artist":"逃跑计划","url":"lib/music/逃跑计划 - 夜空中最亮的星.mp3","lrc":"lib/lrc/逃跑计划 - 夜空中最亮的星.lrc"},{"name":"yakimochi","artist":"高橋優","url":"lib/music/高橋優 - yakimochi.mp3","lrc":"lib/lrc/高橋優 - yakimochi.lrc"}]
}

for(let i = 0; i < t.list.length; i++) {
    if (!t.list[i].lrc) {
        t.list[i].lrc = "lib/lrc/none.lrc";
    }
}

const ap = new APlayer({
    container: document.getElementById('aplayer'),
    mini: false,
    autoplay: false,
    theme: '#FADFA3',
    loop: 'all',
    order: 'random',
    preload: 'auto',
    volume: 0.7,
    mutex: true,
    listFolded: false,
    listMaxHeight: 90,
    lrcType: 3,
    audio: t.list
});