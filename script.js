const drinks = [
    "冰红茶", "冰绿茶", "雪碧", "可乐", "芬达", "美年达", "脉动", "尖叫", "元气森林", "怡宝",
    "哇哈哈", "农夫山泉", "百岁山", "维他柠檬茶", "统一绿茶", "康师傅茉莉", "红牛", "战马", "日加满",
    "旺仔", "椰树", "王老吉", "加多宝", "东方树叶", "茶π", "苏打水", "RIO", "崂山白花蛇草水", "舒化奶", "三得利", "可尔必思"
];

const heroes = [
    "吕布", "李白", "赵云", "貂蝉", "小乔", "大乔", "妲己", "司空震", "达摩", "钟馗",
    "铠", "孙尚香", "后羿", "虞姬", "黄忠", "鲁班七号", "墨子", "诸葛亮", "芈月", "孙悟空",
    "庄周", "牛魔", "廉颇", "张飞", "孙策", "蔡文姬", "瑶", "东皇太一", "兰陵王", "百里守约"
];

function generateName() {
    const drink = drinks[Math.floor(Math.random() * drinks.length)];
    const hero = heroes[Math.floor(Math.random() * heroes.length)];
    document.getElementById("result").textContent = drink + hero;
}
